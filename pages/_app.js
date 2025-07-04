import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={user} />
      <Component {...pageProps} user={user} />
      <Footer />
    </div>
  );
}

export default MyApp;