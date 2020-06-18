import React, { Component } from 'react'

export default class UserPurchase extends Component {
  render() {
    return (
      <>
        <div class="UserPurchase-main">
          <h3 class="font-size-142rem UserPurchase-top-titleName user-font-ch">購買清單</h3>
          <div
            class="btn-group UserPurchase-main-buttons"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" class="btn btn-white UserPurchase-menu user-font-ch">
              全部
            </button>
            <button type="button" class="btn btn-white UserPurchase-menu user-font-ch">
              待付款
            </button>
            <button type="button" class="btn btn-white UserPurchase-menu user-font-ch">
              待出貨
            </button>
            <button type="button" class="btn btn-white UserPurchase-menu user-font-ch">
              待收貨
            </button>
            <button type="button" class="btn btn-white UserPurchase-menu user-font-ch">
              完成
            </button>
            <button type="button" class="btn btn-white UserPurchase-menu user-font-ch">
              取消
            </button>
          </div>
          <form class="UserPurchase-search" action="">
            <input
              class="UserPurchase-search-input user-font-ch"
              placeholder="請輸入關鍵字"
              type="text"
            />
            <input
              class="UserPurchase-search-button user-font-ch"
              type="button"
              value="送出"
            />
          </form>
          <p class="UserPurchase-search-404title user-font-ch">
            請輸入商品或訂單關鍵字
          </p>

          <hr class="UserPurchase-divider" />
          <div class="UserPurchase-order">
            <div class="UserPurchase-order-title">
              <p class="UserPurchase-order-number user-font-ch">訂單編號：001</p>
              <p class="UserPurchase-order-status user-font-ch">訂單狀態：完成</p>
            </div>
            <hr class="UserPurchase-order-divider" />
            <div class="UserPurchase-order-item">
              <div class="UserPurchase-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="UserPurchase-order-item-text">
                <p class="UserPurchase-order-item-text-name user-font-ch">
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p class="UserPurchase-order-item-text-specification user-font-ch">
                  分類：樂器&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;數量：2
                </p>
                <p class="UserPurchase-order-item-text-number user-font-ch">
                  廠商編號：95279527
                </p>
                <div class="d-flex UserPurchase-order-item-text-money">
                  <p class="UserPurchase-order-item-text-money-1 user-font-ch">價格</p>{' '}
                  <p class="UserPurchase-order-item-text-money-2 user-font-eg user-color-red">$</p>
                  <p class="UserPurchase-order-item-text-money-3 user-font-eg user-color-red">999</p>{' '}
                </div>
              </div>
            </div>
            <div class="UserPurchase-order-item">
              <div class="UserPurchase-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="UserPurchase-order-item-text">
                <p class="UserPurchase-order-item-text-name user-font-ch">
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p class="UserPurchase-order-item-text-specification user-font-ch">
                  分類：樂器&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;數量：2
                </p>
                <p class="UserPurchase-order-item-text-number user-font-ch">
                  廠商編號：95279527
                </p>
                <div class="d-flex UserPurchase-order-item-text-money">
                  <p class="UserPurchase-order-item-text-money-1 user-font-ch">價格</p>{' '}
                  <p class="UserPurchase-order-item-text-money-2 user-font-eg user-color-red">$</p>
                  <p class="UserPurchase-order-item-text-money-3 user-font-eg user-color-red ">999</p>{' '}
                </div>
              </div>
            </div>
            <div class="UserPurchase-order-total">
              <p class="UserPurchase-order-total-1 user-font-ch">訂單總價</p>{' '}
              <p class="UserPurchase-order-total-2 user-font-eg user-color-red">$</p>
              <p class="UserPurchase-order-total-3 user-font-eg user-color-red">999</p>{' '}
            </div>
            <hr class="UserPurchase-item-divider" />
          </div>
          <div class="UserPurchase-order">
            <div class="UserPurchase-order-title">
              <p class="UserPurchase-order-number user-font-ch">訂單編號：001</p>
              <p class="UserPurchase-order-status user-font-ch">訂單狀態：完成</p>
            </div>
            <hr class="UserPurchase-order-divider" />
            <div class="UserPurchase-order-item">
              <div class="UserPurchase-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="UserPurchase-order-item-text">
                <p class="UserPurchase-order-item-text-name user-font-ch" >
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p class="UserPurchase-order-item-text-specification user-font-ch">
                  分類：樂器&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;數量：2
                </p>
                <p class="UserPurchase-order-item-text-number user-font-ch">
                  廠商編號：95279527
                </p>
                <div class="d-flex UserPurchase-order-item-text-money">
                  <p class="UserPurchase-order-item-text-money-1 user-font-ch">價格</p>{' '}
                  <p class="UserPurchase-order-item-text-money-2 user-font-eg user-color-red">$</p>
                  <p class="UserPurchase-order-item-text-money-3 user-font-eg user-color-red">999</p>{' '}
                </div>
              </div>
            </div>
            <div class="UserPurchase-order-item">
              <div class="UserPurchase-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="UserPurchase-order-item-text">
                <p class="UserPurchase-order-item-text-name user-font-ch">
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p class="UserPurchase-order-item-text-specification user-font-ch">
                  分類：樂器&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;數量：2
                </p>
                <p class="UserPurchase-order-item-text-number user-font-ch">
                  廠商編號：95279527
                </p>
                <div class="d-flex UserPurchase-order-item-text-money">
                  <p class="UserPurchase-order-item-text-money-1 user-font-ch">價格</p>{' '}
                  <p class="UserPurchase-order-item-text-money-2 user-font-eg user-color-red">$</p>
                  <p class="UserPurchase-order-item-text-money-3 user-font-eg user-color-red">999</p>{' '}
                </div>
              </div>
            </div>
            <div class="UserPurchase-order-total">
              <p class="UserPurchase-order-total-1 user-font-ch">訂單總價</p>{' '}
              <p class="UserPurchase-order-total-2 user-font-eg user-color-red">$</p>
              <p class="UserPurchase-order-total-3 user-font-eg user-color-red">999</p>{' '}
            </div>
            <hr class="UserPurchase-item-divider" />
          </div>
           </div>
        
      </>
    )
  }
}
