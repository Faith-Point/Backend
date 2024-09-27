#!/bin/sh
# wait-for-it.sh

# Usar a variável de ambiente DB_HOST
host="${DB_HOST}"

if [ -z "$host" ]; then
  echo "DB_HOST not set in environment variables. Exiting."
  exit 1
fi

shift
cmd="$@"

echo "Checking connection to Postgres at host: $host"

# Aumentar o tempo de espera para 15 segundos para evitar que o script desista muito cedo
timeout=15

until nc -z "$host" 5432; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
  timeout=$((timeout-1))
  if [ $timeout -eq 0 ]; then
    >&2 echo "Postgres is still unavailable - giving up"
    exit 1
  fi
done

>&2 echo "Postgres is up - executing command"
exec $cmd
