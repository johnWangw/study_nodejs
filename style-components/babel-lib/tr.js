'use strict';

var React = require('react');

var s = React.createElement('h1', { style: {
    color: 'red'
  }, onClick: function onClick() {
    alert('asdas');
  } }, 'hello world ');

console.log(s);