# .env 파일이 있는지 확인해서 없으면 에러를 발생시킨다
# .env 파일은 gitignore에 등록되어 있고 환경에 맞춰 복사해서 사용한다
ifndef ENV_CHECKED
ENV_CHECKED = true
.env:
	@echo "ERROR: .env file does not exist. Please copy .env file."
	@exit 1
include .env
endif

DOCS_YML := docker-compose.yml
DOCS_BUILD_YML := docker-compose-build.yml

$(info "USE BUILD IMAGE" $(USE_BUILD_IMAGE))
ifeq ($(USE_BUILD_IMAGE), "true")
	DOCS_YML := $(DOCS_YML) -f $(DOCS_BUILD_YML)
endif

#################################################
# docker-compose:
#################################################
config-docs: .env
	docker compose -f $(DOCS_YML) config

collect_setup:
	mkdir -p ../setuptools/webvlad_docs
	cp .env* ../setuptools/webvlad_docs
	cp docker-compose*.yml ../setuptools/webvlad_docs
	cp Makefile* ../setuptools/webvlad_docs

# -----------------------------------------------
# document
# -----------------------------------------------
build-docs: .env
	docker compose -f $(DOCS_YML) build docs

up-docs: .env
	docker compose -f $(DOCS_YML) up docs -d

start-docs: .env
	docker compose -f $(DOCS_YML) start docs

stop-docs: .env
	docker compose -f $(DOCS_YML) stop docs

restart-docs: .env
	docker compose -f $(DOCS_YML) restart docs

down-docs: .env
	docker compose -f $(DOCS_YML) down docs

build-up-docs: .env build-docs up-docs
