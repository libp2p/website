---
layout: index
repo: libp2p/libp2p
---

# libp2p

<style>
  a.nav-item {
    margin: 0px 20px;
  }
  .green {
    color: #2ecc40;
  }
</style>
<div class="nav" style="text-align:center;padding:30px; margin:0px auto;">
  <a class="nav-item" href="#home">Home</a>
  <a class="nav-item" href="/specs">Spec</a>
</div>

While developing [IPFS](https://ipfs.io), we came to learn about the several challenges imposed by having to run a distributed file system on top of heterogeneous devices, with diferent network setups and capabilities. During this process, we had to constantly revisit the whole network stack and create solutions to overcome the obstacles imposed by design decisions of the several layers and protocols, without breaking compatibility or recreating technologies. This was a tedious, time consuming process.


Instead of re-inventing the wheel every time we need to build a decentralized P2P application, we focused on streamlining the problem by tackling networking complexity in an abstract, general purpose way. The result is **libp2p**: a framework for simplifying networking with P2P applications. Developers decide on how they want their app to interop with others in the network, favoring configuration and extensibility instead of assumptions about networking setup. The goal is to enable rapid development of P2P applications for everyone.

**We are still actively developing libp2p, so expect the specification to change.**

## Goals and Requirements

Our goals for libp2p specification and its implementations are:

- Enable the use of various transports (TCP, UDP, DTLS, uTP, etc)
- Efficient use of sockets (connection reuse)
- Enable communications between peers to be multiplex over one socket (avoiding handshake overhead)
- Enable multiprotocols and respective versions to be used between peers, using a negotiation process.
- Be backwards compatible
- Work in current systems
- Use the current network technologies to its best capability
- Have NAT Traversal
- Enable connections to be relayed
- Enable encrypted channels

## Implementations <small>(note: work in progress!)</small>

- [Specification](https://github.com/ipfs/specs/tree/master/protocol/network)

|       | js | go | swift | python | rust |
| :--- | :-:| :-: | :---: | :----: | :--: |
| libp2p | <a href="https://github.com/libp2p/js-libp2p" class="green">js-libp2p</a> | <a href="https://github.com/libp2p/go-libp2p" class="green">go-libp2p</a> | | | |


<!-- I'm not sure how best to display this information. Here are the modules we currently have in this org:

go-libp2p
go-testutil
interface-connection
interface-libp2p
interface-peer-routing
interface-record-store
interface-stream-muxer
interface-transport
js-libp2p
js-libp2p-crypto
js-libp2p-distributed-record-store
js-libp2p-half-closed-connection-upgrade
js-libp2p-identify
js-libp2p-kad-record-store
js-libp2p-kad-routing
js-libp2p-mdns-discovery
js-libp2p-multiplex
js-libp2p-ping
js-libp2p-railing
js-libp2p-random-walk
js-libp2p-record
js-libp2p-secio
js-libp2p-spdy
js-libp2p-swarm
js-libp2p-tcp
js-libp2p-udp
js-libp2p-udt
js-libp2p-utp
js-libp2p-webrtc-star
js-libp2p-websockets
js-peer-book
js-peer-id
js-peer-info
js-spdy-stream-muxer
libp2p
pubsub

That is going to be a seriously js-* heavy graph. -->

