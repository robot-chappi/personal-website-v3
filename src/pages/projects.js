import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Projects = () => (
  <Layout>
    <Seo title="Portfolio 💼" description="Hi! This is the Chappic portfolio - I think it will be interesting for you to take a look at it!"/>
    <div>
    <div className="project-page">
        <div className="container">
            <div className="home-page-illustraitions">
                <div className="row">
                  <div className="col-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 home-page-illustraitions_text">
                      <h4>My projects</h4>
                      <div className="home-page-illustraitions_text-under">
                        <p>Just look at my progress :)</p>
                      </div>
                  </div>
                  <div className="col-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 home-page-illustraitions_image">
                      <StaticImage
                            src="../images/projects.png"
                            className="home-page-illustraitions_image-image"
                            width={500}
                            quality={100}
                            placeholder="blurred"
                            formats={["auto", "webp", "avif"]}
                            alt="Portfolio image"
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
                              src="../images/pancake.png"
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
                    <h4 >“SIT AND</h4>
                    WATCH”
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
        <div className="project-block">
            <div>
              <div className="info-page">
                <div className="container">
                  <div className="info-page-about">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                        <div className="info-page-about__item-title" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500">
                        Hoodie Mantle
                        </div>
                        <div data-sal="zoom-in" data-sal-duration="500" data-sal-delay="300" className="info-page-about__item-text">
                        <div className='info-page-about__item-text-header'>
                            This website was developed by me for the collaboration of the Assassin's Creed and Nike companies. The site was developed within three days. You can watch the video here - <a className='info-page-about__item-text-footer-link' rel="noreferrer" href='https://vk.com/video305753196_456239528' target={"_blank"}>"link"</a>
                          </div>
                          <div className='info-page-about__item-text-center'>
                          The site was written in HTML, CSS languages using technologies like jQuery and GULP. The site has a CSS 3D slider with animated pictures and stylish arrows to the right and left. There is also a background animation on the site. There is also adaptability to many devices.
                          </div>
                          <div className='info-page-about__item-text-footer'>
                          I led the development of the design and the website itself.
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                      <div className="info-page-about__item-image" data-sal="slide-up" data-sal-duration="500">
                        <StaticImage
                                    src="../images/hoodie-mantle.png"
                                    className="info-page-about__item-image__image img-portfolio"
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
            <div className="container">
              <div className="row">
                <div className="col">
                <div className="project-center" data-sal="slide-up" data-sal-duration="500">
                        <StaticImage
                                    src="../images/ice-cream.png"
                                    className="project-page-about__item-image__image"
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
            <div>
              <div className="info-page">
                <div className="container">
                  <div className="info-page-about">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                        <div className="info-page-about__item-title" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500">
                        AeroSpace
                        </div>
                        <div data-sal="zoom-in" data-sal-duration="500" data-sal-delay="300" className="info-page-about__item-text">
                        <div className='info-page-about__item-text-header'>
                        This website was developed by me for a photographer from the AeroSpace studio. The site was developed within five days. You can watch the video here - <a className='info-page-about__item-text-footer-link' rel="noreferrer" href='https://vk.com/video305753196_456239488' target={"_blank"}>"link"</a>
                          </div>
                          <div className='info-page-about__item-text-center'>
                          The site was written in HTML, CSS languages using technologies such as jQuery and Bootstrap. The site has a portfolio, a description of skills, personal qualities and a contact form. There is also adaptability to many devices.
                          </div>
                          <div className='info-page-about__item-text-footer'>
                          I led the development of the design and the website itself.
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                      <div className="info-page-about__item-image" data-sal="slide-up" data-sal-duration="500">
                        <StaticImage
                                    src="../images/aero-space.png"
                                    className="info-page-about__item-image__image img-portfolio"
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
            <div className="container">
              <div className="row">
                <div className="col">
                <div className="project-center" data-sal="slide-up" data-sal-duration="500">
                        <StaticImage
                                    src="../images/donut.png"
                                    className="project-page-about__item-image__image"
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
            <div>
              <div className="info-page">
                <div className="container">
                  <div className="info-page-about">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                        <div className="info-page-about__item-title" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500">
                        Crappo
                        </div>
                        <div data-sal="zoom-in" data-sal-duration="500" data-sal-delay="300" className="info-page-about__item-text">
                        <div className='info-page-about__item-text-header'>
                        This website was developed by me during the course. The site was developed in one day. You can watch the video here - <a className='info-page-about__item-text-footer-link' rel="noreferrer" href='https://vk.com/video305753196_456239487' target={"_blank"}>"link"</a>
                          </div>
                          <div className='info-page-about__item-text-center'>
                          The site was written in HTML, CSS languages using technologies like jQuery and GULP. From the unusual on the site there are wonderful button animations and that's it. All other elements of the site are made exactly as on the design layout. There is also adaptability to many devices.
                          </div>
                          <div className='info-page-about__item-text-footer'>
                          I led the development of the design and the website itself.
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                      <div className="info-page-about__item-image" data-sal="slide-up" data-sal-duration="500">
                        <StaticImage
                                    src="../images/crappo.png"
                                    className="info-page-about__item-image__image img-portfolio"
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
            <div className="container">
              <div className="row">
                <div className="col">
                <div className="project-center" data-sal="slide-up" data-sal-duration="500">
                        <StaticImage
                                    src="../images/cofee.png"
                                    className="project-page-about__item-image__image"
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
            <div>
              <div className="info-page">
                <div className="container">
                  <div className="info-page-about">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                        <div className="info-page-about__item-title" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500">
                        "PlayStation Store"
                        </div>
                        <div data-sal="zoom-in" data-sal-duration="500" data-sal-delay="300" className="info-page-about__item-text">
                        <div className='info-page-about__item-text-header'>
                        This website was developed by me following the example of the PlayStation company. The site was developed within five days. You can watch the video here - <a className='info-page-about__item-text-footer-link' rel="noreferrer" href='https://vk.com/video305753196_456239485' target={"_blank"}>"link"</a>
                          </div>
                          <div className='info-page-about__item-text-center'>
                          The site was written in HTML, CSS, Js languages using technologies such as Node JS, Sequelize, Express, React JS, Bootstrap and Ant Design, PostgreSQL. The site has a frontend part and a backend part with all the mechanics. The site has all the mechanics, as well as on the main site of the PlayStation game console.
                          </div>
                          <div className='info-page-about__item-text-footer'>
                          I led the development of the design and the website itself.
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                      <div className="info-page-about__item-image" data-sal="slide-up" data-sal-duration="500">
                        <StaticImage
                                    src="../images/playstation-store.png"
                                    className="info-page-about__item-image__image img-portfolio"
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
            <div className="container">
              <div className="row">
                <div className="col">
                <div className="project-center" data-sal="slide-up" data-sal-duration="500">
                        <StaticImage
                                    src="../images/taco.png"
                                    className="project-page-about__item-image__image"
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
            <div>
              <div className="info-page">
                <div className="container">
                  <div className="info-page-about">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                        <div className="info-page-about__item-title" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500">
                        Electronic
                        </div>
                        <div data-sal="zoom-in" data-sal-duration="500" data-sal-delay="300" className="info-page-about__item-text">
                        <div className='info-page-about__item-text-header'>
                        This website was developed by me following the example of the Electronic company. The site was developed within six days. You can watch the video here - <a className='info-page-about__item-text-footer-link' rel="noreferrer" href='https://vk.com/video305753196_456239484' target={"_blank"}>"link"</a>
                          </div>
                          <div className='info-page-about__item-text-center'>
                          The site was written in HTML, CSS, Js languages using technologies such as Node JS, Sequelize, Express, React JS, Bootstrap and Ant Design, PostgreSQL. The site has a frontend part and a backend part with all the mechanics. The site has all the mechanics, as well as on a small marketplace.
                          </div>
                          <div className='info-page-about__item-text-footer'>
                          I led the development of the design and the website itself.
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                      <div className="info-page-about__item-image" data-sal="slide-up" data-sal-duration="500">
                        <StaticImage
                                    src="../images/electric.png"
                                    className="info-page-about__item-image__image img-portfolio"
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
            <div className="container">
              <div className="row">
                <div className="col">
                <div className="project-center" data-sal="slide-up" data-sal-duration="500">
                        <StaticImage
                                    src="../images/egg.png"
                                    className="project-page-about__item-image__image"
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
            <div>
              <div className="info-page">
                <div className="container">
                  <div className="info-page-about">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                        <div className="info-page-about__item-title" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500">
                        Zira
                        </div>
                        <div data-sal="zoom-in" data-sal-duration="500" data-sal-delay="300" className="info-page-about__item-text">
                        <div className='info-page-about__item-text-header'>
                        This website was developed by me for the Zira restaurant chain. The site was developed within six days. You can watch the video here - <a className='info-page-about__item-text-footer-link' rel="noreferrer" href='https://vk.com/video305753196_456239486' target={"_blank"}>"link"</a>
                          </div>
                          <div className='info-page-about__item-text-center'>
                          The site was written in HTML, CSS, Js languages using technologies such as Node JS, Sequelize, Express, React JS, Bootstrap and Ant Design, PostgreSQL. The site has a frontend part and a backend part with all the mechanics. The site has all the mechanics, as well as on the sites of large restaurants.
                          </div>
                          <div className='info-page-about__item-text-footer'>
                          I led the development of the design and the website itself.
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                      <div className="info-page-about__item-image" data-sal="slide-up" data-sal-duration="500">
                        <StaticImage
                                    src="../images/zira-site.png"
                                    className="info-page-about__item-image__image img-portfolio"
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

            <div className="container">
              <div className="row">
                <div className="col">
                <div className="project-center" data-sal="slide-up" data-sal-duration="500">
                        <StaticImage
                                    src="../images/cofee.png"
                                    className="project-page-about__item-image__image"
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
            <div>
              <div className="info-page">
                <div className="container">
                  <div className="info-page-about">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                        <div className="info-page-about__item-title" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500">
                        Anime Store
                        </div>
                        <div data-sal="zoom-in" data-sal-duration="500" data-sal-delay="300" className="info-page-about__item-text">

                        <div className='info-page-about__item-text-header'>

                        This website was developed by me following the example of the Anime Store. The site was developed within 15 days. You can watch the video here - <a className='info-page-about__item-text-footer-link' rel="noreferrer" href='https://disk.yandex.ru/i/WOI7kbMhUWo9cQ' target={"_blank"}>"link"</a>

                          </div>

                          <div className='info-page-about__item-text-center'>

                          The site was written in HTML, CSS, TypeScript languages using technologies such as Nest JS, Next JS, Express, React JS, Bootstrap and MongoDB. The site has a frontend part and a backend part with all the mechanics. The site has all the mechanics, just like any other online clothing store. Also you can see the code here - <a className='info-page-about__item-text-footer-link' rel="noreferrer" href='https://github.com/robot-chappi/anime-store' target={"_blank"}>"link"</a>

                          </div>

                          <div className='info-page-about__item-text-footer'>

                          I led the development of the design and the website itself.

                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                      <div className="info-page-about__item-image" data-sal="slide-up" data-sal-duration="500">
                        <StaticImage
                                    src="../images/anime-store.png"
                                    className="info-page-about__item-image__image img-portfolio"
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

            <div className="container">
              <div className="row">
                <div className="col">
                <div className="project-center" data-sal="slide-up" data-sal-duration="500">
                        <StaticImage
                                    src="../images/eggplant.png"
                                    className="project-page-about__item-image__image"
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
            <div>
              <div className="info-page">
                <div className="container">
                  <div className="info-page-about">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                        <div className="info-page-about__item-title" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500">
                        Standofia
                        </div>
                        <div data-sal="zoom-in" data-sal-duration="500" data-sal-delay="300" className="info-page-about__item-text">

                        <div className='info-page-about__item-text-header'>

                        This website was developed by me. The site was developed within 5 days. You can watch the video here - <a className='info-page-about__item-text-footer-link' rel="noreferrer" href='https://disk.yandex.ru/i/Sjcq62JawBGzDw' target={"_blank"}>"link"</a>

                          </div>

                          <div className='info-page-about__item-text-center'>

                          The site was written in HTML, CSS, JavaScript using technologies such as jQuery, Bootstrap, Owl. The site has a frontend part. Also you can see the code here - <a className='info-page-about__item-text-footer-link' rel="noreferrer" href='https://github.com/robot-chappi/static-shop-v3' target={"_blank"}>"link"</a>

                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                      <div className="info-page-about__item-image" data-sal="slide-up" data-sal-duration="500">
                        <StaticImage
                                    src="../images/standofia.png"
                                    className="info-page-about__item-image__image img-portfolio"
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

            <div className="container">
              <div className="row">
                <div className="col">
                <div className="project-center" data-sal="slide-up" data-sal-duration="500">
                        <StaticImage
                                    src="../images/pizza.png"
                                    className="project-page-about__item-image__image"
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
            <div>
              <div className="info-page">
                <div className="container">
                  <div className="info-page-about">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                        <div className="info-page-about__item-title" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500">
                        Travel
                        </div>
                        <div data-sal="zoom-in" data-sal-duration="500" data-sal-delay="300" className="info-page-about__item-text">
                        <div className='info-page-about__item-text-header'>
                        This site was developed by me as an example of what sites are obtained on the Gatsby engine. You can watch the site here - <a className='info-page-about__item-text-footer-link' rel="noreferrer" href='https://confident-morse-fc6d3f.netlify.app/' target={"_blank"}>"link"</a>
                          </div>
                          <div className='info-page-about__item-text-center'>
                          The site was written in HTML, CSS, Js languages using technologies such as Node JS, Gatsby, React JS, Bootstrap. The site has a frontend part and a backend part with all the mechanics.
                          </div>
                          <div className='info-page-about__item-text-footer'>
                          I led the development of the design and the website itself.
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                      <div className="info-page-about__item-image" data-sal="slide-up" data-sal-duration="500">
                        <StaticImage
                                    src="../images/travel-app.png"
                                    className="info-page-about__item-image__image img-portfolio"
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
        </div>



        
        <div className="quote-page">
        <div className="container">
              <div className="row">
                <div className="col-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 quote-page-block-one">
                  <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="300">
                  <StaticImage
                              src="../images/cookies.png"
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
                    <h4 >“THANKS FOR</h4>
                    WATCHING”
                  </div>
                  <div className="quote-page-block_image">
                  <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                    <StaticImage
                                src="../images/pretzel.png"
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

export default Projects