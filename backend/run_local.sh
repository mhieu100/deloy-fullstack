#!/bin/bash
if [ ! -f .env ]; then
    echo "File .env không tồn tại!"
    exit 1
fi

# Export env vars
export $(grep -v '^#' .env | xargs)

# Fix DB_URL if it doesn't start with jdbc:
if [[ $DB_URL != jdbc:* ]]; then
    export DB_URL="jdbc:$DB_URL"
    echo "Auto-fixed DB_URL to include jdbc: prefix"
fi

mvn spring-boot:run
