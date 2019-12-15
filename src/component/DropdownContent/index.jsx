import React, { Fragment, useState } from "react";
import Collapsible from "react-collapsible";
const DropdownContent = props => {
  const [showContent, setShowContent] = useState(false);
  console.log(showContent);

  return (
    <Fragment>
      <div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
        <Collapsible
          triggerClassName="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4"
          triggerOpenedClassName="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4"
          trigger="Mô tả"
          // contentOuterClassName="dropdown-content dis-none p-t-15 p-b-23"
          contentInnerClassName="dropdown-content p-t-15 p-b-23"
        >
          <p className="s-text8">
            This is the collapsible content. It can be any element or React
            component you like.
          </p>
          <p className="s-text8">
            It can even be another Collapsible component. Check out the next
            section!
          </p>
        </Collapsible>
      </div>
    </Fragment>
  );
};

export default DropdownContent;
