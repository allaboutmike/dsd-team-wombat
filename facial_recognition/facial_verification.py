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
