import React, { useState } from 'react';

function CartCheckout (props) {

  const [number, setNumber] = useState(0)
  const stock = 10

    return (
      <>
          <div className="cart-table">
              <ul className='cart-thead'>
                <li>選取</li>
                <li>商品圖片</li>
                <li>商品名稱</li>
                <li>商品單價</li>
                <li className="cart-rwd-noneed">數量</li>
                <li className="cart-rwd-noneed">商品小計</li>
                <li className="cart-rwd-noneed">刪除</li>
              </ul>
              <ul className="cart-order-category">
                <li colSpan="7">購買清單－課程</li>
              </ul>   
              <ul className="cart-product">
                <li className="cart-product-li"><input type="checkbox" id=""/></li>
                <li className="cart-product-li"><img src={require('../../img/cart/cart-violin-01.jpeg')}/></li>
                <li className="cart-product-li">春季吉他班</li>
                <li className="cart-product-li cart-english-font" style={{color:'var(--main-colorfb2)'}}>$1,700</li>
                <li className="cart-product-li-2">
                  <i 
                    className="cart-minusBtn fas fa-minus-circle"
                    onClick={() => {
                      if (number == 0) {
                        setNumber(0)
                      } else {
                        setNumber(number - 1)
                      }
                    }}
                  />
                  <div className="cart-number-input cart-english-font">{number}</div>
                  <i 
                    className="cart-plusBtn fas fa-plus-circle"
                    onClick={() => {
                      if (number == 0) {
                        setNumber(0)
                        console.log(number)
                      } else {
                        setNumber(number + 1)
                        console.log(number)
                      }
                    }}
                  />
                </li>
                <li className="cart-product-number cart-english-font" style={{color:'var(--main-colorfb2)'}}>$17,000</li>
                <li className="cart-trash-btn" onClick={()=>{}}><i className="far fa-trash-alt"></i></li>
              </ul>
              {/* <ul className="cart-product">
                <li><input type="checkbox" id=""/></li>
                <li><img src={require('../../img/cart/cart-violin-01.jpeg')}/></li>
                <li>春季吉他班</li>
                <li style={{color:'var(--main-colorfb2)'}}>$1,700</li>
                <li>
                  <i className="fas fa-minus-circle cart-minusBtn"></i>
                  <div className="cart-number">10</div>
                  <i className="fas fa-plus-circle cart-plusBtn"></i>
                </li>
                <li style={{color:'var(--main-colorfb2)'}}>$17,000</li>
                <li><div className="cart-btn" onClick={()=>{}}><i className="far fa-trash-alt"></i></div></li>
              </ul> */}
          </div>

          <div>
            <form className="cart-form" action="#" method="GET" encType="multipart/form-data">
              <div className="cart-buyer-info">
                  <h2>收件人資訊</h2>
                  <fieldset>
                    <label><input type="checkbox" id=""/> 同帳戶資料</label>
                    <div className="cart-input">
                      <label htmlFor="name">姓名</label>
                      <input className="" autoFocus autoComplete="off" id="name" type="text" name="name" placeholder=""/>
                    </div>
                    <div className="cart-input">
                      <label htmlFor="add">地址</label>
                      <input className="" id="add" type="text"/>
                    </div>
                    <div className="cart-input">
                      <label htmlFor="phone">手機號碼</label>
                      <input className="" id="phone" type="text"/>
                    </div>
                    <div className="cart-input">
                      <label htmlFor="email">電子信箱</label>
                      <input id="email" className="" type="text"/>
                    </div>
                  </fieldset>
              </div>
              <div className="cart-invoice">
                  <h2>統一發票</h2>
                  <fieldset>
                    <div>
                      <label><input type="radio" name="invoice" id=""/> 會員載具</label>
                      <span>中獎時我們會將發票寄送至您的收件地址</span>
                    </div>
                    <div>
                      <label><input type="radio" name="invoice" id=""/> 手機條碼載具</label>
                      <div className="cart-input1">
                        <label htmlFor="einvoice">載具號碼</label>
                        <input className="" id="einvoice" type="text"/>
                      </div>
                    </div>
                    <div style={{padding:'0 0 20px 0'}}>
                      <label><input type="radio" name="invoice" id=""/> 捐贈發票</label>
                      <span>提醒您，捐贈發票後無法變更成開立或索取紙本發票。</span>
                      <select>
                        <option value="台灣流浪兔保護協會">台灣流浪兔保護協會</option>
                        <option value="社團法人台灣愛兔協會">社團法人台灣愛兔協會</option>
                        <option value="財團法人陽光社會福利基金會">財團法人陽光社會福利基金會</option>
                      </select>
                    </div>
                    <div>
                      <label><input type="radio" name="invoice" id=""/> 公司戶</label>
                      <span>提醒您，公司戶發票一旦開立，不得任意更改或改為個人戶發票。</span>
                      <div className="cart-input1">
                        <label htmlFor="einvoice">統一編號</label>
                        <input className="" id="einvoice" type="text"/>
                      </div>
                      <div className="cart-input1">
                        <label htmlFor="einvoice">發票抬頭</label>
                        <input className="" id="einvoice" type="text"/>
                      </div>
                    </div>
                </fieldset>
              </div>
            </form>
          </div>

          <div className="cart-total">
            <div className="cart-discount">
              <label htmlFor="discount">折扣碼</label>
              <input className="" id="discount" type="text"/>
            </div>
            <div className="cart-total-right">
              <div>
                <span className="cart-total-title">合計</span>
                <span className="cart-total-number cart-english-font">$ 2,800</span>
              </div>
              <div style={{color:'var(--main-colorfb2)'}}>
                <span className="cart-total-title">折扣</span>
                <span className="cart-total-number cart-english-font">- $ 1,000</span>
              </div>
              <div>
                <span className="cart-total-title">總計</span>
                <span className="cart-total-number cart-english-font">$ 1,800</span>
              </div>
            </div>
          </div>
          <div className="cart-checkout-btn">
            <button type="">繼續購物</button>
            <button type="submit">下一步</button>
          </div>

      </>
    );
}

export default CartCheckout;
