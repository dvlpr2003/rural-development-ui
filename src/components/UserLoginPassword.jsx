import "./UserLoginPassword.css"


export default function ForgetPassword(){
    return(
        <>
        <div className="forget-password-c5-c7-main">
        <div className="forget-password-c5-c7">
            <form className="forget-password-c5-c7-form-1">
                <h2>Forget password</h2>
                <p className="forget-password-c5-c7-form-p">Enter your Mail</p>
                <input type="text" />
                <div className="form-btn-loader">
                <button className="form-password-btn">Send OTP</button>
                <div class="loader"></div>
                </div>
            </form>

            {/* <form className="forget-password-c5-c7-form-1 form-2">
                <p className="forget-password-c5-c7-form-p">Enter OTP</p>
                <input type="text" />
                <div className="form-btn-loader">
                <button className="form-password-btn">Verify</button>
                <div class="loader"></div>

                </div>
            </form> */}

        </div>
        </div>
        </>
    )
}