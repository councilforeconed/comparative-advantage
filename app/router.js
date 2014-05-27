var Router = Ember.Router.extend();

Router.map(function() {
  this.route('sliders', { path: 'sliders/:slider_id' });
});

export default Router;
