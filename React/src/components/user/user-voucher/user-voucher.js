import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
const MySwal = withReactContent(Swal)
const getUserInfo = () => {
  return JSON.parse(localStorage.getItem('coupon'))
}
var couponlist = ''
if (getUserInfo()) {
  let coupon = getUserInfo()
  if (coupon[0].coupon) {
    let now = new Date()
    const date = `${now.getFullYear()}-${now.getMonth() + 3}-${now.getDate()}`
    var couponlist = { coupon: coupon[0].coupon, coupondate: date }
    // console.log(date)
  }
}

export default class UserVoucher extends Component {
  constructor() {
    super()
    this.state = {
      count: [couponlist],
    }
  }

  render() {
    let { count } = this.state
    // console.log(count)
    let listPage = []
    let listPageRWD = []
    let countLenght = Math.ceil(count.length / 8)
    console.log(countLenght)

    for (let i = 1; i <= countLenght; i++) {
      console.log('i' + i)
      //記得在JSX中使用JS變數要用花括號包著
      listPageRWD.push(
        <>
          <a href="#">{i}</a>
        </>
      )
    }

    for (let i = 1; i <= countLenght; i++) {
      console.log('i' + i)
      //記得在JSX中使用JS變數要用花括號包著
      listPage.push(
        <>
          {' '}
          <button className="user-page-number">{i}</button>
        </>
      )
    }
    let page = []
    let couponList = []
    if (getUserInfo()[0].couponLocalStorage == 0) {
      console.log(getUserInfo()[0].couponLocalStorage)

      page.push(
        <>
          <div className="user-page">
            <Link className="user-page-Rarrow">
              <i className="fas fa-sort-up"></i>
            </Link>
            {listPage}
            <Link className="user-page-Larrow">
              <i className="fas fa-sort-up"></i>
            </Link>
          </div>

          <div className="userRwd-dropdown ">
            <button type="button" className="userRwd-dropbtn">
              頁數
              <i className="fas fa-sort-down"></i>
            </button>
            <div className="userRwd-dropdown-content">{listPageRWD}</div>
          </div>
        </>
      )
      couponList.push(
        <>
          <div className="userVoucher-item-card">
            <div className="userVoucher-item-card-img">
              <img src={require('../../../img/home_logo_方.png')} alt="" />
            </div>
            <div className="userVoucher-item-card-divider"></div>
            <p className="user-font-ch userVoucher-item-card-title">
              結帳金額減免200元
            </p>
            <p className=" userVoucher-item-card-num user-color-red">
              {this.state.count[0].coupon}
            </p>
            <p className="user-font-ch userVoucher-item-card-date">
              到期日期 {this.state.count[0].coupondate}
            </p>
            <button
              className="user-font-ch userVoucher-item-card-copy"
              onClick={() => {
                navigator.clipboard.writeText(this.state.count[0].coupon)
                MySwal.fire('複製成功', '', 'success')
              }}
            >
              複製折扣碼
            </button>
          </div>
        </>
      )
    } else if (!getUserInfo()) {
      page.push(<></>)
      couponList.push(
        <>
          <div class="alert alert-primary user-voucher-error " role="alert">
            沒有可使用的優惠卷！可至首頁玩小遊戲取得
          </div>
        </>
      )
    } else if (getUserInfo()[0].couponLocalStorage == 1) {
      page.push(
        <>
          <div className="user-page">
            <Link className="user-page-Rarrow">
              <i className="fas fa-sort-up"></i>
            </Link>
            {listPage}
            <Link className="user-page-Larrow">
              <i className="fas fa-sort-up"></i>
            </Link>
          </div>

          <div className="userRwd-dropdown ">
            <button type="button" className="userRwd-dropbtn">
              頁數
              <i className="fas fa-sort-down"></i>
            </button>
            <div className="userRwd-dropdown-content">{listPageRWD}</div>
          </div>
        </>)
      couponList.push(
        <>
          <div className="userVoucher-item-card userVoucher-item-card-gg-div">
            <p className="userVoucher-item-card-gg-p">已使用</p>
            <span className="userVoucher-item-card-gg">
              <div className="userVoucher-item-card-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div className="userVoucher-item-card-divider"></div>
              <p className="user-font-ch userVoucher-item-card-title">
                結帳金額減免200元
              </p>
              <p className=" userVoucher-item-card-num user-color-red">
                {this.state.count[0].coupon}
              </p>
              <p className="user-font-ch userVoucher-item-card-date">
                到期日期 {this.state.count[0].coupondate}
              </p>
              <button className="user-font-ch userVoucher-item-card-copy user-color-background-79">
                複製折扣碼
              </button>
            </span>
          </div>
        </>
      )
    }

    return (
      <>
        <div className="userVoucher-main">
          <h3 className="font-size-142rem userVoucher-top-titleName user-font-ch">
            我的優惠卷
          </h3>
          <form className="userVoucher-search" action="">
            <input
              className="userVoucher-search-input user-font-ch "
              placeholder="請輸入關鍵字"
              type="text"
            />

            <p className="user-font-ch userVoucher-search-404title"></p>

            <input
              className="userVoucher-search-button user-font-ch "
              type="button"
              value="送出"
            />
          </form>
          
          <hr className="userVoucher-divider" />
          <div className="userVoucher-item">{couponList}</div>
          {page}
        </div>
      </>
    )
  }
}
