# Specifies Node Version 18.18.2 & Alpine Linux Version 3.18 OS
FROM openjdk:22-ea-17-slim-bullseye

VOLUME /app

COPY ./build/libs/*.jar admin_server-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java","-jar","/admin_server-0.0.1-SNAPSHOT.jar"]