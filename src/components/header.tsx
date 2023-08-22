import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar justify-center">
      <div className="container">
        <div className="flex-1">
          <Link
            className="btn btn-ghost normal-case font-mono text-3xl text-accent"
            href="/"
          >
            {"<IPK/>"}
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 transition-all hover:text-neutral-200 flex align-middle">
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/learning">Learning</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
