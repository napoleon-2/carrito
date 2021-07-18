import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
  // crear lista de productos

  const [productos, guardarProductos] = useState([
    {id: 1, nombre: 'camisa ReactJS', precio: 50},
    {id: 2, nombre: 'camisa JueJS', precio: 40},
    {id: 3, nombre: 'camisa NodeJS', precio: 30},
    {id: 4, nombre: 'camisa Angular', precio: 20}   
  ]);
  // state para crear carrito

  const [carrito, agregarProducto] = useState([])
  
  // obtener fecha

  const fecha = new Date().getFullYear();
  
  return (
    <Fragment>
      <Header titulo='Tienda Virtual'/>
        <h1>Lista de productos</h1>
        {productos.map(producto => (
          <Producto 
            key={producto.id}
            producto={producto}
            productos={productos}
            carrito={carrito}
            agregarProducto={agregarProducto}
            />
        ))}
        <Carrito 
          carrito={carrito}
          agregarProducto={agregarProducto}
          />
      <Footer Fecha={fecha}/>
    </Fragment>
  );
}

export default App;
