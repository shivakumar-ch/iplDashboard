import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import TeamCard from '../TeamCard'
import TeamMatches from '../TeamMatches'

class Home extends Component {
  state = {
    isLoading: true,
    cardData: [],
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedList = teams.map(item => ({
      id: item.id,
      name: item.name,
      teamImageUrl: item.team_image_url,
    }))
    this.setState({
      cardData: [...updatedList],
      isLoading: false,
    })
  }

  render() {
    const {isLoading, cardData} = this.state
    return (
      <div className="home-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="card">
            <div className="home-title">
              <img
                alt="ipl logo"
                className="logo-img"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              />
              <h1 className="head">IPL Dashboard</h1>
            </div>
            <ul className="ul-item">
              {cardData.map(item => (
                <Link
                  key={item.id}
                  to={`/team-matches/${item.id}`}
                  className="link"
                >
                  <TeamCard data={item} />
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
