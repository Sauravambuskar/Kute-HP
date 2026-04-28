import { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';

interface AppointmentContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const AppointmentContext = createContext<AppointmentContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const useAppointment = () => useContext(AppointmentContext);

export const AppointmentProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppointmentContext.Provider value={{
      isOpen,
      openModal: () => setIsOpen(true),
      closeModal: () => setIsOpen(false),
    }}>
      {children}
    </AppointmentContext.Provider>
  );
};
