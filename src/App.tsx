import {
  NavLink,
  NavLinkRenderProps,
  Outlet,
  Route,
  Routes,
} from 'react-router';
import './styles/App.css';
import UncontrolledForm from './UncontrolledForm';
import ReactHookForm from './ReactHookForm';
import stylesNavigation from './styles/navigation.module.css';
import Home from './Home';
import ControlledForm from './ControlledForm';

const Layout = () => {
  const styles = ({ isActive }: NavLinkRenderProps) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? 'green' : 'grey',
  });
  return (
    <>
      <header className="header">
        <h1>React forms</h1>
        <nav className="nav">
          <NavLink to="/" style={styles} className={stylesNavigation.linknav}>
            Home
          </NavLink>
          <NavLink
            to="/uncontrolledForm"
            style={styles}
            className={stylesNavigation.linknav}
          >
            UncontrolledForm
          </NavLink>
          <NavLink
            to="/reactHookForm"
            style={styles}
            className={stylesNavigation.linknav}
          >
            ReactHookForm
          </NavLink>
          <NavLink
            to="/controlledForm"
            style={styles}
            className={stylesNavigation.linknav}
          >
            ControlledForm
          </NavLink>
        </nav>
      </header>
      <main style={{ padding: '1rem 0' }}>
        <Outlet />
      </main>
    </>
  );
};
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="controlledForm" element={<ControlledForm />} />
          <Route path="uncontrolledForm" element={<UncontrolledForm />} />
          <Route path="reactHookForm" element={<ReactHookForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
