import './story.css'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

function Story() {
  const{ id } = useParams()
  const url = '/api/stories/'+id
  const { error, isPending, data: story } = useFetch(url)

  return (
    <div className='story'>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        {story && (
          <>
            <h2 className="page-title">{story.title}</h2>
            <p className='author'>Author: {story.author}</p>
            <p className='desc'>Description: {story.description}</p>
            <p className='content'>{story.body}</p>
          </>
        )}
    </div>
  )
}

export default Story