import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
  }
onChange = (event) =>{
    console.log(this.state.value);
    this.setState({value: event.target.value});
}

  render() {
    return (
      <div className={'component'}>
        React Component
        <input name="name" value={this.state.value} onChange={this.onChange}/>
      </div>
    )

  }
}