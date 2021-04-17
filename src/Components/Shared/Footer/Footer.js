import React from 'react';
import './Footer.css';

const Footer = () => {
return (
<div className="backgroundClr color">

    <footer class="page-footer font-small elegant-color">


        <div class="container text-center text-md-left pt-4 pt-md-5">


            <div class="row mt-1 mt-md-0 mb-4 mb-md-0">

                <div class="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">


                    <h5>About me</h5>
                    <hr class="color-primary mb-4 mt-0 d-inline-block mx-auto w-60" />

                    <p class="foot-desc mb-0">
                        This is Dipraj. I am the CEO of the platform. I am also guitar player of "Pink Floyd" ,everyone knows me as "Devid Glumar". This is too much High Hopes 
                    </p>

                </div>


                <hr class="clearfix w-100 d-md-none" />

                <div class="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">

                    <h5>Other Courses</h5>
                    <hr class="color-primary mb-4 mt-0 d-inline-block mx-auto w-60" />

                    <ul class="list-unstyled foot-desc">
                        <li class="mb-2">
                            <a href="">Learn Drams</a>
                        </li>
                        <li class="mb-2">
                            <a href="">Learn Fluid</a>
                        </li>
                        <li class="mb-2">
                            <a href="">Learn Keyboard</a>
                        </li>
                        <li class="mb-2">
                            <a href="">Learn Violin</a>
                        </li>
                    </ul>

                </div>


                <hr class="clearfix w-100 d-md-none" />

                <div class="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">

                    <h5>Useful links</h5>
                    <hr class="color-primary mb-4 mt-0 d-inline-block mx-auto w-60" />

                    <ul class="list-unstyled foot-desc">
                        <li class="mb-2">
                            <a href="#!">Facebook</a>
                        </li>
                        <li class="mb-2">
                            <a href="#!">Twitter</a>
                        </li>
                        <li class="mb-2">
                            <a href="#!">Instragram</a>
                        </li>
                        <li class="mb-2">
                            <a href="#!">GitHub</a>
                        </li>
                    </ul>

                </div>


                <hr class="clearfix w-100 d-md-none" />


                <div class="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">

                    <h5>Contacts</h5>
                    <hr class="color-primary mb-4 mt-0 d-inline-block mx-auto w-60" />

                    <ul class="fa-ul foot-desc ml-4">
                        <li class="mb-2"><span class="fa-li"><i class="far fa-map"></i></span>Barishal, Avenue Street 10
                        </li>
                        <li class="mb-2"><span class="fa-li"><i class="fas fa-phone-alt"></i></span>01777777771</li>
                        <li class="mb-2"><span class="fa-li"><i class="far fa-envelope"></i></span>dipraj17@cse.pstu.ac.bd
                        </li>
                        <li><span class="fa-li"><i class="far fa-clock"></i></span>Monday - Friday: 10-17</li>
                    </ul>

                </div>


            </div>


        </div>



        <div class="footer-copyright text-center py-3">© 2021 || All Rights Reserved || Dipraj Howlader

        </div>
    </footer>

</div>
);
};

export default Footer;