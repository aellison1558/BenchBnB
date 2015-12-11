var React = require('react'),
    BenchStore = require('../../stores/BenchStore'),
    ApiUtil = require('../../util/ApiUtil');

var Index = React.createClass({
  getInitialState: function() {
    return { benches: BenchStore.all() }
  },

  _updateState: function() {
    this.setState({ benches: BenchStore.all() })
  },

  componentDidMount: function() {
    this.listeners = BenchStore.addListener(this._updateState);
    ApiUtil.fetchBenches();
  },

  componentWillUnmount: function() {
    this.listeners.forEach(function(listener) {
      listener.remove();
    })
  },

  render: function(){
    var benches = this.state.benches.map(function(bench){
      return(<li key={bench.id}>{bench.description}</li>)
    })
    return(
      <ul>{benches}</ul>
    );
  }

});

module.exports = Index;
