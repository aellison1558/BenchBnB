var React = require('react'),
    BenchStore = require('../../stores/BenchStore'),
    ApiUtil = require('../../util/ApiUtil'),
    IndexItem = require('./IndexItem');

var Index = React.createClass({
  getInitialState: function() {
    return { benches: BenchStore.all() }
  },

  _updateState: function() {
    this.setState({ benches: BenchStore.all() })
  },

  componentDidMount: function() {
    this.listeners = BenchStore.addListener(this._updateState);
  },

  componentWillUnmount: function() {
    this.listeners.forEach(function(listener) {
      listener.remove();
    })
  },

  render: function(){
    var benches = this.state.benches.map(function(bench){
      return(<IndexItem key={bench.id} bench={bench} />)
    })
    return(
      <ul className='index'>
        <div className='row'>
          {benches}
        </div>
      </ul>
    );
  }

});

module.exports = Index;
