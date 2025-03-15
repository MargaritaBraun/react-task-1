import {
  NavLink,
  NavLinkRenderProps,
  Outlet,
  Route,
  Routes,
} from 'react-router';
import './App.css';
import UncontrolledForm from './UncontrolledForm';
import ReactHookForm from './ReactHookForm';
import stylesNavigation from './navigation.module.css';
import Home from './Home';
// UncontrolledForm

const Layout = () => {
  const styles = ({ isActive }: NavLinkRenderProps) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? 'green' : 'grey',
  });
  return (
    <>
      <h1>React forms</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <NavLink
          to='/'
          style={styles}
          className={stylesNavigation.linknav}
        >
          Home
        </NavLink>
        <NavLink
          to="/uncontrolledForm"
          style={styles}
          className={stylesNavigation.linknav}
        >
          UncontrolledForm
        </NavLink>
        <NavLink to="/reactHookForm" style={styles} className={stylesNavigation.linknav}>
          ReactHookForm
        </NavLink>
      </nav>
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
          <Route path="uncontrolledForm" element={<UncontrolledForm />} />
          <Route path="reactHookForm" element={<ReactHookForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
