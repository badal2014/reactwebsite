import React from 'react';
export const WelcomeDialog = () => {
    return (
      <FancyBorder color="blue" text="newClass">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
}

export const FancyBorder = (props) => {
    return(
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
    )
}