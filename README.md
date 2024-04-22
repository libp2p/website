
# [libp2p-website](libp2p.io)

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io)
[![](https://img.shields.io/badge/project-libp2p-blue.svg?style=flat-square)](http://github.com/libp2p/libp2p)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![CircleCI branch](https://img.shields.io/circleci/project/github/libp2p/website/master.svg)](https://circleci.com/gh/libp2p/website/tree/master)
[![Discourse posts](https://img.shields.io/discourse/https/discuss.libp2p.io/posts.svg)](https://discuss.libp2p.io)

> Official website for libp2p http://libp2p.io

This repository contains the source code for the libp2p website available at http://libp2p.io

This project builds out a static site to explain libp2p, ready for deployment on ipfs. It uses `hugo` to glue the html together. It provides an informative, public-facing website. The most important things are the words, concepts and links it presents.

Much of the site content is data-driven, take a look at the `data` dir where find the data behind the implementations information as json.

## Install

```sh
git clone https://github.com/libp2p/website
```

## Usage

To deploy the site libp2p.io, run:

```sh
# Build out the optimised site to ./public, where you can check it locally.
make

# Add the site to your local ipfs, you can check it via /ipfs/<hash>
make deploy

# Save your dnsimple api token as auth.token
cat "<api token here>" > auth.token

# Update the dns record for libp2p to point to the new ipfs hash.
make publish-to-domain
```

The following commands are available:

### `make`

Build the optimised site to the `./public` dir

### `make serve`

Preview the production ready site at http://localhost:1313 _(requires `hugo` on your `PATH`)_

### `make dev`

Start a hot-reloading dev server on http://localhost:1313 _(requires `hugo` on your `PATH`)_

### `make minfy`

Optimise all the things!

### `make deploy`

Build the site in the `public` dir and add to `ipfs` _(requires `hugo` & `ipfs` on your `PATH`)_

---

See the `Makefile` for the full list or run `make help` in the project root. You can pass the env var `DEBUG=true` to increase the verbosity of your chosen command.

## Dependencies

* `Node.js` and `npm` for build tools
* `ipfs` to deploy changes
* `jq`, `curl` and an `auth.token` file in the project root containing your dnsimple api token to update the dns.

All other dependencies are pulled from `npm` and the Makefile will run `npm install` for you because it's nice like that.

## Contribute

Please do! Check out [the issues](https://github.com/libp2p/website/issues), or open a PR!

Check out our [notes on contributing ](https://github.com/libp2p/js-libp2p#contribute) for more information on how we work, and about contributing in general. Please be aware that all interactions related to libp2p are subject to the IPFS [Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md).

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.
