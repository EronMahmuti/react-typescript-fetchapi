import React from 'react'
export interface Product {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
  }
  
  interface Props {
    loading: boolean;
    hasError: boolean;
    products: Product[];
  }
  
export const ProductsList = ({loading, hasError, products}:Props) => {
    if(loading){
        return(
            <p style={{background:"grey", padding:"20px",}} >Loading products</p>
        )
    }
    if(hasError){
        return(
            <p style={{ background: "grey", padding: "20px", marginTop: "20px" }}>
            Couldn't load products, try to reload the page!
            </p>
        )
    }
  return (
    <ul>
        {products.map((item) => (
            <li key={item.id} className="list_item" >
                <div className='list_item__thumb' >
                    <img src={item.thumbnail} alt="item thumbnail" />
                </div>
                <div className="list_item__content">
                    <h4>{item.title}</h4>
                    <p>{item.description} </p>
                </div>
                <h3 className='list_item__price' >{item.price}</h3>
            </li>
        ))}
    </ul>
  )
}

