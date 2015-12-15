var React = require('react'),
    LinkStateMixin = require('react-addons-linked-state-mixin'),
    ApiUtil = require('../../util/ApiUtil');

var ReviewForm = React.createClass({
  mixins: [LinkStateMixin],

  getInitialState: function(){
    return {
      body: "",
      score: 0
    };
  },

  submitHandler: function(e){
    e.preventDefault();
    ApiUtil.createReview({body: this.state.body, score: this.state.score, bench_id: this.props.benchId});
  },

  render: function(){
    return(
      <div>
        <form className='form-group' onSubmit={this.submitHandler}>
          <label>Review:</label>
          <textarea valueLink={this.linkState('body')}></textarea>
          <br/>

          <label>Score:</label>
          <select valueLink={this.linkState('score')}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <br/>

          <input type='submit' value='submit' />
        </form>
      </div>
    );
  }

});

module.exports = ReviewForm;
