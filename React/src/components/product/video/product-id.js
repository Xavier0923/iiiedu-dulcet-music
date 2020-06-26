import React, { useState, useEffect } from 'react'
import ProductLink from '../id/product-link'
import ProductIntro from '../id/product-video-intro'
import ProductDesciption from '../id/product-desciption'
import ProductMayLike from '../id/product-maylike'

function ProductId() {
  const productCategoryId = 'video'
  const productCategoryName = '線上影片'
  const productInstrumentId = 'violin'
  const productInstrumentName = '小提琴'
  const productName = '【提琴教室】小提琴-01'

  return (
    <>
      {}
      <div className="product-container">
        <div className="product-wrapper">
          <ProductLink
            productCategoryId={productCategoryId}
            productCategoryName={productCategoryName}
            productInstrumentId={productInstrumentId}
            productInstrumentName={productInstrumentName}
            productName={productName}
          />
          <div id="product-id-wrapper">
            <ProductIntro productName={productName} />
            <hr id="product-id-wrapper-hr" />
            <ProductDesciption />
          </div>
          <hr id="product-wrapper-hr" />
          <ProductMayLike />
        </div>
      </div>
    </>
  )
}

export default ProductId
