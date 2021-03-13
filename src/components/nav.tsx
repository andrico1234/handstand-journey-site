import React from "react"

export const Nav: React.FunctionComponent = () => {
  return (
    <div className="fixed z-10 bg-gradient-to-r from-red to-purple h-16 w-full">
      <nav className="flex flex-row fixed justify-between w-full bg-white">
        <a className="text-xl p-4 font-semibold" href="/">
          Handstand Journey
        </a>
        <ul className="flex flex-row items-center">
          <li className="p-2 opacity-70 cursor-not-allowed">iOS</li>
          <li className="p-2 relative">
            <a
              className="p-2 border-black hover:border-b"
              href="https://play.google.com/store/apps/details?id=com.caliskillsapp&hl=en&gl=US"
            >
              Android
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
