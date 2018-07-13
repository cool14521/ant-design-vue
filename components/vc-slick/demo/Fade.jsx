import '../assets/index.less'
import Slider from '../src/slider'
// import { baseUrl } from './config'
const baseUrl = 'https://s3.amazonaws.com/static.neostack.com/img/react-slick'

export default {
  render () {
    const settings = {
      props: {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
    return (
      <div>
        <h2>Fade</h2>
        <Slider {...settings}>
          <div>
            <img src={baseUrl + '/abstract01.jpg'} />
          </div>
          <div>
            <img src={baseUrl + '/abstract02.jpg'} />
          </div>
          <div>
            <img src={baseUrl + '/abstract03.jpg'} />
          </div>
          <div>
            <img src={baseUrl + '/abstract04.jpg'} />
          </div>
        </Slider>
      </div>
    )
  },
}