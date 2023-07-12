"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, ONG, Usuario, Recurso, Categorias, Peticion
from api.utils import generate_sitemap, APIException
from sqlalchemy.sql import exists
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity


import hashlib

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


@api.route('/recursos', methods=['POST'])
def post_recurso():
    data = request.get_json()
    nombre = data.get('nombre')
    categoria = data.get('categoria')
    virtual = data.get('virtual')
    direccion = data.get('direccion')
    codigo_postal = data.get('codigo_postal')
    telefono = data.get('telefono')
    descripcion = data.get('descripcion')
    img = data.get('img')
    fichero = data.get('fichero')
    usuario_id = data.get('usuario_id')
    ong_id = data.get('ong_id')

    nuevo_recurso = Recurso(categoria=categoria, usuario_id=usuario_id, ong_id=ong_id, nombre=nombre, virtual=virtual, direccion=direccion, codigo_postal=codigo_postal, telefono=telefono, descripcion=descripcion, img=img, fichero=fichero)
    db.session.add(nuevo_recurso)
    db.session.commit()

    return jsonify(nombre=nombre), 200


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
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"message": "Error email y password son requeridos"})

    user = Usuario.query.filter_by(email=email, password=password).first()

    if not user:
            return jsonify({"message": "Error, datos incorrectos"})
    
    token = create_access_token(identity=user.id)

    return jsonify({"token": token})


@api.route('/perfil', methods=['POST'])
@jwt_required()
def private():
    data = request.json
    user = get_jwt_identity()
    print(user)

    return jsonify("Acceso permitido")


# crear route para escoger recurso
@api.route('/peticion', methods=['GET'])
def get_recurso_id():

    recurso_id = Peticion.query.all()
    all_recurso_id = list(map(lambda x: x.serialize(), recurso_id))
    return jsonify(all_recurso_id), 200


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

    recibir_peticion = Peticion(nombre=nombre, apellido=apellido, telefono=telefono, email=email,
                                texto=texto, preferencia=preferencia)

    db.session.add(recibir_peticion)
    db.session.commit()

    return jsonify({"message": "Mensaje recibido"}), 200

