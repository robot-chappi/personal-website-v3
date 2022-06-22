import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import emailjs from '@emailjs/browser';

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target)
    emailjs.sendForm('service_lekrzf1', 'template_gw46ni5', e.target, 'user_HzTP576v6eyCTbEflZ5D8')
    .then((result) => {
    console.log(result.text);
    }, (error) => {
    console.log(error.text);
    });
    e.target.reset();
}

  return (
  <Layout>
    <Seo title="Contact 📱" description="Contact Chappic. Quick question - quick answer!"/>
    <div>
    <div className="contact-page">
        <div className="container">
            <div className="home-page-illustraitions">
                <div className="row">
                  <div className="col-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 home-page-illustraitions_text">
                      <h4>Contact me</h4>
                      <div className="home-page-illustraitions_text-under">
                        <p>Can you just text me something? :)</p>
                      </div>
                  </div>
                  <div className="col-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 home-page-illustraitions_image">
                      <StaticImage
                            src="../images/contact.png"
                            className="home-page-illustraitions_image-image"
                            width={500}
                            quality={100}
                            placeholder="blurred"
                            formats={["auto", "webp", "avif"]}
                            alt="Contact image"
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
                              src="../images/fries.png"
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
                    <h4 >“NOW OR</h4>
                    NEVER”
                  </div>
                  <div className="quote-page-block_image">
                  <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                    <StaticImage
                                src="../images/cup-cake.png"
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
                              src="../images/cake.png"
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
                      Just text me something..
                    </div>
                    <form className='form-contact-me' onSubmit={sendEmail}>
                                <div data-sal="zoom-in" data-sal-duration="500" data-sal-delay="300" className='form-contact-me-block'>
                                    <input type="text" className='form-contact-me-input' placeholder='Your name..' name='name'/>
                                </div>
                                <div data-sal="zoom-in" data-sal-duration="500" data-sal-delay="300" className='form-contact-me-block'>
                                    <input type="text" className='form-contact-me-input' placeholder='Your Email..' name='email'/>
                                </div>
                                <div data-sal="zoom-in" data-sal-duration="500" data-sal-delay="300" className='form-contact-me-block'>
                                    <input type="text" className='form-contact-me-input' placeholder='Your subject..' name='subject'/>
                                </div>
                                <div data-sal="zoom-in" data-sal-duration="500" data-sal-delay="300" className='form-contact-me-block'>
                                    <textarea type="text" className='form-contact-me-textarea' placeholder='Your message..' name='message'></textarea>
                                </div>
                                <div data-sal="zoom-in" data-sal-duration="500" data-sal-delay="300" className='form-contact-me-block form-contact-me-block-btn'>
                                    <input type="submit" className='form-contact-me-btn' value="Send message"/>
                                </div>
                  </form>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-6 info-page-about__item">
                  <div className="info-page-about__item-image" data-sal="slide-up" data-sal-duration="500">
                    <StaticImage
                                src="../images/contact-image-one.png"
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
                              src="../images/cofee.png"
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
                    <h4 >“MEND OR</h4>
                    END”
                  </div>
                  <div className="quote-page-block_image">
                  <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                    <StaticImage
                                src="../images/cookies.png"
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
                              src="../images/float.png"
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
}

export default Contact