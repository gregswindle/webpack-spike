# `webpack-spike`
> A sample webpack spike to evaluate frontend tools that optimize our build-test-deploy workflows and increase time-to-value.

## Table of contents
<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) -->
- [Overview](#overview)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Background](#background)
- [Semantic version and `CHANGELOG`](#semantic-version-and-changelog)
- [Contributing](#contributing)
- [License](#license)
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

## Overview of tools
> **:ballot_box_with_check: I recommend we try Poi.**

* [Poi](https://poi.js.org/#/home) is a configuration-free CLI that automatically enables builds optimized and minified apps with:
  - Transpilation and bundling (with webpack and babel/postcss)
  - Hot code reloading
  - Files in ./static are copied to dist folder, eg. static/favicon.ico to dist/favicon.ico
  - Vue JSX component support by default with `babel-preset-vue-app`
  - Code-splitting
  - Polyfills (if required)
  - Webpack support
  - Custom HTML output with the `html-webpack-plugin`
* [Results for js web frameworks benchmark - round 6](http://www.stefankrause.net/js-frameworks-benchmark6/webdriver-ts-results/table.html). Use this to compare Vue and React.
* [Vue.js: Single File Components](https://vuejs.org/v2/guide/single-file-components.html)
* [webpack: Getting Started](https://webpack.js.org/guides/getting-started/)
* [webpack: GitHub](https://github.com/webpack/webpack)

## Installation

__Prerequisite software__

`webpack-spike` is written in Node.js, which must be installed prior to use.

```shell
$ npm i https://github.com/gregswindle/webpack-spike.git
$ cd webpack-spike
$ npm install
```

## Configuration

View [webpack.config.js](webpack.config.js) for configuration details.

## Usage

Open a Terminal, navigate to the `webpack-spike` directory, and run:

```
$ npm run build
```

This executes the following workflow:

 1. Clean the target/output directory

    :arrow_down:

 1. Bundle source files

    :arrow_down:

 1. Creates target directories and files.

    :arrow_down:

 1. Generates an entry HTML with JavaScript and CSS loaders.

  ```bash
  $ npm run build

  > webpack-spike@1.0.0 build /Users/swindle/Projects/github/gregswindle/webpack-spike
  > webpack

  clean-webpack-plugin: /Users/swindle/Projects/github/gregswindle/webpack-spike/frontend-templates/target has been removed.
  Hash: 4ee65a656f52f8cd9522
  Version: webpack 3.10.0
  Time: 1093ms
            Asset       Size  Chunks                    Chunk Names
    app.bundle.js     544 kB       0  [emitted]  [big]  app
  print.bundle.js    2.52 kB       1  [emitted]         print
       index.html  254 bytes          [emitted]
     [0] ./frontend-templates/src/main/resources/themes/c2b/default-theme/js/index.js 264 bytes {0} [built]
     [2] (webpack)/buildin/global.js 509 bytes {0} [built]
     [3] (webpack)/buildin/module.js 517 bytes {0} [built]
     [4] ./frontend-templates/src/main/resources/themes/c2b/default-theme/js/print.js 13 bytes {1} [built]
      + 1 hidden module
  Child html-webpack-plugin for "index.html":
       1 asset
         [2] (webpack)/buildin/global.js 509 bytes {0} [built]
         [3] (webpack)/buildin/module.js 517 bytes {0} [built]
          + 2 hidden modules
  ```

To view the generated HTML file, run the following command in your Terminal:

```bash
$ open frontend-templates/target/main/resources/themes/c2b/default-theme/js/index.html
```

## Background

Modern MPAs and SPAs use linters, bundlers, and minifiers in order to quickly and efficiently serve backward-compatible and accessible content on multiple browsers.

## Semantic version and `CHANGELOG`

The latest version of `webpack-spike` is `0.0.0`. View the [`CHANGELOG`][changelog-url] for details.

## Contributing

[![Learn how to make a Pull Request with free training][prs-welcome-badge-image]][prs-welcome-url] We welcome contributions with [Pull Requests (PRs)][prs-welcome-url]!

**[:four_leaf_clover: Read the CONTRIBUTING guidelines to get started. :four_leaf_clover:][contributing-url]**

---

Contributions in the form of GitHub pull requests are welcome. Before embarking on a significant change, please adhere to the following guidelines:

  1. **[Create an issue][issues-url]**&mdash;e.g., a [defect ("bug") report][issues-new-defect-url] or a [feature request][issues-new-feat-url]&mdash;to propose changes.

  _Exceptions:_
  > If you're working on documentation and fixing something simple like a typo or an easy bug, go ahead and make a pull request.

  1. **[Follow the CONTRIBUTING guidelines][contributing-url].**

     _Why:_
     > Standards and guidelines make communication easier. If you're willing and able to program&mdash;or want to learn how&mdash; following the guidelines will increase the likelihood of adding your changes to the software product.

  1. **[Read the Code of Conduct][code-of-conduct-url].**

     _Why:_
     > It's more fun when everybody's friendly and respectful.

  1. **[Make a pull request][pulls-url]** when you're ready for other to review your changes (or you get stuck somewhere).

     _PR novices:_
     > **:raising_hand: Never created a pull request?** No problem. [:free: Take this free online training][prs-welcome-url]. (It even covers most of the conventions in the [CONTRIBUTING guidelines][contributing-url]!)

## License

[MIT][license-url] © [Greg Swindle][author-url].




<!-- ⛔️ 📝 NOTE: PLEASE ALPHABETIZE LINK REFERENCES. 📝 ⛔️ -->

[author-url]: https://github.com/gregswindle
[changelog-url]: ./CHANGELOG.md
[license-choose-url]: https://choosealicense.com/
[license-no-license-url]: https://choosealicense.com/no-license/
[license-unlicense-url]: https://choosealicense.com/licenses/#unlicense
[code-of-conduct-url]: ./CODE_OF_CONDUCT.md
[contributing-url]: ./CONTRIBUTING.md
[issues-new-defect-url]: /gregswindle/webpack-spike.git/issues/new?title=fix%28affected-scope%29%3A+subject-line-with-very-few-words&labels=Priority%3A+Medium%2CStatus%3A+Review+Needed%2CType%3A+Defect&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+__Feature%3A__+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+__EXAMPLE%3A__%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+__behavior+you+expect__+to+see%2C+or+the+behavior+that+__would__+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-new-feat-url]: /gregswindle/webpack-spike.git/issues/new?title=feat%28affected-scope%29%3A+subject-line-with-very-few-words&labels=Priority%3A+Medium%2CStatus%3A+Review+Needed%2CType%3A+Feature&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+__Feature%3A__+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+__EXAMPLE%3A__%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+__behavior+you+expect__+to+see%2C+or+the+behavior+that+__would__+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-url]: /gregswindle/webpack-spike.git/issues
[license-url]: ./LICENSE
[nodejs-url]: https://nodejs.org
[npmjs-url]: https://www.npmjs.com/
[prs-welcome-badge-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs-welcome-url]: http://makeapullrequest.com
[pulls-url]: /gregswindle/webpack-spike.git/pulls
