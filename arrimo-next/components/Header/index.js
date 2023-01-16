import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="mb-4">
      <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div class="container p-4 px-lg-5">
          <Link href="/">
            <strong style={{ cursor: "pointer" }}>Arrimo Pro</strong>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
