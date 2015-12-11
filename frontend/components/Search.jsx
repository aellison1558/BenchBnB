var React = require('react'),
    Index = require('./benches/Index'),
    Map = require('./Map');

var Search = React.createClass({
  render: function(){
    return(
      <div>
        <Index />
        <Map />
      </div>
    );
  }
});

module.exports = Search;
