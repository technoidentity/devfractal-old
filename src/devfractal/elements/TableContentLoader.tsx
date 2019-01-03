import React from 'react'
import ContentLoader from 'react-content-loader'
// tslint:disable
const Loader = (props: any) => {
  return (
    <ContentLoader
      height={30}
      width={1060}
      speed={2}
      primaryColor="#d9d9d9"
      secondaryColor="#ecebeb"
      {...props}
    >
      <rect x="34" y="13" rx="6" ry="6" width="150" height="8" />
      <rect x="200" y="13" rx="6" ry="6" width="250" height="8" />
      <rect x="470" y="13" rx="6" ry="6" width="117" height="8" />
    </ContentLoader>
  )
}

const TableContentLoader = () => (
  <React.Fragment>
    {Array(10)
      .fill('')
      .map((_, i) => (
        <Loader key={i} style={{ opacity: Number(2 / i).toFixed(1) }} />
      ))}
  </React.Fragment>
)

TableContentLoader.metadata = {
  name: 'DaniloWoz',
  github: 'danilowoz',
  description: 'Table with the width of the dynamic rows',
  filename: 'danilowoz-table',
}

export default TableContentLoader
