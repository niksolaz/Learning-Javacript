var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Pietro Caccia">This is one comment</Comment>
        <Comment author="Giordano Marciatore">This is *another* comment</Comment>
      </div>
    );
  }
});