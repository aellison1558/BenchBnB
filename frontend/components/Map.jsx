var React = require('react'),
    BenchStore = require('../stores/BenchStore'),
    ApiUtil = require('../util/ApiUtil'),
    FilterActions = require('../actions/FilterActions');

var Map = React.createClass({
  markers: [],

  _existingBenchMarkers: function(){
    var benchesWithMarkers = [];

    this.benches.forEach(function(bench){
      this.markers.forEach(function(marker) {
        if (bench.description === marker.title) {
          benchesWithMarkers.push(bench);
        }
      })
    }.bind(this));

    return benchesWithMarkers;
  },

  _oldMarkers: function() {
    var markersToDelete = [];
    var exists = true;

    this.markers.forEach(function(marker) {
      exists = false;
      this.benches.forEach(function(bench){
        if (marker.title === bench.description) {
          exists = true;
        }
      })
      if (!exists) {markersToDelete.push(marker);}


    }.bind(this))

    return markersToDelete;
  },

  _selectMarker: function(){
    var bench = this.benches.find(function(bench) {
      if (bench.selected === true) {
        return true;
      }
    });
    if (bench) {
      var marker = this.markers.find(function(marker){
        if (marker.title === bench.description) {
          return true;
        }
      });
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }

  },

  _unselectMarker: function(){
      this.markers.forEach(function(marker){

        marker.setAnimation(null);
      })
  },


  _placeMarkers: function(){
    this.benches = BenchStore.all();

    this.benches.forEach(function(bench) {
      if (this._existingBenchMarkers().indexOf(bench) > -1) {
        return;
      } else {
        this.markers.push(new google.maps.Marker({
          position: {lat: bench.lat, lng: bench.lng},
          map: this.map,
          title: bench.description
        }));
      };
    }.bind(this));

    this._oldMarkers().forEach(function(marker){
      var idx = this.markers.indexOf(marker);
      marker.setMap(null);
      this.markers.splice(idx, 1);
    }.bind(this));

  },

  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);


    this.map.addListener('idle', function(){
      var bounds = this.getBounds();
      var paramBounds = {
        southWest: {
          lat: bounds.getSouthWest().lat(),
          lng: bounds.getSouthWest().lng()
        },
        northEast: {
          lat: bounds.getNorthEast().lat(),
          lng: bounds.getNorthEast().lng()
        }
      };


      FilterActions.updateFilter({bounds: paramBounds});
    }.bind(this.map));

    var clickMapHandler = this.props.clickMapHandler;
    this.map.addListener('click', function(e){
      clickMapHandler({lat: e.latLng.lat(), lng: e.latLng.lng()});
    });

    BenchStore.addListener(this._placeMarkers);
    BenchStore.addListener(this._unselectMarker);
    BenchStore.addListener(this._selectMarker);
    ApiUtil.fetchBenches(this.props.bounds);
  },

  render: function(){
    return(
      <div className='map' ref='map'></div>
    );
  }

});

module.exports = Map;
