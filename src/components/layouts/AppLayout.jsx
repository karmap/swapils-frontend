import { Link } from "react-router-dom";

export default function AppLayout({ children }) {

  return (
    <>
      <header>
        <Link to="/" className="home-link">SWStarter</Link>
      </header>
      <div className="app-container">
        {children}
      </div>
    </>
  );
}