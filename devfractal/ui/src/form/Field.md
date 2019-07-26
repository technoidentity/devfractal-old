### Default Field

```jsx
import { Field } from './Field'
import { Label, Input } from '../form'
;<Field>
  <Label>Name</Label>
  <Input type="text" placeholder="Text input" />
</Field>
```

### Field with properties

```jsx
import { Field, FieldLabel, FieldHelp } from './Field'
import { Label, Input, Button } from '../form'
;<div>
  <Field grouped={true} groupModifier="grouped-right">
    <Button>Submit</Button>
    <Button>Reset</Button>
  </Field>
  <Field addons={true} addonsModifier="addons-centered">
    <Button>Submit</Button>
    <Button>Reset</Button>
  </Field>
  <Field>
    <Label>UserName</Label>
    <Input type="text" placeholder="Text input" />
    <FieldHelp variant="success">This username is available</FieldHelp>
  </Field>
  <Field horizontal={true}>
    <FieldLabel>
      <Label>Subject</Label>
    </FieldLabel>
    <FieldBody>
      <Field>
        <Input type="text" placeholder="Horizontal" />
      </Field>
    </FieldBody>
  </Field>
</div>
```
