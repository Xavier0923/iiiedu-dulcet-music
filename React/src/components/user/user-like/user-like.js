import React, { Component } from 'react'



export default class UserLike extends Component {
  state = {
    likeData: [],
  }
  render() {
    return (
      <>{}
        <div className="UserLike-main">
          <h3 className="font-size-142rem UserLike-top-titleName user-font-ch">
            我的最愛
          </h3>

          <form className="UserLike-search" action="">
            <input
              className="UserLike-search-input user-font-ch"
              placeholder="請輸入關鍵字"
              type="text"
            />

            <p className="user-font-ch UserLike-search-404title user-font-ch">
              請輸入商品或訂單關鍵字
            </p>

            <input
              className="UserLike-search-button user-font-ch"
              type="button"
              value="送出"
            />
          </form>
          <hr className="UserLike-divider" />

          <div className="UserLike-order">
            <div className="UserLike-order-item">
              <div className="UserLike-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div className="UserLike-order-item-text">
                <p className="user-font-ch UserLike-order-item-text-name user-font-ch">
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p className="user-font-ch UserLike-order-item-text-specification">
                  分類：樂器
                </p>

                <div className="d-flex UserLike-order-item-text-money">
                  <p className="user-font-ch UserLike-order-item-text-money-1">
                    價格
                  </p>{' '}
                  <p className="user-color-red UserLike-order-item-text-money-2 user-font-eg">
                    $
                  </p>
                  <p className="user-color-red UserLike-order-item-text-money-3 user-font-eg">
                    999
                  </p>{' '}
                </div>
              </div>
              <button
                type="button"
                className="UserLike-order-item-button user-font-ch "
              >
                前往商品頁面
              </button>
            </div>
            <hr className="UserLike-order-divider" />
          </div>



          <div className="UserLike-order">
            <div className="UserLike-order-item">
              <div className="UserLike-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div className="UserLike-order-item-text">
                <p className="user-font-ch UserLike-order-item-text-name user-font-ch">
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p className="user-font-ch UserLike-order-item-text-specification">
                  分類：樂器
                </p>

                <div className="d-flex UserLike-order-item-text-money">
                  <p className="user-font-ch UserLike-order-item-text-money-1">
                    價格
                  </p>{' '}
                  <p className="user-color-red UserLike-order-item-text-money-2 user-font-eg">
                    $
                  </p>
                  <p className="user-color-red UserLike-order-item-text-money-3 user-font-eg">
                    999
                  </p>{' '}
                </div>
              </div>
              <button
                type="button"
                className="UserLike-order-item-button user-font-ch"
              >
                前往商品頁面
              </button>
            </div>

            <hr className="UserLike-order-divider" />
          </div>
          
          
         
          <div className="UserLike-order">
            <div className="UserLike-order-item">
              <div className="UserLike-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div className="UserLike-order-item-text">
                <p className="user-font-ch UserLike-order-item-text-name user-font-ch">
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p className="user-font-ch UserLike-order-item-text-specification">
                  分類：樂器
                </p>

                <div className="d-flex UserLike-order-item-text-money">
                  <p className="user-font-ch UserLike-order-item-text-money-1">
                    價格
                  </p>{' '}
                  <p className="user-color-red UserLike-order-item-text-money-2 user-font-eg">
                    $
                  </p>
                  <p className="user-color-red UserLike-order-item-text-money-3 user-font-eg">
                    999
                  </p>{' '}
                </div>
              </div>
              <button
                type="button"
                className="UserLike-order-item-button user-font-ch"
              >
                前往商品頁面
              </button>
            </div>

            <hr className="UserLike-order-divider" />
          </div>
         
          <div className="UserLike-order">
            <div className="UserLike-order-item">
              <div className="UserLike-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div className="UserLike-order-item-text">
                <p className="user-font-ch UserLike-order-item-text-name user-font-ch">
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p className="user-font-ch UserLike-order-item-text-specification">
                  分類：樂器
                </p>

                <div className="d-flex UserLike-order-item-text-money">
                  <p className="user-font-ch UserLike-order-item-text-money-1">
                    價格
                  </p>{' '}
                  <p className="user-color-red UserLike-order-item-text-money-2 user-font-eg">
                    $
                  </p>
                  <p className="user-color-red UserLike-order-item-text-money-3 user-font-eg">
                    999
                  </p>{' '}
                </div>
              </div>
              <button
                type="button"
                className="UserLike-order-item-button user-font-ch"
              >
                前往商品頁面
              </button>
            </div>

            <hr className="UserLike-order-divider" />
          </div>
    
          <div className="UserLike-order">
            <div className="UserLike-order-item">
              <div className="UserLike-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div className="UserLike-order-item-text">
                <p className="user-font-ch UserLike-order-item-text-name user-font-ch">
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p className="user-font-ch UserLike-order-item-text-specification">
                  分類：樂器
                </p>

                <div className="d-flex UserLike-order-item-text-money">
                  <p className="user-font-ch UserLike-order-item-text-money-1">
                    價格
                  </p>{' '}
                  <p className="user-color-red UserLike-order-item-text-money-2 user-font-eg">
                    $
                  </p>
                  <p className="user-color-red UserLike-order-item-text-money-3 user-font-eg">
                    999
                  </p>{' '}
                </div>
              </div>
              <button
                type="button"
                className="UserLike-order-item-button user-font-ch"
              >
                前往商品頁面
              </button>
            </div>

            <hr className="UserLike-order-divider" />
          </div>
  
          <div className="UserLike-order">
            <div className="UserLike-order-item">
              <div className="UserLike-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div className="UserLike-order-item-text">
                <p className="user-font-ch UserLike-order-item-text-name user-font-ch">
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p className="user-font-ch UserLike-order-item-text-specification">
                  分類：樂器
                </p>

                <div className="d-flex UserLike-order-item-text-money">
                  <p className="user-font-ch UserLike-order-item-text-money-1">
                    價格
                  </p>{' '}
                  <p className="user-color-red UserLike-order-item-text-money-2 user-font-eg">
                    $
                  </p>
                  <p className="user-color-red UserLike-order-item-text-money-3 user-font-eg">
                    999
                  </p>{' '}
                </div>
              </div>
              <button
                type="button"
                className="UserLike-order-item-button user-font-ch"
              >
                前往商品頁面
              </button>
            </div>
            <hr className="UserLike-order-divider" />
          </div>

          {/* 電腦page */}

          <div className="user-page">
            <a className="user-page-Rarrow">
              <i className="fas fa-sort-up"></i>
            </a>
            <button className="user-page-number">1</button>
            <button className="user-page-number">2</button>
            <button className="user-page-number">3</button>
            <button className="user-page-number">4</button>
            <button className="user-page-x">...</button>
            <a className="user-page-Larrow">
              <i className="fas fa-sort-up"></i>
            </a>
          </div>
          {/* 手機版page */}
          <div className="userRwd-dropdown ">
            <button type="button" className="userRwd-dropbtn">
              頁數
              <i className="fas fa-sort-down"></i>
            </button>
            <div className="userRwd-dropdown-content">
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
              <a href="#">6</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}
