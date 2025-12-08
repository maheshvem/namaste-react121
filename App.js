import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 className="head">This is JSX syntax</h1>;
// React Functional Component
const Title = () => {
  return <h1 className="title">This is react fun comp's title.</h1>;
};
const Heading = () => {
  return (
    <div>
      <Title />
      <h1 className="mainHeading">React fun comp.</h1>
      {jsxHeading}
    </div>
  );
};
// or we can write it directly without return if it's single line and it's the same as above
// const Heading = () => <h1>This is react fun comp.</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading)
root.render(<Heading />);
