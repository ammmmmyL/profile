export type location = {
  lat: string;
  lng: string;
};

// Gradient direction in deg, color1, color2
export type LinearGradient =
  `linear-gradient(${number}deg, ${string}, ${string})`;
