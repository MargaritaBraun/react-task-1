import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import MiniBookCollection, {
  handleClearCollections,
} from '../../src/MainComponents/MiniBookCollection';
import store from '../../src/Redux/Redux-main';
import React from 'react';

const mockClearAllCollections = vi.fn();

vi.mock('../../src/Redux/Redux-main', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...(actual as object),
    useAcrions: vi.fn(() => ({
      clearAllCollections: mockClearAllCollections,
    })),
  };
});

describe('MiniBookCollection Component', () => {
  it('should render and handle clearAllCollections', () => {
    render(
      <Provider store={store}>
        <MiniBookCollection />
      </Provider>
    );

    expect(screen.getByText(/Unselect all/i)).toBeInTheDocument();

    const clearButton = screen.getByText(/Unselect all/i);
    clearButton.click();

    expect(mockClearAllCollections).toHaveBeenCalled();
  });

  it('should call handleClearCollections directly', () => {
    const mockClearAllCollections = vi.fn();
    const event = { preventDefault: vi.fn() };

    handleClearCollections(mockClearAllCollections, event);

    expect(event.preventDefault).toHaveBeenCalled();

    expect(mockClearAllCollections).toHaveBeenCalled();
  });
});
