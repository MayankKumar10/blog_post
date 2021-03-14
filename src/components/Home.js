import React from 'react'
import UserIds from './users.json'
import BlogPosts from './posts.json'


function Home() {

    return (
        <div className="ui grid">
            {UserIds.map((UserId)=>{
                return BlogPosts.map((BlogPost)=>{
                     if(UserId.id === BlogPost.userId){
                        return( 
                        <div className="ui card five wide column">
                        <div className="content">{UserId.name}</div>
                        <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic green button">Approve</div>
                            <div className="ui basic red button">Reject</div>
                        </div>
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

export default Home
