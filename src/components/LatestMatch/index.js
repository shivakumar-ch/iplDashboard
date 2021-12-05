import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchData
  return (
    <div className="latest-match-div">
      <div className="left-latest-div">
        <div className="left-left-latest-div">
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          alt={`latest match ${competingTeam}`}
          className="latest-opponent-img"
          src={competingTeamLogo}
        />
      </div>
      <hr className="hr" />
      <div className="right-latest-div">
        <h2>First Innings</h2>
        <p>{firstInnings}</p>
        <h2>Second Innings</h2>
        <p>{secondInnings}</p>
        <h2>Man Of The Match</h2>
        <p>{manOfTheMatch}</p>
        <h2>Umpires</h2>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
