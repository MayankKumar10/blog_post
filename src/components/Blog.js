import React from 'react'

function Blog() {
    return (
        <div>
        
            <input
                action="action"
                onclick="window.history.go(-1); return ture;"
                type="submit"
                value="Back"
            />

            <h1>Hello</h1>

        </div>
    )
}

export default Blog
