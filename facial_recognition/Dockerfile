FROM python:3.10.14-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    libgl1-mesa-glx \
    libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

COPY . .

RUN python -m venv /app/venv

RUN . /app/venv/bin/activate && \
    pip install --upgrade pip && \
    pip install gunicorn && \
    pip install tensorflow-intel deepface tf-keras -r requirements.txt

EXPOSE 5000

ENV FLASK_APP=app.py
ENV PATH="/app/venv/bin:$PATH"

CMD ["gunicorn", "-w", "3", "--access-logfile", "-", "--bind", "0.0.0.0:5000", "app:app"]



