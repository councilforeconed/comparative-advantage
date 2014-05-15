export default Ember.Component.extend({
  classNames: ['slider-visualization'],
  
  didInsertElement: function () {
    this.$('input[type="range"]').rangeslider();
  }
});
