FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests

FROM gcr.io/distroless/java21 AS runtime
WORKDIR /app

COPY --from=build /app/target/oslosykkel-1.0.0.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]