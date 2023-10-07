import React, { Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react'

export default function Layout({ children }) {
	return (
		<>
			<Suspense fallback={null}>
				<div>
					<main>{children}</main>
				</div>
			</Suspense>
			<Analytics />
		</>
	)
}
