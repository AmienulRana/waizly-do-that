import { IModalProps } from "@/types";
import { useEffect, useState } from "react";


const Modal = ({ isOpen, onClose, children }: IModalProps) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsAnimated(true), 500);
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-red-black/70 backdrop-filter-blur-sm z-[999] flex items-center justify-center ${
            isAnimated ? "opacity-100" : "opacity-0"
          }`}
          onClick={onClose}
          style={{backdropFilter: 'blur(10px)'}}
        >
          <div
            className={`bg-gray-50 rounded-lg shadow-lg p-4 w-full max-w-md duration-300 ${
              isAnimated ? "translate-y-0" : "translate-y-10"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
