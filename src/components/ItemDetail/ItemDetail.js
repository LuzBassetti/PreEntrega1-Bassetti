import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div className='row'>
        <div className='col-md4 offset-md4'>
        <img src={item.imagen} className='card-fluid' alt={item.nombre} />
        <h2>{item.nombre}</h2>
        <p>Tamaño: {item.size}</p>
        <p>${item.precio}</p>
        </div>

    </div>
  )
}

export default ItemDetail