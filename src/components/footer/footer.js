import "./footer.scss"
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const footer = () => {


    return (

        <div>


            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-12 p-lg-5 text-center p1-s-style">
                        <h5 className="ps-lg-4">crypter</h5>
                        <div className="d-flex justify-content-end mobile_r_f">
                            <p className="mt-4 col-12 col-lg-8 col-md-12">The New Creative Economy.</p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-2 col-12 p-lg-5 f-p-style">
                        <h6>Crypter.</h6>
                        <p className="mt-4">Discover</p>
                        <p>Connect wallet</p>
                        <p>Create items</p>
                    </div>

                    <div className="col-lg-2 col-md-2 col-12 p-lg-5 f-p-style">
                        <h6>Info</h6>
                        <p className="mt-4">Download</p>
                        <p>Demos</p>
                        <p>Supports</p>
                    </div>

                    <div className="col-lg-4 col-md-4 col-12 p-lg-5 fs-p-style">
                        <h6 >Joins Newsletter</h6>
                        <p className="mt-4 pb-0 mb-0">Subscribe our Newsletter to get more free design.</p> <p>course and resource</p>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-addon">

                                </div>

                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />

                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="row text-center last-p">
                    <div className="col-6">
                        Copyright @ 2021 mm. All right reserved
                    </div>
                    <div className="col-6">
                        We use cookies for better services. Apply
                    </div>
                </div>
            </div>


        </div>
    )


}

export default footer;

