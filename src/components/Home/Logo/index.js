import './index.scss'
import LogoS from '../../../assets/images/img.jpeg'

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={LogoS} alt="S" className="solid-logo" />
    </div>
  )
}

export default Logo
