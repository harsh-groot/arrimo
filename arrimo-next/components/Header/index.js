import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="mb-4">
      <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div className="container p-4 px-lg-5">
          <Link href="/">
            <strong style={{ cursor: "pointer" }}>Arrimo Pro</strong>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
