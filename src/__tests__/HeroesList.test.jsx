import '@testing-library/jest-dom'
import { render } from '@testing-library/react';

import { heroesMocks } from '../__mocks__/heroesMocks';
import HeroesList from '../app/components/HeroesList';

describe('HeroesList', () => {
    it('renders a list of heroes', () => {

        const { asFragment } = render(<HeroesList heroes={heroesMocks} />);

        expect(asFragment()).toMatchSnapshot();
      });
    });

  
