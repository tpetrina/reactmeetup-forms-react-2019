import React from 'react';

export default class SimpleForm extends React.PureComponent {
  state = { name: '' };

  render() {
    const { name } = this.state;
    return (
      <form>
        <div>
          <label htmlFor="name">First name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <input type="submit" value="send" />
        <hr />
        Your name is {name}
      </form>
    );
  }
}
