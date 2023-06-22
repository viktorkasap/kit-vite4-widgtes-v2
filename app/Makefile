include .env

.PHONY: help

help: ## Show current help message
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' ./Makefile | sort | \
	awk 'BEGIN {FS = ":.*?## "}; {printf "make \033[32m%-30s\033[0m %s\n", $$1, $$2}'
	@echo ""

install-npm: ## Install via NPM
	npm ci || npm install

install-yarn: ## Install via YARN
	yarn install --frozen-lockfile || yarn install

pretty: ## Do pretty code css/js
	@echo "🚀 [Prettier] Formatting code..."
	@npx prettier --write "src/**/*.{css,scss,js,ts}"
	@echo "✅  [Prettier] Code style check passed"

lint: ## Check & fix code style js
	@echo "🔎 [ESLint] Checking code style..."
	@npx eslint --fix "src/**"
	@echo "✅  [ESLint] Code style check passed"

pre-commit: ## Check style code before commit
	@echo "🚀 [Husky] Running pre-commit hooks..."
	@echo "🔎 [ESLint] Checking code style..."
	@npx eslint --fix "src/**"
	@echo "✅  [ESLint] Code style check passed"
	@echo "🔎 [Prettier] Formatting code..."
	@npx prettier --write src
	@echo "✅  [Prettier] Code style check passed"
	@echo "✅  [Husky] All pre-commit hooks passed"

build-prod: pretty lint ## Build for PROD project
	@echo "🚀 [Build Production] Running ..."
	@npx tsc && vite build
	@echo "🎉 [Build Production] Done!"

build-dev: pretty lint ## Build for DEV project
	@echo "🚀 [Build Development] Running ..."
	@npx vite build --mode development
	@echo "🎉 [Build Development] Done!"

preview: ## Run preview project
	npx vite preview --host ${HOST} --port $(PORT_2)

start: ## Start the server with an optional port (e.g., make serve PORT=4040)
	@echo "🚀 Starting server..."
	@npx vite --host ${HOST} --port $(PORT_1)

