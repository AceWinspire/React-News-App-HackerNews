import React from 'react';

class Item extends React.Component {
  render() {
      var post = this.props.post;
      return <li>
          <a href={post.url}>{post.title}</a>
          
     </li>;
  }
}

export default Item;