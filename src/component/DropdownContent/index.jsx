import React, { Fragment, useState } from "react";
import Collapsible from "react-collapsible";
import "./DropdownContent.css";

const DropdownContent = props => {
  return (
    <Fragment>
      <div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
        <Collapsible
          triggerClassName="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4"
          triggerOpenedClassName="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4"
          trigger={props.label?props.label:"Label Name"}
          // contentOuterClassName="dropdown-content dis-none p-t-15 p-b-23"
          contentInnerClassName="dropdown-content p-t-15 p-b-23"
        >
          {props.content?props.content:""}
        </Collapsible>
      </div>
    </Fragment>
  );
};

export default DropdownContent;
