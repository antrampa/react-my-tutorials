/**
 * Created by ambitos on 5/8/2016.
 */
var CommentList = React.createClass({
   render: function () {
       return (
           <div className="commentList">
                Hello, world! I am a CommentList.
           </div>
       );
   } 
});

var CommentForm = React.createClass({
    render: function () {
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
});

var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
                Hello world! I am a CommentBox.
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);
