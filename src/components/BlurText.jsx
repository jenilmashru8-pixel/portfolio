import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function BlurText({
  text = '',
  delay = 150,
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = 'easeOut',
  onAnimationComplete,
  className = '',
}) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom =
    direction === 'top'
      ? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-30px,0)' }
      : { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,30px,0)' };

  const defaultTo = [
    {
      filter: 'blur(5px)',
      opacity: 0.5,
      transform: direction === 'top' ? 'translate3d(0,5px,0)' : 'translate3d(0,-5px,0)',
    },
    { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
  ];

  const fromVariants = animationFrom || defaultFrom;
  const toVariants = animationTo || defaultTo;

  return (
    <h2
      ref={ref}
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: animateBy === 'words' ? '0.35em' : '0.05em',
        alignItems: 'center',
      }}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial={fromVariants}
          animate={inView ? toVariants[toVariants.length - 1] : fromVariants}
          transition={{
            duration: 0.55,
            delay: (index * delay) / 1000,
            ease: easing,
          }}
          onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
          style={{
            display: 'inline-block',
            willChange: 'transform, filter, opacity',
          }}
        >
          {element === ' ' ? '\u00A0' : element}
        </motion.span>
      ))}
    </h2>
  );
}
