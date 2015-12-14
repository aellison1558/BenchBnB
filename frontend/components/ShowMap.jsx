var React = require('react'),
    BenchStore = require('../stores/BenchStore'),
    ApiUtil = require('../util/ApiUtil'),
    FilterActions = require('../actions/FilterActions');

var Map = React.createClass({
  marker: {},

  _placeMarkers: function(){
    var bench = this.props.bench;
    this.marker = (new google.maps.Marker({
          position: {lat: bench.lat, lng: bench.lng},
          map: this.map,
          title: bench.description
    }))

  },

  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: this.props.lat, lng: this.props.lng},
      zoom: 18
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.map.setOptions({draggable: false})
    BenchStore.addListener(this._placeMarkers);
    ApiUtil.fetchBenches(this.props.params);
  },

  render: function(){
    return(
      <div className='map' ref='map'></div>
    );
  }

});

module.exports = Map;
