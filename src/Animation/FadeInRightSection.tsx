import { MutableRefObject, useEffect, useRef, useState } from "react"


interface FadeInRightSectionProps {
  children: React.ReactNode
}
 

export  function FadeInRightSection({children}: FadeInRightSectionProps) {
  const [isVisible, setVisible] = useState(true);
  const domRef =  useRef() as MutableRefObject<HTMLInputElement>

  // https://stackoverflow.com/questions/73051303/intersection-observer-in-typescript-throws-error-in-useref
  useEffect(() => {
    if (!domRef.current) return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    });
    
    if (domRef.current) observer.observe(domRef?.current)

    return () => {
      if (domRef.current) observer.unobserve(domRef?.current)
    }
  }, [])
 

  return (
    <div
      className={`fade-in-right-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  )
}