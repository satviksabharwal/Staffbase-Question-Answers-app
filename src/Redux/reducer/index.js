import {combineReducers} from "redux";
import {selectedQuestionReducer} from "./selectedQuestionReducer";

const reducers = combineReducers({
    selectedQuestion: selectedQuestionReducer,
});
export default reducers;