from flask import Flask

from deepface import DeepFace

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Team Wombat - Facial Recognition Service :) </p>"


# TODO: Change to POST method and get the image as input
# TODO: What if deepface fails ? - Handle error case
# TODO: Any specific response format? - Status code, messages etc.
@app.route("/verify")
def verify_images():
    image1_url = "./static/Danny_1.jpeg"
    image2_url = "./static/Danny_2.png"
    image3_url = "./static/Mike_1.jpeg"

    key = "verified"
    response = {"authorized": None}

    result = DeepFace.verify(image2_url, image3_url)

    if key in result:
        response["authorized"] = result[key]

    return response
