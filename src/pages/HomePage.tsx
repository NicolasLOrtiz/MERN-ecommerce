import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';

// eslint-disable-next-line @typescript-eslint/no-redeclare
interface Product {
	id: number,
	// name: string,
	// category: string,
	// image: string,
	// price: number,
	// brand: string,
	// rating: number,
	// numReviews: number,
	// description: string,
	// contInStock: number,
}

export default function HomePage() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fecthData = async () => {
			try {
				setLoading(true);
				const { data } = await axios.get('/api/products');
				setLoading(false);
				setProducts(data);
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		};
		fecthData();
	}, []);

	return (
		<div>
			{loading ? (
				<LoadingSpinner></LoadingSpinner>
			) : error ? (
				<MessageBox variant="danger">{error}</MessageBox>
			) : (
				<div className="row center">
					{products.map((product) => {
						return (
							<Product key={product.id} product={product}></Product>
						);
					})}
				</div>
			)}
		</div>
	);
}