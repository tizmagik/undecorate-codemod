import React from 'react';
import Relay from 'react-relay';
import hoc1 from 'hoc1';

const Thing = hoc1('my-param')(class Thing extends React.Component {
  render() {
    return <div>Thing</div>;
  }
});

export default Relay.createContainer(Thing, {});
