const React = require('react')
const Def = require('../default')

function comment (data) {
    <Def>
          <main>
            <h1>Add a comment</h1>
            <form method="POST" action="/places">
                <div className="form-group">
                    <label htmlFor="author">Author Name</label>
                    <input className="form-control" id="author" name="author" required />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <input className="form-control" id="content" name="content" />
                </div>
                <div className="form-group">
                    <label htmlFor="star-rating">Star Rating</label>
                    <input className="form-control" id="star-rating" name="star-rating" />
                </div>
                <div className="form-group">
                    <label htmlFor="rant">Is it a rant or not?</label>
                    <input className="form-control" id="rant" name="rant" />
                </div>
                <input className="btn btn-primary" type="submit" value="Submit Comment" />
            </form>
          </main>
        </Def>
}

module.exports = comment_form