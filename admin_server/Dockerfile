FROM gradle:jdk17 as builder
WORKDIR /app

COPY build.gradle settings.gradle ./
COPY src src

RUN gradle build -x test

FROM openjdk:22-ea-17-slim-bullseye

RUN useradd -m myuser
USER myuser

WORKDIR /app

COPY --from=builder /app/build/libs/*.jar app.jar

ENTRYPOINT ["java","-jar","app.jar"]

