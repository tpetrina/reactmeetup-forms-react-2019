import React from 'react';

const ErrorField = ({ error }) => {
  if (!error) return null;

  return <span style={{ color: 'red' }}>{error}</span>;
};

export default class ValidationForm1 extends React.PureComponent {
  state = {
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    errors: { field1: '', field2: '', field3: '', field4: '' },
  };

  render() {
    return (
      <form onSubmit={this.submit} style={{ textAlign: 'left' }}>
        <div>
          <label>
            I am always ok
            <input
              type="text"
              value={this.state.field1}
              onChange={e => this.setState({ field1: e.target.value })}
            />
            <ErrorField error={this.state.errors.field1} />
          </label>
        </div>
        <div>
          <label>
            I will let you know if things fail
            <input
              type="text"
              value={this.state.field2}
              onChange={e => this.setState({ field2: e.target.value })}
            />
            <ErrorField error={this.state.errors.field2} />
          </label>
        </div>
        <div>
          <label>
            I am eager to let you know I am ok
            <input
              type="text"
              value={this.state.field3}
              onChange={e => this.setState({ field3: e.target.value })}
              onBlur={this.validateField3}
            />
            <ErrorField error={this.state.errors.field3} />
          </label>
        </div>
        <div>
          <label>
            Don't leave me!
            <input
              type="text"
              value={this.state.field4}
              onChange={e => this.setState({ field4: e.target.value })}
              onBlur={this.validateField4}
            />
            <ErrorField error={this.state.errors.field4} />
          </label>
        </div>

        <div>
          <input type="submit" disabled={!this.canSubmit()} />
        </div>
      </form>
    );
  }

  canSubmit = () =>
    !this.state.errors.field1 &&
    !this.state.errors.field2 &&
    !this.state.errors.field3 &&
    !this.state.errors.field4;

  submit = e => {
    e.preventDefault();

    if (this.state.field2.indexOf('u') !== -1) {
      this.setError('field2', "We don't like u");
    } else {
      this.setError('field2', '');
    }
  };

  validateField3 = e => {
    const value = e.target.value;
    if (value.indexOf('u') !== -1) {
      this.setError('field3', "We don't like u");
    } else {
      this.setError('field3', '');
    }
  };

  validateField4 = e => {
    const value = e.target.value;
    if (!value) {
      this.setError('field4', 'This value is required');
    } else if (value.indexOf('u') !== -1) {
      this.setError('field4', 'This value has invalid elements: u');
    } else {
      this.setError('field4', '');
    }
  };

  setError = (field, error) =>
    this.setState(({ errors }) => ({
      errors: { ...errors, [field]: error },
    }));
}
