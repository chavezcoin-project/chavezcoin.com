window.CounterContainer = React.createClass({
  render: function() {
    var total = this.props.totalchc;
    return(
      <section className="pure-u-1 pure-u-lg-13-24 transaction-counter-container">
        <header className="header pure-u-1">
          <h4 className="main-title -smallsize -fullwidth -bold -lightblack -uppercase">
            Chavezcoin Totales
          </h4>
        </header>
        <input className="total_transactions" max="100" min="0" step="1" type="hidden" defaultValue={total} ></input>
        <div className="pure-u-1 transaction-counter">
          <p className="pure-u-1 tag-text -lightblack -center">
            Chavezcoin disponibles.
          </p>
          <h4 className="main-title -smallsize -fullwidth -bold -lightblack -uppercase">
            <a className="main-button -blue graphic-details" href="#">Detalles</a>
          </h4>
        </div>
      </section>

    )
  }
})


window.TransactionContainer = React.createClass({
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
    var graphicData = $.parseJSON(this.props.graphicData);
    graphicData = $.parseJSON(graphicData);
    return(
      <section className="pure-u-1 transaction-container section-container -maxi-padding">
        <div className="pure-u-1 round-gradient-container">
          <div className="round-gradient-background"></div>
        </div>
        <CounterContainer totalchc={graphicData.cantidad} />
        <GraphicContainer graphicData={graphicData} />
      </section>
    )
  }
})