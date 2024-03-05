import React from 'react';
import { ThemeContext } from '../context/themeContext';
import Button from './Button';

export default function App() {
  const { toggle, toggleFunction } = React.useContext(ThemeContext);

  return (
    <div className={toggle ? 'dark' : 'light'}>
      <Button onClick={toggleFunction}>Toggle theme</Button>
      <h1>Hello, world!</h1>
    </div>
  );
}