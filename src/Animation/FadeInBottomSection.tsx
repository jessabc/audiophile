import { useEffect, useRef, useState } from "react";


export  function FadeInBottomSection(props) {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      if(observer) {
         () => observer.unobserve(domRef.current);
      }
      // return
    }, []);

    return (
      <div
        className={`fade-in-bottom-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }