import 'bootstrap/dist/css/bootstrap.css';
import styles from '@/styles/Home.module.css'
import '@/styles/globals.css'
import { useEffect } from 'react';
import Asidebar from '@/components/Asidebar';
import Navbar from '@/components/Navbar';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])
  return <>
    <div className='screen'>
      <div className='asidebar'>
        <Asidebar />
      </div>
      <div className='formbody'>
        <Navbar />
      </div>
    </div>

    <Component {...pageProps} />
  </>

}
