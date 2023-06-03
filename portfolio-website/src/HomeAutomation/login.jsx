function Login(props){
    return <div className="login">
        <span className="login-form">
            <div className="login-field-wrapper">
                Username
                <input className="login-field" type="text" id="username"/>
            </div>
            <div className="login-field-wrapper">
                Password
                <input className="login-field" type="text" id="password"/>
            </div>
            <button className="toggle-button" onClick={()=>{
                const username=document.getElementById("username").value;
                const password=document.getElementById("password").value;
                fetch("/verify",{
                    headers: {
                        "Content-Type": "application/json",
                      },
                    method: "PUT",
                    body: JSON.stringify({
                        username:username,
                        password:password
                    })
                }).then(v=>{
                    props.sli(v.status === 200)
                });
            }}>Sign In</button>
        </span>
    </div>
}
export default Login