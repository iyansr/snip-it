import Link from 'next/link'

const index = () => {
	return (
		<div>
			<div className='my-12'>
				<h1 className='font-bold text-3xl'>📝 Snip!!</h1>
				<p>Personal code snippet that important or I cannot remember</p>
				<Link href='/new'>
					<a className='mt-3 transform inline-block bg-indigo-800 transition duration-200 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-md hover:shadow-lg hover:-translate-y-1'>
						Create a Snippet!
					</a>
				</Link>
			</div>
		</div>
	)
}

export default index
