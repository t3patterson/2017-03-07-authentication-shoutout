import React from 'react'
import {ACTIONS} from '../actions.js'

export const RatingFilterComponent = React.createClass({
   _handleNavClick: function(evt){
   	let selectedRating = evt.target.dataset.rated
		console.log('rating btn clicked: ', selectedRating)
		
		ACTIONS.changeShownRating(selectedRating)
	},

   _getBtnClassName: function(viewType, currentView){
      if(viewType === currentView){
         return 'btn btn-danger btn-sm'
      } else {
         return 'btn btn-info btn-sm'

      }
   },

   render: function(){
      let currentRatingShown = this.props.shownRatingType

      return (
         <div style={ {boxShadow: '0px 2px 2px rgba(100,100,100,.5)', padding: '10px'} }>
            <button 
					className={ this._getBtnClassName('ALL', currentRatingShown) } 
					onClick={this._handleNavClick} 
					data-rated="ALL">
					All
				</button>
            <button 
					className={ this._getBtnClassName('G', currentRatingShown) } 
					onClick={this._handleNavClick} 
					data-rated="G">
						Family Friendly (Rated G)
				</button>
            <button 
					className={ this._getBtnClassName('PG', currentRatingShown) } 
					onClick={this._handleNavClick} 
					data-rated="PG">
						Parental Guidance (Rated PG)
				</button>
            <button 
					className={ this._getBtnClassName('R', currentRatingShown) } 
					onClick={this._handleNavClick} 
					data-rated="R"  >Mature Audiences (Rated R)
				</button>
         </div>
      )
   }
})