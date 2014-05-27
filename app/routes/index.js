import Activities from 'appkit/models/activities';

export default Ember.Route.extend({
  model: function () {
    return Activities;
  }
});
