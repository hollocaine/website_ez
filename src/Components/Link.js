import React, { Component } from 'react';

class Link extends Component {   
        // Don't call this.setState() here!
    state = {
        lists: [
          { id: 1, link: '#induction'},
          { id: 2, link: '#courses'},
          { id: 3, link: '#casestudy'}          
        ]
    }
    render() {
        return (
            this.state.lists.map((list) => list.link)
      );
    }
  }

  export default Link;
