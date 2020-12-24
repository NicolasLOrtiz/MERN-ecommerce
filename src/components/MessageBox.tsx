import React from 'react';

export default function MessageBox(props: { variant: any, children: any }){
	
	return (
		<div className={`alert alert-${props.variant || 'info'}`}>
			{props.children}
		</div>
	);
}