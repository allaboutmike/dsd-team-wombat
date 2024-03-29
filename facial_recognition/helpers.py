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


def handle_exceptions(err_msg: str) -> dict:
    return {
        "data": [],
        "error": err_msg
    }
