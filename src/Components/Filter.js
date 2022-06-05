import React, {useState} from 'react';
import ProductItem from '../Products/ProductItem/ProductItem';


const Filter = ({products, loading}) => {

    const [value, setValue] = useState('')
    const filteredProducts = products.filter(product => {
       return String(product.id).includes(String(value))
    })

    
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>  
            <form className='search__form'>
                    <input
                        type = 'number'
                        placeholder='Search among products'
                        className='search__input'
                        onChange={(event) => setValue(event.target.value)}
                    />
            </form>
            
            <table className='table-products'>
                    <thead>
                    <tr className='product-line'>
                        <th className='product-example'>ID</th>
                        <th className='product-example'>Name</th>
                        <th className='product-example'>Year</th>
                    </tr>
                    </thead>
                    {filteredProducts.map((product) => (
                    <ProductItem key={product.id} product={product} />
                    ))}
                </table>
        </div>
    );
}

export default Filter;