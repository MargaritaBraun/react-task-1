import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Card from '../../src/MainComponents/CardView';
import React from 'react';
import mockData from './mockDataBook';
import { createStore } from 'redux';

const mockClearAllCollections = vi.fn();

const mockStore = createStore(() => []);

vi.mock('../../src/Redux/Redux-main', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...(actual as object),
    useActions: vi.fn(() => ({
      clearAllCollections: mockClearAllCollections,
    })),
  };
});

describe('MiniBookCollection Component', () => {
  let container: HTMLElement;

  it('проверка на то что все объекты рендерятся', () => {
    const { container: renderedContainer } = render(
      <Provider store={mockStore}>
        {mockData.map(({ key, title, author_name, ...other }) => (
          <Card
            key={key}
            id={key}
            title={title}
            author_name={author_name}
            {...other}
          />
        ))}
      </Provider>
    );
    container = renderedContainer;

    mockData.forEach(({ title }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    const allContainers = container.querySelectorAll('.card-container');
    expect(allContainers.length).toBe(mockData.length);
  });

  it('проверка содержимого', () => {
    const { container: renderedContainer } = render(
      <Provider store={mockStore}>
        {mockData.map(({ key, title, author_name }) => (
          <Card key={key} id={key} title={title} author_name={author_name} />
        ))}
      </Provider>
    );
    container = renderedContainer;

    const allContainersAutor = container.querySelectorAll('.container-autors');
    expect(allContainersAutor.length).toBe(mockData.length);

    mockData.forEach(({ title }) => {
      const imgElement = screen.getByAltText(`Cover of ${title}`);
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveClass('book-cover');
    });
  });

  it('click проверка на то что все объекты рендерятся', () => {
    const mockBook = mockData[0];
    const { container: renderedContainer } = render(
      <Provider store={mockStore}>
        <Card
          key={mockBook.key}
          id={mockBook.key}
          title={mockBook.title}
          author_name={mockBook.author_name}
          {...Object.keys(mockBook).reduce((acc, key) => {
            if (!['key', 'title', 'author_name'].includes(key)) {
              acc[key] = mockBook[key];
            }
            return acc;
          }, {})}
        />
      </Provider>
    );
    container = renderedContainer;

    expect(screen.getByText(mockBook.title)).toBeInTheDocument();
    const cardContainer = container.querySelector('.card-container');
    expect(cardContainer).toBeInTheDocument();

    expect(screen.queryByText('Details:')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText(mockBook.title));

    expect(screen.getByText('Details:')).toBeInTheDocument();
  });
});
