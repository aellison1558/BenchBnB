var React = require('react'),
    Index = require('./benches/Index'),
    Map = require('./Map');

var Search = React.createClass({
  render: function(){
    return(
      <div>
        <nav className="nav navbar navbar-default">
          <ul className="nav nav-tabs">
            <li><div className='logo'><a className="navbar-brand logo" href="#">Bench BnB</a></div></li>
            <li><form className='navbar-form navbar-center myForm' role="search">
              <input type="text" placeholder='San Francisco, CA' />
              <button className='navbar-right btn-navbar myButton'>Become A Host</button>
            </form></li>
            <li className="nav navbar-brand right">Messages</li>
            <li className="nav navbar-brand right">Help</li>
          </ul>
        </nav>
        <Index />
        <Map />
      </div>
    );
  }
});

module.exports = Search;
