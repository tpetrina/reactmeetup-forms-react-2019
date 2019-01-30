import React from 'react';

const ErrorField = ({ error }) => {
  if (!error) return null;

  return <span style={{ color: 'red' }}>{error}</span>;
};

export default class ValidationForm2 extends React.PureComponent {
  state = {
    name: '',
    errors: { name: '' },
  };

  render() {
    return (
      <form onSubmit={this.submit} style={{ textAlign: 'left' }}>
        <div>
          <label>
            First name:
            <input
              type="text"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
            <ErrorField error={this.state.errors.name} />
          </label>
        </div>

        <div>
          <input type="submit" />
        </div>
      </form>
    );
  }

  submit = e => {
    e.preventDefault();

    let hasError = false;
    if (!this.state.name) {
      this.setError('name', 'Please enter your name');
      hasError = true;
    } else {
      this.setError('name', '');
    }

    if (hasError) {
      return;
    }

    const { name } = this.state;
    setTimeout(() => {
      if (name.indexOf('a') !== -1) {
        this.setError('name', "Name cannot contain 'a' characters");
      } else {
        alert('Done!');
      }
    }, 2000);
  };

  setError = (field, error) =>
    this.setState(({ errors }) => ({
      errors: { ...errors, [field]: error },
    }));
}
