var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/Dispatcher'),
    FilterConstants = require('../constants/FilterConstants')
    ApiUtil = require('../util/ApiUtil');

var FilterStore = new Store(Dispatcher);
var _filterParams = {bounds: {southWest: {lat: 37.74187133792972, lng: -122.47791534423828}, northEast: {lat: 37.80971309829069, lng: -122.39208465576172}},
minSeating: 0,
maxSeating: 100};

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
