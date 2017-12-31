# How to take a screenshot

Because after years of computing, some people just don't know how.

This project is still a WIP. I hope that one day it is not.

## Why have another "How to screenshot" website?

[take-a-screenshot](https://www.take-a-screenshot.org/)

Let's face it. That site is old and dated. It uses jQuery version 1.9, meaning it was created somewhere around early-mid 2013. It's bloated, making around 50 network requests per page (including analytics and share widgets, with even more once the ads load). The bottom of the screen is taken up by a cookie warning banner. It even has a nicely sized [terms of service](https://www.take-a-screenshot.org/en/terms.html) page, and more legal-ish information in the [about](https://www.take-a-screenshot.org/de/about.html) page.

All of this takes away from the fact that it's a website about taking a screenshot. It should be simple, tell you how to take a screenshot, then get out of your way.

That's the goal of this repository.

## Contributing

Contributions are welcome. Fork, make changes, create a Pull Request.

A few points to consider as you make changes:

* The site must work on mobile devices.
* The site must work offline (using service workers).
  * This includes updating the CACHE nmumber in sw.js if it is changed.
* The site must work without Javascript enabled.
  * Only scripts should be to register service worker, service worker itself, and analytics (in the future).
* Reduce network requests.
  * Don't use &lt;img/&gt; tags, use inline &lt;svg&gt; instead.

### Things to work on

#### Features

* [x] Offline (service worker)
* [ ] Better diagrams
* [ ] Translation
* [ ] Analytics (may want in final release) (?)
* [ ] OpenGraph/Twitter meta tags

#### Platforms

* [x] Windows
* [x] Mac
* [ ] Linux (?)
* [ ] Android
* [ ] iOS
* [x] XBox
* [x] PS4
* [x] Steam (?)
* [ ] 3rd party programs (?)
* [ ] Webpages (browser extension) (?)
