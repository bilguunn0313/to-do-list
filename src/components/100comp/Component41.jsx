import { Component42 } from "./Component42";

export const Component41 = (props) => {
  console.log(props);
  return (
    <div>
      <Component42 props42={props.props41} />
    </div>
  );
};
