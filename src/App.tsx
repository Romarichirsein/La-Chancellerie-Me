/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { Restaurant } from './pages/Restaurant';
import { Lounge } from './pages/Lounge';
import { Cave } from './pages/Cave';
import { Reservations } from './pages/Reservations';
import { Contact } from './pages/Contact';
import { Events } from './pages/Events';
import { Gallery } from './pages/Gallery';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col selection:bg-gold selection:text-black">
            <Navbar />
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurant" element={<Restaurant />} />
                <Route path="/lounge" element={<Lounge />} />
                <Route path="/cave" element={<Cave />} />
                <Route path="/evenements" element={<Events />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
            <Footer />
            <WhatsAppButton />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
