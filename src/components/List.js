import React from "react";

import { esportacus } from "../utils/api";
import Loading from "./Loading";

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: null
    };
  }

  async componentDidMount() {
    const { type } = this.props;
    const list = await esportacus[type]();

    this.setState({ list });
  }

  render() {
    const { list } = this.state;
    const { type } = this.props;

    return (
      <div>
        {list ? (
          <ul>
            {list.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <Loading text={`Fetching ${type}`} />
        )}
      </div>
    );
  }
}
