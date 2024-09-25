import React from 'react'

import styles from './BlogList.module.css'

export default function BlogList({blogs,deleteHander,editHandlerStart}) {

    return (
        <div className={styles.list}><h1>BlogList</h1>
        
        <ul>
            {blogs.map((blog,idx) => {
                return (
                    <li key={blog.id}>
                    <h3>{blog.title}</h3>
                    <img src={blog.pic} alt='blog' width={300}></img>
                    <p>{blog.description}</p>
                    <div>
                        <button onClick={() => editHandlerStart(blog,idx)}>Edit</button>
                        <button onClick={()=>deleteHander(blog.id)}>Delete</button>
                    </div>
                    </li>
                )
            })}
        </ul>
        </div>
    )
}
