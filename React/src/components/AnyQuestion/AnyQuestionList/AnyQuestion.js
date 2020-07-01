import React ,{Component} from 'react'
// import '../../../../styles/custom.scss'

import AOS from 'aos';


class AnyQuestion extends Component {

  componentDidMount(){

    AOS.init({
        duration : 1000, // 持續時間
        easing: 'ease-out-back',
    })

}
render(){
  return (
    <>
    <div className="AnyQuestionAll">
      <div className="text"></div>
      <div className="AnyQuestionContainer">
        <h2 className="AnyQuestionH2">常見問題</h2>
        <div className="AnyQuestionCardFlex">
          <div className="AnyQuestionCard AnyQuestionCardLeft">
            <i className="far fa-user AnyQuestionCardIcon"></i>
            <h2 className="AnyQuestionCardIconH2">會員問題</h2>
            
          </div>
          <div className="AnyQuestionCard">
            <i class="fas fa-book AnyQuestionCardIcon"></i>
            <h2 className="AnyQuestionCardIconH2">課程問題</h2>
          </div>
          <div className="AnyQuestionCard">
            <i class="fas fa-video AnyQuestionCardIconVideo"></i>
            <h2 className="AnyQuestionCardIconH2">影片問題</h2>
          </div>
          <div className="AnyQuestionCard">
            <i class="far fa-building AnyQuestionCardIcon"></i>
            <h2 className="AnyQuestionCardIconH2">廠商問題</h2>
          </div>
          <div className="AnyQuestionCard AnyQuestionCardRight">
            <i class="fas fa-search AnyQuestionCardIcon"></i>
            <h2 className="AnyQuestionCardIconH2">其他問題</h2>
          </div>
        </div>
        <div className="AnyQuestion2Flex">
          <div className="AnyQuestion2Width">
            <h3 className="AnyQuestionNorthH3">北部上課地點</h3>
            <p>營業時間：平日09:00-22:00/六日09:00-1800 </p>
            <p>電 話：(02)2222-2222</p>
            <p>地 址：台北市南港區忠孝東路八段100巷</p>
          </div>
          <div className="AnyQuestion2Width">
            <h3 className="AnyQuestionNorthH3">南部上課地點</h3>
            <p>營業時間：平日09:00-22:00/六日09:00-1800 </p>
            <p>電 話：(02)2222-2222</p>
            <p>地 址：台北市南港區忠孝東路八段100巷</p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
}
export default AnyQuestion


// import React from "react";
// import axios from "./axios";

// class AnyQuestion extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
//         this.state = {
//             id:"",
//             title : "",
//             author : ""
//         }
//     };

//     handleChange = (e) => {
//         //Step 1:取得輸入的數值
//         const value = e.target.value;
//         //Step 2:取得輸入的input名子
//         const name = e.target.name;
//         //Step 3:更改State數據
//         this.setState({
//             [name]:value
//         });
//     };
//     //-------------------------------------------------//
//     POST = () => {
//         //Step 1:取得state數據
//         const product = {...this.state};
//         //Step 2:新增到JSON-Server數據庫中 
//         axios.post("/posts",product);
//     };
//     //-------------------------------------------------//    
        
//     render()
//     {
//         retrun(
//             <div className="post">
//                     <label>title</label>
//                     <textarea 
//                       name="title" 
//                       value={this.state.title} 
//                       onChange={this.handleChange}
//                     />
//                     <label>author</label>
//                     <textarea 
//                       name="author" 
//                       value={this.state.author} 
//                       onChange={this.handleChange}
//                     />
//                     <button onClick={this.POST}>POST</button>
//              </div>
//         );
//     };
// };
// export default AnyQuestion