import { EventProps } from 'fullstack/EventProps'
import * as React from 'react'
import { View } from 'react-native'
import Events from 'src/events/Events'
import { getEvents } from 'src/events/EventsData'
import OpenGraph from 'src/header/OpenGraph'
import { NameSpaces } from 'src/i18n'
import { standardStyles } from 'src/styles'
import menuItems from 'src/shared/menu-items'
import ConnectionFooter from 'src/shared/ConnectionFooter'

const preview = require('src/community/connect/preview.jpg')

interface State {
  pastEvents: EventProps[]
  loading: boolean
}

export default class PastEventsPage extends React.PureComponent<{}, State> {
  static getInitialProps() {
    return { namespacesRequired: [NameSpaces.common, NameSpaces.community] }
  }

  state = {
    loading: true,
    pastEvents: [],
  }

  async componentDidMount() {
    const { pastEvents } = await getEvents()
    this.setState({ pastEvents, loading: false })
  }

  render() {
    return (
      <View style={standardStyles.sectionMargin}>
        <OpenGraph
          path={menuItems.PAST_EVENTS.link}
          title={'Past Celo Events'}
          description={
            'Celo is building a monetary system that allows more people to participate, and we invite you to join the conversation and our community. Diverse perspectives and inclusive conversations welcomed.'
          }
          image={preview}
        />
        <Events pastEvents={this.state.pastEvents} loading={this.state.loading} />
        <ConnectionFooter />
      </View>
    )
  }
}
