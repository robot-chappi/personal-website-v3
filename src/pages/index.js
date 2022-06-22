import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Home 🏠" description="Hi, my name is Daniel and I am a web developer and designer! Glad to meet you!"/>
    <div>
      <div className="home-page">
          <div className="container">
              <div className="home-page-illustraitions">
                  <div className="row">
                    <div className="col-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 home-page-illustraitions_text">
                        <h4>Hi! I'm Daniel</h4>
                        <div className="home-page-illustraitions_text-under">
                          <p>I am web-developer and designer</p>
                        </div>
                    </div>
                    <div className="col-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 home-page-illustraitions_image">
                        <StaticImage
                              src="../images/chappic.png"
                              className="home-page-illustraitions_image-image"
                              width={500}
                              quality={100}
                              placeholder="blurred"
                              formats={["auto", "webp", "avif"]}
                              alt="Chappic image"
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
                              src="../images/burger.png"
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
                    <h4 >“DO WHAT YOU LOVE</h4>
                      LOVE WHAT YOU DO”
                  </div>
                  <div className="quote-page-block_image">
                  <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                    <StaticImage
                                src="../images/cofee.png"
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
                      My middle name is Chappic 
                    </div>
                    <div data-sal="zoom-in" data-sal-duration="500" data-sal-delay="300" className="info-page-about__item-text">
                    <div className='info-page-about__item-text-header'>
                        I am a web developer with two years of experience. I work, study and work hard to create high-performance, rich, interactive websites with good and reliable mechanics that work on all platforms and devices.
                      </div>
                      <div className='info-page-about__item-text-center'>
                        I am very familiar with using frameworks like React, Next, Redux, Gatsby, Three and others, but my websites are mostly hand-written using CSS3, HTML3, React and three Js.
                        Focusing on "progressive enhancement", I am looking for creative ways to expand the boundaries of the website interface code without compromising browser support and performance.
                      </div>
                      <div className='info-page-about__item-text-footer'>
                        Striving to always be up to date with the latest developments when new technologies appear, I try to quickly master and apply them in my own and custom projects.
                        I have also participated in many projects, and I have a good portfolio, which you can see here - <Link to='/projects' className='info-page-about__item-text-footer-link'>"click on me"</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                  <div className="info-page-about__item-image" data-sal="slide-up" data-sal-duration="500">
                    <StaticImage
                                src="../images/icon-me.png"
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
                              src="../images/float.png"
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
                    <h4 >“EVER POSITIVE</h4>
                    NEVER NEGATIVE”
                  </div>
                  <div className="quote-page-block_image">
                  <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                    <StaticImage
                                src="../images/donut.png"
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
                              src="../images/ice-cream.png"
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
                  <div className="info-page-about__item-image" data-sal="slide-up" data-sal-duration="500">
                    <StaticImage
                                src="../images/more-about-me.png"
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
                  <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                    <div className="info-page-about__item-title" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500">
                      A little more about me
                    </div>
                    <div data-sal="zoom-in" data-sal-duration="500" data-sal-delay="300" className="info-page-about__item-text">
                    <div className='info-page-about__item-text-header'>
                    I am also a designer and create the design for most custom projects myself according to the customer's wishes and preferences
                      </div>
                      <div className='info-page-about__item-text-center'>
                      I also speak two languages at a good level - English and Russian. I am currently studying Chinese.
                      </div>
                      <div className='info-page-about__item-text-footer'>
                      Phew, now I think I've said it all :)
                      </div>
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
                              src="../images/buritto.png"
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
                    <h4 >“CODE IS </h4>
                    POETRY”
                  </div>
                  <div className="quote-page-block_image">
                  <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                    <StaticImage
                                src="../images/sushi-caviar.png"
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
                              src="../images/steak.png"
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
        <div></div>
    </div>
  </Layout>
)

export default IndexPage
