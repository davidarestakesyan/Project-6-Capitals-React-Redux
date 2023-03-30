import React, { Component } from 'react'

export class Buttonclass extends Component {
    constructor (props) {
      super(props)
    }


  render() {
   const {length,count,getPage} = this.props
   const button  = Math.ceil(length/count)
   const arr = Array.from({length: button}, (_, index) => index + 1)
    return (
      arr.map((el,index) => {
      return(
<button key = {index} onClick = {(event) => 
getPage(event.target.value)} value = {el} >{el} </button>
        ) } )

)
  }
}

export default Buttonclass