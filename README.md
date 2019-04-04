# miau-highlight - A reusable AngularJS component

This component allows you to highlight words in a given text.

Included out of the box you have a fully working build using:

 * Karma - unit testing in real browsers
 * Gulp - JS task runner which:
     * Minification and concatenation of JS
     * Runs tests through Karma

## Getting Started

To get you started you can simply clone the miau-highlight repository and install the dependencies:

### Prerequisites

We use a number of node.js tools to initialize and test miau-highlight. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone miau-highlight

Clone the miau-highlight repository using [git][git]:

```
git clone https://github.com/henikejordan/miau-highlight
cd miau-highlight
```

### Install Dependencies

The tools help us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].

Then we can simply do:

```
npm install
```

You should find that you have one new folder in your project.

* `node_modules` - contains the npm packages for the tools we need

### Start the server

For start the server, through the gulp, we simply do:

```
gulp server
```

### Generate the basic files

This project has been configured to generate the basic files, which will be generated in the /dist folder.
To generate these files, we open a new terminal window and execute:

```
gulp basic
```

## Running Unit Tests

The miau-highlight comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found in the /tests folder are named as `...Test.js`.

The easiest way to run the unit tests is to run:

```
gulp test
```

This task will start the Karma to do a single run of the tests and then exit. This is useful if you want to
check that a particular version of the code is operating as expected.

## Updating Angular

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

## Usage

The component `<miau-highlight>` contains the following parameters:

* `text`: the original text that will have the words highlighted.
* `word`: the word to be highlighted in the text (if there is more than one occurrence, all of them will be highlighted).
* `before`: the number of characters to be highlighted before each word defined in the `word` parameter.
* `later`: the number of characters to be highlighted later in each word defined in the `word` parameter.

### Properties

Calling the angular service, using modules sintax from NodeJs

```jsx
"use strict";

module.exports = function(highlightService) {
	var highlight = this;

	highlight.$onInit = function() {
		highlight.updated = highlightService.do(highlight.text, highlight.word, 
		                                        highlight.before, highlight.later);
	}
}
```

Now you can use the component in your HTML:

```html
	<miau-highlight 
		text="The text to be highlighted" 
		word="words" 
		before="1" 
		later="3">
	</miau-highlight>
```

## Contact

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io

## License

This library is [MIT Licensed](LICENSE).