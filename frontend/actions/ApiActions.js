var Dispatcher = require('../dispatcher/Dispatcher'),
    BenchConstants = require('../constants/BenchConstants'),
    ReviewConstants = require('../constants/ReviewConstants');

var ApiActions = {
  receiveAll: function(benches) {
    Dispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    })
  },

  receiveBench: function(bench) {
    Dispatcher.dispatch({
      actionType: BenchConstants.BENCH_RECEIVED,
      bench: bench
    })
  },

  receiveReview: function(review) {
    Dispatcher.dispatch({
      actionType: ReviewConstants.REVIEW_RECEIVED,
      review: review
    })
  },

  receiveAllReviews: function(reviews) {
    Dispatcher.dispatch({
      actionType: ReviewConstants.REVIEWS_RECEIVED,
      reviews: reviews
    })
  },

  mouseOver: function(bench) {
    Dispatcher.dispatch({
      actionType: BenchConstants.BENCH_SELECTED,
      bench: bench
    })
  },

  mouseLeave: function(bench) {
    Dispatcher.dispatch({
      actionType: BenchConstants.BENCH_UNSELECTED,
      bench: bench
    })
  }
};

module.exports = ApiActions;
