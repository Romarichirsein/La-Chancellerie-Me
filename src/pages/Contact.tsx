import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { cn } from '../lib/utils';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Privatisation',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Real-time validation
    if (name === 'name') {
      if (value.length > 0 && value.length < 2) {
        setErrors(prev => ({ ...prev, name: 'Le nom doit contenir au moins 2 caractères' }));
      } else {
        setErrors(prev => ({ ...prev, name: '' }));
      }
    }

    if (name === 'email') {
      if (value.length > 0 && !validateEmail(value)) {
        setErrors(prev => ({ ...prev, email: 'Veuillez entrer une adresse email valide' }));
      } else {
        setErrors(prev => ({ ...prev, email: '' }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (errors.name || errors.email || !formData.name || !formData.email) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <main>
      <PageHeader 
        title="Contactez-nous" 
        subtitle="À votre service" 
        image="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2000&auto=format&fit=crop"
      />
      
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Informations</span>
              <h2 className="text-5xl font-serif">Restons en <span className="italic luxury-text-gradient">Liaison</span></h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Qu'il s'agisse d'une question, d'une privatisation ou d'une simple suggestion, notre équipe est à votre entière disposition.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Notre Adresse</h4>
                  <p className="text-muted-foreground font-light">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Téléphone</h4>
                  <div className="flex flex-col gap-1">
                    {CONTACT_INFO.phones.map(p => (
                      <p key={p} className="text-muted-foreground font-light">{p}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-2">E-mail</h4>
                  <p className="text-muted-foreground font-light">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border flex items-center gap-6">
              <span className="text-xs uppercase tracking-widest font-black italic mr-4 opacity-50">Social Media</span>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="bg-card border border-border p-8 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20">
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                  <CheckCircle2 size={48} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-serif">Merci !</h3>
                  <p className="text-muted-foreground">Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.</p>
                </div>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-gold text-xs uppercase tracking-widest font-bold border-b border-gold pb-1"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-3xl font-serif mb-10 text-center">Envoyez un <span className="luxury-text-gradient italic">Message</span></h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Nom</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={cn(
                          "w-full bg-background border px-4 py-4 rounded-xl focus:outline-none transition-all font-light",
                          errors.name ? "border-red-500 focus:border-red-500" : "border-border focus:border-gold"
                        )} 
                        placeholder="Votre nom" 
                      />
                      {errors.name && <p className="text-[10px] text-red-500 ml-1 font-bold">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Email</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={cn(
                          "w-full bg-background border px-4 py-4 rounded-xl focus:outline-none transition-all font-light",
                          errors.email ? "border-red-500 focus:border-red-500" : "border-border focus:border-gold"
                        )} 
                        placeholder="votre@email.com" 
                      />
                      {errors.email && <p className="text-[10px] text-red-500 ml-1 font-bold">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Sujet</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-background border border-border px-4 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors font-light"
                    >
                      <option>Privatisation</option>
                      <option>Événement Spécial</option>
                      <option>Question Générale</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Message</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5} 
                      className="w-full bg-background border border-border px-4 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors font-light resize-none" 
                      placeholder="Comment pouvons-nous vous aider ?"
                    ></textarea>
                  </div>
                  <button 
                    disabled={isLoading || !!errors.name || !!errors.email}
                    className="w-full py-5 bg-gold text-black uppercase tracking-[0.3em] font-black text-sm rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <><Send size={18} /> Envoyer</>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

