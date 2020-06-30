import React ,{ Fragment, useState, useEffect } from 'react';

function CartDeliverInfo (props) {
  const { 
    user, 
    checkstate,  
    checkcallback, 
    ReceivingName, 
    setReceivingName, 
    ReceivingAddress, 
    setReceivingAddress, 
    ReceivingPhone, 
    setReceivingPhone,  
    ReceivingEmail, 
    setReceivingEmail 
  } = props.allProps;  
  // console.log(user)

  // ** 下方coding已移至cart-app.js(模組化) **
  // checkbox勾選狀態，預設為不勾選
  // const [checkstate, setcheckstate] = useState(false);
  // checkcallback函式：點擊時切換checkbox勾選狀態
  // const checkcallback = (e) =>{
  //   // console.log(e.checked)
  //   setcheckstate(e.checked)
  // }
  // console.log(checkstate);
  // 根據checkbox勾選狀態切換收件人資訊畫面
  // useEffect(()=>{
  //   checkcallback(checkstate)
  // },[])

 
    return(
        <Fragment> 
                 
            <div className="cart-buyer-info">
                  <h2>收件人資訊</h2>
                  <fieldset>
                    <label><input type="checkbox" id="receivingInfo" onClick={(e)=>{ checkcallback(e.target) }}/> 同帳戶資料</label>

                        {/* 根據checkbox勾選狀態切換收件人資訊畫面 */}

                        {checkstate ? (

                         <>

                          {/* 勾選同帳戶資料時，欄位自動填入會員資料 */}

                          <div className="cart-input">
                              <label htmlFor="name">姓名</label>
                              <input id="name" type="text" name="name" value={user["userName"]} />
                              {/* <input id="name" type="text" name="name" value="1111111111111" /> */}
                          </div>
                          <div className="cart-input">
                              <label htmlFor="address">地址</label>
                              <input id="address" type="text" value={user["userAddress"]} />
                          </div>
                          <div className="cart-input">
                              <label htmlFor="phone">手機號碼</label>
                              <input id="phone" type="text" value={user["userPhone"]} />
                          </div>
                          <div className="cart-input">
                              <label htmlFor="email">電子信箱</label>
                              <input id="email" type="text" value={user["userMail"]} />
                          </div>  
                         </>

                        ):(
                          
                          <>

                            {/* 未勾選同帳戶資料時，表單欄位抓取會員自行填寫內容 */}

                            <div className="cart-input">
                              <label htmlFor="name">姓名</label>
                              <input id="name" type="text" name="name" value={ReceivingName}
                                onChange={ (e)=>{ setReceivingName(e.target.value) }}
                              />
                            </div>
                            <div className="cart-input">
                              <label htmlFor="address">地址</label>
                              <input id="address" type="text" name="address" value={ReceivingAddress}
                                onChange={ (e)=>{ setReceivingAddress(e.target.value) }}
                              />
                            </div>
                            <div className="cart-input">
                              <label htmlFor="phone">手機號碼</label>
                              <input id="phone" type="text"  name="phone" value={ReceivingPhone}
                                onChange={ (e)=>{ setReceivingPhone(e.target.value) }}
                              />
                            </div>
                            <div className="cart-input">
                              <label htmlFor="email">電子信箱</label>
                              <input id="email" type="text"  name="email" value={ReceivingEmail}
                                onChange={ (e)=>{ setReceivingEmail(e.target.value) }}
                              />
                            </div>
                          </>

                        )}                        
                           
                  </fieldset>
              </div>
        </Fragment>
    )
}

export default CartDeliverInfo;