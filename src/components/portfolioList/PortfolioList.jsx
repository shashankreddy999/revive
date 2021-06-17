import React from "react";
import "./portfolioList.scss";

function PortfolioList({ id, title, active, setselected }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setselected(id)}
    >
      {title}
    </li>
  );
}

export default PortfolioList;
