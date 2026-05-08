import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, Users, Clock, Send, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import * as Popover from '@radix-ui/react-popover';
import { cn } from '../lib/utils';

export const ReservationForm = ({ embedded = false }: { embedded?: boolean }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center p-12 bg-gold/10 border border-gold/20 rounded-3xl"
      >
        <CheckCircle2 size={64} className="text-gold mb-6" />
        <h3 className="text-3xl font-serif mb-4">Demande Envoyée</h3>
        <p className="text-muted-foreground max-w-sm mb-8">
          Votre demande de réservation a été transmise avec succès. Notre équipe vous contactera sous peu pour confirmer.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="px-8 py-3 bg-gold text-black uppercase tracking-widest font-bold text-xs rounded-full"
        >
          Nouvelle réservation
        </button>
      </motion.div>
    );
  }

  return (
    <section className={cn("px-6", embedded ? "" : "py-32 bg-muted/30")}>
      <div className={cn("max-w-4xl mx-auto", embedded ? "" : "")}>
        {!embedded && (
          <div className="text-center mb-16 space-y-4">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Planifiez votre visite</span>
            <h2 className="text-5xl md:text-6xl font-serif">Réservation de <span className="italic luxury-text-gradient">Table</span></h2>
          </div>
        )}

        <form 
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-card p-8 md:p-12 rounded-3xl border border-border shadow-2xl"
        >
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Nom complet</label>
            <input 
              required
              type="text" 
              placeholder="John Doe"
              className="w-full bg-background border border-border px-4 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors font-light"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Téléphone</label>
            <input 
              required
              type="tel" 
              placeholder="+237 ..."
              className="w-full bg-background border border-border px-4 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors font-light"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1 flex items-center gap-2">
              <CalendarIcon size={14} /> Date
            </label>
            <Popover.Root open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
              <Popover.Trigger asChild>
                <button
                  type="button"
                  className={cn(
                    "w-full bg-background border border-border px-4 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors font-light text-left flex items-center justify-between",
                    !date && "text-muted-foreground"
                  )}
                >
                  {date ? format(date, 'PPP', { locale: fr }) : "Sélectionner une date"}
                  <CalendarIcon size={16} className="text-gold opacity-50" />
                </button>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content
                  className="z-[100] bg-card border border-border p-4 rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200"
                  sideOffset={5}
                >
                  <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={(d) => {
                      setDate(d);
                      setIsCalendarOpen(false);
                    }}
                    locale={fr}
                    disabled={{ before: new Date() }}
                    classNames={{
                      months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                      month: "space-y-4",
                      caption: "flex justify-center pt-1 relative items-center",
                      caption_label: "text-sm font-serif text-gold font-bold",
                      nav: "space-x-1 flex items-center",
                      nav_button: cn(
                        "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 transition-opacity"
                      ),
                      nav_button_previous: "absolute left-1",
                      nav_button_next: "absolute right-1",
                      table: "w-full border-collapse space-y-1",
                      head_row: "flex",
                      head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
                      row: "flex w-full mt-2",
                      cell: "h-9 w-9 text-center text-sm p-0 relative focus-within:z-20",
                      day: cn(
                        "h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-lg hover:bg-gold/20 hover:text-gold transition-colors"
                      ),
                      day_selected: "bg-gold text-black hover:bg-gold hover:text-black focus:bg-gold focus:text-black",
                      day_today: "bg-muted text-foreground",
                      day_outside: "text-muted-foreground opacity-50",
                      day_disabled: "text-muted-foreground opacity-50 cursor-not-allowed",
                      day_hidden: "invisible",
                    }}
                    components={{
                      Chevron: (props) => {
                        if (props.orientation === 'left') return <ChevronLeft size={16} {...props} />;
                        return <ChevronRight size={16} {...props} />;
                      }
                    }}
                  />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>

          <div className="space-y-2 md:grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1 flex items-center gap-2">
                <Clock size={14} /> Heure
              </label>
              <select className="w-full bg-background border border-border px-4 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors font-light">
                <option>12:00</option>
                <option>13:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1 flex items-center gap-2">
                <Users size={14} /> Personnes
              </label>
              <select className="w-full bg-background border border-border px-4 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors font-light">
                <option>1 Personne</option>
                <option>2 Personnes</option>
                <option>4 Personnes</option>
                <option>6 Personnes</option>
                <option>8+ Personnes</option>
              </select>
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Espace souhaité</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Restaurant', 'Chicha Lounge', 'Terrasse', 'Cave'].map(option => (
                <label key={option} className="relative cursor-pointer group">
                  <input type="radio" name="area" className="peer sr-only" defaultChecked={option === 'Restaurant'} />
                  <div className="border border-border p-3 text-center rounded-xl peer-checked:border-gold peer-checked:bg-gold/5 transition-all group-hover:bg-muted font-medium text-sm">
                    {option}
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Notes particulières</label>
            <textarea 
              rows={3}
              placeholder="Allergies, anniversaire, demande spéciale..."
              className="w-full bg-background border border-border px-4 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors font-light resize-none"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="md:col-span-2 w-full py-5 bg-black dark:bg-gold text-white dark:text-black uppercase tracking-[0.3em] font-black text-sm rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
          >
            {loading ? 'Traitement...' : <><Send size={18} /> Confirmer la Réservation</>}
          </button>
        </form>
      </div>
    </section>
  );
};
