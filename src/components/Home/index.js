import './index.css'

import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="home-bottom-container">
      <div className="text-button-container">
        <h1 className="page-heading">Clothes That Get YOU Noticed</h1>
        <div className="home-page-image-mobile-container">
          <img
            className="home-page-image-mobile"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
          />
        </div>
        <p className="page-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="shop-now-button">
          Shop Now
        </button>
      </div>
      <img
        className="home-page-image-desktop"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
      />
    </div>
  </>
)

export default Home
