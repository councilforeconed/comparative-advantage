import Producer from 'appkit/models/producer';

export default Ember.Route.extend({
  model: function() {
    
    var unitedStates = Producer.create({
      name: 'United States',
      products: ['wheat', 'cheese'],
      ratio: [3, 12],
      resources: 100,
      unit: 'workers'
    });
 
    var france = Producer.create({
      name: 'France',
      products: ['wheat', 'cheese'],
      ratio: [2, 4],
      resources: 100,
      unit: 'workers'
    });
    
    return [unitedStates, france];
  }
});
