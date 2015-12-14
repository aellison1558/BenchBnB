var React = require('react'),
    FilterStore = require('../stores/FilterStore'),
    ApiUtil = require('../util/ApiUtil'),
    LinkStateMixin = require('react-addons-linked-state-mixin'),
    FilterActions = require('../actions/FilterActions');

var Filter = React.createClass({
  mixins: [LinkStateMixin],
  getInitialState: function(){
    return {
      MinSeating: 0,
      MaxSeating: 100
    };
  },

  onSubmitHandler: function(e){
    e.preventDefault();
    
    FilterActions.updateFilter({minSeating: parseInt(this.state.MinSeating), maxSeating: parseInt(this.state.MaxSeating)});

  },


  render: function(){
    return(
      <div>
        <form onSubmit={this.onSubmitHandler} className="form-group">
          <label>Min Seating</label>
          <input type='number' valueLink={this.linkState('MinSeating')}/>
          <br/>

          <label>Max Seating</label>
          <input type='number' valueLink={this.linkState('MaxSeating')}/>
          <br/>

          <input type='submit' value='submit' />

        </form>
      </div>
    )
  }
});

module.exports = Filter;
