import React from 'react';
import { sendRequest } from './sendRequest';

export default class SimpleForm4 extends React.PureComponent {
  state = {
    isSending: false,
    name: '',
    email: 'john@smith.com',
    address: '1st street',
    quantity: 1,
  };

  render() {
    const { isSending, name, email, address, quantity } = this.state;
    return (
      <form onSubmit={this.submit}>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            min={0}
            max={5}
            step={1}
            value={quantity}
            onChange={e =>
              this.setState({ quantity: parseInt(e.target.value, 10) })
            }
          />
        </div>
        <div>
          <label htmlFor="name">First name:</label>
          <input
            type="text"
            id="name"
            value={name}
            maxLength={10}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">First name:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            required
            onChange={e => this.setState({ address: e.target.value })}
          />
        </div>
        <input type="submit" value="send" disabled={isSending} />
        <hr />
        User: {name}, {email}, {address}.
      </form>
    );
  }

  submit = e => {
    e.preventDefault();
    this.setState({ isSending: true });

    sendRequest()
      .then(() => {})
      .catch(() => {})
      .then(() => this.setState({ isSending: false }));
  };
}
