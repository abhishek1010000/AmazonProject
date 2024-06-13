import { GrLanguage } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import flag from '../../assets/Flag_of_India.svg'
import './Footer.css'
import logo from '../../assets/logo.png'
import Sign from "../SignUpIn/Sign";
function Footer(){
    return (
        <> 
          <Sign></Sign>
          <div className="main">
            <div className="top">
               <NavLink to="" className="top-link">Back to top</NavLink>
            </div>
            <div className="middle">
                <div className="center">
                    <div className="first">
                        <h2>Get to Know Us</h2>
                        <div className='middle-link'>
                            <NavLink to="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">About us</NavLink>
                            <NavLink to="https://amazon.jobs/en/">Careers</NavLink>
                            <NavLink to="https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer">Press Releases</NavLink>
                            <NavLink to="https://www.amazon.science/">Amazon Science</NavLink>
                        </div>
                    </div>
                    <div className="first">
                        <h2>Connect with Us</h2>
                        <div className='middle-link'>
                            <NavLink to="https://www.amazon.in/gp/redirect.html/ref=footer_fb?location=http://www.facebook.com/AmazonIN&token=2075D5EAC7BB214089728E2183FD391706D41E94&6">Facebook</NavLink>
                            <NavLink to="https://www.amazon.in/gp/redirect.html/ref=footer_twitter?location=http://twitter.com/AmazonIN&token=A309DFBFCB1E37A808FF531934855DC817F130B6&6">Twitter</NavLink>
                            <NavLink to="https://www.amazon.in/gp/redirect.html?location=https://www.instagram.com/amazondotin&token=264882C912E9D005CB1D9B61F12E125D5DF9BFC7&source=standards">Instagram</NavLink>
                        </div>
                    </div>
                    <div className="first">
                        <h2>Make Money with Us</h2>
                        <div className='middle-link'>
                            <NavLink to="https://www.amazon.in/b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C">Sell on Amazon</NavLink>
                            <NavLink to="">Sell under Amazon Accelerator</NavLink>
                            <NavLink to="https://brandservices.amazon.in/?ref=AOINABRLGNRFOOT&ld=AOINABRLGNRFOOT">Protect and Build Your Brand</NavLink>
                            <NavLink to="https://sell.amazon.in/grow-your-business/amazon-global-selling?ld=AZIN_Footer_V1&ref=AZIN_Footer_V1">Amazon Global Selling</NavLink>
                            <NavLink to="https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&utm_medium=footer&utm_source=GW&ref_=footer_assoc">Become an Affiliate</NavLink>
                            <NavLink to="https://sell.amazon.in/sell-online/fulfillment-by-amazon?ref_=asin_soa_rd&ld=AWRGINFBAfooter">Fulfilment by Amazon</NavLink>
                            <NavLink to="https://advertising.amazon.com/en-gb?ref=Amz.in">Advertise Your Products</NavLink>
                            <NavLink to="https://www.amazon.in/amazonpay/home">Amazon Pay on Merchants</NavLink>
                        </div>
                    </div><div className="first">
                        <h2>Let Us Help You</h2>
                        <div className='middle-link'>
                            <NavLink to="https://www.amazon.in/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD&ref_=footer_covid">COVID-19 and Amazon</NavLink>
                            <NavLink to="https://www.amazon.in/gp/css/homepage.html?ref_=footer_ya">Your Account</NavLink>
                            <NavLink to="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fspr%2Freturns%2Fhomepage%2Fhomepage.html%3Fref_%3Dfooter_hy_f_4&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_psr_desktop_in&openid.mode=checkid_setup&language=en_IN&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0">Returns Centre</NavLink>
                            <NavLink to="https://www.amazon.in/gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc">100% Purchase Protection</NavLink>
                            <NavLink to="https://www.amazon.in/gp/browse.html?node=6967393031&ref_=footer_mobapp">Amazon App Download</NavLink>
                            <NavLink to="https://www.amazon.in/gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he">Help</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="language">
                <div className="img">
                    <NavLink to="https://www.amazon.in/ref=footer_logo"><img src={logo} alt="" width={100} /></NavLink>
                </div>
                <div className="lang-flag">
                    <div className="set-lang bor">
                        <GrLanguage className="lang-icon" />
                        <select name="" id="footer-select">
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Sanskrit">Sanskrit</option>
                        </select>
                    </div>
                    <div className="flag bor">
                        <img src={flag} alt="" width={10} height={25} />
                        <span>India</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-top">
                    <div className="f1 f">
                        <NavLink to="https://www.abebooks.com/"><h4>AbeBooks Books, art& collectibles</h4></NavLink>
                        <NavLink to="https://www.shopbop.com/"><h4>Shopbop Designer Fashion Brands</h4></NavLink>
                    </div>
                    <div className="f2 f">
                        <NavLink to="https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter"><h4>Amazon Web Services Scalable Cloud Computing Services</h4></NavLink>
                        <NavLink to="https://www.amazon.in/l/21102587031?ref=footer_aingw"><h4>Amazon Business Everything For Your Business</h4></NavLink>
                    </div>
                    <div className="f3 f">
                        <NavLink to="https://www.audible.in/"><h4>Audible Download Audio Books</h4></NavLink>
                        <NavLink to="https://www.amazon.in/l/8557209031?ref=footer_amznow"><h4>Prime Now 2-Hour Delivery on Everyday Items</h4></NavLink>
                    </div>
                    <div className="f4 f">
                        <NavLink to="https://www.imdb.com/"><h4>IMDb Movies, TV & Celebrities</h4></NavLink>
                        <NavLink to="https://www.amazon.in/music/prime?ref=footer_apm"><h4>Amazon Prime Music 100 million songs, ad-free Over 15 million podcast episodes</h4></NavLink>
                    </div>
                </div>
                <div className="bottom-down">
                    <NavLink to="https://www.amazon.in/gp/help/customer/display.html?nodeId=200545940&ref_=footer_cou">Conditions of Use & Sale</NavLink>
                    <NavLink to="https://www.amazon.in/gp/help/customer/display.html?nodeId=200534380&ref_=footer_privacy">Privacy Notice</NavLink>
                    <NavLink to="https://www.amazon.in/gp/help/customer/display.html?nodeId=202075050&ref_=footer_iba">Interest-Based Ads</NavLink>
                    <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
                </div>
            </div>
          </div>
        </>
    )
}

export default Footer;