import React from 'react';
import { FaSpinner } from 'react-icons/fa';

export default function LoadingSpinner(){
	return (
		<div>
			<FaSpinner></FaSpinner> Carregando ...
		</div>
	);
}