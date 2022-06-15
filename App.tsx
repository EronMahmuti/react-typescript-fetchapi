import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import  AddNewButton  from "./components/AddNewButton/AddNewButton";
import { Product, ProductsList } from "./components/ProductList/ProductList";
import { AddModal } from "./components/AddModal/AddModal";
import "./styles/reset.css";
import 'react-toastify/dist/ReactToastify.css';
import "./styles/index.css";

function App() {

  const mounted = useRef(false);
  const refElement = useRef(null);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productsList, setProductsList] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try{
        const response = await fetch('https://dummyjson.com/products');
        const { products } = await response.json();
        setProductsList(products);
      }
      catch(error){
        console.error(error);
        setHasError(true)
      }finally{
        setLoading(false)
      }
    }
    if(!mounted.current){
      fetchProducts();
    }
    return () => {
      mounted.current = true;
    }
  }, [])
  

  const handleSubmit = (title: string, description:string) => {
    setProductsList((prev) => {
      return [
        {
         brand: "Apple",
         category: "smartphones",
         description: description,
         discountPercentage: 12.96,
         id: 30 + Math.floor(Math.random() * 100),
         images: [
           "https://dummyjson.com/image/i/products/1/1.jpg",
           "https://dummyjson.com/image/i/products/1/2.jpg",
           "https://dummyjson.com/image/i/products/1/3.jpg",
           "https://dummyjson.com/image/i/products/1/4.jpg",
           "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
         ],
         price: 349,
         rating: 4.69,
         stock: 94,
         thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
         title: title,
       },
       ...prev
     ]
    })
    setIsModalOpen(false);
    toast.success("Product added successfully");
  }
  const handleClose = () => {
    setIsModalOpen(false);
    toast.info("product insertion cancelled");
  }
  const handleAddClick = () => {
    setIsModalOpen(prev => !prev);
  }

  return (
    <div className="App">
      <ToastContainer />
      <div className="container">
        <AddNewButton onClick={handleAddClick} title="Add New" />
        <ProductsList 
          loading={loading}
          hasError={hasError}
          products={productsList}
          />
          
        <AddNewButton onClick={handleAddClick} title="Add New" />
          {isModalOpen && <AddModal onClose={handleClose} onSubmit={handleSubmit} />}
      </div>
    </div>
  );
}

export default App;
