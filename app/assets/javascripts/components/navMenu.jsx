window.LinkDetail = React.createClass({
  render: function() {
    var link = '#' + this.props.name;
    return(
      <li className="pure-menu-item menu-item">
        <a href={link} className="menu-link link">
          <span className="bounceletter">{this.props.first_letter} </span>
          {this.props.cut_name}
        </a>
      </li>
    )
  }
})

window.MenuLinks = React.createClass({
  render: function() {
    var options = [{"name": "inicio", "first_letter": "I", "cut_name": "nicio"}, {"name": "guide", "first_letter": "G", "cut_name": "uía"}, {"name": "wallet", "first_letter": "M", "cut_name": "onedero"}, {"name": "market", "first_letter": "C", "cut_name": "ompra"}, {"name": "app", "first_letter": "A", "cut_name": "pp"}, {"name": "blog", "first_letter": "B", "cut_name": "log"}, {"name": "soporte", "first_letter": "S", "cut_name": "oporte"}]
    var links = [];
    options.forEach(function(option) {
      links.push(<LinkDetail name={option.name} first_letter={option.first_letter} key={option.name} cut_name={option.cut_name} />);
    });
    return(
      <ul className="menu-links pure-menu-list">
        {links}
      </ul>
    )
  }
})

window.NavMenu = React.createClass({
  render: function() {
    var link_root = this.props.link_root;
    return(
      <nav className="pure-g nav-menu pure-menu-horizontal">
        <div className="limited-wrapper">
          <figure className="logo-container">
            <a href={link_root} ><img className="logo" src="/assets/logo.png"></img></a>
          </figure>
          <i className="fa fa-bars slide-button"></i>
          <div className="fade-screen pure-u-1"></div>
          <div className="menu-links-container">
            <MenuLinks />
          </div>
        </div>
      </nav>
    )
  }
})