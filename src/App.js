import React, { Component } from 'react';
import Item from './item'

import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = { 
      posts: [],
      news: [], 
      itemDetail: [],
     
    };
  }

 

componentDidMount() {
  
  
    fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
      .then(response => response.json())
      .then((data) => {
        data.map((newsId) => {
          fetch(` https://hacker-news.firebaseio.com/v0/item/${newsId}.json`)
          .then(response => response.json())
          .then((itemDetail) => {
            console.log(`Fetched ${itemDetail.title}`)
            this.setState((currentState) => {
              currentState.posts.push(itemDetail);
              return { posts: currentState.posts };
            })
          })
        });
    })
  }


  render() {
    return(
      <div className="App">
        {this.state.posts.map(function (post) {
              return <Item key={post.id} post={post}/>
          })}
      </div>
    );
  }

}

export default App;
