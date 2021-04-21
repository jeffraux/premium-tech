import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../../components/common/Page';
import Banner from '../../components/common/Banner';

import join from '../../../images/join.jpg';


class CareersPage extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <Page history={history}>
        <Banner>
          <h1>
            join our <span className="orange">team</span> of <span className="secondary">world-class</span> talent
          </h1>
        </Banner>

        <main>
          <div>
            <img className="right" src={join} alt="join" width={400} />
            Hiring na kami ng backend developer
          </div>
        </main>
      </Page>
    );
  }
}

export default CareersPage;
