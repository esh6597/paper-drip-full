import React, { Component } from 'react';

class UI extends Component {

  constructor(props) {
      super(props);

      this.state = {
          sidebarOpen: false
      }
  }

  render() {
    return(
      <div>
        <p>Hello, World!</p>
      </div>
    );
  }
};

export default UI;