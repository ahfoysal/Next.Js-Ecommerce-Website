import React from 'react'
import { useRouter } from 'next/router';
const Search = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>Search Result of: {id}</div>
  )
}

export default Search