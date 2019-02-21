import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
        <nav className="uk-navbar-container" uk-navbar>
        <div className="uk-navbar-right uk-text-muted uk-background-primary">
    
            <ul className="uk-navbar-nav">
                <li className="uk-active"><a href="#">Active</a></li>
                <li>
                    <a href="#">Parent</a>
                    <div className="uk-navbar-dropdown">
                        <ul className="uk-nav uk-navbar-dropdown-nav">
                            <li className="uk-active"><a href="#">Active</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#">Item</a></li>
            </ul>
    
        </div>
    </nav>
    );
  }
}

export default Nav;
