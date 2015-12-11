var ApiActions = require('../actions/ApiActions');

var ApiUtil = {
  fetchBenches: function(){
    $.get('/api/benches', {}, function(benches){
      ApiActions.receiveAll(benches);
    })
  }
};

module.exports = ApiUtil;
