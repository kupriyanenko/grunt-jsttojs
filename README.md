grunt-jsttojs
=======

[![NPM version](https://badge.fury.io/js/grunt-jsttojs.png)](http://badge.fury.io/js/grunt-jsttojs)

Grunt task for [jsttojs](https://github.com/kupriyanenko/jsttojs) - a node.js module for precompile JavaScript templates to one file.

_If you haven't used [grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](https://github.com/cowboy/grunt/blob/master/docs/getting_started.md) guide._

### Getting Started

From the same directory as your project's Gruntfile and package.json, install this plugin with the following command:

```
$ npm install grunt-jsttojs
```

Once that's done, add this line to your project's Gruntfile:

```js
grunt.loadNpmTasks('grunt-jsttojs');
```

### Overview

Inside your `grunt.js` file add a section named `jsttojs`. This section specifies the options passed to [RequireJS Optimizer](http://requirejs.org/docs/optimization.html).

#### Config Example

Example requirejs jsttojs config:

```javascript
  jsttojs: {
    root: 'src/Templates',
    output: 'src/Templates/templates.js',
    ext: 'html',
    removebreak: true,
    amd: true,
    requirements: ['handlebars']
  }
```

### License

Copyright (c) 2012 Alexey Kupriyanenko a.kupriyanenko@gmail.com

grunt-jsttojs is released under the MIT license.
