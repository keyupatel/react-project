import React, { useState } from 'react'
import { useEffect } from 'react';
import './Github.scss';
import { data } from 'react-router';
const Github = () => {
    const [data, setData] = useState ([])
  useEffect (() => {
    fetch ('https://api.github.com/users/keyurpatel')
    .then(Response => Response.json())
    .then(data => console.log(data))
  }, []);   
  return (
    <div className='github-section'>Github Followers: {data.followers} </div>
  )
}

export default Github