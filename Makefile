SHELL=/bin/bash
DOMAIN="libp2p.io"
IPFSLOCAL="http://localhost:8080/ipfs/"
IPFSGATEWAY="https://ipfs.io/ipfs/"
NPMBIN=./node_modules/.bin
NPM=npm
OUTPUTDIR=public
PIDFILE=dev.pid

ifeq ($(DEBUG), true)
	PREPEND=
	APPEND=
else
	PREPEND=@
	APPEND=1>/dev/null
endif

build: clean install lint js css minify
	$(PREPEND)hugo && \
	echo "" && \
	echo "Site built out to ./public dir"

help:
	@echo 'Makefile for a libp2p, a hugo built static site.                                                          '
	@echo '                                                                                                          '
	@echo 'Usage:                                                                                                    '
	@echo '   make                                Build the optimised site to ./$(OUTPUTDIR)                         '
	@echo '   make serve                          Preview the production ready site at http://localhost:1313         '
	@echo '   make lint                           Check your JS and CSS are ok                                       '
	@echo '   make js                             Browserify the *.js to ./static/js                                 '
	@echo '   make css                            Compile the *.less to ./static/css                                 '
	@echo '   make minify                         Optimise all the things!                                           '
	@echo '   make dev                            Start a hot-reloding dev server on http://localhost:1313           '
	@echo '   make dev-stop                       Stop the dev server                                                '
	@echo '   make deploy                         Add the website to your local IPFS node                            '
	@echo '   make publish-to-domain              Update $(DOMAIN) DNS record to the ipfs hash from the last deploy '
	@echo '   make clean                          remove the generated files                                         '
	@echo '                                                                                                          '
	@echo '   DEBUG=true make [command] for increased verbosity                                                      '

serve: install lint js css minify
	$(PREPEND)hugo server

node_modules:
	$(PREPEND)$(NPM) i $(APPEND)

install: node_modules

lint: install
	$(PREPEND)$(NPMBIN)/standard && $(NPMBIN)/lessc --lint less/*.less

js: install
	$(PREPEND)$(NPMBIN)/browserify --noparse=jquery js/{index,implementations,bundles,media}.js -p [ factor-bundle -o static/js/index.js -o static/js/implementations.js -o static/js/bundles.js -o static/js/media.js ] -o static/js/common.js $(APPEND)

css: install
	$(PREPEND)for f in less/*.less; do $(NPMBIN)/lessc $$f --autoprefix='> 1%, last 2 versions' --clean-css static/css/$$(basename $$f .less).css $(APPEND); done

minify: install minify-js minify-img

minify-js: install
	$(PREPEND)find static/js -name '*.js' -exec $(NPMBIN)/uglifyjs {} --compress --output {} $(APPEND) \;

minify-img: install
	$(PREPEND)find static/img -type d -exec $(NPMBIN)/imagemin {}/* --out-dir={} $(APPEND) \;

dev: install js css
	$(PREPEND)[ ! -f $(PIDFILE) ] || rm $(PIDFILE) ; \
	touch $(PIDFILE) ; \
	($(NPMBIN)/watchify --noparse=jquery js/{index,implementations,bundles,media}.js -p [ factor-bundle -o static/js/index.js -o static/js/implementations.js -o static/js/bundles.js -o static/js/media.js ] -o static/js/common.js & echo $$! >> $(PIDFILE) ; \
	$(NPMBIN)/nodemon --quiet --watch less --ext less --exec "make css" & echo $$! >> $(PIDFILE) ; \
	hugo server & echo $$! >> $(PIDFILE))

dev-stop:
	$(PREPEND)touch $(PIDFILE) ; \
	[ -z "`(cat $(PIDFILE))`" ] || kill `(cat $(PIDFILE))` ; \
	rm $(PIDFILE)

deploy:
	$(PREPEND)ipfs swarm peers >/dev/null || (echo "ipfs daemon must be online to publish" && exit 1)
	ipfs add -r -q $(OUTPUTDIR) | tail -n1 >versions/current
	cat versions/current >>versions/history
	@export hash=`cat versions/current`; \
		echo ""; \
		echo "published website:"; \
		echo "- $(IPFSLOCAL)$$hash"; \
		echo "- $(IPFSGATEWAY)$$hash"; \
		echo ""; \
		echo "next steps:"; \
		echo "- ipfs pin add -r /ipfs/$$hash"; \
		echo "- make publish-to-domain"; \

publish-to-domain: auth.token versions/current
	DNSIMPLE_TOKEN=$(shell cat auth.token) \
	./dnslink.sh $(DOMAIN) $(shell cat versions/current)

clean:
	$(PREPEND)[ ! -d $(OUTPUTDIR) ] || rm -rf $(OUTPUTDIR) && \
	[ ! -d static/js ] || rm -rf static/js/*.js && \
	[ ! -d static/css ] || rm -rf static/css/*.css

.PHONY: build help install lint js css minify minify-js minify-img  dev stopdev deploy publish-to-domain clean
