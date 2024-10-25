import React, { useState } from "react";
import Button from "./Button";

const Box = () => {
  const [submit, changeSubmit] = useState(true);
  const [num, setNum] = useState(0);

  const handleSubmit = () => {
    num > 0 ? changeSubmit(false) : changeSubmit(true);
  };

  return (
    <>
      {submit ? (
        <div className="Box">
          <div className="circle">
            <img src="src/assets/icon-star.svg" alt="star" />
          </div>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="btnholder">
            {[1, 2, 3, 4, 5].map((number) => (
              <Button
                key={number}
                num={number}
                setNum={setNum}
                selectedNum={num}
              />
            ))}
          </div>
          <button onClick={handleSubmit} className="submit">
            SUBMIT
          </button>
        </div>
      ) : (
        <div className="Box2">
          <img
            className="thankyou"
            src="src/assets/illustration-thank-you.svg"
            alt="thankyou"
          />
          <div className="select">You selected {num} out of 5</div>
          <h1 className="thank">Thank You!</h1>
          <p className="paraa">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </>
  );
};

export default Box;
