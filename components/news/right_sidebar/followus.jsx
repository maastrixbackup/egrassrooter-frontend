import React from 'react'

const FollowUs = () => {
  return (
    <>
         <div class="section-title mt-4">
              <h4>Follow Us</h4>
            </div>
            <div class="card text-center subcrib-bx p-4 mt-2 shadow-sm">
              <div class="card-body">
                <ul class="social1 list-unstyled d-flex justify-content-evenly">
                  <li class="social-item">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      title="Facebook"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="social-item">
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      title="Twitter"
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li class="social-item">
                    <a href="#" target="_blank" title="YouTube">
                      <i class="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li class="social-item">
                    <a href="#" target="_blank" title="Pinterest">
                      <i class="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li class="social-item">
                    <a href="#" target="_blank" title="Instagram">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card text-center subcrib-bx mt-2 shadow-sm">
              <div class="card-body">
                <div class="mb-3">
                  <p href="#" class="bg-success msg-ico btn-lg rounded-circle">
                    <i class="fas text-white fa-envelope"></i>
                  </p>
                </div>
                <h6 class="card-title">
                  Subscribe for latest updates &amp; news
                </h6>
                <form method="post" class="comment_form">
                  <div class="mb-3">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Your Email Address"
                      name="author"
                      required
                    />
                  </div>
                  <button type="submit" class="btn btn-subcrib w-100">
                    Subscribe Us
                  </button>
                </form>
              </div>
            </div>
    </>
  )
}

export default FollowUs
