import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../../components/common/Page';
import Banner from '../../components/common/Banner';

import about from '../../../images/about.jpg';


class AboutPage extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <Page invertedHeader history={history}>
        <Banner inverted>
          <h1 style={{ fontSize: '4.6em' }}>
            <span className="accent">welcome to <br/></span>
            <span className="tertiary">Premium Tech</span>
          </h1>
        </Banner>

        <main style={{ flexDirection: 'column' }}>
          <div className="half">
            <img className="right" src={about} alt="join" width={1000} />
          </div>
          <div className="inverted">
            <article>
              <code>what</code>
              <h1 className="title">
                we craft experiences that connect with our clients' audiences
              </h1>
            </article>
          </div>
          <div>
            <article>
              <code>who</code>
              <h1 className="title">
                we are children of the internet who love helping our clients' businesses thrive
              </h1>
            </article>
          </div>
          <div className="inverted">
            <article>
              <code>why</code>
              <h1 className="title">
                we've worked at big corporations long enough to know that we prefer small and connected
              </h1>
            </article>
          </div>
        </main>
      </Page>
    );
  }
}

export default AboutPage;
