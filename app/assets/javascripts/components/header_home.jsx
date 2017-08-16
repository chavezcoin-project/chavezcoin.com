window.HeaderIllustrations = React.createClass({
  render: function() {
    return(
      <section className="pure-u-1 banner-illustrations limited-wrapper">
        <div className="device-illustration tablet-horizontal">
          <figure className="device-image-container">
          </figure>
        </div>
        <div className="perspective-device -leftrotation">
          <FakeAppMobile />
        </div>
      </section>
    )
  }
})


window.SkewFlag = React.createClass({
  render: function() {
    return(
      <div className="pure-u-1 skew-container-abstract -flag-color">
        <div className="limited-wrapper">
          <HideCoinAnimation />
          <h2 className="tag-text -banner -lightgrey -midsize">
            Dispara tus niveles de patria hasta las nubes.
          </h2>
          <div className="pure-u-1 buttons-container">
            <a className="main-button -blue" href="#">Gana Chavezcoin</a>
            <a className="main-button -red" href="#">Descargar Wallet</a>
          </div>
        </div>
      </div>
    )
  }
})


window.HeaderCount = React.createClass({
  render: function() {
    var price = this.props.price;
    return(
      <div className="count-container">
        <div className="planet-rotate"></div>
        <figure className="chavezcoin">
          <img src="/assets/coin.png" className="coin"></img>
        </figure>
        <div className="equal">
          =
        </div>
        <div className="usd">
          ${price}.00
        </div>
      </div>
    )
  }
})


window.HeaderHome = React.createClass({
  render: function() {
    return(
      <header className="pure-u-1">
        <section className="abstract-banner pure-u-1" id="inicio">
          <HeaderCount price={this.props.chcprice} />
          <SkewFlag />
          <HeaderIllustrations />
        </section>
      </header>
    )
  }
})