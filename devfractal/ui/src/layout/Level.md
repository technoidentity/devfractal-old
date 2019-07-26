### Default level

```jsx
import { Level } from './Level'
;<Level>
  <LevelItem>
    <LevelItem>
      <strong>All</strong>
    </LevelItem>
    <LevelItem>
      <a>Published</a>
    </LevelItem>
    <LevelItem>
      <a>Drafts</a>
    </LevelItem>
    <LevelItem>
      <a>Deleted</a>
    </LevelItem>
  </LevelItem>
</Level>
```

### Level with all properties

```jsx
import { Level } from './Level'
;<Level modifier="mobile">
  <LevelItem>
    <LevelItem>
      <strong>All</strong>
    </LevelItem>
    <LevelItem>
      <a>Published</a>
    </LevelItem>
    <LevelItem>
      <a>Drafts</a>
    </LevelItem>
    <LevelItem>
      <a>Deleted</a>
    </LevelItem>
  </LevelItem>
</Level>
```

### LevelItem with all properties

```jsx
import { Level } from './Level'
;<Level>
  <LevelItem direction="right">
    <LevelItem>
      <strong>All</strong>
    </LevelItem>
    <LevelItem>
      <a>Published</a>
    </LevelItem>
    <LevelItem>
      <a>Drafts</a>
    </LevelItem>
    <LevelItem>
      <a>Deleted</a>
    </LevelItem>
  </LevelItem>
</Level>
```
