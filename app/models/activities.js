import Producer from 'appkit/models/producer';

var nino = Producer.create({
  name: 'Nino',
  products: ['pizza', 'salads'],
  ratio: [1, 4],
  resources: 6,
  unit: 'cooking sessions'
});

var tony = Producer.create({
  name: 'Tony',
  products: ['pizza', 'salads'],
  ratio: [1, 2],
  resources: 6,
  unit: 'cooking sessions'
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
  products: ['bushels of wheat', 'pounds of cheese'],
  ratio: [3, 12],
  resources: 100,
  unit: 'workers'
});

var france = Producer.create({
  name: 'France',
  products: ['bushels of wheat', 'pounds of cheese'],
  ratio: [2, 4],
  resources: 100,
  unit: 'workers'
});

var Activities = [
  {
    id: '1',
    title: 'Tony and Nino',
    description: 'Nino owns a pizza shop. He is very good at what he does. In one hour, he can make 9 pizzas or prepare 36 salads. His business is growing and he needs to hire someone to help prepare pizzas and salads. Tony has applied for the job and seems like a reliable individual. In one hour, Tony can make 6 pizzas or prepare 12 salads. Nino plans to hire Tony. Because Nino can make more pizzas in an hour and prepare more salads in an hour than Tony, he has a dilemma. Should he have Tony make pizzas or prepare salads?',
    image: 'assets/images/pizza-and-salad.png',
    productAImage: 'assets/images/pizza.png',
    productBImage: 'assets/images/salad.png',
    producers: [tony, nino]
  },
  {
    id: '2',
    title: 'Cell Phones and Microwaves',
    description: 'Apply the principle of comparative advantage to determine if two countries that produce cellphones and microwave ovens should specialize and trade. When a worker in a country can produce more of a good than a worker in another coun- try, the worker in the first country has an absolute advantage in producing that good. Which country’s workers have an absolute advantage in cellphones and microwave ovens?',
    image: 'assets/images/phone-and-microwave.png',
    productAImage: 'assets/images/phone.png',
    productBImage: 'assets/images/microwave.png',
    producers: [ficticiousCountryA, ficticiousCountryB]
  },
  {
    id: '3',
    title: 'Cheese and Wheat',
    description: 'The United States and France produce many goods, including cheese and wheat. Which country has a comparative advantage in the production of wheat? If the United States decides to put all of its workers into the production of wheat, how many pounds of cheese would be lost? If France decides to put all of its workers into the production of cheese, how many additional pounds of cheese would be produced?',
    image: 'assets/images/wheat-and-cheese.png',
    productAImage: 'assets/images/cheese.png',
    productBImage: 'assets/images/wheat.png',
    producers: [unitedStates, france]
  }
];

export default Activities;
