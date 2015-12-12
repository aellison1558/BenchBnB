var ApiActions = require('../actions/ApiActions');

var ApiUtil = {
  fetchBenches: function(bounds){
    var param = $.param({bounds: bounds});
    var url = '/api/benches?' + param;
    $.get((url), {}, function(benches){
      ApiActions.receiveAll(benches);
    })
  }
};

module.exports = ApiUtil;
