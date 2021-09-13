import React from 'react'

export const Card = props => {
    return(
        <>
            


        <div className="card-body align-middle">





            
        <img src={`https://robohash.org/${props.monster.id}?set=set2`} style={{ width:'100px', height:'100px' }} class="mx-auto d-block"/> 
              
                <h6 className="text-center mt-3">{props.monster.name}</h6>
    <p className="text-center">{props.monster.email}</p>
                 
               
              </div>


   </>
    )
  
}