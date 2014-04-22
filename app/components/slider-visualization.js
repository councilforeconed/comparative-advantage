export default Ember.Component.extend({
  classNames: ['slider-visualization'],
  
  didInsertElement: function () {
    var self = this;
    this.$('.slider').slider({
      range: 'max',
      min: 0,
      max: this.get('producer.resources'),
      value: this.get('producer.productAResources'),
      slide: function( event, ui ) {
        self.set('producer.productAResources', ui.value);
      }
    });
  }
});
