import { useEffect, useRef, useState } from "react";


interface FadeInRightSectionProps {
  children: React.ReactNode
}
 
export  function FadeInRightSection({children}: FadeInRightSectionProps) {
  const [isVisible, setVisible] = useState(true);
  const domRef =  useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const current = domRef.current;
if (!current) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    
    observer.observe(domRef.current);
    
   
      // return () => observer.unobserve(domRef.current);
    
      

  }, []);

    return (
      <div
        className={`fade-in-right-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {children}
      </div>
    );
  }