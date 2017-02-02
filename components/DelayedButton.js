const React = require('react')


class DelayedButton extends React.Component {
  constructor(props) {
    super()

    this.handleEvent = this.handleEvent.bind(this)
  }

  handleEvent(event){
    event.persist()
    setTimeout(()=>(this.props.onDelayedClick(event), this.props.delay))
  }


  render(){
    return (
      <button onClick={this.handleEvent}></button>
    )
  }
}

module.exports = DelayedButton


// event.persist(setTimeout(this.props.onDelayedClick, this.props.delay))
