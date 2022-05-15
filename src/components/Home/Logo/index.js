import './index.scss'
import LogoS from '../../../assets/images/img.jpeg'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    // gsap
    //   .timeline()
    //   .to(bgRef.current, {
    //     duration: 1,
    //     opacity: 1,
    //   })
    //   .from(outlineLogoRef.current, {
    //     drawSVG: 0,
    //     duration: 14.7,
    //   })
    // outlineLogoRef.current = null
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} src={LogoS} alt="S" className="solid-logo" />
    </div>
  )
}

export default Logo
