import React from 'react'
import { FilterColumn } from './FilterColumn'
import { TableFilterHeadProps } from './models'

export function FilterHead<D>({
  headerGroups,
}: TableFilterHeadProps<D>): JSX.Element {
  return (
    <thead>
      {headerGroups.map((headerGroup, i) => (
        <tr key={i}>
          {headerGroup.headers.map((column, i) => (
            <th key={i} {...column.getHeaderProps()}>
              {column.Filter ? <FilterColumn {...column} /> : undefined}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  )
}
// export function FilterHead<D>({
//   headerGroups,
// }: TableFilterHeadProps<D>): JSX.Element {
//   return (
//     <thead>
//       {headerGroups.map((headerGroup, i) => (
//         <tr key={i} {...headerGroup.getHeaderGroupProps()}>
//           {headerGroup.headers.map((column, i) => (
//             <th key={i} {...column.getHeaderProps()}>
//               {column.Filter ? <FilterColumn {...column} /> : undefined}
//             </th>
//           ))}
//         </tr>
//       ))}
//     </thead>
//   )
// }
