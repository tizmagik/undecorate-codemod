import React from 'react';
import hoc1 from 'hoc1';

export const Thing = hoc1()(class Thing extends React.Component {
  render() {
    return <div>Thing</div>;
  }
});
