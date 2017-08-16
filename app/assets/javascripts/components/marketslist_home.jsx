window.MarketDetails = React.createClass({
  render: function() {
    var price = this.props.price;
    price = Math.round(price * 1000) / 1000;
    var name = this.props.name;
    var volume = this.props.volume;
    var link = "https://www.google.co.ve/search?q="+name;
    var percent = (volume*100)/this.props.total;
    var time = this.props.time;
    return(
      <tr className="info-wrapper">
        <th className="data -mid">
          <a className="link" href={link}>{name}</a>
        </th>
        <th className=" data -hide pure-u-1-5">{time}</th>
        <th className=" data -mid">${volume}</th>
        <th className=" data -green -small-big">${price}</th>
        <th className=" data -hide -small graphic-bar">
          <div className="bar" style={{width: percent + '%'}}></div>
        </th>
      </tr>
    )
  }
})

window.MarketsList = React.createClass({
  render: function() {
    var markets = [];
    var percentVolume = this.props.marketlist.volume;
    var time = this.props.time;
    this.props.marketlist.markets.forEach(function(market) {
      markets.push(<MarketDetails key={market.market} name={market.market} price={market.price} volume={market.volume} total={percentVolume} time={time} />);
    });
    return(
      <div className="limited-wrapper market-list -flex-center">
        <table className=" pure-u-23-24 pure-u-md-4-5 table-list -market">
          <thead className="head">
            <tr className="data-wrapper">
              <th className=" data -mid">Nombre de Mercado</th>
              <th className=" data -hide pure-u-1-5">Ultima Actualización</th>
              <th className=" data -mid">24h Volumen $USD</th>
              <th className=" data -small-big">Precio $USD</th>
              <th className=" data -hide -small">Gráfico</th>
            </tr>
          </thead>
          <tbody className="body">
            {markets}
          </tbody>
        </table>
      </div>
    )

  }
})