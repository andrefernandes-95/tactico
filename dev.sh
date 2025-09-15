#!/bin/bash

COMPOSE_FILE="./docker-compose.yml"

case "$1" in
  up)
    echo "🚀 Starting local dev environment..."

    echo "👉 Starting Postgres..."
    docker compose -f $COMPOSE_FILE up -d

    echo "👉 Starting Quarkus backend..."
    (cd apis/team-service && ./mvnw quarkus:dev) &
    BACK_PID=$!

    echo "👉 Starting React frontend..."
    (cd apps/landing-app && npm run dev) &
    FRONT_PID=$!

    # Wait so logs don’t disappear immediately
    wait $BACK_PID $FRONT_PID
    ;;
    
  down)
    echo "🛑 Stopping local dev environment..."

    echo "👉 Stopping Postgres..."
    docker compose -f $COMPOSE_FILE down -v

    echo "👉 Killing Quarkus & React processes..."
    pkill -f "quarkus:dev"
    pkill -f "npm run dev"

    echo "✅ Environment stopped."
    ;;
    
  *)
    echo "Usage: $0 {up|down}"
    exit 1
    ;;
esac
