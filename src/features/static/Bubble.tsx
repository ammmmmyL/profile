import { LinearGradient } from '../../data';
import './../../App.css';
import './Bubble.css';

type Props = {
  gradient?: LinearGradient;
  backgroundWidth: number; // in px
  backgroundHeight: number; // in px
  size: number; // in px
};

/**
 * Static floating bubble
 *
 * @param {LinearGradient} gradient Background gradient color in format
 * linear-gradient(${number}deg, ${string}, ${string})
 * @param {number} backgroundWidth background width in px
 * @param {number} backgroundHeight background height in px
 * @param {number} size size in px
 * @returns
 */
export const Bubble = ({
  gradient = 'linear-gradient(150deg, #d299c2, #fef9d7)',
  backgroundWidth,
  backgroundHeight,
  size,
}: Props) => {
  return (
    <div
      className={`
        container
        flex
        relative items-center justify-center 
        `}
      style={{
        background: gradient,
        width: backgroundWidth,
        height: backgroundHeight,
        overflow: 'hidden',
      }}
    >
      <div
        className={`relative items-center justify-center`}
        style={{ width: size, height: size }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            // the center is located at 75% from the left and 30% from the top of the element.
            // highlight is Size * 0.025 away from center
            background: `radial-gradient(
              circle at 75% 30%,
              #fff, ${size * 0.025}px,
              #ff21c0 8%,
              #5b5b5b 60%,
              #ff21c0 100%)`,
            // Example using Size = 200px
            // A white inset shadow with no offset and a 20px blur radius.
            // light blue inset shadow with a horizontal offset of 10px, no vertical offset, a blur radius of 46px, and a color of #eaf5fc.
            // A light pink inset shadow with a horizontal offset of 80px, no vertical offset, a blur radius of 60px, and a color of #efcde6.
            // A light yellow inset shadow with a horizontal offset of -20px, a vertical offset of -60px, a blur radius of 100px, and a color of #f9f6de.
            // A light yellow inset shadow with no horizontal offset, a vertical offset of 50px, a blur radius of 140px, and a color of #f9f6de.
            // A white outset shadow with no offset, a blur radius of Size * 0.45, and no spread radius.
            boxShadow: `inset 0 0 ${size * 0.1}px #fff,
            inset ${size * 0.05}px 0 ${size * 0.23}px #eaf5fc,
            inset ${size * 0.4}px 0 ${size * 0.5}px #efcde6,
            inset ${-size * 0.1}px ${-size * 0.3}px ${size * 0.5}px #f9f6de,
            inset 0 ${size * 0.25}px ${size * 0.7}px #f9f6de,
            0 0 ${size * 0.45}px #fff`,
            animation: 'bubble 4s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full blur-sm"
          style={{
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.15)',
            width: `${size * 0.75}px`,
            height: `${size * 0.2}px`,
            left: '50%',
            marginLeft: `${-size * 0.375}px`,
            bottom: `${-size / 2}px`,
            animation: 'shadow 4s ease-in-out infinite',
          }}
        />
      </div>
    </div>
  );
};
