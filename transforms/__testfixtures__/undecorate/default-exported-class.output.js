import React from 'react';
import hoc1 from 'hoc1';

export default hoc1()(class Thing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Thing</div>;
  }
});
