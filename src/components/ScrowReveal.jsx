import '../components/styles/ScrowReview.css';
import { useEffect, useRef, useState } from "react";

function ScrollReveal({ children }) {

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

        
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px  60px 0px", 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();

  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "active" : ""}`}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;