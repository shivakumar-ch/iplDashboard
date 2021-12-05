import './index.css'

const MatchCard = props => {
  const {recentMatchData} = props
  const {
    competingTeamLogo,
    matchStatus,
    competingTeam,
    result,
  } = recentMatchData

  const clsName = matchStatus === 'Lost' ? 'red-clr' : 'green-clr'

  return (
    <li className="recent-li-item">
      <img
        alt={`competing team ${competingTeam}`}
        className="recent-opponent-img"
        src={competingTeamLogo}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={clsName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
