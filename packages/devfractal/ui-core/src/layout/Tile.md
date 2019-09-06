### Tile with all properties

```jsx
<Tile tileType="ancestor">
  <Tile vertical size="8">
    <Tile>
      <Tile tileType="parent" vertical>
        <Tile tileType="child" notification variant="primary">
          Vertical
        </Tile>
        <Tile tileType="child" notification variant="warning">
          Bottom Tile
        </Tile>
      </Tile>
      <Tile tileType="parent" size="5">
        <Tile tileType="child" notification variant="info">
          Middle tile
        </Tile>
      </Tile>
    </Tile>
    <Tile tileType="parent">
      <Tile tileType="child" notification variant="danger">
        Wide tile
      </Tile>
    </Tile>
  </Tile>
  <Tile tileType="parent">
    <Tile tileType="child" notification variant="success">
      Tall Tile
    </Tile>
  </Tile>
</Tile>
```
