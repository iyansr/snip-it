import { AppProps } from 'next/app'

import '~styles/tailwind.scss'

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-indigo-600 w-full text-gray-300 p-10 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default App
