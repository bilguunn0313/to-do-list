import { Component12 } from "./Component12";

export const Component11 = (props) => {
  console.log(props);
  return (
    <div>
      <Component12 props12={props.props11} />
    </div>
  );
};
