import './storiesList.css'
import { Link } from 'react-router-dom'

import React from 'react'

function StoriesList({ stories }) {
  return (
    <div className='stories-list'>
        {stories.map(story => (
            <div key={story.id} className='card'>
                <h3>{story.title}</h3>
                <p>{story.author}</p>
                <div>{story.description.substring(0, 100)}...</div>
                <Link to={`/stories/${story.id}`}>Read</Link>
            </div>
        ))}
    </div>
  )
}

export default StoriesList