import React from 'react'
import { Card } from '../Card/cardComponent'
import { logo } from '../../img/one.png'
//import './card-list.css'
export const CardList = (props) => {
    console.log(props)
   return(
    <div className="container">
        <div class="row">
    {
      props.monsters.map(monster => {
        return (
          <div className="col-md-3 mt-5">
            <div className="card-hover">
              <Card key={monster.id} monster={monster}></Card>
            </div>
          </div>
        )
      })
    }
  </div>
  </div>
   )
}