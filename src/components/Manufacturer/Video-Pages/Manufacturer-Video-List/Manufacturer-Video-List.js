import React from 'react'


class VideoList extends React.Component{
    render(){
    return(
        <div className="video-list-page">
            <h3 className="video-list-title font-size-142rem">影片列表</h3>
                <form className="video-list-search">
                    <input type="text" className="video-list-input" placeholder="請輸入關鍵字"/>
                    <button type="submit" className="video-list-search-btn">搜尋</button>
                    <p>請輸入關鍵字</p>
                </form>
            <div className="video-list-features">
                <div className="video-list-features-tool">
                    <input type="checkbox" className="video-list-all-checkbox"/>全選
                    <a href="">刪除</a>
                    <a href="">上架</a>
                    <a href="">下架</a>
                </div>
                <div className="video-list-add">
                    <button type="submit">新增影片</button>
                </div>
                <hr />
            </div>
            <div className="video-list-content">
                <div className="video-list-pro-content">
                    <div className="video-list-pro-state">
                        <p className="video-list-left-text font-size-185rem">商品編號 : 95279527</p>
                        <p className="video-list-right-text font-size-185rem">商品狀態 : 上架中</p>
                    </div>
                    <hr/>
                    <div className="video-list-pro">
                    <input type="checkbox" className="video-list-pro-checkbox"/>
                        <img></img>
                        <div className="video-list-pro-text">
                            <h3 className="font-size-142rem">從0開始學習吉他</h3>
                            <p className="font-size-1rem">類別 : 吉他</p>
                            <p className="font-size-1rem">長度 : 90分鐘</p>
                            <p className="font-size-1rem">編輯時間 : 2020/06/16</p>
                            <span className="video-list-pro-money font-size-1rem">價格</span>
                            <span className="video-list-pro-money font-size-114rem manufacturer-color-red manufacturer-font-eg">$999</span>
                        </div>
                        <div className="video-list-pro-btns">
                            <button type="submit">上架</button>
                            <button type="submit">下架</button>
                            <button type="submit">刪除</button>
                        </div>
                    </div>
                </div>
                <hr className="video-list-over-line"/>
            </div>
            <div className="video-list-content">
                <div className="video-list-pro-content">
                    <div className="video-list-pro-state">
                        <p className="video-list-left-text font-size-185rem">商品編號 : 95279527</p>
                        <p className="video-list-right-text font-size-185rem">商品狀態 : 上架中</p>
                    </div>
                    <hr/>
                    <div className="video-list-pro">
                    <input type="checkbox" className="video-list-pro-checkbox"/>
                        <img></img>
                        <div className="video-list-pro-text">
                            <h3 className="font-size-142rem">從0開始學習吉他</h3>
                            <p className="font-size-1rem">類別 : 吉他</p>
                            <p className="font-size-1rem">長度 : 90分鐘</p>
                            <p className="font-size-1rem">編輯時間 : 2020/06/16</p>
                            <span className="video-list-pro-money font-size-1rem">價格</span>
                            <span className="video-list-pro-money font-size-114rem manufacturer-color-red manufacturer-font-eg">$999</span>
                        </div>
                        <div className="video-list-pro-btns">
                            <button type="submit">上架</button>
                            <button type="submit">下架</button>
                            <button type="submit">刪除</button>
                        </div>
                    </div>
                </div>
                <hr className="video-list-over-line"/>
            </div>

            <div className="video-list-content">
                <div className="video-list-pro-content">
                    <div className="video-list-pro-state">
                        <p className="video-list-left-text font-size-185rem">商品編號 : 95279527</p>
                        <p className="video-list-right-text font-size-185rem">商品狀態 : 上架中</p>
                    </div>
                    <hr/>
                    <div className="video-list-pro">
                    <input type="checkbox" className="video-list-pro-checkbox"/>
                        <img></img>
                        <div className="video-list-pro-text">
                            <h3 className="font-size-142rem">從0開始學習吉他</h3>
                            <p className="font-size-1rem">類別 : 吉他</p>
                            <p className="font-size-1rem">長度 : 90分鐘</p>
                            <p className="font-size-1rem">編輯時間 : 2020/06/16</p>
                            <span className="video-list-pro-money font-size-1rem">價格</span>
                            <span className="video-list-pro-money font-size-114rem manufacturer-color-red manufacturer-font-eg">$999</span>
                        </div>
                        <div className="video-list-pro-btns">
                            <button type="submit">上架</button>
                            <button type="submit">下架</button>
                            <button type="submit">刪除</button>
                        </div>
                    </div>
                </div>
                <hr className="video-list-over-line"/>
            </div>

            <div className="video-list-content">
                <div className="video-list-pro-content">
                    <div className="video-list-pro-state">
                        <p className="video-list-left-text font-size-185rem">商品編號 : 95279527</p>
                        <p className="video-list-right-text font-size-185rem">商品狀態 : 上架中</p>
                    </div>
                    <hr/>
                    <div className="video-list-pro">
                    <input type="checkbox" className="video-list-pro-checkbox"/>
                        <img></img>
                        <div className="video-list-pro-text">
                            <h3 className="font-size-142rem">從0開始學習吉他</h3>
                            <p className="font-size-1rem">類別 : 吉他</p>
                            <p className="font-size-1rem">長度 : 90分鐘</p>
                            <p className="font-size-1rem">編輯時間 : 2020/06/16</p>
                            <span className="video-list-pro-money font-size-1rem">價格</span>
                            <span className="video-list-pro-money font-size-114rem manufacturer-color-red manufacturer-font-eg">$999</span>
                        </div>
                        <div className="video-list-pro-btns">
                            <button type="submit">上架</button>
                            <button type="submit">下架</button>
                            <button type="submit">刪除</button>
                        </div>
                    </div>
                </div>
                <hr className="video-list-over-line"/>
            </div>
            
           
            
        </div>
    )
    }
}

export default VideoList