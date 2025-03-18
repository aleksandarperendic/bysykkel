.DEFAULT_GOAL := default

.PHONY: default
default: | docker deploylocal ## Build the local Docker image without running tests

.PHONY: clean
clean:    ## Remove generated build files.
	mvn clean

.PHONY: build
build: ## Compile this project and create the JAR archive without running tests.
	mvn package -DskipTests -e
	mkdir -p target/extracted
	java -Djarmode=layertools -jar target/oslosykkel-1.0.0.jar extract --destination target/extracted

.PHONY: docker
docker: ## Build the Docker image
	docker buildx bake

.PHONY: deploylocal
deploylocal: ## Deploy the latest version of the docker image locally
	@echo " -> Deploy local"
	@docker compose up -d --build

.PHONY: stopdeploylocal
stopdeploylocal: ## Stop locally deployed containers
	@echo " -> Stop locally deployed containers"
	@docker compose down --remove-orphans

.PHONY: help
help: Makefile  ## Print this help screen.
	@printf "\033[0m%s:\033[36m %s\n" "Make targets for application"
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_\/-]+:.*?## / {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
