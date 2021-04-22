import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../../components/common/Page';
import Banner from '../../components/common/Banner';
import Image from '../../components/common/Image';

import engineering from '../../../images/thisisengineering.jpg';
import engineering2 from '../../../images/thisisengineering2.jpg';
import premium from '../../../images/premium.jpg';


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
          <div className="content-container">
            <Image className="left" src={engineering} alt="engineering" width={400} />
            <article>
              <code>WE CRAFT EXPERIENCES</code>
              <h1>
                Premium Tech is a software development company based in Makati City, Philippines. 
                We specialize in creating custom websites and mobile applications that are intuitive and focused on user-friendliness. 
                We also take care of deployment and server maintenance.
              </h1>
            </article>
          </div>
          <div className="content-container">
            <article>
              <code>DESIGNED FOR SOLUTIONS</code>
              <h1>
                Our approach is highly collaborative and creative. 
                We care deeply about our clients, and partner with companies and businesses, and organizations who agrees 
                with our approach.
              </h1>
            </article>
            <Image className="right" src={engineering2} alt="engineering 2" width={500} />
          </div>
          <div>
            <Image className="left" src={premium} alt="engineering" width={400} />
            <article>
              <code>SUPERIOR QUALITY</code>
              <h1>
                We pride ourselves in providing premium services with no extra charges. Making sure that we live up to our name.
              </h1>
            </article>
          </div>
          <div className="inverted">
            <article>
              <code>recent work</code>
              <h1>
                check out some of our <span className="orange">work</span>
              </h1>
              <div>
                <article>
                  <Image src={premium} alt="1" width={200} height={200} />
                  <h1>
                    <Link>Recent work 1 sample</Link>
                  </h1>
                </article>
                <article>
                  <Image src={premium} alt="2" width={200} height={200} />
                  <h1>
                    <Link>Recent work 2 sample</Link>
                  </h1>
                </article>
                <article>
                  <Image src={premium} alt="2" width={200} height={200} />
                  <h1>
                    <Link>Recent work 3 sample</Link>
                  </h1>
                </article>
              </div>
            </article>
          </div>
        </main>
      </Page>
    );
  }
}

export default HomePage;
