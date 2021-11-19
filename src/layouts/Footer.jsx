import "../assets/css/Footer.css";
import Shuffle from "../assets/img/footer/Shuffle.png";
import Previous from "../assets/img/footer/Previous.png";
import Play from "../assets/img/footer/Play.png";
import Pause from "../assets/img/footer/Pause.png";
import Next from "../assets/img/footer/Next.png";
import Repeat from "../assets/img/footer/Repeat.png";
const Footer = () => {
  return (
    <div className="player container-fluid fixed-bottom bg-container pt-1">
      <div className="row flex-nowrap justify-content-between playBar mt-3">
        <div className="col-auto">
          <div className="playerArtistInfo d-flex">
            <div className="d-flex flex-column pl-2"></div>
          </div>
        </div>
        <div className="col-6 pl-5">
          <div className="playerControls w-50 d-flex justify-content-between pl-5">
            <div>
              <img src={Shuffle} alt="shuffle" />
            </div>
            <div>
              <img src={Previous} alt="previous" />
            </div>
            <div>
              <img src={Play} alt="play" />
            </div>
            <div>
              <img src={Next} alt="next" />
            </div>
            <div>
              <img src={Repeat} alt="repeat" />
            </div>
          </div>
          <div className="progressContainer d-flex align-items-center ml-5">
            <span className="currentTime">00:00</span>
            <div className="progress w-100">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <audio />
              </div>
            </div>
            <span className="duration">00:00</span>
          </div>
        </div>
        <div className="col-auto mr-3">
          <div className="playerVolume">
            <i className="fa fa-volume-up" />
            <input type="range" defaultValue={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
