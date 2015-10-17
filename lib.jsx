AtFormReact = React.createClass({
  componentDidMount() {
    this.view = Blaze.renderWithData(Template.atForm, this.props, React.findDOMNode(this.refs.atForm));
  },
  componentWillUnmount() {
    Blaze.remove(this.view);
  },
  render(template) {
    return <div ref='atForm'/>
  }
});
