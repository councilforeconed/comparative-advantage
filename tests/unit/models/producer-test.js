import { test, moduleFor } from 'ember-qunit';

import Producer from 'appkit/models/producer';

moduleFor('model:producer', "Unit - ProducerModel");

test('existence of class', function () {
  ok(Producer);
});

test('init divides workers between the two products', function () {
  var producer = Producer.create({
    name: 'United States',
    products: ['wheat', 'cheese'],
    ratio: [3, 12],
    resources: 100,
    unit: 'workers'
  });
  
  equal(producer.get('productAResources'), 50);
  equal(producer.get('productBResources'), 50);
});

test('adjusting resources in Product A updates Product B', function () {
  var producer = Producer.create({
    name: 'United States',
    products: ['wheat', 'cheese'],
    ratio: [3, 12],
    resources: 100,
    unit: 'workers'
  });
  
  producer.set('productAResources', 40);
  
  equal(producer.get('productAResources'), 40);
  equal(producer.get('productBResources'), 60);
});

test('adjusting resources in Product B updates Product A', function () {
  var producer = Producer.create({
    name: 'United States',
    products: ['wheat', 'cheese'],
    ratio: [3, 12],
    resources: 100,
    unit: 'workers'
  });
  
  producer.set('productBResources', 60);
  
  equal(producer.get('productAResources'), 40);
  equal(producer.get('productBResources'), 60);
});

test('determines total produced', function () {
  var producer = Producer.create({
    name: 'United States',
    products: ['wheat', 'cheese'],
    ratio: [3, 12],
    resources: 100,
    unit: 'workers'
  });
  
  equal(producer.get('productAProduction'), 150);
  equal(producer.get('productBProduction'), 600);
});

test('total production reflects changes', function () {
  var producer = Producer.create({
    name: 'United States',
    products: ['wheat', 'cheese'],
    ratio: [3, 12],
    resources: 100,
    unit: 'workers'
  });
  
  producer.set('productAResources', 40);
  
  equal(producer.get('productAProduction'), 120);
  equal(producer.get('productBProduction'), 720);
});