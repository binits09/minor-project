import React,{useState,useEffect} from 'react'
import Adminlayout from './layouts/Adminlayout'
import { Container,Row,Col,Card } from 'react-bootstrap'
import api from './services/Api';

const App = () => {
 const [products,setProducts] = useState([]);
 const [editproduct,setEditproduct] = useState([null]);

 const fetchproducts = async () => {
  try {
    const res = await api.get('/products');
    setProducts(res.data);
  } catch (err) {
    console.error(err);
  }
 }

useEffect(() => {
    fetchproducts();
},[]);


 return <>
    
    <Adminlayout/>

  </>
}

export default App
