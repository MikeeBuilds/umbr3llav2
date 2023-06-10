'client'

import React from 'react'

const Footer = () => {
  return (
    <div>
      <div>©2023 Umbr3lla Labs. All rights reserved.</div>
      <div>Terms of Service | Privacy Policy</div>

      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-size: 0.8rem;
          color: #fff;
          background-color: #000;
          padding: 1rem;
        }
      `}</style>
    </div>
  )
}

export default Footer