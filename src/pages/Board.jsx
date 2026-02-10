import React from 'react'
import { communityPosts } from '../data/board';
import './styles/Board.css'

const Board = () => {
  return (
    <section>
      <div className='inner'>
        <div className='card-lst'>
          {communityPosts.map(({id, title, content})=>(
          <div key={id} className='card'>
            <h4>{title}</h4>
            <p>{content}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Board