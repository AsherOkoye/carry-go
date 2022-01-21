import Dman from '../images/pngegg.png'
export default function HeroOne() {
    return (
        <div className="HeroOne">
            <div className="main">
                <div className="main-left">
                    <div className="main-wrap">
                        <div className="main-text">
                            <h1>
                                Transport Items <br />
                                With the Push of a Button
                            </h1>
                            <h4>Any Time, Any Where</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Necessitatibus beatae
                                provident atque temporibus sed dolorum nam culpa
                                consectetur, dignissimos cumque sunt impedit et
                                nesciunt quibusdam ex? Voluptatem, sit.
                                Voluptates, sunt?
                            </p>
                        </div>
                        <button>
                            <p>Get Started</p>
                        </button>
                    </div>
                </div>
                <div className="main-right">
                    <img src={Dman} alt="A mail man" />
                </div>
            </div>
            <div className="sub">
                <h2>Enjoy World-Class Delivery Process</h2>
                <div className="bwrap">
                    <div className="bubbles">
                        <div className="ihold"></div>
                        <h3>Booking</h3>
                    </div>
                    <div className="bubbles">
                        <div className="ihold"></div>
                        <h3>Packing</h3>
                    </div>
                    <div className="bubbles">
                        <div className="ihold"></div>
                        <h3>Transport</h3>
                    </div>
                    <div className="bubbles">
                        <div className="ihold"></div>
                        <h3>Tracking</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}