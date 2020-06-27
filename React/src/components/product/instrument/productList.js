import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { IoMdArrowDropright } from 'react-icons/io'
import { IoMdArrowDropleft } from 'react-icons/io'
import ProductPicture from '../product-picture'
import Card from './product-instrument-card'
import SideBar from '../product-sidebar'

function ProductList(props) {
  const [dataP, setDataP] = useState([])
  const [favArr, setFavArr] = useState([])

  async function getDataP() {
    fetch(`http://localhost:3030/product/instrument`, {
      method: 'POST',
      body: JSON.stringify(),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setDataP(json)
      })
  }
  async function getInstrumentFav() {
    fetch(`http://localhost:3030/product/instrument/favorite`, {
      method: 'POST',
      body: JSON.stringify(),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        const mm = json.map((a) => a.FavPId)
        setFavArr(mm)
      })
  }

  useEffect(() => {
    getInstrumentFav()
    getDataP()
  }, [])

  return (
    <>
      <SideBar productTitleId={props.productTitleId} />
      <div className="product-container">
        <ProductPicture
          productTitle={props.productTitle}
          productTitleId={props.productTitleId}
        />
        <div className="product-wrapper">
          <div className="product-control">
            <span>排序依</span>
            <select>
              <option>熱門度</option>
              <option>價格高到低</option>
              <option>價格低到高</option>
            </select>
            {/* <select className="product-sort" name="test">
              <option className="product-sort-option">依價格高到低</option>
              <option className="product-sort-option">依價格低到高</option>
            </select> */}
          </div>
          <div className="product-card-list">
            {dataP.map((c, index) => {
              return (
                <Card
                  // favorite={favorite}
                  // setFavorite={setFavorite}
                  PName={c.PName}
                  PPrice={c.PPrice.toString().replace(
                    /(\d)(?=(\d{3})+(?:.\d+)?$)/g,
                    '$1,'
                  )}
                  favArr={favArr}
                  setFavArr={setFavArr}
                  PId={c.PId}
                />
              )
            })}
          </div>

          {/* <Router> */}
          <div id="product-pages-list">
            <Link className="product-pages" to="">
              <IoMdArrowDropleft className="product-pages-arrows" />
            </Link>
            <Link className="product-pages" to="">
              1
            </Link>
            <Link className="product-pages" to="">
              2
            </Link>
            <Link className="product-pages" to="">
              3
            </Link>
            <Link className="product-pages" to="">
              <IoMdArrowDropright className="product-pages-arrows" />
            </Link>
          </div>
          {/* </Router> */}
        </div>
      </div>
    </>
  )
}

export default ProductList
