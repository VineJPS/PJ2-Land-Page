# Variáveis
DC = docker compose
SERVICE = app

.PHONY: up down enter logs restart status build rebuild clean help

# Define o comando padrão ao rodar apenas 'make'
.DEFAULT_GOAL := help

## --- Gerenciamento de Containers ---

up: ## Sobe os containers em segundo plano (detached)
	$(DC) up -d

down: ## Derruba os containers e remove redes/volumes
	$(DC) down -v

enter: ## Entra no terminal do container (ex: make enter ou make enter SERVICE=db)
	$(DC) exec $(SERVICE) bash

logs: ## Exibe os logs de todos os containers em tempo real
	$(DC) logs -f

status: ## Mostra o status atual dos containers
	$(DC) ps

## --- Build e Manutenção ---

build: ## Reconstrói as imagens sem subir os containers
	$(DC) build

rebuild: ## Faz o build completo e sobe os containers do zero
	$(DC) up -d --build --force-recreate

restart: down up ## Reinicia totalmente o ambiente

clean: down ## Remove containers, volumes e imagens não utilizadas
	docker system prune -f

## --- Ajuda ---

help: ## Exibe esta mensagem de ajuda
	@echo "Comandos disponíveis:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'