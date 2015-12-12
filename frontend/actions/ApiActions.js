var Dispatcher = require('../dispatcher/Dispatcher'),
    BenchConstants = require('../constants/BenchConstants');

var ApiActions = {
  receiveAll: function(benches) {
    Dispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
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
