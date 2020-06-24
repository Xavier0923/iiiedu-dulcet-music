import React from 'react'


class InstrumentHome extends React.Component{

  
    render(){
    return(
      <div className="ins-home-page">
      <h3 className="font-size-142rem ins-home-title">廠商資料</h3>
        <div className="ins-home-img">
          <img src="" alt="" />
        </div>
        
        <hr className="ins-home-hr"/>
        
        <form className="ins-home-form" action="">
        <label className="ins-home-label " htmlFor="mid">
          <p>廠商編號</p>
          <div className="ins-home-inp ">
            <input className="ins-user-id" id="mid" type="text" value="0001" readOnly="readonly"/>
          </div>
        </label>

        <label className="ins-home-label " htmlFor="id">
          <p>廠商名稱</p>
          <div className="ins-home-inp">
            <input id="id" type="text" />
          </div>
        </label>

        <label className="ins-home-label " htmlFor="email">
          <p>電子信箱</p>
          <div className="ins-home-inp">
            <input  id="email" type="text" />
          </div>
        </label>

        <label className="ins-home-label " htmlFor="address">
          <p>廠商地址</p>
          <div className="ins-home-inp">
            <input id="address" type="text" />
          </div>
        </label>

        <label className="ins-home-label " htmlFor="name">
          <p>負責人</p>
          <div className="ins-home-inp">
            <input id="name" type="text" />
          </div>
        </label>

        <label className="ins-home-label " htmlFor="telephone">
          <p>廠商電話</p>
          <div className="ins-home-inp">
            <input id="telephone" type="text" />
          </div>
        </label>

        <label className="ins-home-label " htmlFor="phone">
          <p>手機號碼</p>
          <div className="ins-home-inp">
            <input id="phone" type="text" />
          </div>
        </label>

        <input type="submit" className="ins-home-form-btn" value="修改資料"/>
          
       
      </form>
    
  </div>
    )
    }
}

export default InstrumentHome