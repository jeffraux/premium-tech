import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../../components/common/Page';
import Banner from '../../components/common/Banner';

import engineering from '../../../images/thisisengineering.jpg';
import engineering2 from '../../../images/thisisengineering2.jpg';
import collaborate from '../../../images/collaborate.jpg';


class HomePage extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <Page history={history}>
        <Banner>
          <h1>
            <span className="secondary">we love</span> <Link to="/portfolio" className="orange">user-focused</Link> design,
            thoughtfully crafted <Link to="/portfolio" className="orange">applications</Link>,
            and building <br/>custom <Link to="/portfolio" className="orange">websites</Link>
          </h1>
        </Banner>

        <main>
          <div>
            <img className="left overlap" src={engineering} alt="engineering" width={400} />
            {/* <img className="left" src={collaborate} alt="collaborate" height={200} /> */}
            <article>
              <code>WE CRAFT EXPERIENCES</code>
              <h1>
                Premium Tech is a software development company based in Makati City, Philippines. 
                We specialize in creating custom websites and mobile applications that are intuitive and focused on user-friendliness. 
                We also take care of deployment and server maintenance.
              </h1>
            </article>
          </div>
          <div>
            <article>
              <code>DESIGNED FOR SOLUTIONS</code>
              <h1>
                Our approach is highly collaborative and creative. 
                We care deeply about our clients, and partner with companies and businesses, and organizations who agrees 
                with our approach.
              </h1>
            </article>
            <img className="right" src={engineering2} alt="engineering 2" width={500} />
          </div>
        </main>
      </Page>
    );
  }
}

export default HomePage;
