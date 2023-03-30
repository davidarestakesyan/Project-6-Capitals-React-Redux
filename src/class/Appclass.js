import { Component } from "react";
import Acordeonclass from "./Acordeonclass";
import Buttonclass from "./Buttonclass";

class AppClass extends Component {
constructor(props) {
   super(props) 
   this.state ={data:[],page:1} 
}
getPage = (page) => {
   this.setState(() => {return {page}})
}

componentDidMount() {
   fetch('https://countriesnow.space/api/v0.1/countries/capital')
   .then(res => res.json() )
   .then (result => this.setState(state => {return {data:result.data} }  ))
}
render () {
   const data = this.state.data 
   const length = data.length
   const count = 10 
   const start = (this.state.page - 1) * count
   const end = start + count 
   const dataArray = data.slice(start,end)
   return (
      <div>
         <h1>Class Component</h1>
         {
            dataArray.map((item,index) => {
               return <Acordeonclass key = {index} item = {item} />
            } )
         }
         <Buttonclass length = {length} count = {count}  getPage = {this.getPage}/>
      </div>
   )
}
}

export default AppClass