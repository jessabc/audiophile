import { MutableRefObject, useEffect, useRef, useState } from "react";

interface FadeInLeftSectionProps {
  children: React.ReactNode
}
 
export  function FadeInLeftSection({children}: FadeInLeftSectionProps) {
  const [isVisible, setVisible] = useState(true);
  const domRef =  useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (!domRef.current) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    
    if (domRef.current) observer.observe(domRef?.current);

    return () => {
      if (domRef.current) observer.unobserve(domRef?.current);
    }
    
  }, [])

    return (
      <div
        className={`fade-in-left-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {children}
      </div>
    );
  }