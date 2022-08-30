import './search.css'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import StoriesList from '../../components/StoriesList'

function Search() {

  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = '/stories?q='+query
  const { error, isPending, data } = useFetch(url)

  return (
    <div>
        <h2 className="page-title">Stories including "{query}"</h2>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        {data && <StoriesList stories={data} />}
    </div>
  )
}

export default Search