const React = require('react')

class CoordinatesButton extends React.Component {
  constructor(){
    super()
  }

  render(){
    return (
      <button
       onClick={(event)=> {this.props.onReceiveCoordinates([event.clientX, event.clientY])}}></button>
    )
  }


}

module.exports = CoordinatesButton
