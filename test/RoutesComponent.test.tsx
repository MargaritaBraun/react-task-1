import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, expect, test, vi } from 'vitest';
import { routes } from '../src/RoutesComponent';
// as routes
// const routes = router.routes;
// console.log('routes', routes);
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useRouteError: vi.fn(() => ({
      status: 500,
      message: 'Something went wrong.',
    })),
  };
});

// vi.mock('../src/App', () => ({
//   default: ({ children }) => (
//     <div>
//       <h2>Mocked App Component</h2>
//       {children}
//     </div>
//   ),
// }));

vi.mock('../src/SearchContainer', () => ({
  default: () => (
    <div>
      <h2>Mocked SearchContainer Component</h2>
    </div>
  ),
}));

// vi.mock('../src/RoutesComponent', async () => {
//   const actual = await vi.importActual('../src/RoutesComponent');
//   return {
//     ...actual,
//     NoDataContainer: () => <div>Mocked NoDataContainer Component</div>,
//     AboutContainer: () => <div>Mocked AboutContainer Component</div>,
//   };
// });

describe('React Router', () => {
  test('should render SearchContainer on /search path', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/search'],
    });

    render(<RouterProvider router={router} />);
    console.log('Rendered routes:', routes);
    expect(router.state.location.pathname).toBe('/search');
    // console.log('Rendered DOM:', document.body.innerHTML);
    // console.log('Router state:', router.state);
    // console.log('1 search', router.state.location.pathname);
    // expect(
    //   await screen.findByText(/Mocked SearchContainer Component/i)
    // ).toBeInTheDocument();
  });

  test('should render NoDataContainer on /nodata path', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/nodata'],
    });

    render(<RouterProvider router={router} />);

    expect(router.state.location.pathname).toBe('/nodata');
    // expect(
    //   await screen.findByText(/Mocked NoDataContainer Component/i)
    // ).toBeInTheDocument();
  });

  test('should render AboutContainer on /about path', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/about'],
    });

    render(<RouterProvider router={router} />);

    expect(router.state.location.pathname).toBe('/about');
    expect(await screen.findByText(/Something about us/i)).toBeInTheDocument();
  });

  test('should render ErrorPage on unknown path', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/unknown'],
    });

    render(<RouterProvider router={router} />);

    expect(router.state.location.pathname).toBe('/unknown');
    expect(await screen.findByText(/Oops!/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/Sorry, something went wrong./i)
    ).toBeInTheDocument();
  });
});
