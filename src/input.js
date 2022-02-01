import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
    this.onChange = this.onChange.bind(this);
  }
onChange = (event) =>{
    console.log(this.state.value);
    this.setState({value: event.target.value});
}

  render() {
    return (
      <div>
        React Component
        <input name="name" value={this.state.value} onChange={this.onChange}/>
      </div>
    )

  }
}