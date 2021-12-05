import './index.css'

const TeamCard = props => {
  const {data} = props
  const {id, name, teamImageUrl} = data

  return (
    <li className="li-item">
      <img alt={name} className="team-img" src={teamImageUrl} />
      <p className="team-name-para">{name}</p>
    </li>
  )
}

export default TeamCard
