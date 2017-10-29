window.Count = React.createClass({
  getInitialState: function() {
    return(
      this.initTimer()
    );
  },

  initTimer: function() {
    var now = new Date();
    var date_end = new Date(2017, 11, 12, 12, 0, 0);
    
    var days = (date_end - now)/(1000*60*60*24);
    var hours = (days - Math.trunc(days)) * 12;
    var minutes = (hours - Math.trunc(hours)) * 60;
    var seconds = (minutes - Math.trunc(minutes)) * 60;

    return ({
      days:     Math.trunc(days),
      hours:    Math.trunc(hours),
      minutes:  Math.trunc(minutes),
      seconds:  Math.trunc(seconds)
    })
  },

  componentDidMount: function(){
    this.timer = setInterval(this.tick, 1000);
  },

  tick: function() {
    var days = this.state.days;
    var hours = this.state.hours;
    var minutes = this.state.minutes;
    var seconds = this.state.seconds;

    seconds = seconds - 1;

    if (seconds <= 0) {
      seconds = 60;
      minutes = minutes - 1;
    }

    else if (minutes <= 0) {
      minutes = 60;
      hours = hours - 1;
    }

    else if (hours <= 0) {
      days = days - 1
      hours = 24;
    }

    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    })
  },

  componentWillUnmount: function(){
    clearInterval(this.timer);
  },

  render() {
    return(
      <div className="container-timer _margintop-md">      
        <div className="item tag-text -lightgrey"><p>D</p></div>
        <div className="item tag-text -lightgrey"><p>H</p></div>
        <div className="item tag-text -lightgrey"><p>M</p></div>
        <div className="item tag-text -lightgrey"><p>S</p></div>
        
        <div className="item tag-text -lightgrey"><p>{this.state.days.toString()}</p></div>
        <div className="item tag-text -lightgrey"><p>{this.state.hours.toString()}</p></div>
        <div className="item tag-text -lightgrey"><p>{this.state.minutes.toString()}</p></div>
        <div className="item tag-text -lightgrey"><p>{this.state.seconds.toString()}</p></div>
      </div>
    );
  }
})
