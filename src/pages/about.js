import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="About me ✏️" description="All about Chappic! Who and what he is. A little story of a boy from the outback."/>
    <div>
    <div className="about-page">
        <div className="container">
            <div className="home-page-illustraitions">
                <div className="row">
                  <div className="col-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 home-page-illustraitions_text">
                      <h4>More about me</h4>
                      <div className="home-page-illustraitions_text-under">
                        <p>My preferences in other areas</p>
                      </div>
                  </div>
                  <div className="col-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 home-page-illustraitions_image">
                      <StaticImage
                            src="../images/about.png"
                            className="home-page-illustraitions_image-image"
                            width={500}
                            quality={100}
                            placeholder="blurred"
                            formats={["auto", "webp", "avif"]}
                            alt="About me image"
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
                              src="../images/cake.png"
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
                    <h4 >“EVERYONE HAS</h4>
                    ONE'S OWN PATH”
                  </div>
                  <div className="quote-page-block_image">
                  <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                    <StaticImage
                                src="../images/popsicle.png"
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
                              src="../images/pretzel.png"
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
                      I studied at music and art schools 
                    </div>
                    <div data-sal="zoom-in" data-sal-duration="500" data-sal-delay="300" className="info-page-about__item-text">
                    <div className='info-page-about__item-text-header'>
                    At the age of 6-7, I started going to art school for ballroom dancing classes. I have been doing this for 6 years and have reached the "senior" level. It wasn't easy, but it was very interesting, and it pushed me to move on. At the age of 13-14, I finished doing this, because this direction no longer attracted me, and then I started programming.
                      </div>
                      <div className='info-page-about__item-text-center'>
                      At the age of 10, I decided to go to music school because I really wanted to learn how to play a musical instrument. My choice fell on the guitar. I've been doing music for 4 years and I'm not finishing yet. I play for myself and for my friends, and I like it. In general, I like the forest atmosphere, when you can take a guitar and a couple of friends with you and have a nice time around the campfire (maybe I just started playing for this). I know and play a lot of songs, both well-known and little-known. 
                      </div>
                      <div className='info-page-about__item-text-footer'>
                      Something like this :)
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                  <div className="info-page-about__item-image" data-sal="slide-up" data-sal-duration="500">
                    <StaticImage
                                src="../images/about-me-one.png"
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
                              src="../images/macaroon.png"
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
                    <h4 >“LIVE WITHOUT</h4>
                    REGRETS”
                  </div>
                  <div className="quote-page-block_image">
                  <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                    <StaticImage
                                src="../images/pancake.png"
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
                              src="../images/lolipop-swirl.png"
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
                                src="../images/about-me-two.png"
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
                    My other businesses or hobby
                    </div>
                    <div data-sal="zoom-in" data-sal-duration="500" data-sal-delay="300" className="info-page-about__item-text">
                    <div className='info-page-about__item-text-header'>
                    I run my discord server called "Chappiс Family". There are already more than 600 people on it and this is a good mark for discord. The theme of my server is communication or entertainment. Go here to get to us - <a className='info-page-about__item-text-footer-link' rel="noreferrer" href='https://discord.gg/hKCyvt8mBS' target={"_blank"}>"link"</a>
                      </div>
                      <div className='info-page-about__item-text-center'>
                      I also develop myself from a physical point of view. I have been doing sports for 2 years and have good results in this. I started doing this because I knew it would strengthen me, give me more motivation not to give up and much more. Follow me on instagram :)
                      </div>
                      <div className='info-page-about__item-text-footer'>
                      I am also very interested in the future and the metaverse at the moment. I even made a 3d model of myself. I do a bit of 3D modeling and I do it exclusively for myself.
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
                              src="../images/meat.png"
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
                    <h4 >“MY LIFE</h4>
                    - MY RULES”
                  </div>
                  <div className="quote-page-block_image">
                  <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                    <StaticImage
                                src="../images/hotdog.png"
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
                              src="../images/taco.png"
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
                    My preferences 
                    </div>
                    <div data-sal="zoom-in" data-sal-duration="500" data-sal-delay="300" className="info-page-about__item-text">
                    <div className='info-page-about__item-text-header'>
                    My favorite movie is "Paranoia 2007".  The most favorite TV series is "Wayne". I love black, white and purple colors. Favorite genres of music are "phonk", "rock", "Lofi Hip Hop". Favorite brand of Porsche car.
                      </div>
                      <div className='info-page-about__item-text-center'>
                      My favorite game is "Cyberpunk 2077". Personal priorities are self-development. I prefer dogs. Shoe salesman. My favorite book is "The story of Nike, told by its founder". I can cook a little. I watch YouTube when there's nothing to do.
                      </div>
                      <div className='info-page-about__item-text-footer'>
                      Something like this :)
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                  <div className="info-page-about__item-image" data-sal="slide-up" data-sal-duration="500">
                    <StaticImage
                                src="../images/about-me-three.png"
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
                              src="../images/pizza.png"
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
                    <h4 >“ENJOY</h4>
                    THE RIDE”
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
                              src="../images/egg.png"
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

export default About
