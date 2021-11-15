import React from 'react';

class Square extends React.Component {
  state = {
    value: null,
  }

  render() {
    return (
      <button 
        className="square" 
                          // single quotes won't work below
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Square;