import React from 'react'
import { Link, styles } from 'refire-app'
import find from 'lodash/find'

function findBoard(boards, boardId,) {
  return find(boards, (board) => {
    return board.key === boardId
  }) || { value: {} }
}
                

const Boards = ({ boards, category, styles }) => {
  return (
    <div>
      {
        Object.keys(category.boards).map((boardId) => {
          const board = findBoard(boards, boardId)
          return (
            <div class="carousel-caption" style={{padding: 15}}>
            <h3 key={boardId} className={styles.header} >
              <Link to={`board/${board.key}`} className={styles.link}>
                {/* this makes an image and title a clickable link >> Eric */}
              <img src={board.value.image} class="img-responsive" width="307" style={{paddingBottom: 15}}/>
              <figcaption>{board.value.title}</figcaption> 
              </Link>
              <hr/>
            </h3>
            </div>
          )
        })
      }
    </div>
  )
}



const css = {
  header: {},
  link: {},
}

export default styles(css, Boards)
