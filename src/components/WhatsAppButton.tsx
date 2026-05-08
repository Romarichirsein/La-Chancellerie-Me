import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../constants';

export const WhatsAppButton = () => {
  const phoneNumber = CONTACT_INFO.phones[0].replace(/\s+/g, '');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Bonjour, je souhaiterais obtenir des informations concernant La Chancellerie %26 Me.`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      aria-label="Contact logic customer support on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
        Service Client WhatsApp
      </span>
    </motion.a>
  );
};
