window.CoinContainer = React.createClass({
  render: function() {
    var coins = this.props.coins;
    var markets = this.props.markets;
    var time = this.props.time;
    return(
      <section className="-flex-center pure-u-1 market-container section-container" id="market">
        <SectionMessageWhite title={'¡Exprópiese esas divisas!'} message={'Puedes cambiar tus Chavezcoin a la moneda que quieras; aquí podrás ver una guía de precios y una lista de cryptomercados.'} />
        <CoinsList coins={coins} />
        <SectionMessageWhite title={'Webs de Intercambio'} message={''} />
        <MarketsList marketlist={markets.ticker}  time={time} />
      </section>

    )
  }
})



window.MarketExchange = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 5});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 5000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    var coinsJson = this.props.coins;
    var markets = this.props.markets;
    var time = window.formatTime(markets.timestamp);
    return(
      <CoinContainer coins={coinsJson} markets={markets} time={time} />
    )
  }
})