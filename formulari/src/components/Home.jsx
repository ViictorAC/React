import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h2>Home</h2>
        <button onClick={() => navigate('/controlat')}>Formulari Controlat</button>
        <button onClick={() => navigate('/likeapro')}>Formulari Likeapro</button>
    </div>
  )
}

export default Home