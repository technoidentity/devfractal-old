### Default Navbar

```jsx
<Navbar>
  <NavbarBrand>
    <NavbarItem>
      <img
        src="https://bulma.io/images/bulma-logo.png"
        width="112"
        height="28"
      />
    </NavbarItem>
    <NavbarBurger role="button">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </NavbarBurger>
  </NavbarBrand>
  <NavbarMenu>
    <NavbarStart>
      <NavbarItem>Home</NavbarItem>
      <NavbarItem>Documentation</NavbarItem>
      <NavbarItem dropDown>
        <NavbarLink>More</NavbarLink>
        <NavbarDropDown>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>Jobs</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
          <NavbarDivider />
          <NavbarItem>Report an issue</NavbarItem>
        </NavbarDropDown>
      </NavbarItem>
    </NavbarStart>
    <NavbarEnd>
      <NavbarItem>Home</NavbarItem>
      <NavbarItem>Documentation</NavbarItem>
      <NavbarItem>Jobs</NavbarItem>
      <NavbarItem>Contact</NavbarItem>
    </NavbarEnd>
  </NavbarMenu>
</Navbar>
```

### Navbar with all properties

```jsx
<Navbar modifier="transparent" variant="info">
  <NavbarBrand>
    <NavbarItem>
      <img
        src="https://bulma.io/images/bulma-logo.png"
        width="112"
        height="28"
      />
    </NavbarItem>
    <NavbarBurger role="button">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </NavbarBurger>
  </NavbarBrand>
  <NavbarMenu>
    <NavbarStart>
      <NavbarItem>Home</NavbarItem>
      <NavbarItem>Documentation</NavbarItem>
      <NavbarItem
        dropDown={true}
        active={false}
        dropUp={false}
        modifier="hoverable"
      >
        <NavbarLink arrowLess={false}>More</NavbarLink>
        <NavbarDropDown boxed={false}>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>Jobs</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
          <NavbarDivider />
          <NavbarItem>Report an issue</NavbarItem>
        </NavbarDropDown>
      </NavbarItem>
    </NavbarStart>
    <NavbarEnd>
      <NavbarItem>Home</NavbarItem>
      <NavbarItem>Documentation</NavbarItem>
      <NavbarItem>Jobs</NavbarItem>
      <NavbarItem>Contact</NavbarItem>
    </NavbarEnd>
  </NavbarMenu>
</Navbar>
```
