import React from 'react'

const LOG = () => {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n        *{\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n        }\n        body{\n            font-family: "Open Sans";\n            color: #fff;\n        }\n        section{\n            background: url("https://drive.google.com/uc?id=17ddqpUtCZetjt5jM2kbGmXouOq1n9Hal");\n            height: 100vh;\n            width: 100%;\n            background-size: cover;\n            background-position: center center;\n        }\n        .form-container{\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%,-50%);\n            width: 380px;\n            padding: 50px 30px;\n            border-radius: 10px;\n            box-shadow:7px 7px 60px #000;\n        }\n        h1{\n            color: #ffffff;\n            font-size: 2em;\n            text-transform: uppercase;\n            text-align: center;\n            margin-bottom: 2rem;\n        }\n        .control input{\n            font-size: 16px;\n            display: block;\n            width: 100%;\n            color:#000;\n            background: #ddd;\n            outline: none;\n            border: none;\n            margin: 1em 0;\n            border-radius: 30px;\n            padding: 15px;\n\n        }         \n        .control .btn{\n            color: #fff;\n            text-transform: uppercase;\n            background: crimson;\n            opacity: .7;\n            transition:opacity .3s ease;\n        }\n        .btn:focus{\n            opacity: 1;\n        }\n        p{\n            text-align: center;\n        }\n        a{\n            text-decoration: none;\n            color: #fff;\n            opacity: .7;\n        }\n        a:hover{\n            opacity: 1;\n        }\n    '
    }}
  />
  <section>
    <div className="form-container">
      <div className="page1_class1" id="page1_id1">
        <h1>Login</h1>
        <div className="control">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="control">
          <label htmlFor="psw">Password</label>
          <input type="password" id="password" />
        </div>
        <span>
          <input type="checkbox" /> Remember me
        </span>
        <div className="control">
          <input
            type="submit"
            className="btn"
            defaultValue="Login"
            onclick="LoginUser()"
          />
          <span id="errorMessage" style={{ color: "red" }} />
        </div>
        <p>
          If you don't have an account
          <br />
          <a href="#">Register here!</a>
        </p>
      </div>
    </div>
  </section>
</>


    </div>
  )
}

export default LOG
