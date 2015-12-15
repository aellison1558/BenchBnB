var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/Dispatcher'),
    ReviewConstants = require('../constants/ReviewConstants');

var ReviewStore = new Store(Dispatcher);
var _reviews = [];

ReviewStore.all = function(){
  return _reviews.slice()
};

ReviewStore.addReview = function(review) {
  var idx = _reviews.indexOf(review);
  if (idx > -1) {
    _reviews[idx] = review;
  } else {
    _reviews.push(review);
  }
};

ReviewStore.receiveAll = function(reviews) {
  _reviews = reviews;
},

ReviewStore.find = function(id) {
  return _reviews.find(function(review) {
    return review.id === id;
  });
}

ReviewStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case ReviewConstants.REVIEW_RECEIVED:
      ReviewStore.addReview(payload.review);
      ReviewStore.__emitChange();
      break;
    case ReviewConstants.REVIEWS_RECEIVED:
      ReviewStore.receiveAll(payload.reviews);
      ReviewStore.__emitChange();
      break;
  }
}

module.exports = ReviewStore
