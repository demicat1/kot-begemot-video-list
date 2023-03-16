import React from 'react'
import { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import '../index.scss'

function ScrollUpButton() {
  const [scrollUpBtn, setScrollUpBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollUpBtn(window.scrollY >= 320)
    })
  })

  function scrollUp() {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div>
      <CSSTransition
        in={scrollUpBtn}
        timeout={300}
        classNames='scroll__btn'
        mountOnEnter
        unmountOnExit>
        <button
          onClick={scrollUp}
          className='scroll__btn'>
          <span>&#129081;</span>
        </button>
      </CSSTransition>
    </div>
  )
}

export default ScrollUpButton