import DS from 'ember-data';

var message = DS.Model.extend({
	email: DS.attr('string'),
	pass: DS.attr('string'),
	message: DS.attr('string')
});

message.reopenClass({
	FIXTURES:[
	{
		id:1,
		email:'email@gmail.com',
		pass:'password',
		message:'este es el msg'
	},
	{
		id:2,
		email:'22@gmail.com',
		pass:'password22',
		message:'este es el msg222'
	}
	]
});

export default message;