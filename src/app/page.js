import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/arya-purple/theme.css';
import 'primereact/resources/primereact.min.css';          
import 'primeicons/primeicons.css';                        
import 'primeflex/primeflex.css';                          

import { Button } from 'primereact/button';
import Navbar from '@/components/Navbar';
import CTA from '@/components/CTA';
import Login from '@/components/Login';
import MainContent from '@/components/MainContent';

export default function Home() {
    return (
      <PrimeReactProvider>
        <div className="flex">
            <MainContent />
        </div>
      </PrimeReactProvider>
    );
}
