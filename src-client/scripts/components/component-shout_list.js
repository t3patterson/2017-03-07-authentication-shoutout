import React from 'react'

export const ShoutOutListComponent = React.createClass({

   _makeShoutOutComponents: function(shoutsList){
		let arrayOfShoutOutComponents = shoutsList.map(function(smod, i){
         return (
            <ShoutItem shoutData={smod} key={i}/>
         )
      }).reverse()

		return arrayOfShoutOutComponents
	},
   
   _filterShoutsByRating: function(shoutsList, ratingType ){
      console.log(shoutsList)
      let filteredList = shoutsList.filter(function(shoutObj){


         if(ratingType === shoutObj.rating || ratingType === "ALL" ){
            return true
         } else {
            return false
         }
		  
			// return ratingType === shoutObj.rating || ratingType === 'ALL'

      })

      return filteredList
   }, 

   render: function(){
      let self = this
      console.log(this.props)
      let allTheShouts = this.props.shoutOutList
      let theFilteredShouts = this._filterShoutsByRating( allTheShouts, this.props.shownRatingType )
      
      return (
         <div className="col-sm-8">
            <h2>¡Shout Outs!</h2>

            <div className="shoutout">

               {this._makeShoutOutComponents(theFilteredShouts)}

            </div>
         </div>

      )
   }
})

export const ShoutItem = React.createClass({
   render: function(){
      return (
         <blockquote  style={{background: 'indianred', color: '#fff', padding: '4rem'}}>
            <p>{this.props.shoutData.msg}</p>
            <img src={this.props.shoutData.imgLink} alt="..."/>
				<div className="text-center">
	            <cite className="bg-info">{this.props.shoutData.from}</cite>
            </div>
				<h3 className="text-muted text-right">
               RATING:
               <span className="bg-warning text-primary text-center" style={{padding: '10px'}}>
                  {this.props.shoutData.rating}
               </span>
            </h3>
         </blockquote>
      )
   }
})