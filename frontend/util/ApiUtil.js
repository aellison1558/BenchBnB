var ApiActions = require('../actions/ApiActions');

var ApiUtil = {
  fetchBenches: function(params){
    var param = $.param({bounds: params.bounds, minSeating: params.minSeating, maxSeating: params.maxSeating});
    var url = '/api/benches?' + param;
    $.get((url), {}, function(benches){
      ApiActions.receiveAll(benches);
    })
  },

  createBench: function(bench){
    $.post('/api/benches', {benches: bench}, function(bench){
      ApiActions.receiveBench(bench);
    })
  }
};

module.exports = ApiUtil;
