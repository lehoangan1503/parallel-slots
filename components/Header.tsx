import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container p-10 mx-auto">
        <ul className="flex gap-2 justify-center pt-3">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/settings">Settings</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
