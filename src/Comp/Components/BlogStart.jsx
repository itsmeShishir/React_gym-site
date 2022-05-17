import React from 'react'

function BlogStart() {
  return (
    <>
      <div className="container pt-5">
        <div className="d-flex flex-column text-center mb-5">
            <h4 className="text-primary font-weight-bold">Our Blog</h4>
            <h4 className="display-4 font-weight-bold">Latest Article From Blog</h4>
        </div>
        <div className="row">
            <div className="col-lg-6 mb-5 blog-item">
                <img className="img-fluid mb-4" src="img/blog-1.jpg" alt="Image"/>
                <div className="d-flex align-items-center mb-4">
                    <div className="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white" style={{width: "80px", height:" 80px"}}>
                        <small>01</small>
                        <strong className="text-uppercase m-0 text-white">Jan</strong>
                        <small>2045</small>
                    </div>
                    <div className="pl-3">
                        <h3 className="font-weight-bold">Lorem ipsum dolor sit amet</h3>
                        <div className="d-flex">
                            <small className="mr-2 text-muted"><i className="fa fa-user"></i> Admin</small>
                            <small className="mr-2 text-muted"><i className="fa fa-folder"></i> Web Design</small>
                            <small className="mr-2 text-muted"><i className="fa fa-comments"></i> 15 Comments</small>
                        </div>
                    </div>
                </div>
                <p>Eos kasd et sea labore. Et sed amet magna elitr amet, stet et amet erat nonumy labore lorem ut eos, sed ut at tempor diam no. Kasd sit ea amet lorem et sea, ipsum sed dolor dolores sed dolore eirmod vero dolor sed kasd accusam</p>
                <a className="btn btn-outline-primary mt-2 px-3" href="">Read More <i className="fa fa-angle-right"></i></a>
            </div>
            <div className="col-lg-6 mb-5 blog-item">
                <img className="img-fluid mb-4" src="img/blog-2.jpg" alt="Image"/>
                <div className="d-flex align-items-center mb-4">
                    <div className="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white" style={{width: "80px", height:" 80px"}}>
                        <small>01</small>
                        <strong className="text-uppercase m-0 text-white">Jan</strong>
                        <small>2045</small>
                    </div>
                    <div className="pl-3">
                        <h3 className="font-weight-bold">Lorem ipsum dolor sit amet</h3>
                        <div className="d-flex">
                            <small className="mr-2 text-muted"><i className="fa fa-user"></i> Admin</small>
                            <small className="mr-2 text-muted"><i className="fa fa-folder"></i> Web Design</small>
                            <small className="mr-2 text-muted"><i className="fa fa-comments"></i> 15 Comments</small>
                        </div>
                    </div>
                </div>
                <p>Eos kasd et sea labore. Et sed amet magna elitr amet, stet et amet erat nonumy labore lorem ut eos, sed ut at tempor diam no. Kasd sit ea amet lorem et sea, ipsum sed dolor dolores sed dolore eirmod vero dolor sed kasd accusam</p>
                <a className="btn btn-outline-primary mt-2 px-3" href="">Read More <i className="fa fa-angle-right"></i></a>
            </div>
        </div>
    </div>
    </>
  )
}

export default BlogStart
