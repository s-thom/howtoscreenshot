# How to take a screenshot

Because after years of computing, some people just don't know how.

## Why have another "How to screenshot" website?

[Take A Screenshot](https://www.take-a-screenshot.org/) is, probably, the most popular reference for how to take a screenshot. It's definitely high up on every Google search on the topic, so I imagine they get a lot of traffic. When I started this project in 2017, the site was using an old version of jQuery, was covered in ads, and made around 50 web requests.

Here's what they've done since then:

- Updated jQuery, added dark mode, and removed the share widgets (credit where it's due).
- Added more ads.

All of this takes away from the fact that it's a website about taking a screenshot. It should be simple, tell you how to take a screenshot, then get out of your way. That's what I set out to create.

## Contributing

Contributions are welcome. Fork, make changes, create a Pull Request.

A few points to consider as you make changes:

- The site must work on mobile devices.
- The site must work without Javascript enabled.
  - Only scripts should be ~~to register service worker, service worker itself, and~~ analytics.
- Reduce network requests.
  - Don't use &lt;img/&gt; tags, use inline &lt;svg&gt; instead.

### Contributors

A big thank you to the following people for their contributions to this project:

- [@ExperiBass](https://github.com/ExperiBass): Adding instructions for GNOME screenshot to the Linux page
- [@dgw](https://github.com/dgw): Adding instructions for transferring screenshots off of Switch
- [/u/Charlie7Mason](https://www.reddit.com/user/Charlie7Mason/) and [@bem13](https://github.com/bem13): Suggestions for the Windows instructions
- [@IsaacHatton](https://github.com/IsaacHatton): Adding basic JS platform detection on the homepage

### Things to work on

#### Features

- [ ] Better diagrams
- [ ] Translation
- [ ] Other keyboard layouts

#### Platforms

- [x] Windows
- [x] Mac
- [x] Linux
- [x] Android
- [x] iOS
- [x] XBox
- [x] PS4
- [x] PS5
  - [ ] Images
- [x] Steam
- [x] Nintendo Switch
- [ ] Steam Deck
- [ ] 3rd party programs (?)
- [ ] Webpages (browser extension) (?)
