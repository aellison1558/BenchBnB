var React = require('react'),
    Index = require('./benches/Index'),
    Map = require('./Map');

var Search = React.createClass({
  render: function(){
    return(
      <div>
        <nav className="nav navbar navbar-default">
            <div className='logo'><a className="navbar-brand logo" href="#">Bench BnB</a></div>
            <form className='navbar-form navbar-center' role="search">
              <input type="text" className="form-control" placeholder='San Francisco, CA' />
            </form>
        </nav>
        <Index />
        <Map />
      </div>
    );
  }
});

module.exports = Search;
