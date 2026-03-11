import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function Navbar() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      try {
        const payload = jwtDecode(token);
        setUsername(payload.username);
      } catch (error) {
        console.error("Failed to decode token", error);
        setUsername("");
      }
    } else {
      setUsername("");
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setUsername("");
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link
          to={token ? "/dashboard" : "/"}
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-11.5 -10.23174 23 20.46348"
            className="h-8 w-8 text-indigo-500"
          >
            <title>React Logo</title>
            <circle cx="0" cy="0" r="2.05" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Reservasi
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            to="/reservasi"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Reservasi
          </Link>
          {token && (
            <Link
              to="/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Dashboard
            </Link>
          )}
        </div>

        {token ? (
          <UserActions username={username} onLogout={handleLogout} />
        ) : (
          <GuestActions />
        )}
      </div>
    </nav>
  );
}

// Sub-komponen untuk User yang sudah login
function UserActions({ username, onLogout }) {
  return (
    <div className="flex items-center text-sm font-medium">
      <span className="text-muted-foreground mr-1">Hello, {username}</span>
      <span className="mx-2 text-muted-foreground/40">|</span>
      <button
        onClick={onLogout}
        className="text-muted-foreground transition-colors hover:text-primary cursor-pointer font-medium"
      >
        Logout
      </button>
    </div>
  );
}

// Sub-komponen untuk Guest (belum login)
function GuestActions() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center text-sm font-medium">
        <Link
          to="/login"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          Login
        </Link>
        <span className="mx-2 text-muted-foreground/40">|</span>
        <Link
          to="/register"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
