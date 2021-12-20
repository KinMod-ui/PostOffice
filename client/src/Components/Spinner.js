import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '10%', margin: 'auto', display: 'block' }}
      alt="Not Loading..."
    />
  </Fragment>
);

export default Spinner;