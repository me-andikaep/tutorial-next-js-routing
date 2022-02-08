import React from 'react';
import Link from 'next/link';

function ProductList({ productId = 100 }) {
	return (
		<>
			<Link href='/'>
				<a>Home</a>
			</Link>
			<h2>
				<Link href='/product/1'>
					<a>product 1</a>
				</Link>
			</h2>
			<h2>
				<Link href='/product/2'>
					<a>product 2</a>
				</Link>
			</h2>
			<h2>
				<Link href='/product/3' replace>
					<a>product 3</a>
				</Link>
			</h2>
			<h2>
				<Link href={`/product/3${productId}`}>
					<a>product {productId}</a>
				</Link>
			</h2>
		</>
	);
}

export default ProductList;
