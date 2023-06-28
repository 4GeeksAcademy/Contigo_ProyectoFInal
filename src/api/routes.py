"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, ONG, Usuario, Recurso, Categorias, Peticion
from api.utils import generate_sitemap, APIException

import hashlib

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

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

    return jsonify(request_body_ong), 200





@api.route('/user_register', methods=['POST', 'GET'])
def create_user():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200