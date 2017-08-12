window.SectionMessage = React.createClass({
  render: function() {
    return(
      <div className="menssage-container">
        <h3 className="main-title -bold -black _marginbottom-md -fullwidth">{this.props.title}</h3>
        <p className="tag-text -center -black _marginbottom-md">{this.props.message}</p>
      </div>
    ) 
  }
})

window.SectionMessageWhite = React.createClass({
  render: function() {
    return(
      <div className="menssage-container">
        <h3 className="main-title -bold _marginbottom-md -fullwidth">{this.props.title}</h3>
        <p className="tag-text -center -white _marginbottom-md">{this.props.message}</p>
      </div>
    ) 
  }
})