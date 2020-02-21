import { CrudComponents } from 'technoidentity-core'
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
  }
}

export const UICrudComponents: CrudComponents<any> = uiCrudComponents()
