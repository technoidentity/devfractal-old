### Default Dropdown

```jsx
<DropDown label="Content">
  <DropDownItem>
    <p>
      You can insert <strong>any type of content</strong> within the dropdown
      menu.
    </p>
  </DropDownItem>
  <DropDownDivider />
  <DropDownItem>
    <p>
      You simply need to use a <code>&lt;div&gt;</code> instead.
    </p>
  </DropDownItem>
  <DropDownDivider />
  <DropDownItem>This is a link</DropDownItem>
</DropDown>
```

### Dropdown with all properties

```jsx
<DropDown
  label="Content"
  modifier="hoverable"
  rightAligned={false}
  dropUp={false}
>
  <DropDownItem>
    <p>
      You can insert <strong>any type of content</strong> within the dropdown
      menu.
    </p>
  </DropDownItem>
  <DropDownDivider />
  <DropDownItem>
    <p>
      You simply need to use a <code>&lt;div&gt;</code> instead.
    </p>
  </DropDownItem>
  <DropDownDivider />
  <DropDownItem>This is a link</DropDownItem>
</DropDown>
```
