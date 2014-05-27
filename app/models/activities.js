import Producer from 'appkit/models/producer';

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

var Activities = [
  {
    id: '1',
    title: 'Tony and Nino',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor sodales est, porttitor bibendum risus sagittis eleifend. Phasellus quam sapien, ultrices tempus orci vel, cursus aliquet arcu. Etiam id lacus sit amet lorem malesuada interdum congue quis lacus. Integer justo velit, luctus id orci eget, tincidunt pharetra lorem. Ut molestie.',
    image: 'assets/images/pizza-and-salad.png',
    producers: [tony, nino]
  },
  {
    id: '2',
    title: 'Cell Phones and Microwaves',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor sodales est, porttitor bibendum risus sagittis eleifend. Phasellus quam sapien, ultrices tempus orci vel, cursus aliquet arcu. Etiam id lacus sit amet lorem malesuada interdum congue quis lacus. Integer justo velit, luctus id orci eget, tincidunt pharetra lorem. Ut molestie.',
    image: 'assets/images/phone-and-microwave.png',
    producers: [ficticiousCountryA, ficticiousCountryB]
  },
  {
    id: '3',
    title: 'Cheese and Wheat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor sodales est, porttitor bibendum risus sagittis eleifend. Phasellus quam sapien, ultrices tempus orci vel, cursus aliquet arcu. Etiam id lacus sit amet lorem malesuada interdum congue quis lacus. Integer justo velit, luctus id orci eget, tincidunt pharetra lorem. Ut molestie.',
    image: 'assets/images/wheat-and-cheese.png',
    producers: [unitedStates, france]
  }
];

export default Activities;