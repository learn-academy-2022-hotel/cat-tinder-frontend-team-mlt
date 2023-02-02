import React from 'react'
import { useParams } from 'react-router-dom'

const CatShow = ({ cats }) => {

  const { id } = useParams()
  let selectedCat = cats.find(cat => cat.id === +id)

  return(
      <main className="cat-show-cards">
        {selectedCat && (
          <>
            <h2>{selectedCat.name}</h2>
            <img
              alt={` ${selectedCat.name}'s profile`}
              src={selectedCat.image}
              className="cat-show-img"
            />
            <h3>{selectedCat.age} years old</h3>
            <h3>{selectedCat.enjoys}</h3>
          </>
        )}
      </main>
    )
}

export default CatShow;