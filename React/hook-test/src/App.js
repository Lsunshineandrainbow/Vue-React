// import React from 'react';
// class Cat extends React.Component{
//   render(){
//     const mouse =this.props.mouse
//     return (
//         <div>
//           <img src={require('./img/timg.jpg')} style={{width:'200px',height:'200px', position: 'absolute', left: mouse.x, top: mouse.y}} alt=""/>
//         </div>
//     )
//   }
// }
// // 逻辑组件
// class Mouse extends React.Component{
//   constructor(props){
//     super(props);
//     this.handleMouseMove = this.handleMouseMove.bind(this)
//     this.state={x:0,y:0}
//   }
//   handleMouseMove(event){
//     this.setState({
//       x:event.clientX,
//       y:event.clientY
//     })
//   }
//   render(){
//     return(
//         <div style={{height:'100%'}} onMouseMove={this.handleMouseMove}>
//           <h1>Move the mouse around</h1>
//           <p>The current mouse position is ({this.state.x},{this.state.y})</p>
//           <Cat mouse={this.state}/>
//         </div>
//     )
//   }
// }
// // 功能组件复用
// class MouseTracker extends React.Component{
//   render(){
//     return(
//         <div style={{width:'600px',height:'600px',margin:'200px auto',border:'1px solid #ccc'}} >
//           <h1>Move the mouse around!</h1>
//           <Mouse render={mouse=>(<Cat mouse={mouse}/>)}/>
//         </div>
//     )
//   }
// }
//
// export default MouseTracker
// __________________________________________________________
//import React from 'react';
                  //class定义
// class Hooktest extends React.Component {
//                     constructor(props) {
//                       super(props);
//                       this.state = {count: 0};
//                       this.clickBtn = this.clickBtn.bind(this);
//                     }
//                     clickBtn = () => {
//                       this.setState({
//                         count: this.state.count + 1
//                     })
//                     }
//                     render() {
//                       return (
//                           <div>
//                             <p>You clicked {this.state.count} times</p>
//                             <button onClick={this.clickBtn}>Click me</button>
//                           </div>)
//                     }
//                   }


//useState
//import { useState } from 'react';
// function Hooktest() {
//   const [count, setCount] = useState(0);
//
//   return (
//       <div>
//         <p>You clicked {count} times</p>
//         <button onClick={() => setCount(count + 1)}>
//           Click me
//         </button>
//       </div>
//   );
//_____________________________________________________________
// import React from  'react'
// import { useState, useEffect } from 'react';
// function Hooktest() {
//   const [count, setCount] = useState(0);
//   const [count1, setCount1] = useState(0);
//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API
//     window.alert(`You clicked ${count} times`)
//       console.log(count)
//       return ()=>{console.log('componentWillUnmount: 组件卸载， 做一些清理工作')}
//   },
//       [count]);
//
//   return (
//       <div>
//         <p>You clicked {count} ss {count1}times</p>
//         <button onClick={() => setCount(count + 1)}>
//           Click me
//         </button>
//         <button onClick={() => setCount1(count1 + 1)}>
//           Click me
//         </button>
//       </div>
//   );
// }
// ————————————————————————————————————
import React from 'react'
import { useState, useEffect } from 'react';
function useCount (){
  const [count, setCount] = useState(0);
  useEffect((z)=>{
    window.alert(`You clicked ${count} times`)
      console.log(count)
  })
  return ()=>{setCount(count+1)}
}
function Hooktest(){
    const setCount =useCount()
    return(
        <div>
            <Hooktest1/>
            <Hooktest2/>
        </div>
    )
}

function Hooktest1(){
  const setCount =useCount()

  return(
      <button onClick={setCount}>add1</button>
  )
}
function Hooktest2() {
    const setCount =useCount()
return(
    <button onClick={setCount}>add2</button>
)
}

export default Hooktest

