# Nextcloud MediaDC

![build](https://github.com/andrey18106/mediadc/actions/workflows/create-release-draft.yml/badge.svg)
![static-analysis](https://github.com/andrey18106/mediadc/actions/workflows/static-analysis.yml/badge.svg?branch=dev)

[![Github All Releases](https://img.shields.io/github/downloads/andrey18106/mediadc/total.svg)](https://github.com/andrey18106/mediadc/releases)

**📸📹 Collect photo and video duplicates to save your cloud storage space**

| **Not working on FreeBSD systems for now**

![Home page](/screenshots/mediadc_home.png)
![Task page](/screenshots/mediadc_task_details_2.png)
Nextcloud Media Duplicate Collector application

## Why is this so awesome?

* **♻ Detects similar and duplicate photos/videos with different resolutions, sizes and formats**
* **💡 Easily saves your cloud storage space and time for sorting**
* **⚙ Flexible configuration**

## 🚀 Installation

In your Nextcloud, simply enable the MediaDC app through the Apps management.
The Nextcloud MediaDC app is only included in nextcloud v21 and higher.
#### Read more on [Wiki page](https://github.com/andrey18106/mediadc/wiki)

## Maintainers

* [Andrey Borysenko](https://github.com/andrey18106)
* [Alexander Piskun](https://github.com/bigcat88)

If you'd like to join, just go through the [issues list](https://github.com/andrey18106/mediadc/issues) and fix some!

## 🏗 Development setup

To start working on frontend follow this steps:

1. ☁ Clone this into your `apps` folder of your Nextcloud.
1. 👩‍💻 In a terminal, run the command `make dev-setup` to install the dependencies.
1. 🏗 Then to build the frontend application run `make build-js-production` (builds Vue application in production mode), or watch changes with: `make watch-js` (in development mode).
1. ✅ Enable the app through the app management of your Nextcloud.
1. 💻 Fix easily linting issues with `npm run lint:fix`.

## Support us

You can support us with any donate amount.

[![PayPal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/donate?hosted_button_id=H5PLJJMWLDNJQ)
