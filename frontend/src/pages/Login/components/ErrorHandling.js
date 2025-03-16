import React from "react";
import Message from "../../../components/common/Message";
import useStore from "../../../store/useStore";
const ErrorHandling = () => {
  const status = useStore((state) => state.status);
  console.log(status.errMessage);
  return (
    <>
      {status.errMessage && (
        <Message
          title="error"
          header={Object.keys(status.errMessage)[0]}
          content={status.errMessage}
          type="negative"
        />
      )}
      {status.successMessage && (
        <Message
          title="success"
          header={"Success"}
          content={status.successMessage}
          type="positive"
        />
      )}
    </>
  );
};

export default ErrorHandling;
