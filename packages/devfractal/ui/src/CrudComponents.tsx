import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { CrudComponents } from 'technoidentity-core'
import { Icon } from './core'
import { Pager } from './dynamic'
import { EditorView } from './EditorView'
import { UITableView } from './simple'
import { ViewerView } from './ViewerView'

function uiCrudComponents<T extends Record<string, any>>(): CrudComponents<T> {
  return {
    EditorView,
    ViewerView,
    TableView: UITableView,
    Pager,
    TrashIcon: () => <Icon icon={faTrash} />,
  }
}

export const UICrudComponents: CrudComponents<any> = uiCrudComponents()
