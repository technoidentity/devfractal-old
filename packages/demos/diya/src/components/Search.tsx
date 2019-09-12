import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Button, Icon } from 'devfractal-ui-core'
import { Mixed, readonlyArray } from 'io-ts'
import React from 'react'
import Autosuggest from 'react-autosuggest'
import { http as httpAPI } from 'technoidentity-devfractal'

const http: ReturnType<typeof httpAPI> = httpAPI({
  baseURL: 'http://localhost:9999',
})

export const fetchSuggestions = async <Spec extends Mixed>(
  value: string,
  searchBy: string,
  resource: string,
  spec: Spec,
) => {
  const inputLength = value.length
  try {
    const suggestions = await http.get(
      {
        resource,
        query: `${searchBy}_like=^${value}`,
      },
      readonlyArray(spec),
    )
    return inputLength === 0 ? [] : suggestions
  } catch (err) {
    throw new Error(err)
  }
}

export interface SearchProps<T> {
  readonly searchBy: string
  onSearch(value: string): void
  fetchSuggestions(value: string, searchBy: string): Promise<readonly T[]>
}

export function Search<T>({
  searchBy,
  onSearch,
  fetchSuggestions,
}: SearchProps<T>): JSX.Element {
  const [value, setValue] = React.useState<string>('')
  const [suggestions, setSuggestions] = React.useState<ReadonlyArray<T>>([])

  return (
    <>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={async ({ value }) => {
          const suggestions =
            value.length === 0 ? [] : await fetchSuggestions(value, searchBy)
          setValue(value)
          setSuggestions(suggestions)
        }}
        onSuggestionsClearRequested={() => {
          setSuggestions([])
        }}
        getSuggestionValue={suggestion => suggestion[searchBy]}
        renderSuggestion={suggestion => <div>{`${suggestion[searchBy]}`}</div>}
        inputProps={{
          placeholder: `Type a ${searchBy}`,
          value,
          type: 'search',
          onChange: (_, { newValue }) => {
            setValue(newValue)
          },
        }}
      />
      <Button
        variant="danger"
        size="small"
        state="hovered"
        type="button"
        onClick={() => onSearch(value)}
      >
        <Icon icon={faSearch} />
      </Button>
    </>
  )
}
