import React from 'react';
import withParam from 'withParam';
import hoc1 from 'hoc1';
import hoc2 from 'hoc2';
import taggedTemplate from 'taggedTemplate';

const myParam = 'test';

@withParam(myParam)
@hoc1
@hoc2()
@taggedTemplate`
  .thing {}
`
export default class Thing extends React.Component {
  render() {
    return <div>Thing</div>;
  }
}
