#!/bin/bash
cd apis/team-service
./mvnw clean package -DskipTests
cd ../../..
docker compose up --build
