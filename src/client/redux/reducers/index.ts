import { combineReducers, Reducer } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { ApplicationAction } from "../actions";

import AdminReducer, { AdminState } from "./admin";
import AuditReducer, { AuditState } from "./audit";
import FeedbackReducer, { FeedbackState } from "./feedback";
import LoginReducer, { LoginState } from "./login";
import OverviewReducer, { OverviewState } from "./overview";
import OverviewSelectionsReducer, {
  OverviewSelectionsState
} from "./overview-selections";
import OverviewSettingsReducer, {
  OverviewSettingsState
} from "./overview-settings";
import SummaryReducer, { SummaryState } from "./summary";
import UserDataReducer, { UserDataState } from "./user-data";
import ViewReducer, { ViewState } from "./views";

export interface ApplicationState {
  admin: AdminState;
  audit: AuditState;
  feedback: FeedbackState;
  login: LoginState;
  overview: OverviewState;
  overviewSelections: OverviewSelectionsState;
  overviewSettings: OverviewSettingsState;
  summary: SummaryState;
  userData: UserDataState;
  view: ViewState;
}

const rootReducer: Reducer<ApplicationState> = combineReducers<
  ApplicationState
>({
  admin: AdminReducer,
  audit: AuditReducer,
  feedback: FeedbackReducer,
  login: LoginReducer,
  overview: OverviewReducer,
  overviewSelections: OverviewSelectionsReducer,
  overviewSettings: OverviewSettingsReducer,
  summary: SummaryReducer,
  userData: UserDataReducer,
  view: ViewReducer
});

export type Dispatch = ThunkDispatch<ApplicationState, null, ApplicationAction>;

export default rootReducer;
