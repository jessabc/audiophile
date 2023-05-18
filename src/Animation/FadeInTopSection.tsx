import { MutableRefObject, useEffect, useRef, useState } from "react";


interface FadeInTopSectionProps {
  children: React.ReactNode
}

export  function FadeInTopSection({children}: FadeInTopSectionProps) {
  const [isVisible, setVisible] = useState(true);
  const domRef =  useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const current = domRef.current;
if (!current) return;

if(current) {
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    
    observer.observe(domRef.current);
    
   
      // return () => observer.unobserve(domRef.current);
}
    
    
      

  }, []);

    return (
      <div
        className={`fade-in-top-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {children}
      </div>
    );
  }