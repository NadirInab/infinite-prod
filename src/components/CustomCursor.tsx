import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number>();

  useEffect(() => {
    const updateTargetPosition = (e: MouseEvent) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseEnter2 = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, .cursor-hover, [role="button"], input, textarea')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave2 = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, .cursor-hover, [role="button"], input, textarea')) {
        setIsHovering(false);
      }
    };

    // Smooth animation loop
    const animateCursor = () => {
      setPosition(prevPosition => ({
        x: prevPosition.x + (targetPosition.x - prevPosition.x) * 0.15,
        y: prevPosition.y + (targetPosition.y - prevPosition.y) * 0.15,
      }));
      animationRef.current = requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', updateTargetPosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseEnter2);
    document.addEventListener('mouseout', handleMouseLeave2);
    
    animationRef.current = requestAnimationFrame(animateCursor);

    return () => {
      document.removeEventListener('mousemove', updateTargetPosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseEnter2);
      document.removeEventListener('mouseout', handleMouseLeave2);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetPosition, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed pointer-events-none z-[9999] w-3 h-3 rounded-full transition-all duration-200 ease-out ${
          isClicking ? 'scale-75' : 'scale-100'
        } ${
          isHovering ? 'bg-blue-500 w-8 h-8' : 'bg-orange-500'
        }`}
        style={{
          left: position.x - (isHovering ? 16 : 6),
          top: position.y - (isHovering ? 16 : 6),
          mixBlendMode: 'difference',
        }}
      />
      
      {/* Trailing circle */}
      <div
        className={`fixed pointer-events-none z-[9998] w-8 h-8 rounded-full border-2 transition-all duration-300 ease-out ${
          isHovering ? 'border-blue-500/50 scale-150' : 'border-orange-500/30 scale-100'
        }`}
        style={{
          left: targetPosition.x - 16,
          top: targetPosition.y - 16,
          transform: `scale(${isHovering ? 1.5 : 1})`,
          opacity: isClicking ? 0.5 : 0.7,
        }}
      />
    </>
  );
};

export default CustomCursor;