import React from "react"

export const Nav: React.FunctionComponent = () => {
  return (
    <div className="fixed z-10 bg-gradient-to-r from-red to-purple h-16 w-full">
      <nav className="flex flex-row fixed justify-between w-full bg-white">
        <a className="text-xl p-4 font-semibold" href="/">
          Handstand Journey
        </a>
        <ul className="flex flex-row items-center">
          <li className="p-2">
            <a className="p-2 border-black hover:border-b" href="/login">
              iOS
            </a>
          </li>
          <li className="p-2 relative">
            <a className="p-2 border-black hover:border-b" href="/home">
              Android
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
