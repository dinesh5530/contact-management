import React from 'react'

export default function SignUp() {
  return (
    <div>
        <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
                <div className="card shadow-2-strong card-registration" style={{borderradius: "15px"}}>
                <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                    <form>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="form-floating ">
                                <input type="text" id="firstName" className="form-control form-control-lg" />
                                <label className="form-label" for="firstName">Email </label>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="form-floating ">
                                <input type="password" id="password" className="form-control form-control-lg" />
                                <label className="form-label" for="password">password</label>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                    <div className="col-md-6 mb-4">
                            <div className="form-floating ">
                                <input type="secret" id="secret" className="form-control form-control-lg" />
                                <label className="form-label" for="secret">secret</label>
                            </div>
                        </div>
                    </div>
                   
                   
                   
                    <div className="mt-4 pt-2">
                        <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
</section>
    </div>
  )
}
