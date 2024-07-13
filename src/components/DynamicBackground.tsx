import { ReactNode } from 'react';
import '../App.css';

type Props = {
  background: 'day' | 'night' | 'sunset';
  children: ReactNode;
};

const DynamicBackground = ({ children, background }: Props) => {
  return (
    <div className="flex-1">
      <div className="App">
        <div
          className="flex flex-col items-center justify-center h-screen"
          style={{
            backgroundImage: `url(./${background}.jpg)`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            opacity: '80%',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DynamicBackground;
