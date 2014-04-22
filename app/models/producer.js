export default Ember.Object.extend({
  
  name: 'Factory X',
  products: ['Product A', 'Product B'],
  ratio: [1,1],
  resources: 100,
  unit: 'workers',
  
  init: function () {
    this.set('productARatio', this.get('ratio')[0]);
    this.set('productBRatio', this.get('ratio')[1]);
    this.set('productAResources', this.get('resources') / 2);
    this.set('productBResources', this.get('resources') / 2);
  },
  
  productAProduction: function () {
    return this.get('productAResources') * this.get('productARatio');
  }.property('productAResources', 'productARatio'),
  
  productBProduction: function () {
    return this.get('productBResources') * this.get('productBRatio');
  }.property('productBResources', 'productBRatio'),
  
  adjustResourcesA: function () {
    var resources = this.get('resources') - this.get('productBResources');
    this.set('productAResources', resources);
  }.observes('productBResources'),
  
  adjustResourcesB: function () {
    var resources = this.get('resources') - this.get('productAResources');
    this.set('productBResources', resources);
  }.observes('productAResources')
  
});