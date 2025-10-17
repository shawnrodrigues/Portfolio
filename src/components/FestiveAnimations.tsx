import { useEffect, useState } from 'react';
import { useFestive } from '../contexts/FestiveContext';

// Custom hook for page visibility
const usePageVisibility = () => {
  const [isVisible, setIsVisible] = useState(!document.hidden);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Also listen for focus/blur events as fallback
    window.addEventListener('focus', () => setIsVisible(true));
    window.addEventListener('blur', () => setIsVisible(false));

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', () => setIsVisible(true));
      window.removeEventListener('blur', () => setIsVisible(false));
    };
  }, []);

  return isVisible;
};

interface Firework {
  id: number;
  x: number;
  y: number;
  targetY: number;
  color: string;
  stage: 'launching' | 'exploding';
  launchSpeed: number;
  particles: Particle[];
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  life: number;
  maxLife: number;
}

const FESTIVE_COLORS = [
  '#FF6B35', '#F7931E', '#FFD700', '#FF1744', '#E91E63',
  '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4',
  '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39'
];

const BIRTHDAY_COLORS = [
  '#FF69B4', '#FF1493', '#FFD700', '#FF4500', '#32CD32',
  '#00BFFF', '#8A2BE2', '#FF6347', '#FFFF00', '#FF69B4'
];

const NEWYEAR_COLORS = ['#FFD700', '#FFA500', '#FF6347', '#DC143C', '#4169E1'];
const HALLOWEEN_COLORS = ['#FF7518', '#8B0000', '#000000', '#FFFF00', '#800080'];

interface Snowflake {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  drift: number;
}

interface Balloon {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  speed: number;
  bobbing: number;
  stringLength: number;
}

interface Confetti {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  rotation: number;
  rotationSpeed: number;
  shape: 'square' | 'circle' | 'triangle';
}





interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  twinkle: number;
  speed: number;
}

interface Pumpkin {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  speed: number;
  sway: number;
  glowIntensity: number;
}

export default function FestiveAnimations() {
  const { festiveTheme, fireworksActive } = useFestive();
  const isPageVisible = usePageVisibility();
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [pumpkins, setPumpkins] = useState<Pumpkin[]>([]);
  
  const isFestiveMode = festiveTheme !== 'off' && isPageVisible;

  const createFirework = (startX?: number, targetY?: number) => {
    // Launch from bottom of screen
    const x = startX || Math.random() * window.innerWidth;
    const launchY = window.innerHeight + 20; // Start below screen
    const finalY = targetY || (window.innerHeight * 0.2) + (Math.random() * window.innerHeight * 0.4); // Explode in upper area
    
    return {
      id: Date.now() + Math.random(),
      x,
      y: launchY,
      targetY: finalY,
      color: FESTIVE_COLORS[Math.floor(Math.random() * FESTIVE_COLORS.length)],
      stage: 'launching' as const,
      launchSpeed: 8 + Math.random() * 4, // Speed of upward movement
      particles: []
    };
  };

  const explodeFirework = (firework: Firework) => {
    const particles: Particle[] = [];
    const particleCount = 20 + Math.random() * 25; // 20-45 particles for bigger explosion
    const color = firework.color;

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const velocity = 3 + Math.random() * 6;
      
      particles.push({
        id: i,
        x: firework.x,
        y: firework.y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        color: Math.random() < 0.7 ? color : FESTIVE_COLORS[Math.floor(Math.random() * FESTIVE_COLORS.length)],
        size: 2 + Math.random() * 5,
        life: 80 + Math.random() * 40, // Longer lasting particles
        maxLife: 120
      });
    }

    return {
      ...firework,
      stage: 'exploding' as const,
      particles
    };
  };

  const updateFireworks = (prevFireworks: Firework[]) => {
    return prevFireworks.map(firework => {
      if (firework.stage === 'launching') {
        // Move firework upward
        const newY = firework.y - firework.launchSpeed;
        
        // Check if it reached target height
        if (newY <= firework.targetY) {
          // Explode!
          return explodeFirework({ ...firework, y: firework.targetY });
        }
        
        return { ...firework, y: newY };
      } else {
        // Handle exploding particles
        return {
          ...firework,
          particles: firework.particles
            .map(particle => ({
              ...particle,
              x: particle.x + particle.vx,
              y: particle.y + particle.vy,
              vy: particle.vy + 0.15, // gravity
              vx: particle.vx * 0.99, // air resistance
              life: particle.life - 1
            }))
            .filter(particle => particle.life > 0)
        };
      }
    }).filter(firework => 
      firework.stage === 'launching' || 
      (firework.stage === 'exploding' && firework.particles.length > 0)
    );
  };

  // Create snowflakes for Christmas theme
  const createSnowflakes = () => {
    const newSnowflakes: Snowflake[] = [];
    for (let i = 0; i < 50; i++) {
      newSnowflakes.push({
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * -window.innerHeight,
        size: 2 + Math.random() * 6,
        speed: 1 + Math.random() * 3,
        opacity: 0.3 + Math.random() * 0.7,
        drift: (Math.random() - 0.5) * 2
      });
    }
    return newSnowflakes;
  };

  // Update snowflakes animation
  const updateSnowflakes = (prevSnowflakes: Snowflake[]) => {
    return prevSnowflakes.map(flake => ({
      ...flake,
      x: flake.x + flake.drift,
      y: flake.y + flake.speed,
    })).filter(flake => flake.y < window.innerHeight + 50)
      .concat(
        // Add new snowflakes from the top
        Math.random() < 0.1 ? [{
          id: Math.random(),
          x: Math.random() * window.innerWidth,
          y: -10,
          size: 2 + Math.random() * 6,
          speed: 1 + Math.random() * 3,
          opacity: 0.3 + Math.random() * 0.7,
          drift: (Math.random() - 0.5) * 2
        }] : []
      );
  };

  // Create balloons for birthday theme
  const createBalloons = () => {
    const newBalloons: Balloon[] = [];
    for (let i = 0; i < 8; i++) {
      newBalloons.push({
        id: Math.random(),
        x: (window.innerWidth / 10) * (i + 1) + (Math.random() - 0.5) * 100,
        y: window.innerHeight + Math.random() * 50,
        color: BIRTHDAY_COLORS[Math.floor(Math.random() * BIRTHDAY_COLORS.length)],
        size: 20 + Math.random() * 15,
        speed: 1 + Math.random() * 2,
        bobbing: Math.random() * Math.PI * 2,
        stringLength: 50 + Math.random() * 30
      });
    }
    return newBalloons;
  };

  // Create confetti burst with different colors based on theme
  const createConfetti = (theme = 'birthday') => {
    const newConfetti: Confetti[] = [];
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight * 0.3;
    
    // Choose colors based on theme
    let colors = BIRTHDAY_COLORS;
    if (theme === 'halloween') colors = HALLOWEEN_COLORS;
    else if (theme === 'holi') colors = FESTIVE_COLORS;
    
    for (let i = 0; i < 50; i++) {
      const angle = (Math.random() * Math.PI * 2);
      const velocity = 8 + Math.random() * 12;
      
      newConfetti.push({
        id: Math.random(),
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 5, // Slight upward bias
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 3 + Math.random() * 5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        shape: Math.random() < 0.33 ? 'square' : Math.random() < 0.5 ? 'circle' : 'triangle'
      });
    }
    return newConfetti;
  };

  // Update balloons animation
  const updateBalloons = (prevBalloons: Balloon[]) => {
    return prevBalloons.map(balloon => ({
      ...balloon,
      y: balloon.y - balloon.speed,
      x: balloon.x + Math.sin(balloon.bobbing) * 0.5,
      bobbing: balloon.bobbing + 0.05
    })).filter(balloon => balloon.y > -100);
  };

  // Update confetti animation
  const updateConfetti = (prevConfetti: Confetti[]) => {
    return prevConfetti.map(piece => ({
      ...piece,
      x: piece.x + piece.vx,
      y: piece.y + piece.vy,
      vy: piece.vy + 0.3, // gravity
      vx: piece.vx * 0.99, // air resistance
      rotation: piece.rotation + piece.rotationSpeed
    })).filter(piece => piece.y < window.innerHeight + 50 && piece.x > -50 && piece.x < window.innerWidth + 50);
  };









  // New Year sparkles
  const createSparkles = () => {
    const newSparkles: Sparkle[] = [];
    const colors = NEWYEAR_COLORS;
    
    for (let i = 0; i < 50; i++) {
      newSparkles.push({
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: 3 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        twinkle: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 1.2
      });
    }
    return newSparkles;
  };

  const updateSparkles = (prevSparkles: Sparkle[]) => {
    return prevSparkles.map(sparkle => ({
      ...sparkle,
      y: sparkle.y + sparkle.speed,
      x: sparkle.x + (Math.random() - 0.5) * 0.5, // Slight horizontal drift
      twinkle: sparkle.twinkle + 0.1
    })).filter(sparkle => sparkle.y < window.innerHeight + 50 && sparkle.x > -20 && sparkle.x < window.innerWidth + 20)
      .concat(
        // Add new sparkles from the top occasionally
        Math.random() < 0.15 ? [{
          id: Math.random(),
          x: Math.random() * window.innerWidth,
          y: -10,
          size: 3 + Math.random() * 8,
          color: NEWYEAR_COLORS[Math.floor(Math.random() * NEWYEAR_COLORS.length)],
          twinkle: Math.random() * Math.PI * 2,
          speed: 0.3 + Math.random() * 1.2
        }] : []
      );
  };

  // Halloween pumpkins
  const createPumpkins = () => {
    const newPumpkins: Pumpkin[] = [];
    
    for (let i = 0; i < 12; i++) {
      newPumpkins.push({
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 20,
        size: 15 + Math.random() * 25,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        speed: 1 + Math.random() * 2.5,
        sway: Math.random() * Math.PI * 2,
        glowIntensity: 0.5 + Math.random() * 0.5
      });
    }
    return newPumpkins;
  };

  const updatePumpkins = (prevPumpkins: Pumpkin[]) => {
    return prevPumpkins.map(pumpkin => ({
      ...pumpkin,
      y: pumpkin.y - pumpkin.speed,
      x: pumpkin.x + Math.sin(pumpkin.sway) * 1.5,
      sway: pumpkin.sway + 0.03,
      rotation: pumpkin.rotation + pumpkin.rotationSpeed,
      glowIntensity: 0.3 + Math.sin(Date.now() * 0.005 + pumpkin.id) * 0.4
    })).filter(pumpkin => pumpkin.y > -100);
  };

  // Create animations when triggered
  useEffect(() => {
    if (fireworksActive && isFestiveMode) {
      if (festiveTheme === 'diwali') {
        // Create fireworks for Diwali
        const createRandomFireworks = () => {
          const count = 3 + Math.random() * 5; // 3-8 fireworks
          
          for (let i = 0; i < count; i++) {
            setTimeout(() => {
              const x = Math.random() * window.innerWidth;
              const targetY = Math.random() * (window.innerHeight * 0.4) + window.innerHeight * 0.1;
              
              setFireworks(prev => [...prev, createFirework(x, targetY)]);
            }, i * 800 + Math.random() * 1200); // Slower stagger
          }
        };

        createRandomFireworks();
      } else if (festiveTheme === 'christmas') {
        // Create burst of snowflakes for Christmas
        setSnowflakes(prev => [...prev, ...createSnowflakes().slice(0, 20)]);
      } else if (festiveTheme === 'birthday') {
        // Create balloons and confetti for birthday
        setBalloons(prev => [...prev, ...createBalloons()]);
        setConfetti(prev => [...prev, ...createConfetti('birthday')]);
      } else if (festiveTheme === 'newyear') {
        // Create sparkles for New Year
        setSparkles(prev => [...prev, ...createSparkles()]);
      } else if (festiveTheme === 'holi') {
        // Create colorful powder bursts for Holi
        setConfetti(prev => [...prev, ...createConfetti('holi')]);
      } else if (festiveTheme === 'halloween') {
        // Create Halloween pumpkins and confetti
        setPumpkins(prev => [...prev, ...createPumpkins()]);
        setConfetti(prev => [...prev, ...createConfetti('halloween')]);
      }
    }
  }, [fireworksActive, festiveTheme, isFestiveMode]);

  // Animation loops for both themes
  useEffect(() => {
    if (!isFestiveMode) {
      setFireworks([]);
      setSnowflakes([]);
      return;
    }

    const interval = setInterval(() => {
      if (festiveTheme === 'diwali') {
        setFireworks(updateFireworks);
      } else if (festiveTheme === 'christmas') {
        setSnowflakes(updateSnowflakes);
        // Initialize snowflakes if none exist
        setSnowflakes(prev => prev.length === 0 ? createSnowflakes() : prev);
      } else if (festiveTheme === 'birthday') {
        setBalloons(updateBalloons);
        setConfetti(updateConfetti);
      } else if (festiveTheme === 'newyear') {
        setSparkles(updateSparkles);
      } else if (festiveTheme === 'holi') {
        setConfetti(updateConfetti);
      } else if (festiveTheme === 'halloween') {
        setPumpkins(updatePumpkins);
        setConfetti(updateConfetti);
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [isFestiveMode, festiveTheme]);

  // Clear animations when theme changes
  useEffect(() => {
    const clearAll = () => {
      setFireworks([]);
      setSnowflakes([]);
      setBalloons([]);
      setConfetti([]);
      setSparkles([]);
      setPumpkins([]);
    };

    // Clear all animations except current theme
    if (festiveTheme === 'off') {
      clearAll();
    } else if (festiveTheme === 'diwali') {
      setSnowflakes([]);
      setBalloons([]);
      setConfetti([]);
      setSparkles([]);
      setPumpkins([]);
    } else if (festiveTheme === 'christmas') {
      setFireworks([]);
      setBalloons([]);
      setConfetti([]);
      setSparkles([]);
      setPumpkins([]);
    } else {
      // For all other themes, clear everything except what's needed
      clearAll();
    }
  }, [festiveTheme]);

  // Removed click interaction to avoid interfering with header clicks

  if (!isFestiveMode) return null;

  return (
    <>
      {/* Festive Animations Canvas */}
      <div 
        className={`fixed inset-0 pointer-events-none z-50 ${!isPageVisible ? 'pause-animations' : ''}`}
        style={{ 
          mixBlendMode: festiveTheme === 'christmas' ? 'normal' : 'screen',
          animationPlayState: isPageVisible ? 'running' : 'paused'
        }}
      >
        <svg 
          width="100%" 
          height="100%" 
          className="absolute inset-0"
          style={{
            animationPlayState: isPageVisible ? 'running' : 'paused'
          }}
        >
          {/* Diwali Fireworks */}
          {festiveTheme === 'diwali' && fireworks.map(firework => (
            <g key={firework.id}>
              {/* Launching firework trail */}
              {firework.stage === 'launching' && (
                <>
                  {/* Main firework projectile */}
                  <circle
                    cx={firework.x}
                    cy={firework.y}
                    r="3"
                    fill={firework.color}
                    style={{
                      filter: `drop-shadow(0 0 8px ${firework.color})`
                    }}
                  />
                  {/* Trailing sparks */}
                  <circle
                    cx={firework.x + (Math.random() - 0.5) * 4}
                    cy={firework.y + 8 + Math.random() * 12}
                    r="1.5"
                    fill={firework.color}
                    opacity="0.8"
                  />
                  <circle
                    cx={firework.x + (Math.random() - 0.5) * 3}
                    cy={firework.y + 16 + Math.random() * 8}
                    r="1"
                    fill={firework.color}
                    opacity="0.6"
                  />
                </>
              )}
              
              {/* Exploding particles */}
              {firework.stage === 'exploding' && 
                firework.particles.map(particle => (
                  <circle
                    key={`${firework.id}-${particle.id}`}
                    cx={particle.x}
                    cy={particle.y}
                    r={particle.size}
                    fill={particle.color}
                    opacity={particle.life / particle.maxLife}
                    style={{
                      filter: `drop-shadow(0 0 ${particle.size * 2}px ${particle.color})`
                    }}
                  />
                ))
              }
            </g>
          ))}

          {/* Christmas Snowflakes */}
          {festiveTheme === 'christmas' && snowflakes.map(flake => (
            <g key={flake.id}>
              {/* Snowflake */}
              <circle
                cx={flake.x}
                cy={flake.y}
                r={flake.size / 2}
                fill="white"
                opacity={flake.opacity}
                style={{
                  filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.5))'
                }}
              />
              {/* Snowflake cross pattern */}
              <g opacity={flake.opacity}>
                <line
                  x1={flake.x - flake.size}
                  y1={flake.y}
                  x2={flake.x + flake.size}
                  y2={flake.y}
                  stroke="white"
                  strokeWidth="1"
                />
                <line
                  x1={flake.x}
                  y1={flake.y - flake.size}
                  x2={flake.x}
                  y2={flake.y + flake.size}
                  stroke="white"
                  strokeWidth="1"
                />
                <line
                  x1={flake.x - flake.size * 0.7}
                  y1={flake.y - flake.size * 0.7}
                  x2={flake.x + flake.size * 0.7}
                  y2={flake.y + flake.size * 0.7}
                  stroke="white"
                  strokeWidth="0.5"
                />
                <line
                  x1={flake.x - flake.size * 0.7}
                  y1={flake.y + flake.size * 0.7}
                  x2={flake.x + flake.size * 0.7}
                  y2={flake.y - flake.size * 0.7}
                  stroke="white"
                  strokeWidth="0.5"
                />
              </g>
            </g>
          ))}

          {/* Birthday Balloons and Confetti */}
          {festiveTheme === 'birthday' && (
            <>
              {/* Balloons */}
              {balloons.map(balloon => (
                <g key={balloon.id}>
                  {/* Balloon string */}
                  <line
                    x1={balloon.x}
                    y1={balloon.y + balloon.size}
                    x2={balloon.x}
                    y2={balloon.y + balloon.size + balloon.stringLength}
                    stroke="#333"
                    strokeWidth="1"
                    opacity="0.7"
                  />
                  {/* Balloon */}
                  <ellipse
                    cx={balloon.x}
                    cy={balloon.y}
                    rx={balloon.size * 0.8}
                    ry={balloon.size}
                    fill={balloon.color}
                    style={{
                      filter: `drop-shadow(2px 2px 4px rgba(0,0,0,0.3))`
                    }}
                  />
                  {/* Balloon highlight */}
                  <ellipse
                    cx={balloon.x - balloon.size * 0.2}
                    cy={balloon.y - balloon.size * 0.3}
                    rx={balloon.size * 0.15}
                    ry={balloon.size * 0.25}
                    fill="rgba(255,255,255,0.4)"
                  />
                  {/* Balloon knot */}
                  <circle
                    cx={balloon.x}
                    cy={balloon.y + balloon.size}
                    r="2"
                    fill="#333"
                  />
                </g>
              ))}

              {/* Confetti */}
              {confetti.map(piece => (
                <g key={piece.id} transform={`rotate(${piece.rotation} ${piece.x} ${piece.y})`}>
                  {piece.shape === 'square' && (
                    <rect
                      x={piece.x - piece.size / 2}
                      y={piece.y - piece.size / 2}
                      width={piece.size}
                      height={piece.size}
                      fill={piece.color}
                    />
                  )}
                  {piece.shape === 'circle' && (
                    <circle
                      cx={piece.x}
                      cy={piece.y}
                      r={piece.size / 2}
                      fill={piece.color}
                    />
                  )}
                  {piece.shape === 'triangle' && (
                    <polygon
                      points={`${piece.x},${piece.y - piece.size / 2} ${piece.x - piece.size / 2},${piece.y + piece.size / 2} ${piece.x + piece.size / 2},${piece.y + piece.size / 2}`}
                      fill={piece.color}
                    />
                  )}
                </g>
              ))}
            </>
          )}

          {/* Holi and Halloween Confetti */}
          {(festiveTheme === 'holi' || festiveTheme === 'halloween') && confetti.map(piece => (
            <g key={piece.id} transform={`rotate(${piece.rotation} ${piece.x} ${piece.y})`}>
              {piece.shape === 'square' && (
                <rect
                  x={piece.x - piece.size / 2}
                  y={piece.y - piece.size / 2}
                  width={piece.size}
                  height={piece.size}
                  fill={piece.color}
                />
              )}
              {piece.shape === 'circle' && (
                <circle
                  cx={piece.x}
                  cy={piece.y}
                  r={piece.size / 2}
                  fill={piece.color}
                />
              )}
              {piece.shape === 'triangle' && (
                <polygon
                  points={`${piece.x},${piece.y - piece.size / 2} ${piece.x - piece.size / 2},${piece.y + piece.size / 2} ${piece.x + piece.size / 2},${piece.y + piece.size / 2}`}
                  fill={piece.color}
                />
              )}
            </g>
          ))}

          {/* Halloween Pumpkins */}
          {festiveTheme === 'halloween' && pumpkins.map(pumpkin => (
            <g key={pumpkin.id}>
              <g transform={`translate(${pumpkin.x}, ${pumpkin.y}) rotate(${pumpkin.rotation})`}>
                {/* Pumpkin body - main round shape */}
                <ellipse
                  cx="0"
                  cy="0"
                  rx={pumpkin.size * 0.9}
                  ry={pumpkin.size * 0.8}
                  fill="#FF7518"
                  style={{
                    filter: `drop-shadow(0 0 ${pumpkin.size * pumpkin.glowIntensity * 0.5}px #FF7518)`
                  }}
                />
                {/* Pumpkin vertical ridges */}
                <ellipse
                  cx={pumpkin.size * -0.4}
                  cy="0"
                  rx={pumpkin.size * 0.12}
                  ry={pumpkin.size * 0.75}
                  fill="#E65A00"
                  opacity="0.6"
                />
                <ellipse
                  cx={pumpkin.size * -0.15}
                  cy="0"
                  rx={pumpkin.size * 0.12}
                  ry={pumpkin.size * 0.78}
                  fill="#E65A00"
                  opacity="0.4"
                />
                <ellipse
                  cx={pumpkin.size * 0.15}
                  cy="0"
                  rx={pumpkin.size * 0.12}
                  ry={pumpkin.size * 0.78}
                  fill="#E65A00"
                  opacity="0.4"
                />
                <ellipse
                  cx={pumpkin.size * 0.4}
                  cy="0"
                  rx={pumpkin.size * 0.12}
                  ry={pumpkin.size * 0.75}
                  fill="#E65A00"
                  opacity="0.6"
                />
                {/* Pumpkin stem */}
                <rect
                  x={pumpkin.size * -0.08}
                  y={pumpkin.size * -0.9}
                  width={pumpkin.size * 0.16}
                  height={pumpkin.size * 0.25}
                  fill="#228B22"
                  rx="3"
                />
                {/* Spooky face - left eye */}
                <polygon
                  points={`${pumpkin.size * -0.3},${pumpkin.size * -0.15} ${pumpkin.size * -0.15},${pumpkin.size * -0.25} ${pumpkin.size * -0.15},${pumpkin.size * -0.05}`}
                  fill="#000000"
                />
                {/* Spooky face - right eye */}
                <polygon
                  points={`${pumpkin.size * 0.3},${pumpkin.size * -0.15} ${pumpkin.size * 0.15},${pumpkin.size * -0.25} ${pumpkin.size * 0.15},${pumpkin.size * -0.05}`}
                  fill="#000000"
                />
                {/* Spooky face - nose */}
                <polygon
                  points={`${pumpkin.size * 0},${pumpkin.size * -0.05} ${pumpkin.size * -0.08},${pumpkin.size * 0.05} ${pumpkin.size * 0.08},${pumpkin.size * 0.05}`}
                  fill="#000000"
                />
                {/* Spooky face - mouth */}
                <path
                  d={`M ${pumpkin.size * -0.3} ${pumpkin.size * 0.15} 
                     L ${pumpkin.size * -0.15} ${pumpkin.size * 0.3}
                     L ${pumpkin.size * -0.05} ${pumpkin.size * 0.15}
                     L ${pumpkin.size * 0.05} ${pumpkin.size * 0.3}
                     L ${pumpkin.size * 0.15} ${pumpkin.size * 0.15}
                     L ${pumpkin.size * 0.3} ${pumpkin.size * 0.25}
                     L ${pumpkin.size * -0.3} ${pumpkin.size * 0.25} Z`}
                  fill="#000000"
                />
                {/* Inner glow */}
                <ellipse
                  cx="0"
                  cy="0"
                  rx={pumpkin.size * 0.7}
                  ry={pumpkin.size * 0.6}
                  fill="#FFFF00"
                  opacity={pumpkin.glowIntensity * 0.2}
                />
              </g>
            </g>
          ))}

          {/* New Year Sparkles */}
          {festiveTheme === 'newyear' && sparkles.map(sparkle => (
            <g key={sparkle.id}>
              <circle
                cx={sparkle.x}
                cy={sparkle.y}
                r={sparkle.size * (0.5 + Math.sin(sparkle.twinkle) * 0.5)}
                fill={sparkle.color}
                opacity={0.6 + Math.sin(sparkle.twinkle) * 0.4}
                style={{
                  filter: `drop-shadow(0 0 ${sparkle.size * 2}px ${sparkle.color})`
                }}
              />
              {/* Sparkle rays */}
              <g opacity={0.8 + Math.sin(sparkle.twinkle) * 0.2}>
                <line
                  x1={sparkle.x - sparkle.size}
                  y1={sparkle.y}
                  x2={sparkle.x + sparkle.size}
                  y2={sparkle.y}
                  stroke={sparkle.color}
                  strokeWidth="1"
                />
                <line
                  x1={sparkle.x}
                  y1={sparkle.y - sparkle.size}
                  x2={sparkle.x}
                  y2={sparkle.y + sparkle.size}
                  stroke={sparkle.color}
                  strokeWidth="1"
                />
              </g>
            </g>
          ))}


        </svg>
      </div>
    </>
  );
}
