help:
	@websiter
build-dep:
	@which websiter > /dev/null || (echo "You need to install ipfs/websiter to build this website. See https://github.com/ipfs/websiter" && exit 1)
	@websiter build-dep
publish-dep:
	@which websiter > /dev/null || (echo "You need to install ipfs/websiter to build this website. See https://github.com/ipfs/websiter" && exit 1)
	@websiter publish-dep
build: build-dep
	@websiter build
dev: build-dep
	@websiter dev
publish: build-dep publish-dep build
	@websiter publish

.PHONY: help deps build dev publish
