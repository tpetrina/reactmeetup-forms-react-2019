import React from 'react';

export default class SimpleForm2 extends React.PureComponent {
  state = { name: '', email: '', address: '', quantity: 0 };

  render() {
    const { name, email, address, quantity } = this.state;
    return (
      <form onSubmit={this.submit}>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            name="quantity"
            min={0}
            max={5}
            step={1}
            value={quantity}
            onChange={e =>
              this.setState({ quantity: parseInt(e.target.value, 0) })
            }
          />
        </div>
        <div>
          <label htmlFor="name">First name:</label>
          <input
            type="text"
            name="name"
            value={name}
            maxLength={10}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">First name:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            value={address}
            required
            onChange={e => this.setState({ address: e.target.value })}
          />
        </div>
        <input type="submit" value="send" />
        <hr />
        User: {name}, {email}, {address}.
      </form>
    );
  }

  submit = e => {
    e.preventDefault();
    alert('huh?');
  };
}
