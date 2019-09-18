// tslint:disable: no-null-keyword
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faBell,
  faBus,
  faCarBattery,
  faMapMarked,
  faPaperPlane,
  faUserFriends,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { keyof, TypeOf } from 'io-ts'
import React from 'react'
import {
  Column,
  Icon,
  Image,
  Menu,
  MenuItem,
  MenuList,
  NavbarBurger,
  NavbarBurgerProps,
  Section,
} from 'technoidentity-devfractal'
import { fn, req } from 'technoidentity-utils'
import diyaLogo from '../images/diyaLogo.png'
import { MenuBurger } from './MenuBurger'

export const Visibility = keyof({
  full: true,
  minimal: true,
  hidden: true,
})

export type Visibility = TypeOf<typeof Visibility>

const SideMenuViewProps = req({
  visibility: Visibility,
  onClick: fn<() => void>(),
})

type SideMenuViewProps = TypeOf<typeof SideMenuViewProps>

interface SideMenuItemProps {
  readonly href: string
  readonly icon: IconProp
  readonly label: string
  readonly visibility: Visibility
}

export const SideMenuItem: React.FC<SideMenuItemProps> = ({
  href,
  icon,
  label,
  visibility,
}) => (
  <>
    <MenuItem href={href}>
      <Icon icon={icon} /> {visibility !== 'minimal' ? label : null}
    </MenuItem>
  </>
)

export const Burger: React.FC<NavbarBurgerProps> = props => (
  <NavbarBurger {...props}>
    <span />
    <span />
    <span />
  </NavbarBurger>
)

export const SideMenuView: React.FC<SideMenuViewProps> = ({
  visibility,
  onClick,
}) => (
  <>
    {visibility !== 'hidden' && (
      <Column
        narrow
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* <Burger onClick={onClick} /> */}
        <MenuBurger isMinimal={visibility === 'minimal'} onClick={onClick} />

        {visibility !== 'minimal' && (
          <Image src={diyaLogo} alt="diyaImage" size="96x96" />
        )}

        <Section style={{ marginTop: '30px' }}>
          <Menu>
            <MenuList>
              <SideMenuItem
                href="/drivers"
                icon={faUsers}
                label="Drivers"
                visibility={visibility}
              />
              <SideMenuItem
                href="/vehicles"
                icon={faBus}
                label="Vehicles"
                visibility={visibility}
              />
              <SideMenuItem
                href="/batteries"
                icon={faCarBattery}
                label="Battery"
                visibility={visibility}
              />
              <SideMenuItem
                href="/clients"
                icon={faUserFriends}
                label="Clients"
                visibility={visibility}
              />
              <SideMenuItem
                href="/geo_fences"
                icon={faMapMarked}
                label="Geofences"
                visibility={visibility}
              />

              <SideMenuItem
                href="/users"
                icon={faUsers}
                label="Users"
                visibility={visibility}
              />

              <SideMenuItem
                href="/invoices"
                icon={faBell}
                label="Invoices"
                visibility={visibility}
              />

              <SideMenuItem
                href="#!"
                icon={faPaperPlane}
                label="Reports"
                visibility={visibility}
              />
            </MenuList>
          </Menu>
        </Section>
      </Column>
    )}
  </>
)
