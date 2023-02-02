import React from "react"
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap"

const Header = () => {
  return(
    // <>
    //  <h2>Start Swiping</h2>
    //  <>
  <Card className="my-2">
    <CardImg
      alt="Card image cap"
      src="https://assets.website-files.com/5ca40ca32e5a6c5995afa178/5cb650d2c3cc0ca9db73d92a_tinder_openers_banner.png"
      style={{
        height: 180
      }}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h1">
        Cat Tinder
      </CardTitle>
      <CardText>
      Looking for a purr-fect match to share fur-ever memories and catnaps with?
      </CardText>
      <CardText>
        {/* <small className="text-muted">
          Last updated 3 mins ago
        </small> */}
      </CardText>
    </CardBody>
  </Card>
  )
}

export default Header



