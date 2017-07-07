import React, { Component, PropTypes } from 'react';
import wsClient from '@zerrtech/koa-ws/client';

class AppContainer extends Component {
  getChildContext() {
    return { wsClient: this.state.wsClient }
  }

  componentWillMount() {
    wsClient.connect('localhost:3000');

    wsClient.on('disconnect', () => {
      setTimeout(() => {
        this.state.wsClient.connect('localhost:3000');
      }, 500)
    })

    wsClient.register('session', function (err, payload) {
      if (err) console.error('Something went wrong', err);
      console.log({session: payload}) // should include our session
    });

    this.state.wsClient = wsClient
  }

  render() {
    return this.props.children;
  }
}

AppContainer.childContextTypes = {
  wsClient: PropTypes.any
}

export default AppContainer;
