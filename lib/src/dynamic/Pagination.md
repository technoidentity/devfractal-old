### Default Pagination

```jsx
import {
  Pagination,
  PaginationEllipsis,
  PaginationPrevious,
  PaginationNext,
  PaginationList,
} from './Pagination'
;<Pagination>
  <PaginationPrevious>Previous</PaginationPrevious>
  <PaginationNext>Next</PaginationNext>
  <PaginationList>
    <PaginationLink aria-label="Goto page 1">1</PaginationLink>
    <PaginationEllipsis />
    <PaginationLink aria-label="Goto page 45">45</PaginationLink>
    <PaginationLink aria-label="Goto page 47">47</PaginationLink>
    <PaginationEllipsis />
    <PaginationLink aria-label="Goto page 86">86</PaginationLink>
  </PaginationList>
</Pagination>
```

### Pagination with all properties

```jsx
import {
  Pagination,
  PaginationEllipsis,
  PaginationPrevious,
  PaginationNext,
  PaginationList,
} from './Pagination'
;<Pagination rounded={false} size="medium" alignment="centered">
  <PaginationPrevious>Previous</PaginationPrevious>
  <PaginationNext>Next</PaginationNext>
  <PaginationList>
    <PaginationLink aria-label="Goto page 1" current={true}>
      1
    </PaginationLink>
    <PaginationEllipsis />
    <PaginationLink aria-label="Goto page 45">45</PaginationLink>
    <PaginationLink aria-label="Goto page 47">47</PaginationLink>
    <PaginationEllipsis />
    <PaginationLink aria-label="Goto page 86">86</PaginationLink>
  </PaginationList>
</Pagination>
```
