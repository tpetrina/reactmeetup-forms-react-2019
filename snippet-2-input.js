function Input({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

class SimpleForm extends React.Component {
  render() {
    const { name } = this.state;
    return (
      <Input
        label="Enter your name:"
        value={name}
        onChange={e => this.setState({ name: e.target.value })}
      />
    );
  }
}
