var React = require('react'),
    Index = require('./benches/Index'),
    Map = require('./Map'),
    ApiUtil = require('../util/ApiUtil'),
    FilterStore = require('../stores/FilterStore'),
    Filter = require('./Filter');

var Search = React.createClass({
  getInitialState: function(){
    return {
      params: {
        bounds: {southWest: {lat: 37.74187133792972, lng: -122.47791534423828}, northEast: {lat: 37.80971309829069, lng: -122.39208465576172}},
        minSeating: 0,
        maxSeating: 100
      }
    };
  },

  _updateParams: function(){
    this.setState({params: FilterStore.all()});
  },

  _updateBenches: function(){
    ApiUtil.fetchBenches(FilterStore.all());
  },

  componentDidMount: function(){
    FilterStore.addListener(this._updateParams);
    FilterStore.addListener(this._updateBenches);
  },
  clickMapHandler: function(coordinates) {
    var param = $.param({coordinates: coordinates});
    var url = '/benches/new?' + param;
    this.props.history.push(url);
  },
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
        <Filter />
        <Map params={this.state.params} clickMapHandler={this.clickMapHandler} />
      </div>
    );
  }
});

module.exports = Search;
