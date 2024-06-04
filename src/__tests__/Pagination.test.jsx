import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';

import Pagination from '../app/components/pagination';

describe('Pagination component', () => {
    it('calls handleNextPage when Next button is clicked', () => {
      const mockHandleNextPage = jest.fn();
      const mockPage = 1;
      const mockTotalPages = 9;
  
      const { getByText } = render(
        <Pagination
          page={mockPage}
          handleNextPage={mockHandleNextPage}
          count={mockTotalPages * 10} 
        />
      );

      const nextButton = getByText('Next');
      fireEvent.click(nextButton);
  
      expect(mockHandleNextPage).toHaveBeenCalled();
    });

    it('calls handlePreviousPage when Next button is clicked', () => {
        const mockHandlePreviousPage = jest.fn();
        const mockPage = 2;
        const mockTotalPages = 9;
    
        const { getByText } = render(
          <Pagination
            page={mockPage}
            handlePreviousPage={mockHandlePreviousPage}
            count={mockTotalPages * 10} 
          />
        );
  
        const PreviousButton = getByText('Previous');
        fireEvent.click(PreviousButton);
    
        expect(mockHandlePreviousPage).toHaveBeenCalled();
      });

      it('disables Previous button on the first page', () => {
        const mockHandlePreviousPage = jest.fn();
        const mockPage = 1;
        const mockTotalPages = 9;
    
        const { getByText } = render(
          <Pagination
            page={mockPage}
            handlePreviousPage={mockHandlePreviousPage}
            count={mockTotalPages * 10}
          />
        );
    
        const previousButton = getByText('Previous');
        expect(previousButton).toBeDisabled();
      });

      it('disables Next button on the last page', () => {
        const mockHandleNextPage = jest.fn();
        const mockPage = 9;
        const mockTotalPages = 9;
    
        const { getByText } = render(
          <Pagination
            page={mockPage}
            handleNextPage={mockHandleNextPage}
            count={mockTotalPages * 10}
          />
        );
    
        const NextButton = getByText('Next');
        expect(NextButton).toBeDisabled();
      });

  });