import './index.css'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div data-testid="planets" className="silder-container">
      <h1 className="heading">PLANETS</h1>
      <div>
        <Slider className="slider" {...settings}>
          {planetsList.map(planets => (
            <PlanetItem planets={planets} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
