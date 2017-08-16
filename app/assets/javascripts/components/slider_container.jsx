window.SliderContainer = React.createClass({
  render: function() {
    var images = [];
    this.props.images.forEach(function(image) {
      images.push(<img className="slider-image -default" src={image.image} key={image.id}></img>);
    });
    return(
      <div className="slider-container -default">
        {images}
      </div>
    )
  }
})