import React, { Component } from 'react';
import * as actions from '../../Actions/index';
import './index.css';

class BeerList extends Component {
  constructor(props){
      super(props)
  }

  render() {
      let BeerList = this.props ? this.props.params.beer : [];
      const RenderBeer = BeerList ? BeerList.map((beer)=>
        <div className="Beer-list col-xs-12">
            <div className="Beer-name col-xs-3">
                {beer.name ? beer.name : 0}
            </div>
            <div className="Beer-abv col-xs-2">
                {beer.abv ? beer.abv : 0}
            </div>
            <div className="beer-ibu col-xs-2">
                {beer.ibu ? beer.ibu : 0} 
            </div>
            <div className="beer-style col-xs-3">
                {beer.style}
            </div>
            <div className="beer-ounce col-xs-2">
                {beer.ounces}
            </div>
        </div>
        ):''
    return ( 
       <div className="row">
       <div className="Beer-list col-xs-12">
            <div className="Beer-name col-xs-3">
               <strong>Name</strong> 
            </div>
            <div className="Beer-abv col-xs-2">
                <strong>ABV</strong>
            </div>
            <div className="beer-ibu col-xs-2">
                <strong>IBU</strong>
            </div>
            <div className="beer-style col-xs-3">
                <strong>Style</strong>
            </div>
            <div className="beer-ounce col-xs-2">
                <strong>Ounce</strong>
            </div>
        </div>
        {RenderBeer }
       </div>   
    );
  }
}
export default BeerList;
