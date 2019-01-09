import * as React from "react";

export interface IReynoldsProps {
  name?: string;
}

export class Reynolds extends React.Component<IReynoldsProps, any> {
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