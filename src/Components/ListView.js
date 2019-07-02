import React, { Component } from 'react';

class ListView extends Component {   
        // Don't call this.setState() here!
    state = {
        lists: [
          { id: '1', href: "https://www.facebook.com/eazysafe", name: 'Facebook', socialClass: 'facebook' },
          { id: '2', href: "https://www.twitter.com/eazysafe", name: 'Twitter', socialClass: 'twitter' },
          { id: '3', href: "https://in.linkenin.com/eazysafe", name: 'LinkedIn', socialClass: 'linkedin' }          
        ]
    }
    render() {
        this.items = this.state.lists.map((item) =>
            <li className={`et-social-icon et-social-${item.socialClass}`} key={item.id}>
                <a href={item.href} className="icon">
                    <span>{item.name}</span>
                </a>
            </li>
        );
        return (
            <ul className="et-social-icons">{this.items}</ul>
      );
    }
  }


  export default ListView;
