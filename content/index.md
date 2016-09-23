+++
type = "index"
+++

<style>
  a.nav-item {
    margin: 0px 20px;
    text-decoration: underline;
  }

  .green {
    color: #2ecc40;
  }

</style>

<div style="text-align:center; margin:0px auto 60px;">
  <a class="nav-item" href="#home">Home</a> |
  <a class="nav-item" href="/specs/">Spec</a>
  <!-- Spec is linked here, but could also be linked elsewhere below. Redundancy. -->
</div>

<!-- Blurb and communication

This should state clearly what it is, who it is for, and how users can use it -->

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

<!-- Implementations -->
## Implementations <small>(note: work in progress!)</small>

<!-- Logos

  This is a very basic stub for what the logos should look like. I am not sure what to write in the blurbs for each, and how best to link these up with the graphs of libp2p repositories below.
  To do:
    - Work on the blurb beneath each image: can you help me explain easily what you mean by on IPFS? In the browser on IPFS? What do you mean by node? I understand Gopher, I think, but perhaps we could go over that briefly, too.
    - Align these a bit better.
    - Make a better semantic shift to the table, beneath.
  -->

<div class="row">
  <div class="col-sm-4">
    <img src="/images/ipfs.png">

  </div>
  <div class="col-sm-4">
    <img src="/images/js.png">
  </div>
  <div class="col-sm-4">
    <img src="/images/gopher.png">
  </div>
</div>


<!-- Table

This table isn't great; the naming and modularity of js- and go- modules do not align well. Only the top five are named the same; you can see in the links below that the other ones are a bit more individual.

It would be great if we could talk about how to display these. As well, should we move the rust modules to libp2p? The python ones? Looking at rust, I only see one module that really exists; did you plan to make more? The links in the diasdavid/rust-libp2p module are dead.
-->

|       | js | go | swift | [python](https://github.com/amstocker/python-libp2p) | [rust](https://github.com/diasdavid/rust-libp2p) |
| :--- | :-:| :-: | :---: | :----: | :--: |
| libp2p | <a href="https://github.com/libp2p/js-libp2p" class="green">js-libp2p</a> | <a href="https://github.com/libp2p/go-libp2p" class="green">go-libp2p</a> | | | |
| crypto | <a href="" class="green">js-libp2p-crypto</a> | <a href="https://github.com/libp2p/go-libp2p-crypto" class="green">go-libp2p-crypto</a> | | | |
| record | <a href="https://github.com/libp2p/js-libp2p-record" class="green">js-libp2p-record</a> | <a href="https://github.com/libp2p/go-libp2p-record" class="green">go-libp2p-record</a> | | | |
| secio | <a href="https://github.com/libp2p/js-libp2p-secio" class="green">js-libp2p-secio</a> | <a href="https://github.com/libp2p/go-libp2p-secio" class="green">go-libp2p-secio</a> | | | |

<!-- I am not sure how to display these. There isn't parity in naming, or, it seems, scope, although I am sure that combined there is parity in functionality. It may be best to display these not so much as a grid against each other, but as individuals.
-->

<a href="https://github.com/libp2p/go-floodsub" class="green">go-floodsub</a>
<a href="https://github.com/libp2p/go-libp2p-kad-dht" class="green">go-libp2p-kad-dht</a>
<a href="https://github.com/libp2p/go-libp2p-kbucket" class="green">go-libp2p-kbucket</a>
<a href="https://github.com/libp2p/go-libp2p-loggables" class="green">go-libp2p-loggables</a>
<a href="https://github.com/libp2p/go-libp2p-peer" class="green">go-libp2p-peer</a>
<a href="https://github.com/libp2p/go-libp2p-peerstore" class="green">go-libp2p-peerstore</a>
<a href="https://github.com/libp2p/go-libp2p-routing" class="green">go-libp2p-routing</a>
<a href="https://github.com/libp2p/go-libp2p-transport" class="green">go-libp2p-transport</a>
<a href="https://github.com/libp2p/go-testutil" class="green">go-testutil</a>
<a href="https://github.com/libp2p/interface-connection" class="green">interface-connection</a>
<a href="https://github.com/libp2p/interface-libp2p" class="green">interface-libp2p</a>
<a href="https://github.com/libp2p/interface-peer-routing" class="green">interface-peer-routing</a>
<a href="https://github.com/libp2p/interface-record-store" class="green">interface-record-store</a>
<a href="https://github.com/libp2p/interface-stream-muxer" class="green">interface-stream-muxer</a>
<a href="https://github.com/libp2p/interface-transport" class="green">interface-transport</a>
<a href="https://github.com/libp2p/js-libp2p-distributed-record-store" class="green">js-libp2p-distributed-record-store</a>
<a href="https://github.com/libp2p/js-libp2p-floodsub" class="green">js-libp2p-floodsub</a>
<a href="https://github.com/libp2p/js-libp2p-half-closed-connection-upgrade" class="green">js-libp2p-half-closed-connection-upgrade</a>
<a href="https://github.com/libp2p/js-libp2p-identify" class="green">js-libp2p-identify</a>
<a href="https://github.com/libp2p/js-libp2p-kad-record-store" class="green">js-libp2p-kad-record-store</a>
<a href="https://github.com/libp2p/js-libp2p-kad-routing" class="green">js-libp2p-kad-routing</a>
<a href="https://github.com/libp2p/js-libp2p-mdns-discovery" class="green">js-libp2p-mdns-discovery</a>
<a href="https://github.com/libp2p/js-libp2p-multiplex" class="green">js-libp2p-multiplex</a>
<a href="https://github.com/libp2p/js-libp2p-ping" class="green">js-libp2p-ping</a>
<a href="https://github.com/libp2p/js-libp2p-railing" class="green">js-libp2p-railing</a>
<a href="https://github.com/libp2p/js-libp2p-random-walk" class="green">js-libp2p-random-walk</a>
<a href="https://github.com/libp2p/js-libp2p-spdy" class="green">js-libp2p-spdy</a>
<a href="https://github.com/libp2p/js-libp2p-swarm" class="green">js-libp2p-swarm</a>
<a href="https://github.com/libp2p/js-libp2p-tcp" class="green">js-libp2p-tcp</a>
<a href="https://github.com/libp2p/js-libp2p-udp" class="green">js-libp2p-udp</a>
<a href="https://github.com/libp2p/js-libp2p-udt" class="green">js-libp2p-udt</a>
<a href="https://github.com/libp2p/js-libp2p-utp" class="green">js-libp2p-utp</a>
<a href="https://github.com/libp2p/js-libp2p-webrtc-star" class="green">js-libp2p-webrtc-star</a>
<a href="https://github.com/libp2p/js-libp2p-websockets" class="green">js-libp2p-websockets</a>
<a href="https://github.com/libp2p/js-peer-book" class="green">js-peer-book</a>
<a href="https://github.com/libp2p/js-peer-id" class="green">js-peer-id</a>
<a href="https://github.com/libp2p/js-peer-info" class="green">js-peer-info</a>
<a href="https://github.com/libp2p/js-spdy-stream-muxer" class="green">js-spdy-stream-muxer</a>
<a href="https://github.com/libp2p/libp2p" class="green">libp2p</a>
<a href="https://github.com/libp2p/pubsub" class="green">pubsub</a>
<a href="https://github.com/libp2p/pubsub-notes" class="green">pubsub-notes</a>
<a href="https://github.com/libp2p/specs" class="green">specs</a>
<a href="https://github.com/libp2p/website" class="green">website</a> 

<!-- Examples: What can we put here? -->


<!-- Contribute

This section needs to be overhauled. Let's go through it verbally. I'm still a bit unsure on the audience for libp2p; is it libp2p developers, or people who might use it as a plug-and-play system? -->

## You can make libp2p better!

Libp2p is a work in progress. As such, there's a few things you can do right now to help out:

- **Read the spec!** If you have any questions or comments, issues or changes, weigh in on [libp2p/specs](https://github.com/libp2p/specs).
- Go through the modules above and **check out existing issues**. This would be especially useful for modules in active development. Some knowledge of IPFS/libp2p may be required, as well as the infrasture behind it - for instance, you may need to read up on p2p and more complex operations like muxing to be able to help technically.
- **Perform code reviews**. Most of this has been developed by @diasdavid, which means that more eyes will help a) speed the project along b) ensure quality and c) reduce possible future bugs.
- **Add tests**. There can never be enough tests.
- **Talk to us.** You can find us on IRC at #ipfs on Freenode.

<!-- Other sections

- Notes and discussions: learn more
- PubSub?
- Peer Routing and Content routing
- A Roadmap?
- License
- Where to contact and keep in touch
-->