function Input({ className, children, id, label, ...rest }) {
  return (
    <div className={className || ''}>
      <label htmlFor={id}>{label}</label>
      <input {...rest} />
    </div>
  );
}

export const Usage = () => (
  <Input
    id="firstName"
    label="Enter your name:"
    value={name}
    placeholder="Your name goes here..."
    type="text"
    onChange={e => this.setState({ name: e.target.value })}
  />
);
