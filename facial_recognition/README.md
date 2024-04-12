##### Steps to run the server:
- Inside the `facial_recognition` directory, run `pip install -r requirements.txt`
- The above step downloads the required dependencies
- Create and activate a local virtual environment as instructed [here](https://flask.palletsprojects.com/en/2.3.x/installation/)
- Start the server inside the activated environment using `flask run`
- To refresh the server automatically upon file changes, use `flask --debug run`

##### Linting tool - flake8
- Inside the `facial_recognition` directory, after activating the virtual environment, run `python3.12 -m flake8`