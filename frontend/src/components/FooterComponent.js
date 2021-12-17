import React from 'react';

function Footer() {
    return (
        <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="/home">Trang chủ</a></li>
                        <li><a href="/aboutus">Về chúng tôi</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="contactus.html">Liên hệ</a></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Địa chỉ</h5>
                    <address>
		              144 Xuân Thủy<br />
		              Mai Dịch, Cầu Giấy, Hà Nội<br />
		              Việt Nam<br />
		              <i className="fa fa-phone fa-lg"></i> +852 1234 5678<br />
		              <i className="fa fa-fax fa-lg"></i> +852 8765 4321<br />
		              <i className="fa fa-envelope fa-lg"></i> <a href="mailto:confusion@food.net">
                         web@vnu.edu.vn</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );

}

export default Footer;