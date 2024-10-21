import Link from 'next/link'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className='h-screen w-full'>
      <Header />
      <Hero />
      {/* <Layout>
      
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Poultry Store</h1>
        <p className="text-xl mb-8">Fresh, high-quality poultry for your table</p>
        <Link href="/products" className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Shop Now
        </Link>
      </div>
    </Layout> */}
    </div>
    
  )
}