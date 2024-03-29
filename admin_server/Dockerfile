FROM gradle:jdk17 as builder
WORKDIR /app
COPY . .
RUN gradle build

FROM openjdk:22-ea-17-slim-bullseye
VOLUME /app
COPY --from=builder /app/build/libs/*.jar admin_server-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/admin_server-0.0.1-SNAPSHOT.jar"]