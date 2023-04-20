import React from "react";
;

const QuestionAnswer = ({item}) => {

  return (
    <div className="border-bottom mb-3">
      <dt>Q: {item?.question}?</dt>
      <span className="text-muted small">{item?.customerName} - {item?.questionTime}</span>
      <div className="mb-2">
         
          
         </div>
      <dd>
       
          <strong>A:</strong> {item?.answer}.
        <br />
        <span className="text-muted small">{item?.sellerName} - {item?.answerTime}</span>s
        
        <div className="mb-2">
         
          
        </div>
      </dd>
    </div>
  );
};

export default QuestionAnswer;
