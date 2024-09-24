#!/bin/sh
# wait-for-it.sh

host="$1"
shift
cmd="$@"

# Increase wait time to 10 seconds
timeout=10

until nc -z "$host" 3333; do
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
