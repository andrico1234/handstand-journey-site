import React from "react"

export function Nav() {
  return (
    <div className="fixed bg-gradient-to-r from-red to-purple bg-red h-16 w-full shadow">
      <nav className="flex flex-row fixed justify-between w-full bg-white">
        <a className="text-xl p-4 font-semibold" href="/">
          Handstand Journey
        </a>
        <ul className="flex flex-row items-center">
          <li className="px-2">
            <a className="py-4 px-2" href="/login">
              iOS
            </a>
          </li>
          <li className="px-2">
            <a className="py-4 px-2" href="/home/">
              Android
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

// .NavBar {
// background: #2d2f33;
// box-shadow: 0 3px 3px 0 rgb(0 0 0 / 14%), 0 1px 7px 0 rgb(0 0 0 / 12%), 0 3px 1px -1px rgb(0 0 0 / 20%);
