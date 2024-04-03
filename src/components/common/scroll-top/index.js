"use client"
import React, { useEffect, useState, Fragment } from "react"
import { BsArrowUp } from "react-icons/bs";
import styles from "./styles.module.css"

const ScrollTop = () => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 1000 ? setIsActive(true) : setIsActive(false)
    })
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Fragment>
      {isActive && (
        <button
          onClick={() => handleScrollTop()}
          className={styles.scroll_top}
        >
          <BsArrowUp />
        </button>
      )}
    </Fragment>
  )
}

export default ScrollTop