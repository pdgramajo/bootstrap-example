import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', function() {
    this.route('about');
  });

  this.route('service', function() {
    this.route('service');
  });

  this.route('contact', function() {
    this.route('contact');
    this.route('new');
  });
});

export default Router;
