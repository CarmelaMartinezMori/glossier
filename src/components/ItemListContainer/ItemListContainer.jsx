import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {

  return (
    <div>
        <div className="jumbotron">
          <h1 className="display-4">{greeting}</h1>
          <p className="lead">Discover a curated collection of makeup essentials designed to enhance your natural beauty and embrace your unique style. </p>
          <hr className="my-4"/>
          <p>Glossier is all about celebrating your individuality and empowering you to shine from within</p>
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
    </div>
  )
}

export default ItemListContainer