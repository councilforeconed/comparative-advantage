export default Ember.ArrayController.extend({

  totalProductionProductA: function () {
    return this.reduce(function(sum, producer) {
      return sum + producer.get('productAProduction');
    }, 0);
  }.property('@each.productAProduction'),
  
  totalProductionProductB: function () {
    return this.reduce(function(sum, producer) {
      return sum + producer.get('productBProduction');
    }, 0);
  }.property('@each.productBProduction'),
  
  productAName: function () {
    return this.map(function(producer) {
      return producer.get('productAName');
    })[0];
  }.property('@each.productAName'),
  
  productBName: function () {
    return this.map(function(producer) {
      return producer.get('productBName');
    })[0];
  }.property('@each.productBName')
  
});