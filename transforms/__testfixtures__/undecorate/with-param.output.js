import React from 'react';
import hoc1 from 'hoc1';

export default hoc1('my-param')(class Thing extends React.Component {
  render() {
    return <div>Thing</div>;
  }
});
