window.CoinInfo = React.createClass({
  render: function() {
    var symbol = this.props.symbol;
    var name = this.props.name;
    var update = this.props.update;
    var change = this.props.change;
    var price = this.props.price;
    var volumen = this.props.volumen;
    volumen = volumen.toFixed(5);
    price = this.props.chcprice/price;
    return(
      <li className="pure-u-4-5 pure-u-sm-1-2 item">
        <h4 className="main-title -smallsize -left -bold currency" id={name}>{symbol}</h4>
        <div className="pure-u-13-24 slide-interruptor -off">
          <div className=" button -coin">
            <input type="hidden" className="update" id="update" value={update}></input>
            <input type="hidden" className="change" id="change" value={change}></input>
            <input type="hidden" className="price" id="price" value={price}></input>
            <input type="hidden" className="volumen" id="volumen" value={volumen}></input>
          </div>
        </div>
      </li>
    )
  }
})

window.CoinDetails = React.createClass({
  render: function() {
    return(
      <ul className="pure-u-22-24 pure-u-md-1-2 pure-u-xl-7-24 two-column-list -currency-data">
        <li className="pure-u-4-5 pure-u-sm-1-2 item">
          <h4 className="main-title -smallsize -left -bold -fullwidth">Moneda:</h4>
          <p className="tag-text -white coin-name -capitalize">Bitcoin</p>
        </li>
        <li className="pure-u-4-5 pure-u-sm-1-2 item">
          <h4 className="main-title -smallsize -left -bold -fullwidth">Último precio:</h4>
          <p className="tag-text -white coin-priceusd">0.00000387468 BTC/CHC</p>
        </li>
        <li className="pure-u-4-5 pure-u-sm-1-2 item">
          <h4 className="main-title -smallsize -left -bold -fullwidth">Volumen:</h4>
          <p className="tag-text -white coin-volume24">55659.64$</p>
        </li>
        <li className="pure-u-4-5 pure-u-sm-1-2 item">
          <h4 className="main-title -smallsize -left -bold -fullwidth">Última Actualización:</h4>
          <p className="tag-text -white coin-update">45 segundos</p>
        </li>
        <li className="pure-u-4-5 pure-u-sm-1-2 item">
          <h4 className="main-title -smallsize -left -bold -fullwidth">Cambio:</h4>
          <p className="tag-text -yellow coin-change">0.8%</p>
        </li>
      </ul>
    )
  }
})

window.ChavezcoinDetails = React.createClass({
  render: function() {
    var price = this.props.price;
    return(
      <ul className=" pure-u-22-24 pure-u-md-1-2 pure-u-lg-10-24 pure-u-xl-9-24 two-column-list -currency-price">
        <li className="pure-u-1 item reward">
          <h4 className="main-title -smallsize -left -bold -fullwidth">
            Vas a obtener
            <span>4.56</span>
            <span className="red">Chavez</span>
            <span className="yellow">coin</span>
          </h4>
        </li>
        <li className="pure-u-1 item current-price">
          <h4 className="main-title -left -bold -fullwidth">
            CHC =
            <span className="yellow"> ${price}</span>
          </h4>
        </li>
      </ul>
    )
  }
})

window.CoinsList = React.createClass({
  render: function() {

    var coinList = [];
    var chavezcoinprice = '1.00';
    this.props.coins.markets.forEach(function(coin) {
      coinList.push(<CoinInfo key={coin.symbol}  symbol={coin.symbol} name={coin.name} volumen={coin.volume24.usd} change={coin.change24h} price={coin.price.usd} update={coin.timestamp} chcprice={chavezcoinprice} />);
    });
    return(
      <div className="limited-wrapper price-container -flex-center">
        <ul className="pure-u-22-24 pure-u-md-1-2 pure-u-xl-1-3 two-column-list -currency-container">{coinList}</ul>
        <CoinDetails />
        <ChavezcoinDetails price={chavezcoinprice} />
        <h4 className=" main-title -midsize message">Guía de precios por divisa.</h4>
      </div>
    )

  }
})