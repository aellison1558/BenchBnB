var React = require('react'),
    BenchStore = require('../../stores/BenchStore'),
    ApiUtil = require('../../util/ApiUtil'),
    ApiActions = require('../../actions/ApiActions');

var IndexItem = React.createClass({
  handleMouseOver: function(e){
    ApiActions.mouseOver(this.props.bench);
  },

  handleMouseLeave: function(e){
    ApiActions.mouseLeave(this.props.bench)
  },

  render: function(){
    return(
      <div className='col-xs-6'><li ><a onMouseEnter={this.handleMouseOver} onMouseOut={this.handleMouseLeave} href="#">{this.props.bench.description}</a></li></div>
    )
  }
});

module.exports = IndexItem;
