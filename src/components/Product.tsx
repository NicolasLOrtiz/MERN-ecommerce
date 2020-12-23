import React from 'react';
import Rating from './Rating';

export default function Product(props: { product: any; }){
	const { product } = props;
	return(
		<div key={product._id} className="product-card">
            <a href={`/product/${product._id}`}><img className="medium" src={product.image} alt={product.name} /></a>
			<div className="product-card-content">
				<a href={`/product/${product._id}`}><h2>{product.name}</h2></a>
				<Rating rating={product.rating} numReviews={product.numReviews}></Rating>
				<div className="product-card-price">R${product.price}</div>
			</div>
		  </div>
	)
}

