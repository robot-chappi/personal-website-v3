import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile} from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout"
import Seo from "../components/seo"

const Experiments = () => (
  <Layout>
    <Seo title="Support 🍫" description="You can support Chappic and Chappic way to the web!"/>
    <div>
    <div className="support-page">
        <div className="container">
            <div className="home-page-illustraitions">
                <div className="row">
                  <div className="col-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 home-page-illustraitions_text">
                      <h4>Support me</h4>
                      <div className="home-page-illustraitions_text-under">
                        <p>You can help me financially</p>
                      </div>
                  </div>
                  <div className="col-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 home-page-illustraitions_image">
                      <StaticImage
                            src="../images/exp.png"
                            className="home-page-illustraitions_image-image"
                            width={500}
                            quality={100}
                            placeholder="blurred"
                            formats={["auto", "webp", "avif"]}
                            alt="Support image"
                            style={{ marginBottom: `1.45rem` }}
                          />
                  </div>
                </div>
            </div>
        </div>
    </div>
    <div className="quote-page">
        <div className="container">
              <div className="row">
                <div className="col-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 quote-page-block-one">
                  <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="300">
                  <StaticImage
                              src="../images/ice-cream.png"
                              className="quote-page-block_image-image quote-page-block_image-image-anim-1"
                              width={300}
                              quality={100}
                              placeholder="blurred"
                              formats={["auto", "webp", "avif"]}
                              alt="Quote image"
                              style={{ marginBottom: `1.45rem` }}
                            />
                  </div>
                </div>
                <div className="col-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 quote-page-block-two">
                  <div data-sal="zoom-in" data-sal-duration="500" data-sal-delay="500" className="quote-page-block_text">
                    <h4 >“TO BE OR</h4>
                    NOT TO BE”
                  </div>
                  <div className="quote-page-block_image">
                  <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                    <StaticImage
                                src="../images/lolipop.png"
                                className="quote-page-block_image-image quote-page-block_image-image-anim-2"
                                width={300}
                                quality={100}
                                placeholder="blurred"
                                formats={["auto", "webp", "avif"]}
                                alt="Quote image"
                                style={{ marginBottom: `1.45rem` }}
                              />
                              </div>
                  </div>
                </div>
                <div className="col-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 quote-page-block-three">
                <div data-sal="slide-up" data-sal-duration="500">
                  <StaticImage
                              src="../images/cookies.png"
                              className="quote-page-block_image-image quote-page-block_image-image-anim-3"
                              width={300}
                              quality={100}
                              placeholder="blurred"
                              formats={["auto", "webp", "avif"]}
                              alt="Quote image"
                              style={{ marginBottom: `1.45rem` }}
                            />
                            </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="info-page">
            <div className="container">
              <div className="info-page-about">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                    <div className="info-page-about__item-title" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500">
                    You can help me with your donation
                    </div>
                    <div data-sal="zoom-in" data-sal-duration="500" data-sal-delay="300" className="info-page-about__item-text">
                    <div className='info-page-about__item-text-header'>
                    You can support me, my business and my dream with any amount of money. I have one dream that I have been walking towards for two years, and I know that I will achieve it, but your support will be able to ease the difficult path for me. I will be very grateful to you :)
                      </div>
                      <div className='info-page-about__item-text-center'>
                      My small dream is to enter an IT university in St. Petersburg and buy an apartment there. I will be grateful for the purchase of my services and their advertising - it also helps me a lot in my interesting life path, which you can watch on Instagram. I will record all the people who helped me, and when I do, I will post all the names of people to myself on Instagram.
                      </div>
                      <div className='info-page-about__item-text-footer'>
                      You can donate money here {"->"} <a rel="noreferrer" className='info-page-about__item-text-footer-link' href='https://www.donationalerts.com/r/chappic' target={'_blank'}><FontAwesomeIcon icon={faFaceSmile} className="link-icon"/></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                  <div className="info-page-about__item-image" data-sal="slide-up" data-sal-duration="500">
                    <StaticImage
                                src="../images/support-image-one.png"
                                className="info-page-about__item-image__image"
                                width={500}
                                quality={100}
                                placeholder="blurred"
                                formats={["auto", "webp", "avif"]}
                                alt="Quote image"
                                style={{ marginBottom: `1.45rem` }}
                              />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="quote-page">
        <div className="container">
              <div className="row">
                <div className="col-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 quote-page-block-one">
                  <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="300">
                  <StaticImage
                              src="../images/donut.png"
                              className="quote-page-block_image-image quote-page-block_image-image-anim-1"
                              width={300}
                              quality={100}
                              placeholder="blurred"
                              formats={["auto", "webp", "avif"]}
                              alt="Quote image"
                              style={{ marginBottom: `1.45rem` }}
                            />
                  </div>
                </div>
                <div className="col-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 quote-page-block-two">
                  <div data-sal="zoom-in" data-sal-duration="500" data-sal-delay="500" className="quote-page-block_text">
                    <h4 >“YOU ARE</h4>
                    THE BEST”
                  </div>
                  <div className="quote-page-block_image">
                  <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                    <StaticImage
                                src="../images/float.png"
                                className="quote-page-block_image-image quote-page-block_image-image-anim-2"
                                width={300}
                                quality={100}
                                placeholder="blurred"
                                formats={["auto", "webp", "avif"]}
                                alt="Quote image"
                                style={{ marginBottom: `1.45rem` }}
                              />
                              </div>
                  </div>
                </div>
                <div className="col-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 quote-page-block-three">
                <div data-sal="slide-up" data-sal-duration="500">
                  <StaticImage
                              src="../images/popsicle.png"
                              className="quote-page-block_image-image quote-page-block_image-image-anim-3"
                              width={300}
                              quality={100}
                              placeholder="blurred"
                              formats={["auto", "webp", "avif"]}
                              alt="Quote image"
                              style={{ marginBottom: `1.45rem` }}
                            />
                            </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </Layout>
)

export default Experiments