import RoutesConfiguration from './route_configuration'

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./config/routes');



ReactDOM.render(
  <Router routes={RoutesConfiguration} ></Router>,
  document.getElementById('app')
)