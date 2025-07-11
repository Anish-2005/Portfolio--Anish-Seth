'use client';

import { useEffect, ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  identifier: string;
}

interface GlowConfig {
  proximity: number;
  spread: number;
  blur: number;
  gap: number;
  vertical: boolean;
  opacity: number;
}

const GlowCard: React.FC<GlowCardProps> = ({ children, identifier }) => {
  useEffect(() => {
    const CONTAINER = document.querySelector(`.glow-container-${identifier}`) as HTMLElement;
    const CARDS = document.querySelectorAll(`.glow-card-${identifier}`) as NodeListOf<HTMLElement>;

    if (!CONTAINER || !CARDS.length) return;

    const CONFIG: GlowConfig = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event: MouseEvent | PointerEvent) => {
      Array.from(CARDS).forEach((CARD) => {
        const CARD_BOUNDS = CARD.getBoundingClientRect();

        if (
          event?.clientX > CARD_BOUNDS.left - CONFIG.proximity &&
          event?.clientX < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event?.clientY > CARD_BOUNDS.top - CONFIG.proximity &&
          event?.clientY < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty('--active', '1');
        } else {
          CARD.style.setProperty('--active', CONFIG.opacity.toString());
        }

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];

        let ANGLE =
          (Math.atan2(event?.clientY - CARD_CENTER[1], event?.clientX - CARD_CENTER[0]) *
            180) /
          Math.PI;

        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

        CARD.style.setProperty('--start', (ANGLE + 90).toString());
      });
    };

    const RESTYLE = () => {
      CONTAINER.style.setProperty('--gap', CONFIG.gap.toString());
      CONTAINER.style.setProperty('--blur', CONFIG.blur.toString());
      CONTAINER.style.setProperty('--spread', CONFIG.spread.toString());
      CONTAINER.style.setProperty(
        '--direction',
        CONFIG.vertical ? 'column' : 'row'
      );
    };

    RESTYLE();
    UPDATE({ clientX: 0, clientY: 0 } as MouseEvent);

    const handlePointerMove = (event: PointerEvent) => UPDATE(event);
    document.body.addEventListener('pointermove', handlePointerMove);

    // Cleanup event listener
    return () => {
      document.body.removeEventListener('pointermove', handlePointerMove);
    };
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article 
        className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-accent-500/20 transition-all duration-300 relative bg-dark-800/40 backdrop-blur-sm text-white rounded-xl hover:border-transparent w-full`}
      >
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;