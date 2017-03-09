import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'

import {ViewController} from './viewController.js'

const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start()
	},
	
	routes: {
		'login' : 'showLoginForm',
		'register' : 'showRegisterForm',
		'shouts' : 'showShouts',
		'' : 'showHome'
	},
	
	showLoginForm: function(){
		ReactDOM.render(<ViewController fromRoute={"LOGIN"} />, document.querySelector('#app-container'))
	},

	showRegisterForm: function(){
		ReactDOM.render(<ViewController fromRoute={"REGISTER"} />, document.querySelector('#app-container'))

	},
	
	showShouts: function(){
		ReactDOM.render(<ViewController fromRoute={"SHOUTS"} />, document.querySelector('#app-container'))
	},

	showHome: function(){
		ReactDOM.render(<ViewController fromRoute={"HOME"} />, document.querySelector('#app-container'))
	}
	
})

new AppRouter()

// [
// 	{from: 'Thomas', msg: 'sail away', imgLink: 'https://unsplash.it/900/600?image=211'},
//  	{from: 'Shana', msg: 'stockholm syndrome', imgLink: 'https://unsplash.it/900/600?image=288'},
//  	{from: 'Jess', msg: 'i love newyork i hate newyork i love newyork', imgLink: 'https://unsplash.it/900/600?image=299'}
// ]
