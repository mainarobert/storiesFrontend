import './create.css'
import { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

function Create() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDesc] = useState('')
  const [body, setBody] = useState('')

  const { postData, data, error } = useFetch('/api/stories/create/', "POST")

  const navigate = useNavigate()

  const handleSubmit = e =>{
    e.preventDefault()
    postData({ title, author, description, body })
  }

  useEffect(() => {
    if(data){
      navigate('/')
    }
  }, [data, navigate])

  return (
    <div className='create'>
        <h2 className="page-title">Add new story</h2>

        <form onSubmit={handleSubmit}>
          <label>
            <span>Story Title: </span>
            <input 
              type="text"
              onChange={e => setTitle(e.target.value)}
              value={title}
              required
            />
          </label>
          <label>
            <span>Author: </span>
            <input 
              type="text"
              onChange={e => setAuthor(e.target.value)}
              value={author}
              required
            />
          </label>
          <label>
            <span>Description: </span>
            <input 
              type="text"
              onChange={e => setDesc(e.target.value)}
              value={description}
              required
            />
          </label>
          <label>
            <span>Body: </span>
            <textarea 
              type="text"
              onChange={e => setBody(e.target.value)}
              value={body}
              required
            />
          </label>

          <button className='btn'>submit</button>
        </form>
    </div>
  )
}

export default Create