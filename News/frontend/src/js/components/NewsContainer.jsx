// TodosContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../actions/newsActions';

import News from "./News"
import { throws } from 'assert';

class NewsContainer extends Component {
  componentDidMount() {
    this.props.fetchNews();
  } 

  render() {

    if (this.props.newsResults.error) {

      return (
        <div className="row justify-content-center">
          <h4> Failed to get the results for {this.props.newsResults.newsTopic}</h4>
        </div>
      )
    }

    if (this.props.newsResults.isFetching) {
      return (
        <div className="row justify-content-center">
          <h4> Searching news for {this.props.newsResults.newsTopic}...</h4>
        </div>
      )
    }

    
    
    return (
      <div className="NewsContainer">
        <div className="row justify-content-center"> <h4>Showing news results for {this.props.newsResults.newsTopic}</h4></div>
        <ul className="NewsUL">
          {this.props.newsResults.news.map((item, key) => (
            <li key={key} className="NewItemElement" style={{listStyleType: 'none'}}>
              <News info={item}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    newsResults : state.newsResults
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNews: function() {
      
      dispatch(fetchNews());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)