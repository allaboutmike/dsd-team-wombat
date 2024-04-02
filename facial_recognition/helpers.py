from flask import Response, make_response, jsonify


def send_error_response(err: str, status_code: int) -> Response:
    json_response: Response

    res = handle_exceptions(err)

    json_response = make_response(jsonify(res))
    json_response.status_code = status_code

    return json_response


def handle_exceptions(err_msg: str) -> dict:
    return {
        "data": [],
        "error": err_msg
    }
