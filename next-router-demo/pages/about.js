import Router from 'next/router'
import { withRouter } from 'next/router'
import React from 'react'


export default withRouter(class About extends React.Component{
  // getInitProps
  constructor(props){
    super(props)
    console.log(this.context)
    console.log('constructor')
    console.log(Router)
    const obj = Object.assign({},Router.router)
    console.log(obj.asPath)
  }
  componentWillMount(){
    console.log('componentWillMount')
    console.log(Router)
    const obj = Object.assign({},Router.router)
    console.log(obj.asPath)
  }
  componentDidMount(){
    console.log('componentDidMount')
    console.log(Router)
    const obj = Object.assign({},Router.router)
    console.log(obj.asPath)
  }
  render(){
    console.log('render')
    console.log(Router)
    const obj = Object.assign({},Router.router)
    console.log(obj.asPath)
    return (
      <div>about!</div>
    );
  }
})