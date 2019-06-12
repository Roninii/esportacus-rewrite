import React from 'react'
import styled from '@emotion/styled'

import { esportacus } from '../utils/api'
import Loading from './Loading'
import GridView from './GridView'

const Team = styled.div`
  border-radius: 50%;
`

const TeamLogo = styled.img`
  max-width: 100px;
`

export default class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      list: null,
    }
  }

  async componentDidMount() {
    const { type } = this.props
    const list = await esportacus[type]()

    this.setState({ list })
  }

  render() {
    const { list } = this.state
    const { type } = this.props

    return (
      <GridView>
        {list ? (
          list.map((item, i) => (
            <Team>
              <h3>{item.name}</h3>
              {item.image_url ? (
                <TeamLogo src={`${item.image_url}`} alt={`${item.name} logo`} />
              ) : (
                <TeamLogo
                  src={`https://cdn.pandascore.co/images/team/image/126057/10092.png`}
                  alt={`${item.name} logo`}
                />
              )}
            </Team>
          ))
        ) : (
          <Loading text={`Fetching ${type}`} />
        )}
      </GridView>
    )
  }
}
