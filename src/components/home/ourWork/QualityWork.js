import React from 'react'
import Article from './Article'
import { QualityWorkWrapper } from './OurWorkStyle'
import Review from './Review'

export default function QualityWork() {
  return (
    <QualityWorkWrapper>
        <Article />
        <div>
          <Review stars={5} name='Sarah M.'>
            <p>
              “KA Construction created <b>beautiful</b> work. I love my new
              space.”
            </p>
          </Review>
          <img
            src={process.env.PUBLIC_URL + "/images/feather_interior.png"}
            alt='Interior Kitchen from Design to Reality'
          />
        </div>
      </QualityWorkWrapper>
  )
}
