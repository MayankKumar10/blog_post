import React,{useState} from 'react'
import BlogPosts from './posts.json'
import UserIds from './users.json';
import Blog from './Blog.js';

function Blogs() {
    const[value, setValue] = useState(0);

    // const click = (e)=>{
    //     document.querySelector('#divValue').addEventListener('click', (e)=>{
    //         console.log(e);
    //         let url = './blog';
    //         let other = window.open(url, '_blank');
    //     });
    //     console.log(value)
    // }

    return (
        
        <div>
            
            {UserIds.map((UserId)=>{
                return BlogPosts.map((BlogPost)=>{
                     if(UserId.id === BlogPost.userId){
                        return(<div className="ui card">
                <div id="divValue" class="content" src>
                    <i className="right floated like icon"></i>
                    <i className="right floated star icon"></i>
                    <h2 className="ui header">{UserId.name}</h2>
                    <h3 className="ui header">Title : {BlogPost.title}</h3>
                    <div className="description">
                    <p>{BlogPost.body} <a href="/blog">  see more..</a></p>
                    </div>
                </div>
                <div className="extra content">
                    <span className="left floated like">
                    <i className="like icon"></i>
                    Like
                    </span>
                    <span className="right floated star">
                    <i className="star icon"></i>
                    Favorite
                    </span>
                </div>
                </div>
                 )   
                }else{
                    
                }
            }) 
            }) 
            }

        </div>
    )


}

export default Blogs
