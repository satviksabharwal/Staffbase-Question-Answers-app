export const selectedQuestionReducer = (state = "", {type, payload}) => {
    switch(type){
        case "SELECTED_QuestionData":
            return payload;  
        default:
            return state;     
    }
}