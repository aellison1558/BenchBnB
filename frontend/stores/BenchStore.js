var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/Dispatcher'),
    BenchConstants = require('../constants/BenchConstants');

var _benches = [];
var BenchStore = new Store(Dispatcher);

BenchStore.all = function() {
  return _benches.slice();
};

BenchStore.resetBenches = function(benches) {
  _benches = benches;
};

BenchStore.selectBench = function(selectedBench) {
  _benches.forEach(function(bench) {
    bench['selected'] = false;
    if (selectedBench.id === bench.id) {
      bench["selected"] = true;
    }
  })
};

BenchStore.unselectBench = function(selectedBench) {
  _benches.forEach(function(bench) {
    if (selectedBench.id === bench.id) {
      bench["selected"] = false;
    }
  })
};

BenchStore.addBench = function(bench) {
  var idx = _benches.indexOf(bench);
  if (idx > -1) {
    _benches[idx] = bench;
  } else {
    _benches.push(bench);
  };
};

BenchStore.find = function(id) {
  return _benches.find(function(bench){
    return bench.id === id;
  });
};

BenchStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      var result = BenchStore.resetBenches(payload.benches);
      BenchStore.__emitChange();
      break;
    case BenchConstants.BENCH_SELECTED:
      BenchStore.selectBench(payload.bench);
      BenchStore.__emitChange();
      break;
    case BenchConstants.BENCH_UNSELECTED:
      BenchStore.unselectBench(payload.bench);
      BenchStore.__emitChange();
      break;
    case BenchConstants.BENCH_RECEIVED:
      BenchStore.addBench(payload.bench);
      BenchStore.__emitChange();
  }
};

module.exports = BenchStore;
