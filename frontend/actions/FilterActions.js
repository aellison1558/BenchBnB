var Dispatcher = require('../dispatcher/Dispatcher'),
    FilterConstants = require('../constants/FilterConstants');

var FilterActions = {
  updateFilter: function(newParams) {
    Dispatcher.dispatch({
      actionType: FilterConstants.UPDATE_PARAMS,
      params: newParams
    })
  }
};

module.exports = FilterActions;
