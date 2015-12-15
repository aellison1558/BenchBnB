var React = require('react'),
    ReviewStore = require('../../stores/ReviewStore'),
    ApiUtil = require('../../util/ApiUtil'),
    IndexItem = require('./IndexItem');

var Index = React.createClass({
  getInitialState: function(){
    return {reviews: []};
  },

  listeners: [],

  _updateState: function(){
    this.setState({reviews: ReviewStore.all()})
  },

  componentDidMount: function(){
    this.listeners.push(ReviewStore.addListener(this._updateState));
    ApiUtil.fetchReviews(parseInt(this.props.benchId));
  },

  render: function(){
    var averageScore = 0;
    this.state.reviews.forEach(function(review){
      averageScore = averageScore + parseInt(review.score);
    });
    averageScore = averageScore / this.state.reviews.length;
    var items = this.state.reviews.map(function(review){
      return <li><IndexItem key={review.id} review={review} /></li>
    })
    return(
      <div>
        Average Score: {averageScore}
        <ul>
          {items}
        </ul>
      </div>
    )
  }
});

module.exports = Index;
