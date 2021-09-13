import React from 'react'

export const Search = ({handleSearch, placeholder}) => {


    return(
        <>
      
     <form>
     <input type="search" class="form-control" onChange={handleSearch} placeholder={placeholder} class="mx-auto d-block mt-5"/>
     </form>
      

       </>
    )
    
}