import React from "react";
import PropTypes from "prop-types";
import Alert from "..";


type Props = {
  isShown?: boolean
  title: string,
  content: string,
  className?: string,
  fullScreen?: boolean,
  showDismiss?: boolean,
}

const SuccessAlert = ({
  isShown,
  title = '',
  content = '',
  className,
  fullScreen,
  showDismiss,
}: Props) => {
  return (
    <div
      className={
        isShown
          ? `w-full ${fullScreen && "h-full flex items-center px-12 justify-center"
          }`
          : ""
      }
    >
      <Alert
        showDismiss={showDismiss}
        className={className}
        isShown={isShown}
        variant="success"
        title={title}
        content={content}
      />
    </div>
  );
};


export default SuccessAlert;
