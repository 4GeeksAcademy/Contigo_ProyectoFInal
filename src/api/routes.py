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



@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/resources', methods=[ 'GET'])
def handle_resources():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

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
