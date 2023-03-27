import React from 'react';
import { render, screen } from '@testing-library/react';
import { Route, Routes, MemoryRouter } from 'react-router';
import NavBar from './components/Nav';
import About from './pages/About';
import AnotherPage from './pages/AnotherPage';
import Details from './pages/Details';
import Home from './pages/Home';

const Routing = () => {
  return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AnotherPage" element={<AnotherPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
        <Route component={() => <div>404 error</div>} />
      </Routes>
  );
};


describe('testing routing', () => {
  it('should render Home component', () => {
    render(
      <div>
        <MemoryRouter initialEntries={['/']}>
          <Routing />
        </MemoryRouter>
      </div>
    )
    const linkElement = screen.getByText('Art Institute of Chicago');
    expect(linkElement).toBeInTheDocument();
  })
  it('should render AnotherPage', () => {
    render(
      <div>
        <MemoryRouter initialEntries={["/AnotherPage"]}>
          <Routing />
        </MemoryRouter>
      </div>
    )
    const linkElement = screen.getByText('Another Page');
    expect(linkElement).toBeInTheDocument();
  })
  it('should render About page', () => {
    render(
      <div>
        <MemoryRouter initialEntries={["/About"]}>
          <Routing />
        </MemoryRouter>
      </div>
    )
    const linkElement = screen.getByText('About');
    expect(linkElement).toBeInTheDocument();
  })
  it('should render Details', () => {
    render(
      <div>
        <MemoryRouter initialEntries={["/details/109554"]}>
          <Routing />
        </MemoryRouter>
      </div>
    )
    const linkElement = screen.getByText('Author: Unkonwn');
    expect(linkElement).toBeInTheDocument();
  })
})

describe('testing navBar', () => {
  it('Logo in NavBar should be rendered', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
      <NavBar />
    </MemoryRouter>
    )
    const linkElement = screen.getAllByText('Logo');
    expect(linkElement[0]).toBeInTheDocument();
  })
  it('AnotherPage link in NavBar should be rendered', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
      <NavBar />
    </MemoryRouter>
    )
    const linkElement = screen.getAllByText('AnotherPage');
    expect(linkElement[0]).toBeInTheDocument();
  })
  it('About link in NavBar should be rendered', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
      <NavBar />
    </MemoryRouter>
    )
    const linkElement = screen.getAllByText('About');
    expect(linkElement[0]).toBeInTheDocument();
  })
  it('Menu image should be rendered', async () => {
    await render(
      <MemoryRouter initialEntries={["/"]}>
      <NavBar />
    </MemoryRouter>
    )
    const image = screen.getByTestId('menu-avatar');
    expect(image).toBeTruthy()
  })
})