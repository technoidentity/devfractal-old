import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Icon } from 'devfractal-ui-core'
import React from 'react'
import Autosuggest from 'react-autosuggest'

export interface SearchProps<T> {
  readonly searchBy: string
  onSearch(value: string): void
  fetchSuggestions(value: string, searchBy: string): Promise<readonly T[]>
}

interface SearchState<T> {
  readonly value: string
  readonly suggestions: readonly T[]
}

export function Search<T>({
  searchBy,
  onSearch,
  fetchSuggestions,
}: SearchProps<T>): JSX.Element {
  const [state, setState] = React.useState<SearchState<T>>({
    value: '',
    suggestions: [],
  })

  return (
    <>
      <Autosuggest
        suggestions={state.suggestions}
        onSuggestionsFetchRequested={async ({ value }) => {
          const suggestions =
            value.length === 0 ? [] : await fetchSuggestions(value, searchBy)

          setState({ value, suggestions })
        }}
        alwaysRenderSuggestions={true}
        getSuggestionValue={suggestion => suggestion[searchBy]}
        renderSuggestion={suggestion => <div>{`${suggestion[searchBy]}`}</div>}
        inputProps={{
          placeholder: `Type a ${searchBy}`,
          value: state.value,
          onChange: (_, { newValue }) =>
            setState({ ...state, value: newValue }),
        }}
      />

      <button type="button" onClick={() => onSearch(state.value)}>
        <Icon icon={faSearch} />
      </button>
    </>
  )
}
