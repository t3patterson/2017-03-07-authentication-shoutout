import React from 'react'
import {ACTIONS} from '../actions.js'

export const Navbar = React.createClass({
	_getMenuOptions: function(currentUserOnStore){
		console.log(currentUserOnStore)
		let routeList
		if( typeof currentUserOnStore._id === 'undefined'){
			routeList = [
				{appRouteName: 'HOME', displayText: 'Welcome', hashRoute:  '' },
				{appRouteName: 'SHOUTS', displayText: 'Shouts', hashRoute: 'shouts' },
				{appRouteName: 'REGISTER', displayText: 'Sign Up', hashRoute: 'register' },
				{appRouteName: 'LOGIN', displayText: 'Log In', hashRoute: 'login' }
			]
		}else {
			routeList = [
				{appRouteName: 'HOME', displayText: 'Welcome', hashRoute:  '' },
				{appRouteName: 'SHOUTS', displayText: 'Shouts', hashRoute: 'shouts' },
				{appRouteName: 'EDITPROFILE', displayText: 'Edit Profile', hashRoute: 'profile' },
				{appRouteName: 'LOGOUT', displayText: 'Log OUT!', hashRoute: 'logout' }
			]
		}
	
		return routeList
	},

	_showNavOptionsJSX: function(currentNavRoute, currentUser){
		
		let theMenuRoutes =  this._getMenuOptions(currentUser)

		let componentsList = theMenuRoutes.map(function(routeObj, i){
			return <RouteOption {...routeObj} key={i} _currentNavRoute={currentNavRoute}/>
		})

		return componentsList
	},

   render: function(){
		console.log('currentNavRoute from <Navbar/>' , this.props.currentNavRoute)
		console.log('currentUser per <Navbar/>' , this.props.currentUser)

      return (
         <nav style={ {background: "#333" } }>
          	{ this._showNavOptionsJSX(this.props.currentNavRoute, this.props.currentUser )}
         </nav>
      )
   }
})

const RouteOption = React.createClass({
	_handleNavClick: function(evt){
		console.log(this.props)
		
		ACTIONS.changeCurrentNav(this.props.appRouteName, this.props.hashRoute)
	},

	render: function(){
		let navOptionClassName = 'nav-option'

		if(this.props.appRouteName === this.props._currentNavRoute){ 
		   navOptionClassName = 'nav-option nav-option--active'
		}
		return <div
 			onClick={this._handleNavClick}
			className={navOptionClassName}
			>
			{this.props.displayText}</div>

	}
})