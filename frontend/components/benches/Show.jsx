var React = require('react'),
    Link = require('react-router').Link,
    Map = require('../ShowMap'),
    BenchStore = require('../../stores/BenchStore'),
    ApiUtil = require('../../util/ApiUtil'),
    ReviewForm = require('../reviews/ReviewForm'),
    ReviewIndex = require('../reviews/Index');

var Show = React.createClass({
  getInitialState: function(){
    var bench = BenchStore.find(parseInt(this.props.params.benchId))
    return {
      bench: bench,
      params: {
        bounds: {southWest: {lat: (bench.lat - .0339), lng: (bench.lng - .0429)}, northEast: {lat: (bench.lat + .0339), lng: (bench.lng + 0.429)}},
        minSeating: 0,
        maxSeating: 100
      }
    };
  },

  componentDidMount: function(){
    ApiUtil.fetchBenches(this.state.params);
  },

  componentWillReceiveNewProps: function(newProps){
    this.setState({bench: BenchStore.find(parseInt(newProps.params.benchId))});
  },

  render: function(){
    return(
      <div>
        <a href="#/">Back to home page</a>
        <br/>
        <img src="https://res.cloudinary.com/dhcnfmydo/image/upload/v1450142862/kiwbpc7yaybettvtyyrn.png"/>
        <h3>Description:</h3>
        {this.state.bench.description}

        <h3>Seating:</h3>
        {this.state.bench.seating}

        <Map params={this.state.params} bench={this.state.bench} lat={this.state.bench.lat} lng={this.state.bench.lng}/>
        <h3>Reviews:</h3>
        <ReviewIndex benchId={this.props.params.benchId}/>
        <ReviewForm benchId={this.props.params.benchId}/>
      </div>
    );
  }
});

module.exports = Show;
