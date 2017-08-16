window.AppItems = React.createClass({
  render: function() {
    var option = this.props.option;
    if (option == "screen" || option == "division") {
      var title = this.props.title;
      if (option == "screen") {
        var price = this.props.price;
        return(
          <li className="header item">
            <p className="tag-text -small -white -center wallet">Chavezcoin Wallet</p>
            <h4 className="main-title -smallsize -fullwidth -bold">
              ${price}
              <p className="tag-text -uppercase -yellow -midsmall">
                {price} CHC
              </p>
            </h4>
          </li>
        )
      }else{
        return(
          <li className="box -small item">
            <p className="tag-text -midsmall">{title}</p>
          </li>

        )
      }
    }else {
      var name = this.props.name;
      var price = this.props.price;
      var symbol = this.props.symbol;
      var percent = this.props.percent;
      if (price < 0) {
        var iClass = 'fa fa-caret-down';
        var pClass = 'tag-text -small -red';
      }else {
        var iClass= 'fa fa-caret-up';
        var pClass = 'tag-text -small -green';
      }
      return(
        <li className="box item">
          <p className="tag-text pure-u-14-24">
            {name}
          </p>
          <p className="tag-text -midsmall">
            ${price}
          </p>
          <p className="tag-text -small pure-u-14-24">
            {symbol}
          </p>
          <p className={pClass}>
            <i className={iClass}></i>
            {percent}%
          </p>
        </li>
      )
    }
  }
})

window.FakeApp = React.createClass({
  render: function() {
    var items = [];
    var control = 0;
    var fakeJson = [{"title": "Chavezcoin Wallet","price": "37,000.00"},{ "title": "Detalles de Mercado"},{"name": "ChavezCoin","price": "1.00","symbol": "CHC", "percent": "230"},{"name": "BitCoin","price": "2700.023","symbol": "BTC", "percent": "17"},{"name": "Ethereum","price": "183","symbol": "ETH", "percent": "23"}];

    fakeJson.forEach(function(item) {
      if (control == 0) {
        items.push(<AppItems title={item.title} price={item.price} option="screen" key={item.title} />);
      }else if(control == 1) {
        items.push(<AppItems title={item.title} price={item.price} option="division" key={item.title} />);
      }else {
        items.push(<AppItems name={item.name} price={item.price} symbol={item.symbol} percent={item.percent} option="coin" key={item.symbol} />);
      }
      control++;
    });

    return(
      <ul className="app-example">
        {items}
      </ul>
    )
  }
})

window.FakeAppMobile = React.createClass({
  render: function() {
    return(
      <div className="device-illustration mobile-normal -banner">
        <div className="speaker"></div>
        <div className="button"></div>
        <FakeApp />
      </div>
    )
  }
})

window.ActionMobile = React.createClass({
  render: function() {
    var images = [];
    this.props.images.forEach(function(image) {
      images.push(<img className="slider-image -devise" src={image.image} key={image.id}></img>);
    });
    return(
      <div className="device-illustration mobile-normal -app-section">
        <div className="speaker"></div>
        <div className="button -devise">
          <span className="tool-tip">¡Clickeame, soy genial!</span>
        </div>
        <div className="device-image-container -backgrounda slider-container -devise">
          {images}
        </div>
      </div>
    )
  }
})


window.ExampleAppMobile = React.createClass({
  render: function() {
    var images = $.parseJSON(this.props.images);
    images = $.parseJSON(images);
    return(
      <section className="-flex-center pure-u-1 app-container section-container -skew-container-inverted" id="app">
        <SliderContainer images={images} />
        <AppContainer images={images} />
      </section>
    )
  }
})