group "default" {
    targets = ["backend"]
}

target "backend" {
    context    = "."
    dockerfile = "Dockerfile"
    tags       = ["alekper/bysykkel-backend:local"]
}
