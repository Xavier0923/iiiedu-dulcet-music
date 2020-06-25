import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import Navbar from '../navbar/navbar';

class ManufacturerRegistered extends Component{
    state = {
        showPwd:false,
        showComPwd:false,
    }

    handleClick = () =>{
        const {showPwd} = this.state;
        const pwdToggle = !showPwd;
        this.setState({showPwd:pwdToggle});
    }

    handleClickCom = () =>{
        const {showComPwd} = this.state;
        const pwdToggle = !showComPwd;
        this.setState({showComPwd:pwdToggle});
    }

    render(){

        const {showPwd,showComPwd} = this.state;

        const showPwdDisplay = showPwd ? 'block':'none';
        const showPwdDisplay2 = showPwd ? 'none':'block';

        const showComPwdDisplay = showComPwd ? 'block':'none';
        const showComPwdDisplay2 = showComPwd ? 'none':'block';

        const pwdType = showPwd ? 'text' : 'password';
        const pwdComType = showComPwd ? 'text' : 'password';

        return(
            <>
            <Navbar />
            <div className="container facturer-register-wrap">
                <div className="facturer-register-body row">
                    <div className="facturer-register-txt col-md-12">
                        <h1 className="facturer-register-title">Dulcet Music</h1>
                        <h3 className="facturer-register-h3">廠商註冊</h3>
                    </div>
                </div>
                <div className="facturer-register-body row">
                <form onSubmit={this.handleSubmit} className="col-md-6 register-form-wrap">
                    <div className="form-group">
                        <label htmlFor="facturerRegisterName" className="col-md-12 control-label">廠商名稱</label>
                        <input type="text" name="facturerRegisterName" className="form-control col-md-12" id="facturerRegisterName" placeholder="請輸入姓名" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="facturerRegisterEmail" className="col-md-12 control-label">電子信箱</label>
                        <input type="email" name="facturerRegisterEmail" className="form-control col-md-12" id="facturerRegisterEmail" placeholder="請輸入電子信箱" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="facturerRegisterAddress" className="col-md-12 control-label">地址</label>
                        <input type="text"  name="facturerRegisterAddress" className="form-control col-md-12" id="facturerRegisterAddress" placeholder="請輸入地址" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="facturerRegisterPhon" className="col-md-12 control-label">公司電話</label>
                        <input type="text" name="facturerRegisterPhon" className="form-control col-md-12" id="facturerRegisterPhon" placeholder="請輸入公司電話" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="facturerRegisterPrincipal" className="col-md-12 control-label">負責人</label>
                        <input type="text"  name="facturerRegisterPrincipal" className="form-control col-md-12" id="facturerRegisterPrincipal" placeholder="請輸入負責人姓名" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="facturerRegisterMobile" className="col-md-12 control-label">負責人手機號碼</label>
                        <input type="text" name="facturerRegisterMobile" className="form-control col-md-12" id="facturerRegisterMobile" placeholder="請輸入負責人手機號碼" />
                    </div>
                    <div className="form-group facturer-pw-form">
                        <label htmlFor="facturerRegisterPassword" className="col-md-12 control-label">密碼</label>
                        <input type={pwdType}  name="facturerRegisterPassword" className="form-control" id="facturerRegisterPassword" placeholder="請輸入密碼" />
                        <div onClick={this.handleClick}>
                            <div className="facturer-register-eye" style={{display:showPwdDisplay}} >
                                <i className="fas fa-eye"></i>
                            </div>
                            <div className="facturer-register-eye" style={{display:showPwdDisplay2}}>
                            <i className="fas fa-eye-slash"></i>
                            </div>
                        </div>
                    </div>
                    <div className="form-group facturer-pwCom-form">
                        <label htmlFor="facturerRegisterPasswordComfirm" className="col-md-12 control-label">確認密碼</label>
                        <input type={pwdComType} name="facturerRegisterPasswordComfirm"  className="form-control" id="facturerRegisterPasswordComfirm" placeholder="請確認密碼" />
                        <div onClick={this.handleClickCom}>
                            <div className="facturer-register-eye" style={{display:showComPwdDisplay}} >
                                <i className="fas fa-eye"></i>
                            </div>
                            <div className="facturer-register-eye" style={{display:showComPwdDisplay2}}>
                            <i className="fas fa-eye-slash"></i>
                            </div>
                        </div>
                    </div>
                    <div className="form-group form-check col-md-12">
                        <input type="checkbox" className="register-check-input " id="userCheckMe" />
                        <label className="register-check-label" htmlFor="userCheckMe">我接受<Link to="">服務條款&隱私政策</Link></label>
                    </div>
                    <button type="button" className="facturer-register-btn">登入</button>
                </form>
            </div>
            </div>
            </>
        )
    }
}

export default ManufacturerRegistered;