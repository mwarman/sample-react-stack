import { NavLink } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to the Todos App</h1>
      <nav>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todos">Todos</NavLink>
        </li>
      </nav>
    </div>
  );
};

export default LandingPage;
