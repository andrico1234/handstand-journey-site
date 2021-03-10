import * as React from "react"

interface Props {
  size: number
}

export const TrophyIcon: React.FunctionComponent<Props> = props => {
  const { size } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="#fff"
    >
      <path d="M405.228 20.608c-4.824 0-9.792.624-14.752 1.848l3.816 15.528c30.248-7.424 56.624 15.592 56.624 44.32 0 67.288-76.624 116.88-108.568 126.216l4.488 15.36c40.576-11.864 120.088-67.264 120.096-141.576 0-34.024-27.68-61.696-61.704-61.696zM61.06 82.304c0-28.728 26.368-51.776 56.624-44.312l3.832-15.536c-40.032-9.84-76.448 21.008-76.448 59.848 0 74.32 79.52 129.72 120.08 141.576l4.488-15.36C137.684 199.176 61.06 149.592 61.06 82.304zM283.74 297.8h-55.488c-4.416 0-8 3.576-8 8v30.36a8.02 8.02 0 002.976 6.224 7.977 7.977 0 006.712 1.592c16.48-3.56 35.64-3.56 52.112 0a8.063 8.063 0 006.712-1.592 7.996 7.996 0 002.976-6.224V305.8c0-4.424-3.576-8-8-8zm-8 28.824c-12.816-1.768-26.672-1.776-39.488.008v-12.84h39.488v12.832zM363.972 466.448H148.02c-4.416 0-8 3.576-8 8V504c0 4.424 3.584 8 8 8h215.952c4.424 0 8-3.576 8-8v-29.552c0-4.424-3.576-8-8-8zm-8 29.552H156.02v-13.552h199.952V496z" />
      <path d="M350.124 353.736H161.868c-4.416 0-8 3.576-8 8v112.712c0 4.424 3.584 8 8 8h188.256c4.416 0 8-3.584 8-8V361.736c0-4.424-3.576-8-8-8zm-8 112.712H169.868v-96.712h172.256v96.712z" />
      <path d="M318.132 385.728H193.868c-4.416 0-8 3.576-8 8v48.712c0 4.424 3.584 8 8 8h124.264c4.416 0 8-3.584 8-8v-48.712c0-4.424-3.576-8-8-8zm-8 48.712H201.868v-32.712h108.264v32.712zM396.988 4.024C394.428 1.432 391.02 0 387.388 0H124.612a13.435 13.435 0 00-9.584 4c-2.56 2.584-3.96 6-3.944 9.632.056 5.448.272 10.808.52 16.912.2 4.928.48 9.808.808 14.664 3.992 59.248 17.192 113.384 38.184 156.56a263.104 263.104 0 009.904 18.48c16.032 27.224 34.392 46.752 54.592 58.056a7.99 7.99 0 006.848.456c1.856.064 3.952.064 6.304.064h61.936a8.062 8.062 0 006.72-.512c20.192-11.296 38.56-30.832 54.592-58.056a276.53 276.53 0 009.888-18.472c21.008-43.2 34.208-97.344 38.192-156.568.32-4.856.6-9.72.8-14.688.232-5.592.456-11.192.512-16.856a13.38 13.38 0 00-3.896-9.648zm-12.6 25.864a586.208 586.208 0 01-.784 14.248c-3.84 57.192-16.504 109.28-36.616 150.64a252.748 252.748 0 01-9.288 17.36c-13.648 23.176-29.504 40.632-46.008 50.68h-63.44c.016.008-5.376 0-7.944 0-16.512-10.056-32.368-27.504-46.008-50.688a247.848 247.848 0 01-9.296-17.352c-20.104-41.344-32.76-93.432-36.616-150.64a570.885 570.885 0 01-.808-14.968c-.176-4.376-.36-8.752-.44-13.168h257.704c-.08 4.664-.272 9.272-.456 13.888z" />
      <path d="M352.108 34.64c-.128 2.512-.272 4.88-.432 7.224-3.336 49.568-14.616 96.288-31.768 131.552a212.106 212.106 0 01-7.752 14.48c-9.48 16.096-20.104 28.592-30.712 36.144l9.28 13.04c12.432-8.848 24.6-23.048 35.224-41.064a227.294 227.294 0 008.352-15.6c18.024-37.08 29.864-85.904 33.344-137.496.16-2.44.304-4.864.448-7.448l-15.984-.832zM283.74 262.824h-55.848c-13.464 0-14.8 26.104-14.8 26.368 0 .248 1.568 24.616 15.16 24.616h55.856c13.232 0 14.8-24.368 14.8-24.616 0-.264-1.336-26.368-15.168-26.368zm-2.92 34.984h-49.648c-1.04-2.624-2.056-6.984-2.088-8.608.024-1.944 1.184-7.288 2.328-10.376h49.168c1.152 3.088 2.304 8.432 2.328 10.36-.024 1.64-1.048 6.008-2.088 8.624zM285.428 328.336c-18.688-4.024-40.168-4.04-58.864 0-26.504 5.736-42.328 18.224-42.328 33.392 0 4.424 3.584 8 8 8h127.52c4.416 0 8-3.576 8-8 0-15.176-15.824-27.656-42.328-33.392zm-79.544 25.392c4.944-3.72 13.056-7.368 24.056-9.752 16.488-3.56 35.648-3.56 52.104 0 11.008 2.384 19.12 6.032 24.064 9.752H205.884z" />
    </svg>
  )
}
