import React from 'react';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext({
  toggle: () => {},
  toggleFunction: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = React.useState(false);

  const toggleFunction = () => {
    setToggle(!toggle);
  };

  const theme = themes[toggle ? 'dark' : 'light'];

  return (
    <ThemeContext.Provider value={{ toggle, toggleFunction }}>
      <div style={{ background: theme.background, color: theme.foreground }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};