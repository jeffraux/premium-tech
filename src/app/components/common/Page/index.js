import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import './Page.scss';


const Page = ({
  invertedHeader,
  children,
  history,
}) => {
  return (
    <div>
      <Header inverted={invertedHeader} history={history} />
      {children}
      <Footer />
    </div>
  );
}

export default Page;
