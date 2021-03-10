import * as React from "react"

interface Props {
  size: number
}

export const ComputerIcon: React.FunctionComponent<Props> = props => {
  const { size } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 60 58"
      fill="#fff"
    >
      <path d="M30 26c-.146 0-.291-.032-.426-.095l-17-8a1.001 1.001 0 010-1.81l17-8a1 1 0 01.852 0l17 8a1.001 1.001 0 010 1.81l-17 8c-.135.063-.28.095-.426.095zm-14.651-9L30 23.895 44.651 17 30 10.105z" />
      <path d="M30 34c-.153 0-.307-.035-.447-.105l-12-6A1.001 1.001 0 0117 27v-7.647a1 1 0 011.425-.905L30 23.895l11.574-5.447a1 1 0 011.426.905V27c0 .379-.214.725-.553.895l-12 6c-.14.07-.294.105-.447.105zm-11-7.618l11 5.5 11-5.5v-5.453l-10.574 4.976a1 1 0 01-.852 0L19 20.929zM47 18H30a1 1 0 010-2h17a1 1 0 010 2z" />
      <path d="M47 27a1 1 0 01-1-1v-9a1 1 0 012 0v9a1 1 0 01-1 1zM30 20a1 1 0 01-1-1v-4a1 1 0 012 0v4a1 1 0 01-1 1z" />
      <path d="M44.999 30a1 1 0 01-.831-1.555l2-3a1 1 0 011.664 1.11l-2 3a1 1 0 01-.833.445z" />
      <path d="M49.001 30a1 1 0 01-.833-.445l-2-3a1.001 1.001 0 011.664-1.11l2 3A1.001 1.001 0 0149.001 30zM30 29a1 1 0 01-1-1v-3a1 1 0 012 0v3a1 1 0 01-1 1z" />
      <path d="M59 38H1a1 1 0 01-1-1V4.001A4.006 4.006 0 014.001 0h51.998A4.006 4.006 0 0160 4.001V37a1 1 0 01-1 1zM2 36h56V4.001A2.002 2.002 0 0055.999 2H4.001A2.002 2.002 0 002 4.001z" />
      <path d="M55.999 46H4.001A4.006 4.006 0 010 41.999V37a1 1 0 011-1h58a1 1 0 011 1v4.999A4.006 4.006 0 0155.999 46zM2 38v3.999C2 43.103 2.897 44 4.001 44h51.998A2.002 2.002 0 0058 41.999V38z" />
      <path d="M33 42h-6a1 1 0 010-2h6a1 1 0 010 2zM55 38H5a1 1 0 01-1-1V5a1 1 0 011-1h50a1 1 0 011 1v32a1 1 0 01-1 1zM6 36h48V6H6zM43 58H17c-1.654 0-3-1.346-3-3s1.346-3 3-3h26c1.654 0 3 1.346 3 3s-1.346 3-3 3zm-26-4c-.551 0-1 .449-1 1s.449 1 1 1h26c.551 0 1-.449 1-1s-.449-1-1-1z" />
      <path d="M41 54H19a1 1 0 010-2c3.318 0 5-2.355 5-7a1 1 0 011-1h10a1 1 0 011 1c0 4.645 1.682 7 5 7a1 1 0 010 2zm-17.129-2H36.13c-1.232-1.364-1.957-3.395-2.102-6h-8.055c-.146 2.605-.87 4.636-2.102 6z" />
    </svg>
  )
}
