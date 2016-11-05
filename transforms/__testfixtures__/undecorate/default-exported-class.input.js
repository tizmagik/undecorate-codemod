import React from 'react';
import hoc1 from 'hoc1';

@hoc1()
export default class Thing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Thing</div>;
  }
}
