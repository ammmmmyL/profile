import { forwardRef, SVGProps } from 'react';
import { cn } from '../../lib/utils';

interface IconProps extends SVGProps<SVGSVGElement> {}

const IconNextJs = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }: IconProps, ref) => {
    return (
      <svg
        className={cn('', className)}
        ref={ref}
        {...props}
        viewBox="0 0 128 128"
      >
        <path
          fill="currentColor"
          d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64 64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64 64 64 0 0 0 64 0Zm17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92-.111.096a64 64 0 0 0 .111-.096z"
        ></path>
      </svg>
    );
  }
);

export default IconNextJs;
