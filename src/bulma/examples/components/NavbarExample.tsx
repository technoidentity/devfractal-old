import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {
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
} from '../../components/Navbar'
import { Icon, SubTitle, Title } from '../../elements'
import { Field } from '../../form'
import { Button, ButtonsGroup } from '../../form/Button'
import { Hero, HeroBody, Section } from '../../layout'

export const NavbarExample: React.SFC = () => (
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
            <NavbarItem modifier="active">Documentation</NavbarItem>
            <NavbarItem dropdown modifier="hoverable">
              <NavbarLink>More</NavbarLink>
              <NavbarDropdown>
                <NavbarItem>About</NavbarItem>
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
    <Section>
      <Title size="4">Navbar burger(appears on mobile)</Title>
      <NavbarBurger role="button">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </NavbarBurger>
    </Section>
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
              <NavbarDropdown modifier="boxed">
                <NavbarItem>Overview</NavbarItem>
                <NavbarItem>Modifiers</NavbarItem>
                <NavbarItem>Columns</NavbarItem>
                <NavbarItem>Layout</NavbarItem>
                <NavbarItem>Form</NavbarItem>
                <NavbarDivider />
                <NavbarItem>Elements</NavbarItem>
                <NavbarItem modifier="active">Components</NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem>
              <Field grouped>
                <Button variant="info">
                  <Icon icon={faTwitter} /> Twitter
                </Button>
                <Button variant="primary">
                  <Icon icon={faDownload} /> Download
                </Button>
              </Field>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    </Section>
    <Section>
      <Title size="4">Dropdown menu</Title>
      <Navbar>
        <NavbarItem dropdown>
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
    </Section>
    <Section>
      <Navbar>
        <NavbarItem dropdown modifier="hoverable">
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
    </Section>
    <Section>
      <Navbar>
        <NavbarItem dropdown>
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
    </Section>
    <Section>
      <Title size="4">Right dropdown</Title>
      <Navbar>
        <NavbarMenu>
          <NavbarStart>
            <NavbarItem dropdown modifier="active">
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
            <NavbarItem dropdown modifier="active">
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
            <NavbarItem dropdownup modifier="active">
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
        </NavbarMenu>
      </Navbar>
    </Section>
    <Section>
      <Title size="4">Dropdown without arrow</Title>
      <NavbarItem dropdown modifier="hoverable">
        <NavbarLink modifier="arrowless">Link without arrow</NavbarLink>

        <NavbarDropdown>
          <NavbarItem>Overview</NavbarItem>
          <NavbarItem>Elements</NavbarItem>
          <NavbarItem>Components</NavbarItem>
          <NavbarDivider />
          <NavbarItem>Version 0.7.2</NavbarItem>
        </NavbarDropdown>
      </NavbarItem>
    </Section>
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

        <NavbarItem dropdown modifier="active">
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

        <NavbarItem dropdown modifier="active">
          <NavbarLink>Docs</NavbarLink>

          <NavbarDropdown modifier="boxed">
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

        <NavbarItem dropdown modifier="active">
          <NavbarLink>Docs</NavbarLink>

          <NavbarDropdown>
            <NavbarItem>Overview</NavbarItem>
            <NavbarItem modifier="active">Elements</NavbarItem>
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
              <NavbarDropdown modifier="boxed">
                <NavbarItem>Overview</NavbarItem>
                <NavbarItem>Modifiers</NavbarItem>
                <NavbarItem>Columns</NavbarItem>
                <NavbarItem>Layout</NavbarItem>
                <NavbarItem>Form</NavbarItem>
                <NavbarDivider />
                <NavbarItem>Elements</NavbarItem>
                <NavbarItem modifier="active">Components</NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem>
              <Field grouped>
                <Button variant="info">
                  <Icon icon={faTwitter} /> Twitter
                </Button>
                <Button variant="primary">
                  <Icon icon={faDownload} /> Download
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
                <NavbarDropdown modifier="boxed">
                  <NavbarItem>Overview</NavbarItem>
                  <NavbarItem>Modifiers</NavbarItem>
                  <NavbarItem>Columns</NavbarItem>
                  <NavbarItem>Layout</NavbarItem>
                  <NavbarItem>Form</NavbarItem>
                  <NavbarDivider />
                  <NavbarItem>Elements</NavbarItem>
                  <NavbarItem modifier="active">Components</NavbarItem>
                </NavbarDropdown>
              </NavbarItem>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem>
                <Field grouped>
                  <Button variant="info">
                    <Icon icon={faTwitter} /> Twitter
                  </Button>
                  <Button variant="primary">
                    <Icon icon={faDownload} /> Download
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
                <NavbarDropdown modifier="boxed">
                  <NavbarItem>Overview</NavbarItem>
                  <NavbarItem>Modifiers</NavbarItem>
                  <NavbarItem>Columns</NavbarItem>
                  <NavbarItem>Layout</NavbarItem>
                  <NavbarItem>Form</NavbarItem>
                  <NavbarDivider />
                  <NavbarItem>Elements</NavbarItem>
                  <NavbarItem modifier="active">Components</NavbarItem>
                </NavbarDropdown>
              </NavbarItem>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem>
                <Field grouped>
                  <Button variant="info">
                    <Icon icon={faTwitter} /> Twitter
                  </Button>
                  <Button variant="primary">
                    <Icon icon={faDownload} /> Download
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
                <NavbarDropdown modifier="boxed">
                  <NavbarItem>Overview</NavbarItem>
                  <NavbarItem>Modifiers</NavbarItem>
                  <NavbarItem>Columns</NavbarItem>
                  <NavbarItem>Layout</NavbarItem>
                  <NavbarItem>Form</NavbarItem>
                  <NavbarDivider />
                  <NavbarItem>Elements</NavbarItem>
                  <NavbarItem modifier="active">Components</NavbarItem>
                </NavbarDropdown>
              </NavbarItem>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem>
                <Field grouped>
                  <Button variant="info">
                    <Icon icon={faTwitter} /> Twitter
                  </Button>
                  <Button variant="primary">
                    <Icon icon={faDownload} /> Download
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
                <NavbarDropdown modifier="boxed">
                  <NavbarItem>Overview</NavbarItem>
                  <NavbarItem>Modifiers</NavbarItem>
                  <NavbarItem>Columns</NavbarItem>
                  <NavbarItem>Layout</NavbarItem>
                  <NavbarItem>Form</NavbarItem>
                  <NavbarDivider />
                  <NavbarItem>Elements</NavbarItem>
                  <NavbarItem modifier="active">Components</NavbarItem>
                </NavbarDropdown>
              </NavbarItem>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem>
                <Field grouped>
                  <Button variant="info">
                    <Icon icon={faTwitter} /> Twitter
                  </Button>
                  <Button variant="primary">
                    <Icon icon={faDownload} /> Download
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
                <NavbarDropdown modifier="boxed">
                  <NavbarItem>Overview</NavbarItem>
                  <NavbarItem>Modifiers</NavbarItem>
                  <NavbarItem>Columns</NavbarItem>
                  <NavbarItem>Layout</NavbarItem>
                  <NavbarItem>Form</NavbarItem>
                  <NavbarDivider />
                  <NavbarItem>Elements</NavbarItem>
                  <NavbarItem modifier="active">Components</NavbarItem>
                </NavbarDropdown>
              </NavbarItem>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem>
                <Field grouped>
                  <Button variant="info">
                    <Icon icon={faTwitter} /> Twitter
                  </Button>
                  <Button variant="primary">
                    <Icon icon={faDownload} /> Download
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
                <NavbarDropdown modifier="boxed">
                  <NavbarItem>Overview</NavbarItem>
                  <NavbarItem>Modifiers</NavbarItem>
                  <NavbarItem>Columns</NavbarItem>
                  <NavbarItem>Layout</NavbarItem>
                  <NavbarItem>Form</NavbarItem>
                  <NavbarDivider />
                  <NavbarItem>Elements</NavbarItem>
                  <NavbarItem modifier="active">Components</NavbarItem>
                </NavbarDropdown>
              </NavbarItem>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem>
                <Field grouped>
                  <Button variant="info">
                    <Icon icon={faTwitter} /> Twitter
                  </Button>
                  <Button variant="primary">
                    <Icon icon={faDownload} /> Download
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
                <NavbarDropdown modifier="boxed">
                  <NavbarItem>Overview</NavbarItem>
                  <NavbarItem>Modifiers</NavbarItem>
                  <NavbarItem>Columns</NavbarItem>
                  <NavbarItem>Layout</NavbarItem>
                  <NavbarItem>Form</NavbarItem>
                  <NavbarDivider />
                  <NavbarItem>Elements</NavbarItem>
                  <NavbarItem modifier="active">Components</NavbarItem>
                </NavbarDropdown>
              </NavbarItem>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem>
                <Field grouped>
                  <Button variant="info">
                    <Icon icon={faTwitter} /> Twitter
                  </Button>
                  <Button variant="primary">
                    <Icon icon={faDownload} /> Download
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
                <NavbarDropdown modifier="boxed">
                  <NavbarItem>Overview</NavbarItem>
                  <NavbarItem>Modifiers</NavbarItem>
                  <NavbarItem>Columns</NavbarItem>
                  <NavbarItem>Layout</NavbarItem>
                  <NavbarItem>Form</NavbarItem>
                  <NavbarDivider />
                  <NavbarItem>Elements</NavbarItem>
                  <NavbarItem modifier="active">Components</NavbarItem>
                </NavbarDropdown>
              </NavbarItem>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem>
                <Field grouped>
                  <Button variant="info">
                    <Icon icon={faTwitter} /> Twitter
                  </Button>
                  <Button variant="primary">
                    <Icon icon={faDownload} /> Download
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
                <NavbarDropdown modifier="boxed">
                  <NavbarItem>Overview</NavbarItem>
                  <NavbarItem>Modifiers</NavbarItem>
                  <NavbarItem>Columns</NavbarItem>
                  <NavbarItem>Layout</NavbarItem>
                  <NavbarItem>Form</NavbarItem>
                  <NavbarDivider />
                  <NavbarItem>Elements</NavbarItem>
                  <NavbarItem modifier="active">Components</NavbarItem>
                </NavbarDropdown>
              </NavbarItem>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem>
                <Field grouped>
                  <Button variant="info">
                    <Icon icon={faTwitter} /> Twitter
                  </Button>
                  <Button variant="primary">
                    <Icon icon={faDownload} /> Download
                  </Button>
                </Field>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </Field>
    </Section>
  </>
)
