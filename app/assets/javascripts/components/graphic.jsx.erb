window.GraphicDays = React.createClass({
  render: function() {
    var days = [];
    this.props.data.forEach(function(day) {
      days.push(<span className="day" key={day.month} id={day.month}>{day.month} {day.date}</span>);
    });
    return(
      <div className="pure-u-4-5 graphic-days">
        {days}
      </div>
    )
  }
})

window.GraphicPrice = React.createClass({
  render: function() {
    var pricesList = this.props.data;
    var prices = [];
    var maxPrice = 0;
    var maxPriceMonth = '';

    pricesList.forEach(function(price_temp) {
      price_temp.price > maxPrice;
      maxPrice = price_temp.price;
      maxPriceMonth = price_temp.month;
    });
    pricesList.forEach(function(price) {
      if (maxPriceMonth == price.month) {
        prices.push(<span className="price -max" key={price.month} id={price.month}>${maxPrice}</span>);
      }else {
        prices.push(<span className="price" key={price.month} id={price.month}>${price.price}</span>);
      }
    });
    prices.reverse();
    return(
      <div className="graphic-price">
        {prices}
      </div>
    )
  }
})

window.GraphicWrapper = React.createClass({
  render: function() {
    var prices = [];
    var max = this.props.data.length;
    var control = 1;
    this.props.data.forEach(function(price) {
      if (control == max){
        prices.push(<div className="bar -current" id={price.month} key={price.month}>{price.price}</div>);
      }else {
        prices.push(<div className="bar" key={price.month} id={price.month}>{price.price}</div>);
      }
      control ++;
    });
    return(
      <div className="pure-u-4-5 graphic-wrapper">
        {prices}
      </div>
    )
  }
})

window.DinamicGraphic = React.createClass({
  render: function() {
    var prices = this.props.data;
    return(
      <div className="pure-u-1 dinamic-graphic">
        <GraphicWrapper data={prices} />
        <GraphicPrice data={prices} />
        <GraphicDays data={prices} />
        <div className="graphic-price -hidden">
          <span className="price">
            {this.props.price}
          </span>
        </div>
      </div>

    )
  }
})


window.GraphicContainer = React.createClass({
  render: function() {
    var current = this.props.graphicData.current_price;
    return(
      <section className="pure-u-1 pure-u-lg-11-24 graphic-container">
        <header className="header pure-u-1">
          <h4 className="main-title -smallsize -fullwidth -bold -lightblack -uppercase">
            1 CHC = ${current}
          </h4>
        </header>
        <DinamicGraphic data={this.props.graphicData.prices} price={current} />
      </section>
    )
  }
})