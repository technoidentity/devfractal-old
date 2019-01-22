import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {
  Button,
  ButtonsGroup,
  Field,
  Hero,
  HeroBody,
  Icon,
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarDivider,
  NavbarDropdown,
  NavbarEnd,
  NavbarItem,
  NavbarLink,
  NavbarMenu,
  NavbarStart,
  Section,
  SubTitle,
  Title,
} from '../devfractal'

export const BasicNavbar: React.SFC = () => (
  <>
    <Section>
      <Title size="4">Basic Navbar</Title>
      <Navbar>
        <NavbarBrand>
          <NavbarItem>
            {/* TODO:: change this to Image*/}
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
            <NavbarItem dropdown modifier="hoverable">
              <NavbarLink>More</NavbarLink>
              <NavbarDropdown>
                <NavbarItem active>About</NavbarItem>
                <NavbarItem>Jobs</NavbarItem>
                <NavbarItem>Contact</NavbarItem>
                <NavbarDivider />
                <NavbarItem>Report an issue</NavbarItem>
              </NavbarDropdown>
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
    </Section>
    <Section>
      <Title size="4">Basic Navbar</Title>
      <Navbar>
        <NavbarBrand>
          <NavbarItem>
            {/* TODO:: change this to Image*/}
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
            <NavbarItem dropdown modifier="hoverable">
              <NavbarLink>More</NavbarLink>
              <NavbarDropdown>
                <NavbarItem active>About</NavbarItem>
                <NavbarItem>Jobs</NavbarItem>
                <NavbarItem>Contact</NavbarItem>
                <NavbarDivider />
                <NavbarItem>Report an issue</NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem>
              <ButtonsGroup>
                <Button variant="primary">Sign up</Button>
                <Button variant="light">Log in</Button>
              </ButtonsGroup>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    </Section>
  </>
)

export const NavbarBrandExample: React.SFC = () => (
  <Section>
    <Title size="4">Navbar brand</Title>
    <Navbar>
      <NavbarBrand>
        <NavbarItem>
          {/* TODO:: change this to Image*/}
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
    </Navbar>
  </Section>
)

export const NavbarBurgerExample: React.SFC = () => (
  <Section>
    <Title size="4">Navbar burger(appears on mobile)</Title>
    <NavbarBurger role="button">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </NavbarBurger>
  </Section>
)

export const TransparentNavbar: React.SFC = () => (
  <Section>
    <Title size="4">Transparent navbar</Title>
    <Navbar modifier="transparent">
      <NavbarBrand>
        <NavbarItem>
          {/* TODO:: change this to Image*/}
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
          <NavbarItem dropdown modifier="hoverable">
            <NavbarLink>Docs</NavbarLink>
            <NavbarDropdown boxed>
              <NavbarItem>Overview</NavbarItem>
              <NavbarItem>Modifiers</NavbarItem>
              <NavbarItem>Columns</NavbarItem>
              <NavbarItem>Layout</NavbarItem>
              <NavbarItem>Form</NavbarItem>
              <NavbarDivider />
              <NavbarItem>Elements</NavbarItem>
              <NavbarItem active>Components</NavbarItem>
            </NavbarDropdown>
          </NavbarItem>
        </NavbarStart>
        <NavbarEnd>
          <NavbarItem>
            <Field grouped>
              <Button variant="info">
                <Icon icon={faTwitter} /> <span>Twitter</span>
              </Button>
              <Button variant="primary">
                <Icon icon={faDownload} /> <span>Download</span>
              </Button>
            </Field>
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Navbar>
  </Section>
)

export const NavbarDropdownMenu: React.SFC = () => (
  <>
    <Section>
      <Title size="4">Dropdown menu</Title>
      <Navbar>
        <NavbarItem dropdown active modifier="expanded">
          <NavbarLink>Docs(Active)</NavbarLink>
          <NavbarDropdown>
            <NavbarItem>Overview</NavbarItem>
            <NavbarItem>Elements</NavbarItem>
            <NavbarItem>Components</NavbarItem>
            <NavbarDivider />
            <NavbarItem>Version 0.7.2</NavbarItem>
          </NavbarDropdown>
        </NavbarItem>
      </Navbar>
    </Section>
    <Section>
      <Navbar>
        <NavbarItem dropdown modifier="hoverable">
          <NavbarLink>Docs(Hoverable)</NavbarLink>
          <NavbarDropdown>
            <NavbarItem>Overview</NavbarItem>
            <NavbarItem>Elements</NavbarItem>
            <NavbarItem>Components</NavbarItem>
            <NavbarDivider />
            <NavbarItem>Version 0.7.2</NavbarItem>
          </NavbarDropdown>
        </NavbarItem>
      </Navbar>
    </Section>
    <Section>
      <Navbar>
        <NavbarItem dropdown>
          <NavbarLink>Docs(JS)</NavbarLink>
          <NavbarDropdown>
            <NavbarItem>Overview</NavbarItem>
            <NavbarItem>Elements</NavbarItem>
            <NavbarItem>Components</NavbarItem>
            <NavbarDivider />
            <NavbarItem>Version 0.7.2</NavbarItem>
          </NavbarDropdown>
        </NavbarItem>
      </Navbar>
    </Section>
  </>
)

export const NavbarRightDropdown: React.SFC = () => (
  <>
    <Section>
      <Title size="4">Right dropdown</Title>
      <Navbar>
        <NavbarMenu>
          <NavbarStart>
            <NavbarItem dropdown active>
              <NavbarLink>Left</NavbarLink>
              <NavbarDropdown>
                <NavbarItem>Overview</NavbarItem>
                <NavbarItem>Elements</NavbarItem>
                <NavbarItem>Components</NavbarItem>
                <NavbarDivider />
                <NavbarItem>Version 0.7.2</NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem dropdown active>
              <NavbarLink>Right</NavbarLink>
              <NavbarDropdown>
                <NavbarItem>Overview</NavbarItem>
                <NavbarItem>Elements</NavbarItem>
                <NavbarItem>Components</NavbarItem>
                <NavbarDivider />
                <NavbarItem>Version 0.7.2</NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
      <Hero variant="primary">
        <HeroBody>
          <Title>Documentation</Title>
          <SubTitle>
            Everything you need to <strong>create a website</strong> with Bulma
          </SubTitle>
        </HeroBody>
      </Hero>
    </Section>
  </>
)

export const NavbarDropup: React.SFC = () => (
  <Section>
    <Title size="4">Dropup</Title>
    <Hero variant="primary">
      <HeroBody>
        <Title>Documentation</Title>
        <SubTitle>
          Everything you need to <strong>create a website</strong> with Bulma
        </SubTitle>
      </HeroBody>
    </Hero>
    <Navbar>
      <NavbarMenu>
        <NavbarStart>
          <NavbarItem dropUp active>
            <NavbarLink>Dropup</NavbarLink>
            <NavbarDropdown>
              <NavbarItem>Overview</NavbarItem>
              <NavbarItem>Elements</NavbarItem>
              <NavbarItem>Components</NavbarItem>
              <NavbarDivider />
              <NavbarItem>Version 0.7.2</NavbarItem>
            </NavbarDropdown>
          </NavbarItem>
        </NavbarStart>
      </NavbarMenu>
    </Navbar>
  </Section>
)

export const DropdownWithOutArrow: React.SFC = () => (
  <Section>
    <Title size="4">Dropdown without arrow</Title>
    <NavbarItem dropdown>
      <NavbarLink arrowLess>Link without arrow</NavbarLink>
      <NavbarDropdown>
        <NavbarItem>Overview</NavbarItem>
        <NavbarItem>Elements</NavbarItem>
        <NavbarItem>Components</NavbarItem>
        <NavbarDivider />
        <NavbarItem>Version 0.7.2</NavbarItem>
      </NavbarDropdown>
    </NavbarItem>
  </Section>
)

export const DropdownMenuStyles: React.SFC = () => (
  <>
    <Section>
      <Title size="4">Styles for the dropdown menu</Title>
      <Navbar>
        <NavbarItem>
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </NavbarItem>
        <NavbarItem dropdown active>
          <NavbarLink>Docs</NavbarLink>
          <NavbarDropdown>
            <NavbarItem>Overview</NavbarItem>
            <NavbarItem>Elements</NavbarItem>
            <NavbarItem>Components</NavbarItem>
            <NavbarDivider />
            <NavbarItem>Version 0.7.2</NavbarItem>
          </NavbarDropdown>
        </NavbarItem>
      </Navbar>
      <Hero variant="primary">
        <HeroBody>
          <Title>Documentation</Title>
          <SubTitle>
            Everything you need to <strong>create a website</strong> with Bulma
          </SubTitle>
        </HeroBody>
      </Hero>
    </Section>
    <Section>
      <Navbar modifier="transparent">
        <NavbarItem>
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </NavbarItem>
        <NavbarItem dropdown active>
          <NavbarLink>Docs</NavbarLink>
          <NavbarDropdown boxed>
            <NavbarItem>Overview</NavbarItem>
            <NavbarItem>Elements</NavbarItem>
            <NavbarItem>Components</NavbarItem>
            <NavbarDivider />
            <NavbarItem>Version 0.7.2</NavbarItem>
          </NavbarDropdown>
        </NavbarItem>
      </Navbar>
      <Hero>
        <HeroBody>
          <Title>Documentation</Title>
          <SubTitle>
            Everything you need to <strong>create a website</strong> with Bulma
          </SubTitle>
        </HeroBody>
      </Hero>
    </Section>
    <Section>
      <Title size="4">Active dropdown navbar item</Title>
      <Navbar>
        <NavbarItem>
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </NavbarItem>
        <NavbarItem dropdown active>
          <NavbarLink>Docs</NavbarLink>
          <NavbarDropdown>
            <NavbarItem>Overview</NavbarItem>
            <NavbarItem as="a" active>
              Elements
            </NavbarItem>
            <NavbarItem>Components</NavbarItem>
            <NavbarDivider />
            <NavbarItem>Version 0.7.2</NavbarItem>
          </NavbarDropdown>
        </NavbarItem>
      </Navbar>
      <Hero variant="primary">
        <HeroBody>
          <Title>Documentation</Title>
          <SubTitle>
            Everything you need to <strong>create a website</strong> with Bulma
          </SubTitle>
        </HeroBody>
      </Hero>
    </Section>
  </>
)

export const NavbarColors: React.SFC = () => (
  <Section>
    <Title size="4">Colors</Title>
    <Navbar modifier="transparent" variant="primary">
      <NavbarBrand>
        <NavbarItem>
          {/* TODO:: change this to Image*/}
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
          <NavbarItem dropdown modifier="hoverable">
            <NavbarLink>Docs</NavbarLink>
            <NavbarDropdown boxed>
              <NavbarItem>Overview</NavbarItem>
              <NavbarItem>Modifiers</NavbarItem>
              <NavbarItem>Columns</NavbarItem>
              <NavbarItem>Layout</NavbarItem>
              <NavbarItem>Form</NavbarItem>
              <NavbarDivider />
              <NavbarItem>Elements</NavbarItem>
              <NavbarItem active>Components</NavbarItem>
            </NavbarDropdown>
          </NavbarItem>
        </NavbarStart>
        <NavbarEnd>
          <NavbarItem>
            <Field grouped>
              <Button variant="info">
                <Icon icon={faTwitter} /> <span>Twitter</span>
              </Button>
              <Button variant="primary">
                <Icon icon={faDownload} /> <span>Download</span>
              </Button>
            </Field>
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Navbar>
    <Field>
      <Navbar modifier="transparent" variant="success">
        <NavbarBrand>
          <NavbarItem>
            {/* TODO:: change this to Image*/}
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
            <NavbarItem dropdown modifier="hoverable">
              <NavbarLink>Docs</NavbarLink>
              <NavbarDropdown boxed>
                <NavbarItem>Overview</NavbarItem>
                <NavbarItem>Modifiers</NavbarItem>
                <NavbarItem>Columns</NavbarItem>
                <NavbarItem>Layout</NavbarItem>
                <NavbarItem>Form</NavbarItem>
                <NavbarDivider />
                <NavbarItem>Elements</NavbarItem>
                <NavbarItem active>Components</NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem>
              <Field grouped>
                <Button variant="info">
                  <Icon icon={faTwitter} /> <span>Twitter</span>
                </Button>
                <Button variant="primary">
                  <Icon icon={faDownload} /> <span>Download</span>
                </Button>
              </Field>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    </Field>
    <Field>
      <Navbar modifier="transparent" variant="warning">
        <NavbarBrand>
          <NavbarItem>
            {/* TODO:: change this to Image*/}
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
            <NavbarItem dropdown modifier="hoverable">
              <NavbarLink>Docs</NavbarLink>
              <NavbarDropdown boxed>
                <NavbarItem>Overview</NavbarItem>
                <NavbarItem>Modifiers</NavbarItem>
                <NavbarItem>Columns</NavbarItem>
                <NavbarItem>Layout</NavbarItem>
                <NavbarItem>Form</NavbarItem>
                <NavbarDivider />
                <NavbarItem>Elements</NavbarItem>
                <NavbarItem active>Components</NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem>
              <Field grouped>
                <Button variant="info">
                  <Icon icon={faTwitter} /> <span>Twitter</span>
                </Button>
                <Button variant="primary">
                  <Icon icon={faDownload} /> <span>Download</span>
                </Button>
              </Field>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    </Field>
    <Field>
      <Navbar modifier="transparent" variant="white">
        <NavbarBrand>
          <NavbarItem>
            {/* TODO:: change this to Image*/}
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
            <NavbarItem dropdown modifier="hoverable">
              <NavbarLink>Docs</NavbarLink>
              <NavbarDropdown boxed>
                <NavbarItem>Overview</NavbarItem>
                <NavbarItem>Modifiers</NavbarItem>
                <NavbarItem>Columns</NavbarItem>
                <NavbarItem>Layout</NavbarItem>
                <NavbarItem>Form</NavbarItem>
                <NavbarDivider />
                <NavbarItem>Elements</NavbarItem>
                <NavbarItem active>Components</NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem>
              <Field grouped>
                <Button variant="info">
                  <Icon icon={faTwitter} />
                  <span> Twitter</span>
                </Button>
                <Button variant="primary">
                  <Icon icon={faDownload} /> <span>Download</span>
                </Button>
              </Field>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    </Field>
    <Field>
      <Navbar modifier="transparent" variant="black">
        <NavbarBrand>
          <NavbarItem>
            {/* TODO:: change this to Image*/}
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
            <NavbarItem dropdown modifier="hoverable">
              <NavbarLink>Docs</NavbarLink>
              <NavbarDropdown boxed>
                <NavbarItem>Overview</NavbarItem>
                <NavbarItem>Modifiers</NavbarItem>
                <NavbarItem>Columns</NavbarItem>
                <NavbarItem>Layout</NavbarItem>
                <NavbarItem>Form</NavbarItem>
                <NavbarDivider />
                <NavbarItem>Elements</NavbarItem>
                <NavbarItem active>Components</NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem>
              <Field grouped>
                <Button variant="info">
                  <Icon icon={faTwitter} /> <span>Twitter</span>
                </Button>
                <Button variant="primary">
                  <Icon icon={faDownload} /> <span>Download</span>
                </Button>
              </Field>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    </Field>
    <Field>
      <Navbar modifier="transparent" variant="danger">
        <NavbarBrand>
          <NavbarItem>
            {/* TODO:: change this to Image*/}
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
            <NavbarItem dropdown modifier="hoverable">
              <NavbarLink>Docs</NavbarLink>
              <NavbarDropdown boxed>
                <NavbarItem>Overview</NavbarItem>
                <NavbarItem>Modifiers</NavbarItem>
                <NavbarItem>Columns</NavbarItem>
                <NavbarItem>Layout</NavbarItem>
                <NavbarItem>Form</NavbarItem>
                <NavbarDivider />
                <NavbarItem>Elements</NavbarItem>
                <NavbarItem active>Components</NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem>
              <Field grouped>
                <Button variant="info">
                  <Icon icon={faTwitter} /> <span>Twitter</span>
                </Button>
                <Button variant="primary">
                  <Icon icon={faDownload} /> <span>Download</span>
                </Button>
              </Field>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    </Field>
    <Field>
      <Navbar modifier="transparent" variant="dark">
        <NavbarBrand>
          <NavbarItem>
            {/* TODO:: change this to Image*/}
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
            <NavbarItem dropdown modifier="hoverable">
              <NavbarLink>Docs</NavbarLink>
              <NavbarDropdown boxed>
                <NavbarItem>Overview</NavbarItem>
                <NavbarItem>Modifiers</NavbarItem>
                <NavbarItem>Columns</NavbarItem>
                <NavbarItem>Layout</NavbarItem>
                <NavbarItem>Form</NavbarItem>
                <NavbarDivider />
                <NavbarItem>Elements</NavbarItem>
                <NavbarItem active>Components</NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem>
              <Field grouped>
                <Button variant="info">
                  <Icon icon={faTwitter} /> <span>Twitter</span>
                </Button>
                <Button variant="primary">
                  <Icon icon={faDownload} /> <span>Download</span>
                </Button>
              </Field>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    </Field>
    <Field>
      <Navbar modifier="transparent" variant="info">
        <NavbarBrand>
          <NavbarItem>
            {/* TODO:: change this to Image*/}
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
            <NavbarItem dropdown modifier="hoverable">
              <NavbarLink>Docs</NavbarLink>
              <NavbarDropdown boxed>
                <NavbarItem>Overview</NavbarItem>
                <NavbarItem>Modifiers</NavbarItem>
                <NavbarItem>Columns</NavbarItem>
                <NavbarItem>Layout</NavbarItem>
                <NavbarItem>Form</NavbarItem>
                <NavbarDivider />
                <NavbarItem>Elements</NavbarItem>
                <NavbarItem active>Components</NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem>
              <Field grouped>
                <Button variant="info">
                  <Icon icon={faTwitter} /> <span>Twitter</span>
                </Button>
                <Button variant="primary">
                  <Icon icon={faDownload} /> <span>Download</span>
                </Button>
              </Field>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    </Field>
    <Field>
      <Navbar modifier="transparent" variant="light">
        <NavbarBrand>
          <NavbarItem>
            {/* TODO:: change this to Image*/}
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
            <NavbarItem dropdown modifier="hoverable">
              <NavbarLink>Docs</NavbarLink>
              <NavbarDropdown boxed>
                <NavbarItem>Overview</NavbarItem>
                <NavbarItem>Modifiers</NavbarItem>
                <NavbarItem>Columns</NavbarItem>
                <NavbarItem>Layout</NavbarItem>
                <NavbarItem>Form</NavbarItem>
                <NavbarDivider />
                <NavbarItem>Elements</NavbarItem>
                <NavbarItem active>Components</NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem>
              <Field grouped>
                <Button variant="info">
                  <Icon icon={faTwitter} /> <span>Twitter</span>
                </Button>
                <Button variant="primary">
                  <Icon icon={faDownload} /> <span>Download</span>
                </Button>
              </Field>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    </Field>
    <Field>
      <Navbar modifier="transparent" variant="link">
        <NavbarBrand>
          <NavbarItem>
            {/* TODO:: change this to Image*/}
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
            <NavbarItem dropdown modifier="hoverable">
              <NavbarLink>Docs</NavbarLink>
              <NavbarDropdown boxed>
                <NavbarItem>Overview</NavbarItem>
                <NavbarItem>Modifiers</NavbarItem>
                <NavbarItem>Columns</NavbarItem>
                <NavbarItem>Layout</NavbarItem>
                <NavbarItem>Form</NavbarItem>
                <NavbarDivider />
                <NavbarItem>Elements</NavbarItem>
                <NavbarItem active>Components</NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem>
              <Field grouped>
                <Button variant="info">
                  <Icon icon={faTwitter} /> <span>Twitter</span>
                </Button>
                <Button variant="primary">
                  <Icon icon={faDownload} /> <span>Download</span>
                </Button>
              </Field>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    </Field>
  </Section>
)

export const NavbarExample: React.SFC = () => (
  <>
    <BasicNavbar />
    <NavbarBrandExample />
    <TransparentNavbar />
    <NavbarBurgerExample />
    <NavbarDropup />
    <NavbarDropdownMenu />
    <NavbarRightDropdown />
    <DropdownWithOutArrow />
    <DropdownMenuStyles />
    <NavbarColors />
  </>
)
