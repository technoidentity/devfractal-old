### Card

```jsx
<Section>
  <Card>
    <CardHeader>
      <CardHeaderTitle alignment="centered">Card</CardHeaderTitle>
    </CardHeader>
    <CardImage>
      <Image
        responsiveImageRatio="4by3"
        src="https://bulma.io/images/placeholders/1280x960.png"
      />
    </CardImage>
    <CardContent>
      <Media>
        <MediaLeft>
          <Image
            size="48x48"
            src="https://bulma.io/images/placeholders/96x96.png"
          />
        </MediaLeft>
        <MediaContent>
          <Title size="4">John Smith</Title>
          <SubTitle size="6">@johnsmith</SubTitle>
        </MediaContent>
      </Media>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
        <a href="#">@bulmaio</a>. <a href="#">#css</a>
        <a href="#">#responsive</a>
        <br />
        <time dateTime="2016-1-1">11:09 PM - 1 Jan</time>
      </Content>
    </CardContent>
    <CardFooter>
      <CardFooterItem>
        <a href="#">save</a>
      </CardFooterItem>
      <CardFooterItem>
        <a href="#">edit</a>
      </CardFooterItem>
      <CardFooterItem>
        <a href="#">delete</a>
      </CardFooterItem>
    </CardFooter>
  </Card>
</Section>
```
