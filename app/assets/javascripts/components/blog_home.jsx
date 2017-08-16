window.PostDetails = React.createClass({
  render: function() {
    var author = this.props.author;
    var date = this.props.date;
    var category = this.props.category;
    var avatar = this.props.avatar;
    return(
      <div className="info">
        <div className="pure-u-5-12 autor">
          <figure className="photo pure-u-7-24">
            <img className="avatar" src={avatar}></img>
          </figure>
          <span className="tag-text name pure-u-2-3">{author}</span>
        </div>
        <p className="tag-text pure-u-13-24 date-category">
          <span className="tag-text date">{date} </span>
          <span className="tag-text -green">en </span>
          <span className="tag-text category">{category}</span>
        </p>
      </div>
    )
  }
})

window.SharePost = React.createClass({
  render: function() {
    var facebook = this.props.facebook;
    var google = this.props.google;
    var twitter = this.props.twitter;
    return(
      <div className="hover-hidden-panel">
        <h4 className=" main-title -smallsize -black">Comparte esto con tus amigos</h4>
        <div className="rounded-links">
          <a className="link" href={facebook}>
            <i className="fa fa-facebook icon"></i>
          </a>
          <a className="link" href={google}>
            <i className="fa fa-google-plus icon"></i>
          </a>
          <a className="link" href={twitter}>
            <i className="fa fa-twitter icon"></i>
          </a>
        </div>
      </div>
    )
  }
})

window.PostHeader = React.createClass({
  render: function() {
    var title = this.props.title;
    return(
      <header className="content">
        <h4 className="main-title -smallsize -black -left">{title}</h4>
        <i className="fa fa-ellipsis-v share-options"></i>
        <i className="fa fa-angle-right blog-button -go"></i>
      </header>
    )
  }
})


window.BlogContent = React.createClass({
  render: function() {
    var image = this.props.post.image_path;
    var title = this.props.post.title;
    var author = this.props.post.author;
    var id = this.props.post.id;
    var date = this.props.post.date;
    var category = this.props.post.category;
    var facebook = this.props.post.link_facebook;
    var google = this.props.post.link_google;
    var twitter = this.props.post.link_twitter;
    var avatar = this.props.post.autor_avatar;
    return(
      <article className="pure-u-1 pure-u-md-11-24 pure-u-lg-7-24 blog-box">
        <figure className="photo"><img className="image" src={image}></img></figure>
        <PostHeader title={title} />
        <SharePost facebook={facebook} google={google} twitter={twitter} />
        <PostDetails author={author} date={date} category={category} avatar={avatar} />
      </article>
    )
  }
})

window.BlogContainer = React.createClass({
  render: function() {
    var posts = [];
    this.props.postsList.forEach(function(post) {
      posts.push(<BlogContent post={post} key={post.id} />);
    });
    return(
      <section className="-flex-center pure-u-1 blog-container section-container" id="blog">
        <SectionMessage title={'Aló Presidente'} message={'Entérate de todo lo nuevo referente a Chavezcoin y el mundo de las cryptodivisas.'} />
        <div className="limited-wrapper blog -flex-around">{posts}</div>
      </section>
    )

  }
})

window.BlogList = React.createClass({
  render: function() {
    var posts = $.parseJSON(this.props.posts);
    posts = $.parseJSON(posts);
    return(
      <BlogContainer postsList={posts} />
    )
  }
})