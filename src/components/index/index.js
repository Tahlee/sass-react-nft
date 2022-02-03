import "./index.scss"
import Moon from "../../assets/images/fuu-j-Lo7venJ_ywM-unsplash 1.svg"
import First from "../../assets/images/images.jfif"
import Second from "../../assets/images/download.jfif"
import Img from "../../assets/images/jakob-owens-BqSACXqDbBU-unsplash 1.png"
import Img1 from "../../assets/images/michael-dziedzic-bOZRVWwbW9Y-unsplash 1.png"
import { MdArrowDropDown } from "react-icons/md";
import { BsPlusSquare } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineTrophy } from "react-icons/ai";
import two from "../../assets/images/michael-dziedzic-ir5gC4hlqT0-unsplash 1.png"
import Img3 from "../../assets/images/fly-d-FyN1SrqrTzQ-unsplash 1.png"
import One from "../../assets/images/fuu-j-Lo7venJ_ywM-unsplash 1.png";
import Overlay from "../../assets/images/Overlay.png";
import One1 from "../../assets/images/1.png";
import Two2 from "../../assets/images/2.png";
import Three3 from "../../assets/images/3.png";
import Logo1 from "../../assets/images/pexels-melvin-buezo-2733938 1.png";
import Logo2 from "../../assets/images/clark-van-der-beken-1KBCgRD8BDc-unsplash 1.png";
import Logo3 from "../../assets/images/gustavo-centurion-O6fs4ablxw8-unsplash 1.png";
import Crypto from "../../assets/images/crypto.jfif";




const index = () => {

    return (

        <div>
            <div className="container mt-5">
                <div className="row mt-3">
                    <div className="col-12 text-center section_1">
                        <p className="pb-0 mb-0">Create, explore, & collect digital art NFTs.</p>
                        <h1>The new creative economy.</h1>
                        <button className="btn mt-4 ">Start your search</button>


                    </div>
                </div>

            </div>
            <div className="container mt-5">
                <div className="row mt-5 section_2">
                    <div className="col-lg-6 col-md-6 col-12 ">
                        {<img src={Moon} />}

                    </div>

                    <div className="col-lg-6 col-md-6 col-12 mobile-r">
                        <h1>the creator network</h1>
                        <div className="row img-row d-flex justify-content-center">
                            <div className="col-lg-4 col-md-6 col-6 d-flex">
                                <img src={First} className="rounded-circle" /><p>&nbsp; Creator<br></br>&nbsp; <b>Encro Cocil</b></p>

                            </div>


                            <div className="col-lg-4 col-md-6 col-6 d-flex">
                                <img src={Second} className="rounded-circle" /><p>&nbsp; Creator<br></br>&nbsp; <b>Encro Cocil</b></p>

                            </div>
                        </div>

                        <div className="card c-card mt-4 ">
                            <div className="card-body text-center">
                                <p className="card-title ">current bids</p>
                                <h2 className=" mb-2 text-dark eth"><b>1.00 ETH</b></h2>
                                <p className="card-text text-center text-muted "><b>$3,618.36</b></p>
                                <p className="card-text text-center ending">Auction ending in</p>
                                <a href="#" class="card-link fs-2"><b>19</b></a>
                                <a href="#" class="card-link fs-2"><b>24</b> </a>
                                <a href="#" class="card-link fs-2"><b>19</b></a><br></br>
                                <a href="#" class="card-link fs-5 text-muted">Hrs</a>
                                <a href="#" class="card-link fs-5 text-muted">Hrs </a>
                                <a href="#" class="card-link fs-5 text-muted">Hrs</a>

                            </div>

                        </div>
                        <div class="row text-center">
                            <div className="col-12">
                                <button class="btn mt-3 bid-btn">Place a bid</button><br></br>
                                <button class="btn mt-3 view-btn">View item</button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 ">
                <div className="row mt-3">
                    <div className="col-lg-5 col-md-5 col-12 seting p-lg-0 m-lg-0 pt-3">
                        {<img src={Img} />}
                        <div className="row mt-3">
                            <div className="col-6 col-md-7 col-lg-6 d-flex img-s">
                                <img src={Second} className="rounded-circle mt-2" /><p>&nbsp; <b><span className="font-m-set">The future of ETH</span></b><br></br>&nbsp; 18 in stock</p>
                            </div>
                            <div className="col-6 col-md-5 col-lg-6">
                                <p className="text-muted pb-0 mb-0 mt-1">Heighest Bid</p>
                                <button class="btn btn-style">1.125 Eth</button>


                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="row mt-3">
                            <div className="col-6 img-set">
                                <img src={Img1} />
                            </div>

                            <div className="col-6 section_3">
                                <h6>ETH never die</h6><br></br>
                                <div className="d-flex tab-img">
                                    <img src={First} className="rounded-circle" /><p>&nbsp; <button class="btn btn-style">0.27 Eth</button> &nbsp; <span className="text-muted font-m-set"> 1 of 12</span></p><br></br>
                                </div>

                                <button className="btn bid-style mt-lg-1 ">Place a bid</button>

                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col-6 img-set">
                                <img src={Img1} />
                            </div>

                            <div className="col-6 section_3">
                                <h6>ETH never die</h6><br></br>
                                <div className="d-flex tab-img">
                                    <img src={First} className="rounded-circle" /><p>&nbsp; <button class="btn btn-style">0.27 Eth</button> &nbsp; <span className="text-muted font-m-set"> 1 of 12</span></p><br></br>
                                </div>

                                <button className="btn bid-style-1 mt-lg-1 ">Place a bid</button>

                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col-6 img-set">
                                <img src={Img1} />
                            </div>

                            <div className="col-6 section_3">
                                <h6>ETH never die</h6><br></br>
                                <div className="d-flex tab-img">
                                    <img src={First} className="rounded-circle" /><p>&nbsp; <button class="btn btn-style">0.27 Eth</button> &nbsp; <span className="text-muted font-m-set"> 1 of 12</span></p><br></br>
                                </div>

                                <button className="btn bid-style mt-lg-1 ">Place a bid</button>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-3 col-md-3 col-12  section_4 ">
                        <p className="text-muted text-center pb-0 mb-0 mt-3 ">Last Upload from creator</p><br></br>
                        <div className="d-flex justify-content-center p-3 tab-set">
                            <img src={Second} className="rounded-circle" /><p>&nbsp; Payton Harries<br></br>&nbsp; <b>2.456</b> <span class="text-muted">Eth</span></p>
                        </div>

                        <div className="d-flex justify-content-center p-3 tab-set">
                            <img src={Second} className="rounded-circle" /><p>&nbsp; Payton Harries<br></br>&nbsp; <b>2.456</b> <span class="text-muted">Eth</span></p>
                        </div>

                        <div className="d-flex justify-content-center p-3 tab-set">
                            <img src={Second} className="rounded-circle" /><p>&nbsp; Payton Harries<br></br>&nbsp; <b>2.456</b> <span class="text-muted">Eth</span></p>
                        </div>

                        <div className="d-flex justify-content-center p-3 tab-set">
                            <img src={Second} className="rounded-circle" /><p>&nbsp; Payton Harries<br></br>&nbsp; <b>2.456</b> <span class="text-muted">Eth</span></p>
                        </div>

                        <button className="btn discover-btn ms-5">Discover more</button>





                    </div>
                </div>
            </div>

            <div className="container mt-5 bg-light pb-5">
                <div className="row ">
                    <div className="col-5 col-lg-6 col-md-6 mt-5">
                        <p className="text-muted pb-0 mb-0"><b>Popular</b></p>
                        <h3>Sellers  <MdArrowDropDown /></h3>
                    </div>

                    <div className="col-lg-6 col-md-6 col-7 mt-5 d-flex justify-content-end ">
                        <select class="form-select form-select mb-3 w-50" aria-label=".form-select-lg example">
                            <option selected>Today</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>


                    </div>
                </div>

                <div className="row mt-5 d-flex justify-content-center">

                    <div className="col-lg-2  col-md-4 col-12">
                        <div class="card my-card">

                            <div className="row">
                                <div className="col-6">
                                    <a href="#" class="card-link ms-3"><button type="button" class="btn btn-r  btn-primary btn-sm pt-0 pb-0"><AiOutlineTrophy /> #1</button></a>
                                </div>
                                <div className="col-6 d-flex justify-content-center">
                                    <a href="#" class="card-link text-muted"><BsPlusSquare /></a>
                                    <a href="#" class="card-link text-muted"><BsArrowUpRight /></a>
                                </div>
                            </div>

                            <div class="card-body">
                                <div className="d-flex justify-content-center">
                                    <img class="card-img-top rounded-circle mt-3" src={Second} alt="Card image cap" />
                                </div>
                                <h6 class="card-subtitle mb-2  text-center mt-3"><b>Edd Harris</b></h6>
                                <p class="card-text text-center"><b>2.431</b> <span className="text-muted">ETH</span></p>

                            </div>
                        </div>
                    </div>


                    <div className="col-lg-2 col-md-4 col-12">
                        <div className="card my-card card-shadow">

                            <div className="row">
                                <div className="col-6">
                                    <a href="#" class="card-link ms-3"><button type="button" class="btn btn-r btn-color btn-primary btn-sm pt-0 pb-0"><AiOutlineTrophy /> #2</button></a>
                                </div>
                                <div className="col-6 d-flex justify-content-center">
                                    <a href="#" class="card-link text-muted"><BsPlusSquare /></a>
                                    <a href="#" class="card-link text-muted"><BsArrowUpRight /></a>
                                </div>
                            </div>

                            <div class="card-body">
                                <div className="d-flex justify-content-center">
                                    <img class="card-img-top rounded-circle mt-3" src={Second} alt="Card image cap" />
                                </div>
                                <h6 class="card-subtitle mb-2  text-center mt-3"><b>Edd Harris</b></h6>
                                <p class="card-text text-center"><b>2.431</b> <span className="text-muted">ETH</span></p>

                            </div>
                        </div>
                    </div>


                    <div className="col-lg-2 col-md-4 col-12">
                        <div className="card my-card">

                            <div className="row">
                                <div className="col-6">
                                    <a href="#" class="card-link ms-3"><button type="button" class="btn btn-r  btn-success btn-sm pt-0 pb-0"><AiOutlineTrophy /> #3</button></a>
                                </div>
                                <div className="col-6 d-flex justify-content-center">
                                    <a href="#" class="card-link text-muted"><BsPlusSquare /></a>
                                    <a href="#" class="card-link text-muted"><BsArrowUpRight /></a>
                                </div>
                            </div>

                            <div class="card-body">
                                <div className="d-flex justify-content-center">
                                    <img class="card-img-top rounded-circle mt-3" src={Second} alt="Card image cap" />
                                </div>
                                <h6 class="card-subtitle mb-2  text-center mt-3"><b>Edd Harris</b></h6>
                                <p class="card-text text-center"><b>2.431</b> <span className="text-muted">ETH</span></p>

                            </div>
                        </div>
                    </div>


                    <div className="col-lg-2 col-md-4 col-12 tab-m">
                        <div className="card my-card">

                            <div className="row">
                                <div className="col-6">
                                    <a href="#" class="card-link ms-3"><button type="button" class="btn  btn-r btn-dark btn-sm pt-0 pb-0"><AiOutlineTrophy /> #4</button></a>
                                </div>
                                <div className="col-6 d-flex justify-content-center">
                                    <a href="#" class="card-link text-muted"><BsPlusSquare /></a>
                                    <a href="#" class="card-link text-muted"><BsArrowUpRight /></a>
                                </div>
                            </div>

                            <div class="card-body">
                                <div className="d-flex justify-content-center">
                                    <img class="card-img-top rounded-circle mt-3" src={Second} alt="Card image cap" />
                                </div>
                                <h6 class="card-subtitle mb-2  text-center mt-3"><b>Edd Harris</b></h6>
                                <p class="card-text text-center"><b>2.431</b> <span className="text-muted">ETH</span></p>

                            </div>
                        </div>
                    </div>




                    <div className="col-lg-2 col-md-4 col-12 tab-m">
                        <div className="card my-card">

                            <div className="row">
                                <div className="col-6">
                                    <a href="#" class="card-link ms-3"><button type="button" class="btn btn-r   btn-secondary btn-sm pt-0 pb-0"><AiOutlineTrophy /> #5</button></a>
                                </div>
                                <div className="col-6 d-flex justify-content-center">
                                    <a href="#" class="card-link text-muted"><BsPlusSquare /></a>
                                    <a href="#" class="card-link text-muted"><BsArrowUpRight /></a>
                                </div>
                            </div>

                            <div class="card-body">
                                <div className="d-flex justify-content-center">
                                    <img class="card-img-top rounded-circle mt-3" src={Second} alt="Card image cap" />
                                </div>
                                <h6 class="card-subtitle mb-2  text-center mt-3"><b>Edd Harris</b></h6>
                                <p class="card-text text-center"><b>2.431</b> <span className="text-muted">ETH</span></p>

                            </div>
                        </div>
                    </div>


                </div>

            </div>

            <div className="container mt-5 section_5">
                <div className="row">
                    <h3>Hot bid</h3>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-3 col-md-6 col-12">
                        <img src={One} />
                        <div className="row mt-3">
                            <div className="col-7 col-lg-8 col-md-7">
                                <div className=" d-flex ">
                                    <p>&nbsp; <b><span className="">Amazing digital Art</span></b></p>
                                </div>
                            </div>

                            <div className="col-5 col-lg-4 col-md-5">

                                <button class="btn btn-style">2.45 Eth</button> <br></br>
                                <p className="">3 in stock</p>


                            </div>
                        </div>


                        <div className="row ">
                            <div className="col-8">
                                <div className=" font-s  ">
                                    <p>&nbsp;Heighest bid <b>0.000321 Eth</b></p>
                                </div>
                            </div>

                            <div className="col-4 font-s">


                                <p className="">New bid</p>


                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12">
                        <img src={Overlay} />

                        <div className="row mt-3">
                            <div className="col-7 col-lg-8 col-md-7">
                                <div className=" d-flex ">
                                    <p>&nbsp; <b><span className="">Amazing digital Art</span></b></p>
                                </div>
                            </div>

                            <div className="col-5 col-lg-4 col-md-5">

                                <button class="btn btn-style">2.45 Eth</button> <br></br>
                                <p className="">3 in stock</p>


                            </div>
                        </div>


                        <div className="row ">
                            <div className="col-8">
                                <div className=" font-s  ">
                                    <p>&nbsp;Heighest bid <b>0.000321 Eth</b></p>
                                </div>
                            </div>

                            <div className="col-4 font-s">


                                <p className="">New bid</p>


                            </div>
                        </div>
                    </div>


                    <div className="col-lg-3 col-md-6 col-12">
                        <img src={two} />

                        <div className="row mt-3">
                            <div className="col-7 col-lg-8 col-md-7">
                                <div className=" d-flex ">
                                    <p>&nbsp; <b><span className="">Amazing digital Art</span></b></p>
                                </div>
                            </div>

                            <div className="col-5 col-lg-4 col-md-5">

                                <button class="btn btn-style">2.45 Eth</button> <br></br>
                                <p className="">3 in stock</p>


                            </div>
                        </div>


                        <div className="row ">
                            <div className="col-8">
                                <div className=" font-s  ">
                                    <p>&nbsp;Heighest bid <b>0.000321 Eth</b></p>
                                </div>
                            </div>

                            <div className="col-4 font-s">


                                <p className="">New bid</p>


                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12">
                        <img src={Img3} />

                        <div className="row mt-3">
                            <div className="col-7 col-md-7 col-lg-8">
                                <div className=" d-flex ">
                                    <p>&nbsp; <b><span className="">Amazing digital Art</span></b></p>
                                </div>
                            </div>

                            <div className="col-5 col-lg-4 col-md-5">

                                <button class="btn btn-style">2.45 Eth</button> <br></br>
                                <p className="">3 in stock</p>


                            </div>
                        </div>


                        <div className="row ">
                            <div className="col-8">
                                <div className=" font-s  ">
                                    <p>&nbsp;Heighest bid <b>0.000321 Eth</b></p>
                                </div>
                            </div>

                            <div className="col-4 font-s">


                                <p className="">New bid</p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 section-6">
                <div className="row">
                    <h3>Hot Collections</h3>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 col-md-4 col-12 ">
                        <img src={Three3} />
                        <div className="row mt-3 border-none">
                            <div className="col-4 col-lg-4 col-md-4">
                                <img src={Logo1} />
                            </div>
                            <div className="col-4 col-lg-4 col-md-4">
                                <img src={Logo2} />
                            </div>

                            <div className="col-4 col-lg-4 col-md-4">
                                <img src={Logo3} />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <h5>Awesome collection</h5>
                        </div>
                        <div className="row">
                            <div className="col-6 col-md-8 col-lg-6">
                                <div className=" d-flex img-set-2">
                                    <img src={Second} className="rounded-circle " /><p>&nbsp; By Kennith Olson</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-6 p-set d-flex justify-content-end">
                                <p><b>28 Items</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <img src={Two2} />

                        <div className="row mt-3 border-none">
                            <div className="col-4 col-lg-4 col-md-4">
                                <img src={Logo1} />
                            </div>
                            <div className="col-4 col-lg-4 col-md-4">
                                <img src={Logo2} />
                            </div>

                            <div className="col-4 col-lg-4 col-md-4">
                                <img src={Logo3} />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <h5>Awesome collection</h5>
                        </div>
                        <div className="row">
                            <div className="col-6 col-md-8 col-lg-6">
                                <div className=" d-flex img-set-2">
                                    <img src={Second} className="rounded-circle " /><p>&nbsp; By Kennith Olson</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-6 p-set d-flex justify-content-end">
                                <p><b>28 Items</b></p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <img src={One1} />

                        <div className="row mt-3 border-none">
                            <div className="col-4 col-lg-4 col-md-4">
                                <img src={Logo1} />
                            </div>
                            <div className="col-4 col-lg-4 col-md-4">
                                <img src={Logo2} />
                            </div>

                            <div className="col-4 col-lg-4 col-md-4">
                                <img src={Logo3} />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <h5>Awesome collection</h5>
                        </div>
                        <div className="row">
                            <div className="col-6 col-md-8 col-lg-6">
                                <div className=" d-flex img-set-2">
                                    <img src={Second} className="rounded-circle " /><p>&nbsp; By Kennith Olson</p>
                                </div>
                            </div>

                            <div className="col-6 col-lg-6 col-md-4 p-set d-flex justify-content-end">
                                <p><b>28 Items</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 section_7">
                <div className="row">
                    <div className="col-lg-6 md-6 col-12 p-5">
                        <p className="para-s">Save your time with stacks</p>
                        <h1 className="h-s">Earn free crypto with Crypter</h1>
                        <p className="para2-s">A creative agency that lead and inspire</p>
                        <button className="btn e-btn">Earn Now</button>  <button className="btn d-btn">Discover more</button>
                    </div>

                    <div className="col-lg-6 md-6 col-12 section_8">
                        <img src={Crypto} />
                    </div>
                </div>
            </div>
        </div>






    )




}

export default index


