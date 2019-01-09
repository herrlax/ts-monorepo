import * as React from "react";

export interface IRyanProps {
  name?: string
}

export class Ryan extends React.Component<IRyanProps, any> {
  get name() {
    return this.props.name;
  }

  public render() {
    const { name } = this.props;

    return (
      <>
        Call me {name}
      </>
    );
  }
}