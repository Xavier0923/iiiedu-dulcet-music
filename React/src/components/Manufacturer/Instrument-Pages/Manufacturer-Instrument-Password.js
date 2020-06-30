import React from 'react'
import {FaEye} from 'react-icons/fa'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
var sha1 = require('sha1')
const MySwal = withReactContent(Swal)

class InstrumentPassword extends React.Component{
  constructor() {
    super() // => 記得呼叫 parent 的 constructor，很重要
    this.state = {
      oldPwd : '',
      newPwd : '',
      againPwd : '',
      // => 幫 App 加上 state      
      changOldPwd: false,
      changNewPwd:false,
      changNewPwd2:false,
    }
  }

  

  handlesend = e =>{
    const newpwd = this.state.newPwd
    const oldpwd = this.state.oldPwd
    const againpwd = this.state.againPwd
    this.state.newPwd == this.state.againPwd ? 
    alert('newpassword' + newpwd + ' oldpassword' + oldpwd + ' againpassword' + againpwd)
    : alert('密碼不一致')
    e.preventDefault()
  }

  // // 在這個生命週期中渲染資料
  // componentDidMount() {
  //   this.onChange = (e) => {
  //     e.preventDefault()
  //     const file = e.target.files[0]
  //     const formData = new FormData()
  //     // 这里的 image 是字段，根据具体需求更改
  //     formData.append('image', file)
  //     // 这里的 fetch 引用了 isomorphic-fetch 包
  //     // console.log("this.state.user", this.state.user)
  //     // return
  //     fetch(`http://localhost:3030/img-upload/user/${this.state.user.userID}`, {
  //       method: 'POST',
  //       body: formData,
  //     })
  //       .then((res) => res.json())
  //       .then((json) => {
  //         if ((json.status = 1)) {
  //           this.state.user.userImg = json.imgName
  //           console.log(this.state.user)
  //           this.setState({ user: this.state.user })
  //           localStorage.setItem('user', JSON.stringify([this.state.user]))
  //         } else {
  //           alert('上傳失敗')
  //         }
  //       })
  //   }
  //   if (getUserInfo()) {
  //     let user = getUserInfo()
  //     // JSON.parse(localStorage.getItem('user'));
  //     // console.log("user", user[0])
  //     // alert(`${user[0].userID}歡迎您～！` )
  //     this.setState({ user: user[0] })
  //   } else {
  //     this.setState({ user: '' })
  //   }
  // }
  

    render(){
      const eyeshow = this.state.changOldPwd
      ? 'ins-svg-eye-close svg-inline--fa fa-eye fa-w-18'
      : ' ins-svg-eye svg-inline--fa fa-eye fa-w-18'
      const eyeshow1 = this.state.changNewPwd
      ? 'ins-svg-eye-close svg-inline--fa fa-eye fa-w-18'
      : ' ins-svg-eye svg-inline--fa fa-eye fa-w-18'
      const eyeshow2 = this.state.changNewPwd2
      ? 'ins-svg-eye-close svg-inline--fa fa-eye fa-w-18'
      : ' ins-svg-eye svg-inline--fa fa-eye fa-w-18'
    return(
      <div className="insPassword-main">
      <h3 className="font-size-142rem insPassword-top-titleName ">
        密碼修改
      </h3>
      <div className="insPassword-top-Img">
      <label for="gogo" className="ins-upload-container">
              <input
                type="file"
                name="image"
                className="ins-upload-input"
                onChange={this.onChange}
                id="gogo"
              />
              <input
                type="primary"
                className="ins-upload-button"
                value="上传图片"
              />
            </label>
      </div>

      <hr className="insPassword-top-hr" />

      <form className="insPassword-form" action="" onSubmit={this.handlesend}>
        <label className="ins-home-label" for="name">
          <p>廠商編號</p>
          <div className="ins-home-inp ">
            <input
              className="ins-user-id"
              id="id"
              type="text"
              value="0001"
              readonly="readonly"
            />
          </div>
        </label>
        <label className="insPassword-form-input font-size-1rem" for="oldPwd">
          <p className="">請輸入舊密碼</p>
          <div className="insPassword-inp">
            <input
              id="oldPwd font-size-114rem "
              type={`${this.state.test ? 'text' : 'password'}`}
              onChange={(e) =>{
                this.setState({
                  oldPwd:e.target.value
                })
              }}
            />
            <svg
              onClick={() => {
                const { changOldPwd } = this.state
                const change = !changOldPwd
                this.state.test
                  ? this.setState({ test: false })
                  : this.setState({ test: true })
                this.setState({ changOldPwd: change })
                //  this.state.test ? this.setState.test(false) : this.setState.test(true)
              }}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="eye"
              key="pwd1"
              className={eyeshow}
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
              ></path>
            </svg>
          </div>
        </label>

        <label className="insPassword-form-input font-size-1rem" for="newPwd">
          <p className="">輸入新密碼</p>
          <div className="insPassword-inp">
            <input
              id="newPwd font-size-114rem "
              type={`${this.state.test2 ? 'text' : 'password'}`}
              onChange={(e) => {
                this.setState({
                  newPwd:e.target.value
                })
              }}
            />
            <svg
              onClick={() => {
                const { changNewPwd } = this.state
                const change = !changNewPwd
                this.state.test2
                  ? this.setState({ test2: false })
                  : this.setState({ test2: true })
                this.setState({ changNewPwd: change })
                //  this.state.test ? this.setState.test(false) : this.setState.test(true)
              }}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="eye"
              className={eyeshow1}
              key="pwd2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
              ></path>
            </svg>
          </div>
        </label>
        <label
          className="insPassword-form-input font-size-1rem"
          for="changePwd"
        >
          <p className="">確認新密碼</p>
          <div className="insPassword-inp">
            <input
              id="changePwd font-size-114rem "
              type={`${this.state.test3 ? 'text' : 'password'}`}
              onChange={(e) => {
                this.setState({
                  againPwd:e.target.value
                })
                
              }}
            />
            <svg
              onClick={() => {
                const { changNewPwd2 } = this.state
                const change = !changNewPwd2
                this.state.test3
                  ? this.setState({ test3: false })
                  : this.setState({ test3: true })
                this.setState({ changNewPwd2: change })
                //  this.state.test ? this.setState.test(false) : this.setState.test(true)
              }}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="eye"
              className={eyeshow2}
              role="img"
              key="pwd3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
              ></path>
            </svg>
          </div>
        </label>

        <input
          type="submit"
          className="insPassword-form-button "
          value="修改密碼"
          
        />
      </form>
    </div>
    )
    }
}


export default InstrumentPassword