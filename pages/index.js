import Head from 'next/head'
import Navbar from '../components/Navbar'



export default function Home() {

  return (
    <div className='bg-light-primary dark:bg-dark-primary h-screen'>
      <Head>
        <title>Next Dark Mode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div className='p-10 text-dark-primary dark:text-light-primary'>
        <span className='text-4xl'>Welcome,</span>
        <p className='mt-4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam semper metus vel sagittis. Praesent a tellus nec nunc ornare faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris tempus pretium massa, ac placerat dolor ultricies sit amet. Ut tempor augue ac ex luctus tristique. Morbi nec enim rutrum, scelerisque dui ut, accumsan orci. Aenean ultricies enim quis est rutrum semper. Donec ultrices volutpat leo at tempor.
        </p>
      </div>
      
    </div>
  )
}
