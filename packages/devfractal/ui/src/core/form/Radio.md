### Default RadioButton

```jsx
<RadioGroup>
  <Radio>Male</Radio>
  <Radio>Female</Radio>
</RadioGroup>
```

### RadioGroup with properties

```jsx
<div>
  <RadioGroup name="gender" defaultValue="female">
    <Radio value="male">Male</Radio>
    <Radio value="female">Female</Radio>
  </RadioGroup>
  <RadioGroup name="gender1" selected="male">
    <Radio value="male">Male</Radio>
    <Radio value="female">Female</Radio>
  </RadioGroup>
</div>
```
