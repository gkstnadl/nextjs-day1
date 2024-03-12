import React from "react";
import Link from "next/link";
import "../global.css";

const Nav = () => {
  return (
    <nav className="nav-group">
      <Link href="/">home</Link>
      <Link href="/csr">csr</Link>
      <Link href="/isr">isr</Link>
      <Link href="/ssg">ssg</Link>
      <Link href="/ssr">ssr</Link>
    </nav>
  );
};

export default Nav;
