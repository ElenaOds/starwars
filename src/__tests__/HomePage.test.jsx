import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Home from '../app/page';

describe('Home', () => {
    it('renders a heading', () => {
      render(<Home />)
   
      const heading = screen.getByRole('heading', { level: 1 })
   
      expect(heading).toBeInTheDocument()
    });

    it('displays the link to HEROES', () => {
      render(<Home />)

      const link = screen.getByRole('link', {name: /heroes/i}); 
      expect(link).toBeInTheDocument();
     
    });
  })