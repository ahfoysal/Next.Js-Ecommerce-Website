import React from "react";
import Link from "next/link";

import { Telephone, Envelope, Briefcase, BadgeAd, Gift } from 'react-bootstrap-icons';




import { FaTwitter, FaFacebookF, FaInstagram , FaYoutube, FaApple, FaWindows, FaAndroid} from 'react-icons/fa';
import Image from "next/image";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="ml-10">
        <div className="container-fluid bg-primary">
          <div className="row ">
            <div className="col-md-9 py-3 text-white">
              Get connected with us on social networks!
            </div>
            <div className="col-md-3 py-3 text-center text-white">
              <Link href="/" title="Apple">
                <FaApple  className="text-light me-3" />
              </Link>
              <Link href="/" title="Windows">
                <FaWindows  className="text-light me-3" />
              </Link>
              <Link href="/" title="Android">
                <FaAndroid  className="text-light me-3" />
              </Link>
              |
              <Link href="/" title="Twitter">
                <FaTwitter
                
                  className="text-light ms-3 me-3"
                />
              </Link>
              <Link href="/" title="Facebook">
                <FaFacebookF
                
                  className="text-light me-3"
                />
              </Link>
              <Link href="/" title="Instagram">
                <FaInstagram
                
                  className="text-light me-3"
                />
              </Link>
              <Link href="/" title="Youtube">
                <FaYoutube  className="text-light me-3" />
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-dark text-white">
          <div className="row ">
            <div className="col-md-3 py-3">
              <div className="h6">NEXT ECOMMERCE</div>
              <hr />
              <p>
               Ecommerce Website using Next.js and React.js
              </p>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Categories</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    href="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Electronics
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    href="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Men
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    href="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                  Women
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    href="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Beauty
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    href="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Health
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Policy</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    href="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Return Policy
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    href="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Terms Of Use
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    href="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Security
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    href="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Privacy
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    href="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    EPR Compliance
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Address</div>
              <hr />
              <address>
                <strong>Pewds, Inc.</strong>
                <br />
                  69,  Mirpur
                <br />
                Dhaka, Bangladesh
                <br />
                 +880 169696969
              </address>
              <div className="h6">Customer Care</div>
              <hr />
              <Telephone /> +96969696969
              <br />
              <Envelope /> next@ecommerce.com
            </div>
          </div>
        </div>
        <div className="container-fluid bg-secondary text-white text-center">
          <div className="row">
            <div className="col-md-2 py-2">
              <Link href="/" className="text-white text-decoration-none">
                <Briefcase className="text-warning" /> Partner with us
              </Link>
            </div>
            <div className="col-md-2 py-2">
              <Link href="/" className="text-white text-decoration-none">
                <BadgeAd className="text-info" /> Advertise
              </Link>
            </div>
            <div className="col-md-2 py-2">
              <Link href="/" className="text-white text-decoration-none">
                <Gift className="text-dark" /> Gift
              </Link>
            </div>
            <div className="col-md-3 py-2">
              © {new Date().getFullYear()} Next Ecommerce
            </div>
            <div className="col-md-3 py-2 bg-white">
              <Image
                src="/images/payment/american_express.webp"
              height={32}
              width={32}
                alt="American Express"
                className="me-2"
              />
              <Image
                src="/images/payment/maestro.webp"
                height={32}
              width={32}
                alt="Maestro"
                className="me-2"
              />
              <Image
                src="/images/payment/netbanking.webp"
                height={32}
              width={32}
                alt="Net Banking"
                className="me-2"
              />
              <Image
                src="/images/payment/paypal.webp"
                height={32}
              width={32}
                alt="Paypal"
                className="me-2"
              />
              <Image
                src="/images/payment/rupay.webp"
                height={32}
              width={32}
                alt="Rupay"
                className="me-2"
              />
              <Image
                src="/images/payment/upi.webp"
                height={32}
              width={32}
                alt="UPI"
                className="me-2"
              />
              <Image
                src="/images/payment/visa.webp"
                height={32}
              width={32}
                alt="Visa"
                className="me-2"
              />
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
