import React from "react";

const Breadcrumbs = (props) => {

  const isMainPage = props.page.id === "main";
  const mainClasses = "breadcrumb-item" + (isMainPage ? " active" : "");

  return (
    <nav>
      <ol className="breadcrumb">
        <li className={mainClasses} onClick={props.onGoMain}>Главная</li>

        {!isMainPage && (
          <li className="breadcrumb-item active">
            {props.page.text}
          </li>
        )}
      </ol>
    </nav>
   )
}

export default Breadcrumbs