import React from 'react'
import UserIds from './users.json';

function UserData() {
    return (
        <div>
            <h1> Hello </h1>
            {UserIds.map((UserId , index)=>{
                return <div className="ui card">
                <div className="content">{UserId.name}</div>
                <div className="content">{UserId.email}</div>
                <div className="extra content">
                    <div className="ui one buttons">
                    <div className="ui basic green button">Follow</div>
                    </div>
                </div>
                </div>
            }) 
            }

        </div>
    )
}

export default UserData
