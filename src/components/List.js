import React from 'react';

import { esportacus } from '../utils/api';
import Loading from './Loading';
import Grid from './Grid';
import Card from './Card';

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: null,
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
      <Grid>
        {list ? (
          list.map((item, i) => <Card key={item.id || i}>{item.name}</Card>)
        ) : (
          <Loading text={`Fetching ${type}`} />
        )}
      </Grid>
    );
  }
}
