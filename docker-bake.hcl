group "default" {
    targets = ["backend", "frontend"]
}

target "backend" {
    context    = "."
    dockerfile = "Dockerfile"
    tags       = ["alekper/bysykkel-backend:local"]
}

target "frontend" {
    context    = "src/main/resources/static"
    dockerfile = "Dockerfile"
    tags       = ["alekper/bysykkel-frontend:local"]
}