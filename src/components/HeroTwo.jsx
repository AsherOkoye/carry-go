import jumpimg from "../images/pngegg (6).png";
import a from "../images/a.jpg";
import b from "../images/b.jpg";
import c from "../images/c.jpg";
export default function HeroTwo() {
    return (
        <div className="HeroTwo">
            <div className="services" id="mid">
                <div className="service-Header">
                    <h1>Services</h1>
                    <div className="line">
                        <div className="linein"></div>
                    </div>
                    <p>We provide you with the best choices for you. Adjust it to
                        your health needs and make sure you under go treatment with our highly
                        qualified doctors you can consult with us which type of service is sutable for your health
                    </p>
                </div>
                <div className="service-cards">
                    <div className="services-cards-wrapper">
                        <div className="cards">
                            <div className="Boximg">
                                <img className="m" src={a} alt="" />
                            </div>
                            <h1>Main Title</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maxime vel harum error
                                distinctio numquam ut quam soluta asperiores
                                blanditiis corporis modi
                            </p>
                        </div>
                        <div className="cards">
                            <div className="Boximg">
                                <img className="m" src={b} alt="" />
                            </div>
                            <h1>Main Title</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maxime vel harum error
                                distinctio numquam ut quam soluta asperiores
                                blanditiis corporis modi
                            </p>
                        </div>
                        <div className="cards">
                            <div className="Boximg">
                                <img className="m" src={c} alt="" />
                            </div>
                            <h1>Main Title</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maxime vel harum error
                                distinctio numquam ut quam soluta asperiores
                                blanditiis corporis modi
                            </p>
                        </div>
                    </div>
                </div>
                <div className="services-sub-hero">
                    <div className="SSH-wrap">
                        <div className="left">
                            <img
                                src={jumpimg}
                                alt="jumping people"
                            />
                        </div>
                        <div className="right">
                            <div className="SSH-right-wrap">
                                <h1>Main Header</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nam, obcaecati minima
                                    tempora eius reiciendis rem provident
                                    suscipit adipisci in culpa. Repudiandae
                                    dignissimos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
