import Activities from 'appkit/models/activities';

export default Ember.Route.extend({
  model: function (params) {
    return Activities.findBy('id', params.slider_id);
  }
});
