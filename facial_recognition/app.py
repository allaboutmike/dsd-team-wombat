from flask import Flask, request
from werkzeug.exceptions import BadRequest, UnsupportedMediaType
from deepface import DeepFace

from helpers import *

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Team Wombat - Facial Recognition Service :) </p>"


# Required json body (with content type - "application/json")
# {
#   "captured": "base64_encoded string of captured image",
#   "reference": "base64_encoded string image to be compared against"
#   }
@app.route("/verify", methods=['POST'])
def verify_images():
    image1_url = "./static/Danny_1.jpeg"
    image2_url = "./static/Danny_2.png"
    image3_url = "./static/Mike_1.jpeg"

    key = "verified"
    json_response: Response

    # Retrieve json body parameters
    try:
        request_body = request.get_json()

        # Validate request body
        error_msg = validate_request_body(request_body)

        if not error_msg:
            pass
        else:
            return send_error_response(error_msg, 400)  # Denotes Bad Request
    except (BadRequest, UnsupportedMediaType) as err:
        print(f"Request Body error: {err}, {type(err)=}")
        return send_error_response(str(err), 400)

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

        return send_error_response(str(err), 500)  # Denotes Internal Server Error
