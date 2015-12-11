var React = require('react'),
    ReactDOM = require('react-dom'),
    ApiUtil = require('./util/ApiUtil'),
    Search = require("./components/Search");



document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Search />, document.getElementById('root'));
})
