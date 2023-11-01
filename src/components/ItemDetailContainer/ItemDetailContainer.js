import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Products from '../../json/products.json'

const ItemDetailContainer = () => {
  
    const [item, setItem] = useState([]);
    const { id } = useParams();
  
    useEffect(() => {
      const promesa = new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(Products.find(item=> item.id === parseInt(id)))
        }, 3000)
      });
      promesa.then((data)=>{
        setItem(data)
      })
    }, [id]);
  
    return (
      <div>
          <ItemDetail item={item}/>
      </div>
    )
  };

export default ItemDetailContainer