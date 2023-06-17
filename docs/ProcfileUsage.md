
# Signle web service

```sh
web: /app.sh
```


# Web and Worker Services

```sh
web: /app.sh
worker: /worker.sh
```
# Using Environment Variables

```sh
web: /app.sh
worker: /worker.sh -c "WORKER_MAX_CONCURRENCY"
```