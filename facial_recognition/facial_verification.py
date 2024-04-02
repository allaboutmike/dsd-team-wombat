from image_handler import decode_image, save_decoded_image
from typing import Any


def handle_deepface_response(result: dict[str, Any], key: str) -> dict:
    response = {"data": {}, "error": ""}
    keys_to_retrieve = ["verified", "distance", "similarity_metric", "time"]

    if key in result:
        for key in keys_to_retrieve:
            response["data"][key] = result[key]
    else:
        response["error"] = "Face Verification unsuccessful, please contact admin."

    return response


def validate_request_body(request) -> str:
    error_msg = ""

    if not request:
        error_msg = "Empty request body, Expected: {'captured': <base_64>, 'reference': <base_64>}"

    captured_img_base64 = request.get('captured')
    reference_img_base64 = request.get('reference')

    if not captured_img_base64 or not reference_img_base64:
        error_msg = "Base64 encoded string of captured / reference image not present"

    return error_msg


def handle_encoded_images(request) -> str:
    error_msg = ""

    captured_img = request.get('captured')
    reference_img = request.get('reference')

    captured_img_bytes = decode_image(captured_img)
    reference_img_bytes = decode_image(reference_img)

    if len(captured_img_bytes) == 0 or len(reference_img_bytes) == 0:
        error_msg = "Error in decoding image"

    # Save the images
    if save_decoded_image(captured_img_bytes, captured_img):
        print("Captured image decoded and saved successfully!")
    else:
        error_msg = "Error in saving the captured image"

    if save_decoded_image(reference_img_bytes, reference_img):
        print("Reference image decoded and saved successfully!")
    else:
        error_msg = "Error in saving the reference image"

    return error_msg
