window.FormFields = React.createClass({
  getInitialState: function() {
    return {fields: [], inputs: [], option: ''};
  },
  render: function() {
    var self = this;
    this.state.option = this.props.option;
    $.each(this.props.fields, function(index, field) {
      $.each(field, function(index, element) {
        console.log(element);
        self.state.inputs.push(React.createElement(element.selector, element.properties, element.text))
      });
      self.state.fields.push(React.createElement('div', {key:'field-'+ index, className: 'field'}, self.state.inputs));
      self.state.inputs = []
    });
    return (
      React.createElement('div', {
        className: 'form-fields ' + this.state.option
      }, this.state.fields
      )
    )
  }
})

