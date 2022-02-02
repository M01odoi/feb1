import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  onChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className={'component'}>
        <input name="name" value={this.state.value} type={this.props.type} onChange={this.onChange}/>
      </div>
    )

  }
}