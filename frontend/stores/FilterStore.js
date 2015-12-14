var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/Dispatcher'),
    FilterConstants = require('../constants/FilterConstants');

var FilterStore = new Store(Dispatcher);
var _filterParams = {};

FilterStore.all = function(){
  var result = {}
  for (key in _filterParams) {
    if (_filterParams.hasOwnProperty(key)) {
      result[key] = _filterParams[key];
    }
  };

  return result;
};

FilterStore.updateFilter = function(params) {
  for (key in params) {
    if (params.hasOwnProperty(key)) {
      _filterParams[key] = params[key];
    }
  };
};

FilterStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case FilterConstants.UPDATE_PARAMS:
      FilterStore.updateFilter(payload.params);
      FilterStore.__emitChange();
      break;
  }
};

module.exports = FilterStore;
