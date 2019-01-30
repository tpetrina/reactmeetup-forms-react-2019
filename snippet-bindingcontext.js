<BindingContext data={this.state} set={this.set}>
    <TextInput name="appAlias" />
    <TextInput name="deviceToken" />
    <Select name="mobileDeviceType">
        <option value="1">Android</option>
        <option value="2">iOS</option>
    </Select>
    <Checkbox name="isDemo" />
    <Checkbox name="isDev" />
</BindingContext>

export const BindingContext = ({ data, set, children }) => (
  <>
    {transformChildren(children, child =>
      // skip built in types
      !!child && !!child.type && typeof child.type !== 'string'
        ? React.cloneElement(child, {
            data,
            set,
          })
        : child
    )}
  </>
);

function transformChildren(children, apply) {
  return React.Children.map(children, (child, index) => {
    let newChild = apply(child, index);
    if (newChild.props && newChild.props.children)
      return React.cloneElement(newChild, {
        children: transformChildren(newChild.props.children, apply),
      });
    return newChild;
  });
}
