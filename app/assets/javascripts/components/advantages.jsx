window.AdvantageInfo = React.createClass({
  render: function() {
    var advantageTitle = this.props.advantage.title;
    var advantageDescription = this.props.advantage.description;
    var advantageClass = this.props.advantage.class;
    return(
    	<article className={advantageClass}>
				<div className="content">
					<h3 className="main-title -midsize -bold _marginbottom-md">{advantageTitle}</h3>
					<p className="tag-text -white">{advantageDescription}</p>
				</div>
			</article>
    ) 
  }
})

window.AdvantageContainer = React.createClass({
  render: function() {
    var articleTop = [];
    var articleBottom = [];
    var control = 0;
    this.props.advantages.forEach(function(advantage) {
      control ++;
      if (control <= 3) {
      	articleTop.push(<AdvantageInfo advantage={advantage} key={advantage.title} />);
      }else {
      	articleBottom.push(<AdvantageInfo advantage={advantage} key={advantage.title} />);
      }
    });
    return(
    	<div className="pure-u-1 advantages-container section-container -flex-center -skew-container" id="advantages">
    		<SectionMessage title={'Nuestro comandante tiene más sorpresas'} message={'Existen muchas ventajas por las cuales comprar y usar Chavezcoin. Su seguridad, rapidez y eficiencia superará tus expectativas.'} />
				<div className="pure-u-1 limited-wrapper advantages-wrapper">{articleTop}</div>
				<div className="pure-u-1 limited-wrapper advantages-wrapper">{articleBottom}</div>    		
    	</div>
    ) 

  }
})

window.AdvantagesList = React.createClass({
  render: function() {
  	var advantagesJson = $.parseJSON(this.props.advantages);
    return(
    	<AdvantageContainer advantages={advantagesJson} />
    )
  }
})
