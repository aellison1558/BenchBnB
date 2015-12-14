var React = require('react'),
    ReactDOM = require('react-dom'),
    ApiUtil = require('./util/ApiUtil'),
    Search = require("./components/Search"),
    BenchForm = require('./components/benches/BenchForm'),
    ReactRouter = require('react-router'),
    Router = require('react-router').Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute;


var App = React.createClass({
  render: function(){
    return(
      <div>
        <header><h1>Bench BnB</h1></header>
        {this.props.children}
      </div>
    )
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Search}/>
    <Route path="benches/new" component={BenchForm} />
  </Route>
)


document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('root'));
})
