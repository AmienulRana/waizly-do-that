// #region core

export type TodoId = string;

export interface BaseTodoItem {
  todo: string;
  complete: boolean;
}

export interface TodoItem extends BaseTodoItem {
  id: TodoId;
}

interface GenericAction {
  type: string;
  payload: any;
}

export interface AddAction extends GenericAction {
  type: "add";
  payload: BaseTodoItem;
}

export interface RemoveAction extends GenericAction {
  type: "remove";
  payload: TodoItem["id"];
}

export interface EditAction extends GenericAction {
  type: "edit";
  payload: {
    id: TodoItem["id"];
    todo: TodoItem["todo"];
  };
}

export interface ToggleCompletionAction extends GenericAction {
  type: "toggleCompletion";
  payload: TodoItem["id"];
}

export type ReducerAction =
  | AddAction
  | RemoveAction
  | EditAction
  | ToggleCompletionAction;

export interface IPropsTabs {
  tabActive: string;
  setTabActive: (tab: any) => void;
  labels: string[];
  defaultActive?: number;
  classNameWrapper?: string;
}

// #endregion
