### Default Container

```jsx
<Container>
  The containers width for each breakpoint is the result of: $device - (2 *
  $gap). The $gap variable has a default value of 32px but can be modified.
</Container>
```

### Container with all properties

```jsx
<Container fluid={true} >
  This container is fluid it will have a 32px gap on either side, on any
  viewport size.
</Container>
<hr/>
<Container breakpoint="fullhd">
  This container will have a fullwidth container until those specific breakpoints.
</Container>
```
