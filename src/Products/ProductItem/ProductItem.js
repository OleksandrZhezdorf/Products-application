import React from 'react';

export default function ProductItem(props) {
  const { product} = props;
  return (
    <tbody>
      <tr className='product-line'>
        <th className='product-example' style = {{ backgroundColor: product.color}}>{product.id}</th>
        <th className='product-example' style = {{ backgroundColor: product.color}}>{product.name}</th>
        <th className='product-example' style = {{ backgroundColor: product.color}}>{product.year}</th>
      </tr>
    </tbody>

  );
}