import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="Not found 😁" description="Page 404 :)"/>
    <div>
    <div className="not-found-page">
        <div className="container">
            <div className="home-page-illustraitions">
                <div className="row">
                  <div className="col-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 home-page-illustraitions_text">
                      <h4>Bad news 👻</h4>
                      <div className="home-page-illustraitions_text-under">
                        <p>The page does not exist :D</p>
                      </div>
                  </div>
                  <div className="col-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 home-page-illustraitions_image">
                      <StaticImage
                            src="../images/not-found.png"
                            className="home-page-illustraitions_image-image"
                            width={400}
                            quality={100}
                            placeholder="blurred"
                            formats={["auto", "webp", "avif"]}
                            alt="Not Found"
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
                              src="../images/pretzel.png"
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
                    <h4 >“TRY TO CHECK</h4>
                    YOUR LINK”
                  </div>
                  <div className="quote-page-block_image">
                  <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                    <StaticImage
                                src="../images/steak.png"
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
                              src="../images/lolipop.png"
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

export default NotFoundPage
