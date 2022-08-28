import './home.css'
import { useFetch } from '../../hooks/useFetch'
import StoriesList from '../../components/StoriesList'


function Home() {
  const { data, isPending, error } = useFetch('/api/stories')

  return (
    <div className='home'>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        {data && <StoriesList stories={data}/>}
    </div>
  )
}

export default Home