import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import QuestionModal from '../QuestionModal.jsx';
import { GlobalContext } from '../../App.jsx';

function AskForm({ questionId, handleRefresh }) {
  const [showModal, setShowModal] = useState(false);
  const { productId } = useContext(GlobalContext);

  return (
    <div data-analytics-id={`ask-question-${productId}`}>
      <button
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add A Question +
      </button>
      {showModal
        && (
          <QuestionModal
            id={productId}
            onDismiss={() => setShowModal(false)}
            handleRefresh={handleRefresh}
            route="/shopdata/qa/questions"
          />
        )}
    </div>
  );
}

AskForm.propTypes = {
  questionId: PropTypes.number.isRequired,
  handleRefresh: PropTypes.func.isRequired,
};

export default AskForm;
