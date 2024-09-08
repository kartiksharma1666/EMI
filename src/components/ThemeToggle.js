import React from 'react';
import { Button } from 'react-bootstrap';

function ThemeToggle({ toggleTheme }) {
  return (
    <Button variant="secondary" onClick={toggleTheme} className="mb-4">
      Toggle Theme
    </Button>
  );
}

export default ThemeToggle;
