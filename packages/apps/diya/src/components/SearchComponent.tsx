import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Icon, Input } from 'devfractal-ui-core'
import React from 'react'

export const SearchComponent = () => (
  <>
    <Input placeholder="Search by ID" /> <Icon icon={faSearch} />
  </>
)
