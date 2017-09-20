window.FormFields = React.createClass({
  getInitialState: function() {
    return {fields: [], inputs: [], option: ''};
  },
  render: function() {
    console.log(this.props);
    var self = this;
    this.state.option = this.props.option;
    this.props.fields.forEach(function(field, index) {
      field.elements.forEach(function(element){
        self.state.inputs.push(React.createElement(element.selector, element.properties, element.text))
      });
      self.state.fields.push(React.createElement('div', {key:'field-'+index, className: 'field'}, self.state.inputs));
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

