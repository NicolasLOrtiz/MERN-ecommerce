import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import LoadingSpinner from '../components/LoadingSpinner';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';

// eslint-disable-next-line @typescript-eslint/no-redeclare
interface Product {
	id: number,
}

export default function HomePage() {
	const dispatch = useDispatch();
	const productList = useSelector( (state: {productList: any}) => state.productList);

	const { loading, error, products } = productList;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<div>
			{loading ? (
				<LoadingSpinner></LoadingSpinner>
			) : error ? (
				<MessageBox variant="danger">{error}</MessageBox>
			) : (
				<div className="row center">
					{products.map((product: { id: string | number | null | undefined; }) => {
						return (
							<Product key={product.id} product={product}></Product>
						);
					})}
				</div>
			)}
		</div>
	);
}
