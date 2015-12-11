var Dispatcher = require('../dispatcher/Dispatcher'),
    BenchConstants = require('../constants/BenchConstants');

var ApiActions = {
  receiveAll: function(benches) {
    Dispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    })
  }
};

module.exports = ApiActions;
