website
==============

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io)
[![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs)

> Webpage of the libp2p project. A multi protocol approach for a interoperable network stack that follows the 'self description' in favor of assumptions

![](https://raw.githubusercontent.com/diasdavid/specs/libp2p-spec/protocol/network/figs/logo.png)

# Install

You need to have [Hugo](https://gohugo.io/). See the install instructions on their website.

## Installing more themes

This Hugo theme adopted from the [Air theme](https://github.com/syui/hugo-theme-air).

Hugo allows us to install different themes easily.

    mkdir themes
    cd themes
    git clone https://github.com/syui/hugo-theme-air

## Build your website with this theme

    hugo server -t hugo-theme-air

# Usage

## Preview


```bash
$ hugo server
# Open 127.0.0.1:1313
```

## Hosting

```bash
# build
$ hugo

$ ipfs add -r public
```

-----

## structure
- description
- goal (what tries to achieve and overcome)
- requirements (from technology, ecosystem, etc)
- examples
  - multi transport
  - dialing/listening
  - protocol muxing
  - stream muxing
  - peer routing
  - mdns discovery
  - bootstrap list discovery
  - store records

