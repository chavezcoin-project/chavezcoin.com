window.HideCoinAnimation = React.createClass({
  render: function() {
    var items = [];
    for (var i = 0; i < 4; i++) {
      items.push(<li className="item" key={i}>coin</li>);
    }
    return(
      <h1 className="animation">
        <div className="content-animated">
          <div className="container">
            <p className="text">Chavez</p>
          </div>
          <ul className="list">{items}</ul>
        </div>
      </h1>
    )
  }
})