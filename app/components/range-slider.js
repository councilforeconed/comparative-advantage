export default Ember.Component.extend({
  classNames: ['clearfix','slider'],

  didInsertElement: function() {
    this.$('input[type=range]').slider();
  }


});
