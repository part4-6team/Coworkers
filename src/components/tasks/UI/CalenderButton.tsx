import { useState } from 'react';
import CalenderIcon from '@icons/calendar.svg';
import Calender from '../Calender';

export default function CalenderButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="relative h-6 rounded-full bg-background-secondary p-[6px]"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <CalenderIcon />
      </button>
      <Calender isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
