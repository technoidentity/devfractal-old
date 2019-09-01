### Panel

```jsx
import { faBook, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
;<Panel>
  <PanelHeading>repositories</PanelHeading>
  <PanelBlock>
    panel-block which can contain other elements, like: control input button
    panel-icon
  </PanelBlock>
  <PanelTabs>
    <PanelTabsItem active>all</PanelTabsItem>
    <PanelTabsItem>public</PanelTabsItem>
    <PanelTabsItem>private</PanelTabsItem>
    <PanelTabsItem>sources</PanelTabsItem>
    <PanelTabsItem>forks</PanelTabsItem>
  </PanelTabs>
  <PanelBlock active={true}>
    <PanelIcon icon={faBook} />
    devfractal
  </PanelBlock>
  <PanelBlock>
    <PanelIcon icon={faBook} /> marksheet
  </PanelBlock>
  <PanelBlock>
    <PanelIcon icon={faBook} />
    miniresetcss
  </PanelBlock>
  <PanelBlock>
    <PanelIcon icon={faBook} />
    jgthms.github.io
  </PanelBlock>
  <PanelBlock>
    <PanelIcon icon={faCodeBranch} />
    daniellowtw/infboard
  </PanelBlock>
  <PanelBlock>
    <PanelIcon icon={faCodeBranch} />
    mojs
  </PanelBlock>
</Panel>
```
