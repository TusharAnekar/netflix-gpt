import React from "react";

import { Link, useNavigate } from "react-router-dom";

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps): React.JSX.Element => {
  const navigate = useNavigate();
  const handleRetry = () => {
    navigate(0);
  };
  return (
    <React.Fragment>
      <p>Something went wrong.</p>
      <p>Error: {error}</p>
      <p>Try again after some time</p>

      <button onClick={handleRetry} type="button">
        Retry
      </button>
      <Link to="/">Go to home</Link>
    </React.Fragment>
  );
};

export default ErrorMessage;
