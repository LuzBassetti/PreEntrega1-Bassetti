import React from 'react';
import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import Products from '../../json/products.json';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {

  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await new Promise ((resolve)=>{
          setTimeout(()=>{
            resolve(id ? Products.filter(item=> item.categoria === id) : Products)
          },3000);
        });
        setItem(data);
      }catch(error) {
      console.error('Error al cargar los productos', error);
      };
    };
    fetchProducts();
  }, [id]);

  return (
    <div className='ItemListContainer container'>
      <div className='row'>
        <h2>{greeting}</h2>
  
        <ItemList item={item}/>
      </div>
    </div>
  )
};

export default ItemListContainer