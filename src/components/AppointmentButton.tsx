import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface AppointmentButtonProps {
  className?: string;
  onClick?: () => void;
}

const AppointmentButton = ({ className = '', onClick }: AppointmentButtonProps) => {
  const handleClick = () => {
    // Trigger animation
    onClick?.();
    
    // Open appointment modal or navigate to appointment page
    // You can customize this based on your needs
    window.open('https://calendly.com/boucharebsami0404', '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`flex items-center gap-2 bg-primary px-4 py-2 rounded-lg text-white ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 500,
        damping: 25
      }}
    >
      <Calendar className="w-5 h-5" />
      <span>Termin Vereinbaren</span>
    </motion.button>
  );
};

export default AppointmentButton;
