//your code here

import React, { Component } from 'react';

   export default class Comment extends Component {
      render () {
          return(
              <div className="comment">
              {this.props.commentText}
              </div>
          )
      }
    }

//this is structuring comments by giving each individual comment a class of comment. only one comment at a time passes thsi comment component