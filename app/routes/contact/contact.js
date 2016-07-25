import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){
		console.log('222222222222222222222222222222');
		console.log(this.store.find('message'));
		return this.store.find('message');
	}
});
