import React from 'react'
import {ACTIONS} from '../actions.js'

export const HeroComponent = React.createClass({
	
   render: function(){
      let currentRatingShown = this.props.shownRatingType

      return (
         <header className="header">
				<div className="abs-center-me">
					<h1>Shout Outs</h1>
					<p>yah tell em</p>
				</div>
				
			</header>
      )
   }
})