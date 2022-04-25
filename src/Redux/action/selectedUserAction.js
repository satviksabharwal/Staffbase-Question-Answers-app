export const setQuestionData = (selectedQuestions) => {
    return {
        type: "SELECTED_QuestionData",
        payload: selectedQuestions,
    };
} ;