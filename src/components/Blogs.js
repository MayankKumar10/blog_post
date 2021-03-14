import React from 'react'
import BlogPosts from './posts.json'

function Blogs() {
    var BlogPost;
    return (
        
        <div>
            <h1> Hello </h1>
            {BlogPosts.map((BlogPost , index)=>{
                
                return <div class="ui card">
                <div class="content">
                    <i class="right floated like icon"></i>
                    <i class="right floated star icon"></i>
                    <h2 class="ui header">{BlogPost.userId}</h2>
                    <h3 class="ui header">Title : {BlogPost.title}</h3>
                    <div class="description">
                    <p>{BlogPost.body}</p>
                    </div>
                </div>
                <div class="extra content">
                    <span class="left floated like">
                    <i class="like icon"></i>
                    Like
                    </span>
                    <span class="right floated star">
                    <i class="star icon"></i>
                    Favorite
                    </span>
                </div>
                </div>
            }) 
            }
                <h1>--------{BlogPosts[5].userId[5]} user id 5</h1>
        </div>
    )


}

export default Blogs
