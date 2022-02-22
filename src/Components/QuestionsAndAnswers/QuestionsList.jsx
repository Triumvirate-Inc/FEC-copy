import React from 'react';
import QuestionsListItem from './QuestionsListItem.jsx';
import ExpandButton from './ExpandButton.jsx';
import AskForm from './AskForm.jsx';

// wrap buttons in enclosing style div using display flex

function QuestionsList(props) {
  return (
    <div>
      <p>
        {props.questions.slice(0, props.displayNumber).map((item, index) => (
          <QuestionsListItem
            question={item.question}
            question_id={item.question_id}
            question_helpfulness={item.question_helpfulness}
            asker_name={item.asker_name}
            question_date={item.question_date}
            answers={item.answers}
            answers_Id={item.answers_Id}
            answers_helpfulness={item.answers_helpfulness}
            answers_name={item.answers_name}
            answers_date={item.answer_date}
            handleRefresh={props.handleRefresh}
            key={index}
          />
        ))}
      </p>
      {props.questions.length !== 4
        && (
          <p>
            <ExpandButton
              questions={props.questions}
              displayNumber={props.displayNumber}
              updateDisplayNumber={props.updateDisplayNumber}
              collapseDisplayNumber={props.collapseDisplayNumber}
            />
            {' '}
          </p>
        )}
      <AskForm productId={40348} />
    </div>
  );
}

export default QuestionsList;
