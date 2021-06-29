import React from 'react';
import FacebookLogin from 'react-facebook-login';
import App from '../../App';


function LoginForm(props) {
   
    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount,
        setHasAccount, emailError, passwordError
    } = props;

        // const responseFacebook = (response) => {
        //     console.log(response);  
        // }   
    return (
        
        <div>
            <section className='login'>
                <div className="loginContainer">
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    {hasAccount ? (
                        <h2 className="login-title">Login</h2>
                    ) : (
                        <h2 className="login-title">Create Account</h2>
                    )}

                    {hasAccount ? (
                        <>
                            <label>Username</label>
                            <input
                                type='text'
                                autoFocus
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <p className="errorMsg">{emailError}</p>
                            <label>Password</label>
                            <input
                                type='password'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <p className="errorMsg">{passwordError}</p>
                        </>
                    ) : (
                        <>
                            <label>Name</label>
                            <input
                                type='text'
                     
                            />
                            <label>Username</label>
                            <input
                                type='text'
                                autoFocus
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <p className="errorMsg">{emailError}</p>
                            <label>Password</label>
                            <input
                                type='password'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <p className="errorMsg">{passwordError}</p>
                        </>
                    )}
                    <div className="btnContainer">
                        {hasAccount ? (
                            <>
                                <button onClick={handleLogin}>Sign in</button>
                                {/* <FacebookLogin
                                    appId="700766744116639"
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    callback={responseFacebook} 
                                    />
                                    */}
                                <p>Dont's have an account ?
                                    <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>

                                </p>
                            </>
                        ) : (
                            <>
                                <button onClick={handleSignup}>Sign up</button>
                                <p>Have an account ?
                                    <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LoginForm
