from flask import Flask, jsonify, make_response, Response
from deepface import DeepFace

from helpers import *

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Team Wombat - Facial Recognition Service :) </p>"


@app.route("/verify")
def verify_images():
    image1_url = "./static/Danny_1.jpeg"
    image2_url = "./static/Danny_2.png"
    image3_url = "./static/Mike_1.jpeg"

    key = "verified"
    json_response: Response

    try:
        result = DeepFace.verify(image2_url, image3_url)
        response = handle_deepface_response(result, key)

        json_response = make_response(jsonify(response))

        if response["data"].keys() == 0:
            json_response.status_code = 500
        else:
            json_response.status_code = 200

        return json_response

    except Exception as err:
        print(f"Unexpected error: {err}, {type(err)=}")

        response = handle_exceptions(str(err))
        json_response = make_response(jsonify(response))

        json_response.status_code = 500

        return json_response
