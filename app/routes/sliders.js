import Producer from 'appkit/models/producer';

export default Ember.Route.extend({
  model: function(params) {
    
    var nino = Producer.create({
      name: 'Nino',
      products: ['pizzas', 'salads'],
      ratio: [1, 4],
      resources: 6,
      unit: 'pizzas'
    });
 
    var tony = Producer.create({
      name: 'Tony',
      products: ['pizzas', 'salads'],
      ratio: [1, 2],
      resources: 6,
      unit: 'pizzas'
    });
 
    var ficticiousCountryA = Producer.create({
      name: 'Country A',
      products: ['cell phones', 'microwaves'],
      ratio: [4, 4],
      resources: 6,
      unit: 'workers'
    });
 
    var ficticiousCountryB = Producer.create({
      name: 'Country B',
      products: ['cell phones', 'microwaves'],
      ratio: [1, 3],
      resources: 6,
      unit: 'workers'
    });
 
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
    
    var activity = parseInt(params.id, 10);
    
    if (activity === 1) return [nino, tony];
    if (activity === 2) return [ficticiousCountryA, ficticiousCountryB];
    if (activity === 3) return [unitedStates, france];
  }
});
