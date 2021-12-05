import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    cardData: {
      latestMatchDetails: {},
      recentMatches: [],
      teamBannerUrl: '',
    },
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      latestMatchDetails: {
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        id: data.latest_match_details.id,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(item => ({
        competingTeam: item.competing_team,
        competingTeamLogo: item.competing_team_logo,
        date: item.date,
        firstInnings: item.first_innings,
        id: item.id,
        manOfTheMatch: item.man_of_the_match,
        matchStatus: item.match_status,
        result: item.result,
        secondInnings: item.second_innings,
        umpires: item.umpires,
        venue: item.venue,
      })),
      teamBannerUrl: data.team_banner_url,
    }
    this.setState({
      cardData: {
        latestMatchDetails: {...updatedData.latestMatchDetails},
        recentMatches: [...updatedData.recentMatches],
        teamBannerUrl: updatedData.teamBannerUrl,
      },
      isLoading: false,
    })
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const {isLoading, cardData, teamId} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = cardData
    return (
      <div className={`each-card-container ${id}-bg`}>
        {isLoading ? (
          <div testid="loader" className={`loader `}>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="each-card">
            <img alt="team banner" className="banner-img" src={teamBannerUrl} />
            <h3>Latest Matches</h3>
            <LatestMatch latestMatchData={latestMatchDetails} />
            <ul className="recent-ul-item">
              {recentMatches.map(item => (
                <MatchCard key={item.id} recentMatchData={item} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
