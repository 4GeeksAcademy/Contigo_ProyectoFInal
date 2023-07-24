"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, ONG, Usuario, Recurso, Categorias, Peticion
from api.utils import generate_sitemap, APIException
from sqlalchemy.sql import exists
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity


import hashlib
import cloudinary
import cloudinary.uploader

cloudinary.config(
    cloud_name='dwe4vkk3t',
    api_key='623794587665274',
    api_secret='lyyd3tnSRtiUGmnXJC5bgNctd8Y'
)

api = Blueprint('api', __name__)


@api.route('/todos_los_recursos', methods=['GET'])
def get_recursos():
    recursos = Recurso.query.all()
    all_recursos = [recurso.serialize() for recurso in recursos]
    return jsonify(all_recursos), 200


@api.route('/detallerecurso/<id>', methods=['GET'])
def info_recurso(id):
    recurso = Recurso.query.get(id)
    return jsonify(recurso.serialize()), 200


@api.route('/recursos/<categoria>', methods=['GET'])
def obtener_recursos_por_categoria(categoria):
    recursos = Recurso.query.filter_by(categoria=categoria).all()
    recursos_por_categoria = [recurso.serialize() for recurso in recursos]
    return jsonify(recursos_por_categoria), 200 


@api.route('/recursos/<int:ong_id>', methods=['GET'])
def obtener_recursos_por_ong(ong_id):
    recursos = Recurso.query.filter_by(ong_id=ong_id).all()
    recursos_por_ong = [recurso.serialize() for recurso in recursos]
    return jsonify(recursos_por_ong), 200 

# Encontrar nombre de ONG en la tabla ong a través de ONG_id de tabla recurso

@api.route('/nombreong/<int:ong_id>', methods=['GET'])
def nombre_ong(ong_id):
    ong = ONG.query.get(ong_id)
    if ong is not None:
        return jsonify({"nombre": ong.nombre})
    else:
        return jsonify({"error": "ONG no encontrada"}), 404

@api.route('/recursos_ong_usuario', methods=['GET'])
@jwt_required()
def obtener_recursos_ong_usuario():
    user_id = get_jwt_identity()
    user = Usuario.query.filter_by(id=user_id).first() 
    ong = ONG.query.get(user.ong_id)
    recursos = Recurso.query.filter_by(ong_id=ong.id)
    recursos_por_usuario = [recurso.serialize() for recurso in recursos]
    return jsonify(recursos_por_usuario), 200

@api.route('/recursos', methods=['POST'])
@jwt_required()
def post_recurso():

    user_id = get_jwt_identity()
    user = Usuario.query.filter_by(id=user_id).first()
    ong = ONG.query.get(user.ong_id)

    # Obtain form fields using request.form
    nombre = request.form.get('nombre')
    categoria = request.form.get('categoria')
    virtual = request.form.get('virtual')
    direccion = request.form.get('direccion')
    codigo_postal = request.form.get('codigo_postal')
    telefono = request.form.get('telefono')
    descripcion = request.form.get('descripcion')
    img = request.form.get('img')
    usuario_id = user.id
    ong_id = ong.id

    # Convertir el valor "virtual" a un booleano
    if virtual:
        virtual = virtual.lower() == 'true'
    else:
        virtual = False

    fichero = request.files.get('fichero')
    if fichero:
        result = cloudinary.uploader.upload(fichero, folder='recursos')
        fichero_url = result['secure_url'] if result.get('secure_url') else None
    else:
        fichero_url = None

    nuevo_recurso = Recurso(
        categoria=categoria, 
        usuario_id=usuario_id, 
        ong_id=ong_id, 
        nombre=nombre, 
        virtual=virtual, 
        direccion=direccion, 
        codigo_postal=codigo_postal, 
        telefono=telefono, 
        descripcion=descripcion, 
        img=img,
        fichero=fichero_url,  
    )
    db.session.add(nuevo_recurso)
    db.session.commit()

    return jsonify({'message': 'Recurso creado correctamente'}), 200


@api.route('/ong', methods=['GET'])
def get_ongs():

    ong = ONG.query.all()
    all_ong = list(map(lambda x: x.serialize(), ong)) 
    return jsonify(all_ong), 200 


def generar_hash(data):
    hash_object = hashlib.sha256()
    data_bytes = data.encode('utf-8')
    hash_object.update(data_bytes)
    hash_value = hash_object.hexdigest()
    return hash_value[:10]


@api.route('/ong_registration', methods=['POST'])
def create_ong():

    request_body_ong = request.get_json()
    nombre = request_body_ong.get("nombre")
    cif = request_body_ong.get("cif")
    email = request_body_ong.get("email")
    url = request_body_ong.get("url")
    direccion = request_body_ong.get("direccion")
    codigo_postal = request_body_ong.get("codigo_postal")
    telefono = request_body_ong.get("telefono")
    logo = request_body_ong.get("logo")

    codigo_ong = generar_hash(nombre + cif + email)
    ong_id = codigo_ong

    new_ong = ONG(nombre=nombre, cif=cif, email=email, url=url, direccion=direccion, codigo_postal=codigo_postal, telefono=telefono, logo=logo, ong_id=ong_id)
    db.session.add(new_ong)
    db.session.commit()

    return jsonify(nombre=nombre, codigo_ong=ong_id), 200


@api.route('/ong/<id>', methods=['GET'])
def obtener_ong_por_id(id):
    ong = ONG.query.get(id)
    return jsonify(ong.serialize()), 200


@api.route('/users', methods=['GET'])
def get_users():

    user = Usuario.query.all()
    all_users = list(map(lambda x: x.serialize(), user))
    return jsonify(all_users), 200 


@api.route('/user_registration', methods=['POST'])
def create_user():

    request_body_usuario = request.get_json()

    nombre = request_body_usuario.get("nombre")
    apellido = request_body_usuario.get("apellido")
    email = request_body_usuario.get("email")
    password = request_body_usuario.get("password")
    
    codigo_ong = request_body_usuario.get("codigo_ong")
    codigo_ong_exists = db.session.query(exists().where(ONG.ong_id == codigo_ong)).scalar()

    # data_ong = db.session.query(ONG.nombre, ONG.id).filter_by(ong_id=codigo_ong).first()
    
    if codigo_ong_exists:
        ong = db.session.query(ONG).filter(ONG.ong_id == codigo_ong).first()
        ong_id = ong.id
        nombre_ong = ong.nombre
   
        new_user = Usuario(nombre=nombre, apellido=apellido, email=email, password=password, ong_id=ong_id)
        db.session.add(new_user)
        db.session.commit()
    
    else: 
        return {"Error": "Código de ONG inválido, inténtalo nuevamente"}
    
    user_data = {
        "nombre": new_user.nombre,
        "ONG" : nombre_ong,
    }

    return jsonify(user_data), 200 


@api.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email', None)
    password = data.get('password', None)

    if not email or not password:
        return jsonify({"message": "Error email y password son requeridos"}), 400

    user = Usuario.query.filter_by(email=email, password=password).first()

    if user is None:
        return jsonify({"message": "Error, datos incorrectos"}), 401
    
    token = create_access_token(identity=user.id)

    return jsonify({"token": token}), 200


# Últimas modificaciones con Marcos para perfil y peticiones

@api.route('/perfil', methods=['GET'])
@jwt_required()
def private():
    user_id = get_jwt_identity()
    user = Usuario.query.filter_by(id=user_id).first()

    if not user:
        return jsonify({"message": "Error, no existe el usuario"}), 400

    return jsonify(user.serialize()), 200


@api.route('/perfil', methods=['PUT'])
@jwt_required()
def update_user_profile():
    try:
        user_id = get_jwt_identity()
        user = Usuario.query.filter_by(id=user_id).first()

        if not user:
            return jsonify({"message": "Error, no existe el usuario"}), 400

        data = request.get_json()
        
        if 'nombre' in data:
            user.nombre = data['nombre']
        if 'apellido' in data:
            user.apellido = data['apellido']
        if 'email' in data:
            user.email = data['email']
        if 'password' in data:
            user.contraseña = data['contraseña']
        
        db.session.add(user)
        db.session.commit()

        return jsonify({"message": "Datos del usuario actualizados correctamente"}), 200

    except Exception as e:
        return jsonify({"message": "Error al actualizar los datos del usuario", "error": str(e)}), 500
    

@api.route('/peticiones', methods=['GET'])
@jwt_required()
def peticiones():
    user_id = get_jwt_identity()

    user = Usuario.query.filter_by(id=user_id).first()
    ong = ONG.query.get(user.ong_id)
    recursos = Recurso.query.filter_by(ong_id=ong.id)
    recursos_ids = [recurso.id for recurso in recursos]
    peticiones = Peticion.query.filter_by(recurso_id=recursos_ids) # Investigar cómo buscar dentro de un listado
    data = [peticion.serialize() for peticion in peticiones]
    
    return jsonify(data), 200


# crear route para ver las peticiones
@api.route('/peticion', methods=['GET'])
def get_peticion():

    peticiones = Peticion.query.all()
    all_peticiones = list(map(lambda x: x.serialize(), peticiones))
    return jsonify(all_peticiones), 200


# Crear route de enviar peticion
@api.route('/peticion', methods=['POST'])
def email_peticion():

    request_body_peticion = request.get_json()

    nombre = request_body_peticion.get("nombre")
    apellido = request_body_peticion.get("apellido")
    telefono = request_body_peticion.get("telefono")
    email = request_body_peticion.get("email")
    texto = request_body_peticion.get("texto")
    preferencia = request_body_peticion.get("preferencia")
    recurso_id = request_body_peticion.get("recurso_id")

    recibir_peticion = Peticion(nombre=nombre, apellido=apellido, telefono=telefono, email=email,
                                texto=texto, preferencia=preferencia, recurso_id=recurso_id)

    db.session.add(recibir_peticion)
    db.session.commit()

    return jsonify({"message": "Mensaje recibido"}), 200

