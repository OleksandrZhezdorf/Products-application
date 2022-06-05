import React, {useState, useEffect} from 'react';
import './App.css';
import Filter from './Components/Filter';
import Pagination from './Components/Pagination';
import Button from '@mui/material/Button';


function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch ('https://reqres.in/api/products')
      .then(responce => responce.json())
      .catch(error => console.error(error))
      setProducts(res.data);
      setLoading(false);
    }
    getProducts()
  }, [])

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProduct = products.slice(firstProductIndex, lastProductIndex);
  
  const paginate = pageNumber => setCurrentPage(pageNumber)
  const nextPage = () => setCurrentPage (prev => prev + 1) 
  const prevPage = () => setCurrentPage (prev => prev - 1)

  return (
    <div className="App">
      <h1 className='title'>
        Product App
      </h1>
      <Filter products = {currentProduct} loading = {loading}/>
      <Pagination productsPerPage = {productsPerPage} totalProducts = {products.length} paginate = {paginate} />
      { currentProduct.length !== 0 && <Button variant="contained" className='btn btn-primary' onClick = {prevPage}>previous</Button>}
      { currentProduct.length !== 0 && <Button variant="contained" className='btn btn-primary ms-2' onClick = {nextPage}>next</Button>}
      { currentProduct.length === 0 && <div>There are no more products to show<button className='btn btn-primary ms-2' onClick = {() => paginate(1)}>next</button></div>}
    </div>
  );
}

export default App;
