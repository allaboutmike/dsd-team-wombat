import base64
import binascii
import hashlib
import os

# Directory where images are stored
img_base_dir = "./static"
img_format = ".jpeg"


def decode_image(base64_encoded_str: str) -> bytes:
    decoded_img = bytes()

    try:
        decoded_img = base64.b64decode(base64_encoded_str)
    except (binascii.Error, ValueError) as err:
        print(f"Base64 decode error: {err}, {type(err)=}")

    return decoded_img


def save_decoded_image(
        base64_decoded_str: bytes,
        base64_encoded_str: str) -> bool:
    # Filename - md5 hash of the decoded base64 string to ensure uniqueness
    # encode() - Converts the string to bytes before hashing
    filename = hashlib.md5(base64_encoded_str.encode()).hexdigest()

    # If image directory does not exist, create it
    if not os.path.exists(img_base_dir):
        os.makedirs(img_base_dir)

    img_path = f'{img_base_dir}/{filename}{img_format}'

    # Save the image only if it does not exist already
    if not os.path.exists(img_path):
        try:
            with open(img_path, 'wb') as f:
                f.write(base64_decoded_str)
        except (IOError, OSError, ValueError) as err:
            print(f"Error while saving the decoded image: {err}, {type(err)=}")
            return False
    else:
        print(f"Image already exists !")

    return True


def get_image_url_for_base64(base64_encoded_str: str) -> str:
    filename = hashlib.md5(base64_encoded_str.encode()).hexdigest()
    img_path = f'{img_base_dir}/{filename}{img_format}'

    return img_path
