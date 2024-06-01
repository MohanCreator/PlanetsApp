import './index.css'

const PlanetItem = props => {
  const {planets} = props
  const {imageUrl, name, description} = planets
  return (
    <div className="each-slider">
      <img className="image" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="name">{name}</h1>
      <p className="des">{description}</p>
    </div>
  )
}

export default PlanetItem
