import React from "react";
export default function Login(){
    return(
        <>
    <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1670456438~exp=1670457038~hmac=84efe46ec8fef668dbc39af2c9742e193eae2354be3ad808ec4e594befc074cb"
                className="img-fluid" alt="cffcx"/>
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                <div className="form-outline mb-4">
                  <input type="email" id="form1Example13" className="form-control form-control-lg" />
                  <label className="form-label" for="form1Example13">Email address</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="password" id="form1Example23" className="form-control form-control-lg" />
                  <label className="form-label" for="form1Example23">Password</label>
                </div>
      
                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                    <label className="form-check-label" for="form1Example3"> Remember me </label>
                  </div>
                  <a href="/">Forgot password?</a>
                </div>
      
                <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
      
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>
    
                <a className="btn btn-primary btn-lg btn-block" id="b1" href="/"
                  role="button">
                  <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
                </a>
                <br/>
                  <br/>
                <a className="btn btn-primary btn-lg btn-block" id="b2" href="/"
                  role="button">
                  <i className="fab fa-twitter me-2"></i>Continue with Twitter</a>
                  <br/>
                  <br/>
                  <a className="btn btn-primary btn-lg btn-block" id="b3" href="/"
                  role="button">
                  <i className="fab fa-twitter me-2"></i>Continue with Google</a>
                
              </form>

          </div>
        </div>
        </div>
        
      </section>
    
      </>
      


    );
}