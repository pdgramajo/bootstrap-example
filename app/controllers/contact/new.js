import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions:{
		save:function(){
			var e =	this.get('email');
			var p =	this.get('pass');
			var m =	this.get('message');

			var obj = this.store.createRecord('message',{
				email:e,
				pass:p,
				message:m
			});

			this.set('email','');
			this.set('pass','');
			this.set('message','');

			obj.save();

		},
		delete:function(param){

			this.store.find('message', param).then(function (mes) {
				mes.deleteRecord();
				mes.save(); // => DELETE to /posts/1
			});

		},
		edit:function(param){
			var e =	this.get('email');
			var p =	this.get('pass');
			var m =	this.get('message');

			this.store.find('message', param).then(function (mes) {

				mes.set('email',e);
				mes.set('pass',p);
				mes.set('message',m);

				console.log(mes._data);

			});
		}
	}
});