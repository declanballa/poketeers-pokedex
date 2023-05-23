import React from 'react';

import layout from 'styles/layout.module.scss';

export default function RootLayout({
	children,
}: {
  children: React.ReactNode;
}) {
	return (
		<html
			lang="en">
			<body className={ layout.main }>{ children }</body>
		</html>
	);
}
