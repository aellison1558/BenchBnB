var React = require('react');

var IndexItem = React.createClass({
  render: function(){
      return(
          <div>
            Score: {this.props.review.score}
            <br/>
            {this.props.review.body}
          </div>
      )
  }
});

module.exports = IndexItem;
