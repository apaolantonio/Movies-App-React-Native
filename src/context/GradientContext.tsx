import React, {createContext, useState} from 'react';

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  prevcolors: ImageColors;
  setMainColors: (colors: ImageColors) => void;
  setPrevMainColors: (colors: ImageColors) => void;
}
export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({children}: any) => {
  const [colors, setcolors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [prevcolors, setprevcolors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (colors: ImageColors) => {
    setcolors(colors);
  };

  const setPrevMainColors = (colors: ImageColors) => {
    setprevcolors(colors);
  };
  return (
    <GradientContext.Provider
      value={{colors, prevcolors, setMainColors, setPrevMainColors}}>
      {children}
    </GradientContext.Provider>
  );
};
