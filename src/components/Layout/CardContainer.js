import React from "react";
import "./CardContainer.scss";
import Button from "../Button/Index";

const CardContainer = ({ title, children, onClick, form, add, addOnClick }) => {
  return (
    <div className="table_container">
      <div className="table_heading d-flex justify-content-between align-items-center">
        <h3 className="table_title">{title}</h3>
        {add && <Button btnText="ADD" onClick={addOnClick} />}
      </div>

      <div className="table_body">{children}</div>

      <div className="table_footer">
        {!form ? (
          <Button btnText={`View all ${title}`} onClick={onClick} />
        ) : (
          <Button btnText="Add" onClick={onClick} />
        )}
      </div>
    </div>
  );
};

export default CardContainer;
