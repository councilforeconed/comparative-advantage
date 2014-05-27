export default Ember.ObjectController.extend({

  totalProductionProductA: function () {
    return this.get('producers').reduce(function(sum, producer) {
      return sum + producer.get('productAProduction');
    }, 0);
  }.property('producers.@each.productAProduction'),

  totalProductionProductB: function () {
    return this.get('producers').reduce(function(sum, producer) {
      return sum + producer.get('productBProduction');
    }, 0);
  }.property('producers.@each.productBProduction'),

  productAName: function () {
    return this.get('producers').map(function(producer) {
      return producer.get('productAName');
    })[0];
  }.property('producers.@each.productAName'),

  productBName: function () {
    return this.get('producers').map(function(producer) {
      return producer.get('productBName');
    })[0];
  }.property('producers.@each.productBName')

});
