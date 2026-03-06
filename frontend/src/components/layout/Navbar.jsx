import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        {/* Left: Logo */}
        <Link
          to="/"
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

        {/* Middle: Horizontal Navigation Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            to="/reservasi"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Reservasi
          </Link>
        </div>

        {/* Right: Login | Register */}
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
      </div>
    </nav>
  );
}

export default Navbar;
