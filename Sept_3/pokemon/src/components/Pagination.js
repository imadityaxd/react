import React from "react";

const Pagination = ({
  gotoNextPage,
  gotoPreviousPage,
  hasNextPage,
  hasPreviousPage,
}) => {
  return (
    <div className="buttons">
      <button onClick={gotoPreviousPage} disabled={hasPreviousPage}>
        previous
      </button>
      {/*when you click on previous button, the gotoPreviousPage function will get called and the currentPageUrl will get updated and you will see the new pokemon lists. Also the HTML element disabled takes boolean values true for showing button and false for disable button and the current hasPreviousPage prop value that we get from App.js is set to true, at initial stage it will be clickable.  */}
      <button onClick={gotoNextPage} disabled={hasNextPage}>
        next
      </button>
    </div>
  );
};

export default Pagination;
