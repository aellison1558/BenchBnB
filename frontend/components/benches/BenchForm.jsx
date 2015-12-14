var React = require('react'),
    BenchStore = require('../../stores/BenchStore'),
    ApiUtil = require('../../util/ApiUtil'),
    LinkStateMixin = require('react-addons-linked-state-mixin');


var BenchForm = React.createClass({
  mixins: [LinkStateMixin],

  getInitialState: function(){
    return {
      description: "",
      lat: this.props.location.query.coordinates.lat,
      lng: this.props.location.query.coordinates.lng,
      seating: 0
    };
  },

  handleSubmit: function(e) {
    e.preventDefault();

    ApiUtil.createBench({
      description: this.state.description,
      lat: this.state.lat,
      lng: this.state.lng,
      seating: this.state.seating
    });

    this.props.history.push('/')
  },

  render: function(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} className="form-group">
          <label>Description:
          <textarea valueLink={this.linkState('description')}></textarea>
          </label>
          <br/>

          <label>Latitude:</label>
          <input type="number" valueLink={this.linkState('lat')}></input>
          <br/>

          <label>Longitude:</label>
          <input type="number" valueLink={this.linkState('lng')}></input>
          <br/>

          <label>Seating:</label>
          <input type="number" valueLink={this.linkState('seating')}></input>
          <br/>

          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
});

module.exports = BenchForm;
