function Input({ className, label, id, placeholder, type, value, onChange }) {
  return (
    <div className={className || ''}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
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
