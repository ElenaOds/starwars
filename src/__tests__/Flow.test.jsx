import '@testing-library/jest-dom'
import { render } from '@testing-library/react';

import Flow from '../app/components/flow';
import { heroMock } from '../__mocks__/heroMocks';
import { filmsMock } from '../__mocks__/filmsMocks';
import { starshipsMock } from '../__mocks__/starshipsMock';


global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}))

describe('Flow', () => {
    it('renders a hero details data', () => {
        const { getByText } = render(<Flow hero={heroMock} films={filmsMock} starships={starshipsMock}/>);
     
        const heroNameElement = getByText(heroMock.name);
        expect(heroNameElement).toBeInTheDocument();
     
        filmsMock.forEach((film) => {
            const filmNameElement = getByText(film.title);
            expect(filmNameElement).toBeInTheDocument();
          });


          starshipsMock.forEach((film) => {
            const starshipNameElement = getByText(film.name);
            expect(starshipNameElement).toBeInTheDocument();
          });

      });
    
    });

  
