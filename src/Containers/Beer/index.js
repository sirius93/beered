import React, { Component } from 'react';
import * as actions from '../../Actions/index';
import './index.css';
import BeerList from '../../Components/BeerList';
import {search} from '../../Utils/index';

class Beer extends Component {
  constructor(props){
      super(props)
      this.state = {
        name : ''
      }
  }
  handleChange =(event)=> {
    event.preventDefault();
    this.setState({name: event.target.value});
    if(event.target.value === ""){
      actions.getData(this.props);
    } 
  }
  handleSubmit =(event)=> {
    event.preventDefault();
    let text = this.state.name,
        BeerArray = this.props ? this.props.params.beer.beer : [];
        actions.searchBeer(this.props,text,BeerArray);    
  }
  handleIncSort = event => {
    event.preventDefault();
    let BeerArray = this.props ? this.props.params.beer.beer : [];
    actions.sortRepoPage(BeerArray,this.props, "inc")
  }
  handleDecSort = event => {
    event.preventDefault();
    let BeerArray = this.props ? this.props.params.beer.beer : [];
    actions.sortRepoPage(BeerArray,this.props,"dec")
  }
  componentDidMount() {
    let propsParam = this.props;
    actions.getData(propsParam);
  }
  render() {
    let BeerData = this.props ? this.props.params.beer : [];
    return ( 
       <div className="col-xs-12 forms-buttons">
          <div className="search-form col-xs-12 col-md-4 form-group">
            <form className="search-form-wrapper cf" onSubmit={this.handleSubmit} id="search-form">
              <input type="text" placeholder="Enter your text to search in loop" onChange={this.handleChange} id="search-field" value={this.state.name}/>
              <button type="submit"><span className="glyphicon glyphicon-arrow-right"></span></button>
            </form>
          </div>
          <div className="col-xs-6 col-md-3">
            <button type="button" className="btn-primary sort-button" onClick={this.handleIncSort}>
                sort by increasing ABV
            </button>
          </div>
          <div className="col-xs-6 col-md-3">
            <button type="button" className="btn-primary sort-button" onClick={this.handleDecSort}>
                sort by decreasing ABV
            </button>
          </div>
          <div className="col-xs-12 col-md-2">
            cart : {this.s}
          </div>
        <div className="col-xs-12 list-container">
          <BeerList params={BeerData}/>
        </div>  
       </div>   
    );
  }
}
export default Beer;
