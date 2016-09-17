+++
type = "index"
+++

<style>
  a.nav-item {
    margin: 0px 20px;
  }

  .green {
    color: #2ecc40;
  }

</style>

<div style="text-align:center;padding:30px; margin:0px auto;">
  <a class="nav-item" href="#home">Home</a>
  <a class="nav-item" href="/specs/">Spec</a>
</div>

**libp2p**: a networking stack and library modularized out of [The IPFS Project](https://ipfs.io), and bundled separately for other tools to use.

libp2p is the product of a long, and arduous quest of understanding -- a deep dive into the internet's network stack, and plentiful peer-to-peer protocols from the past.

 Building large scale peer-to-peer systems has been complex and difficult in the last 15 years, and libp2p is a way to fix that. It is a "network stack" -- a protocol suite -- that cleanly separates concerns, and enables sophisticated applications to only use the protocols they absolutely need, without giving up interoperability and upgradeability. libp2p grew out of IPFS, but it is built so that lots of people can use it, for lots of different projects.

We will be writing a set of docs, posts, tutorials, and talks to explain what p2p is, why it is tremendously useful, and how it can help your existing and new projects.

## Goals and Requirements

Our goals for the libp2p specification and its implementations are:

- Enabling the use of various transports (TCP, UDP, DTLS, uTP, etc),
- Efficient use of sockets (connection reuse),
- Enabling communications between peers to be multiplexed over one socket (avoiding handshake overhead),
- Enabling multiprotocols and respective versions to be used between peers, using a negotiation process,
- To be backwards compatible,
- To work in current systems,
- Using the current network technologies to its best capability,
- Having NAT Traversal,
- Enableing connections to be relayed,
- Enabling encrypted channels.

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

## You can make libp2p better!

Libp2p is a work in progress. As such, there's a few things you can do right now to help out:

- **Read the spec!** If you have any questions or comments, issues or changes, weigh in on [libp2p/specs](https://github.com/libp2p/specs).
- Go through the modules above and **check out existing issues**. This would be especially useful for modules in active development. Some knowledge of IPFS/libp2p may be required, as well as the infrasture behind it - for instance, you may need to read up on p2p and more complex operations like muxing to be able to help technically.
- **Perform code reviews**. Most of this has been developed by @diasdavid, which means that more eyes will help a) speed the project along b) ensure quality and c) reduce possible future bugs.
- **Add tests**. There can never be enough tests.
- **Talk to us.** You can find us on IRC at #ipfs on Freenode.

