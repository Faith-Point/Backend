#!/bin/bash
set -e

DB_USER=${POSTGRES_USER}
DB_PASSWORD=${POSTGRES_PASSWORD}
DB_NAME=${POSTGRES_DB}

psql -v ON_ERROR_STOP=1 --username "$DB_USER" --dbname "postgres" <<-EOSQL
  DO \$\$ BEGIN
     IF NOT EXISTS (SELECT FROM pg_database WHERE datname = '$DB_NAME') THEN
         CREATE DATABASE "$DB_NAME";
     END IF;
  END \$\$;
EOSQL
