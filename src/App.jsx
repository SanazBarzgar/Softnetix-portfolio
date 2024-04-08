import './bootstrap.css';
import './responsive.css';
import './style.css';
import Carousel from './carousel';
import gallerybg from './images/gallerybg.png';
import sliderimg from "./images/sliderimg.png";
import about from "./images/about.png";
import gallery1 from "./images/gallery1.jpg";
import gallery2 from "./images/gallery2.jpg";
import gallery3 from "./images/gallery3.jpg";
import gallery4 from "./images/gallery4.jpg";
import gallery5 from "./images/gallery5.jpg";
import gallery6 from "./images/gallery6.jpg";
import blog1 from "./images/blog1.jpg";
import blog2 from "./images/blog2.jpg";
import Contact from './contact';
import Header from './header';

function App() {
  const items = [
    {
      imageUrl: 'https://img.freepik.com/free-photo/man-painting-with-watercolors_52683-108452.jpg?w=900&t=st=1712071998~exp=1712072598~hmac=4e21d116bf27e266fd618f50d7a94f782b6e7d9d37c5849c72e413cbf7e33ade',
      client: 'Item 1',
      message: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      imageUrl: 'https://img.freepik.com/free-photo/man-painting-with-watercolors_52683-108452.jpg?w=900&t=st=1712071998~exp=1712072598~hmac=4e21d116bf27e266fd618f50d7a94f782b6e7d9d37c5849c72e413cbf7e33ade',
      client: 'Item 2',
      message: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }, {
      imageUrl: 'https://img.freepik.com/free-photo/man-painting-with-watercolors_52683-108452.jpg?w=900&t=st=1712071998~exp=1712072598~hmac=4e21d116bf27e266fd618f50d7a94f782b6e7d9d37c5849c72e413cbf7e33ade',
      client: 'Item 3',
      message: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  ];
  return (
    <>
    <Header />
      {/* hero section */}
      <div className="hero_area ">
        

        < section className=" slider_section position-relative" >
          <div className="container-fluid">
            <div className="row slider-row">
              <div className="col-lg-3 offset-lg-1">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="detail-box">
                        <h1>
                          Brand Name
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet, consecteturz adipisicing elit. fugiat optio est officiis amet nulla repellendus perferendis! Ad tempora minima perspiciatis, et sit nesciunt minus aperiam expedita.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 px-0">
                <div className="img-box">
                  <img src={sliderimg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section >
      </div >
      {/* end of hero section */}


      {/* <!-- about section --> */}
      < section className="about_section layout_padding" >
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    About Studio
                  </h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, placeat alias exercitationem fuga harum aliquam quos illum voluptas voluptate inventore esse accusantium animi ad non assumenda, suscipit, tempora quia autem!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="img-box">
          <img src={about} className="about-img" alt="" />
        </div>
      </section >
      {/* <!-- end about section -->

  <!-- gallery section --> */}
      < section className="gallery_section layout_padding-top" >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 ml-auto">
              <div className="heading_container">
                <h2>
                  Our Gallery
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni nam, facilis facere libero obcaecati eligendi quam quasi ut eos sunt dicta repudiandae quas expedita ab. Aliquam assumenda itaque modi accusantium.                </p>
                <a href="/gallery">
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery_container">
          <div className="gallery_bg">
            <img src={gallerybg} alt="" />
          </div>
          <div className="container">
            <div className="gallery_box">
              <div className="box b1">
                <div className="img-box">
                  <img src={gallery1} alt="" />
                </div>
              </div>
              <div className="box b2">
                <div className="img-box">
                  <img src={gallery2} alt="" />
                </div>
                <div className="img-box">
                  <img src={gallery3} alt="" />
                </div>
              </div>
              <div className="box b3">
                <div className="img-box">
                  <img src={gallery4} alt="" />
                </div>
                <div className="img-box">
                  <img src={gallery5} alt="" />
                </div>
              </div>
              <div className="box b4">
                <div className="img-box">
                  <img src={gallery6} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      {/* <!-- end gallery section -->


  <!-- blog section --> */}
      < section className="blog_section layout_padding" >
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    Letest Blog
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, explicabo omnis. Temporibus, impedit totam numquam corporis, quos sint illum eius molestias, ad nemo eaque soluta alias autem. Eos, illum quibusdam.                  </p>
                  <a href="/blog">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog_container">
          <div className="blog_bg">
            <img src={gallerybg} alt="" />
          </div>
          <div className="container">
            <div className="blog_box">
              <div className="row">

                <div className="col-md-6">
                  <div className="box b1">
                    <div className="img-box">
                      <img src={blog1} alt="" />
                    </div>
                    <div className="blog-detail">
                      <div className="blog_title">
                        <h5>
                          Best photography
                        </h5>
                        <div className="blog_post">
                          <h6>
                            Post By: Pic studio
                          </h6>
                          <h6>
                            16-01-2020
                          </h6>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et, deserunt doloremque modi molestiae facilis dolores reprehenderit in non cum quibusdam qui quaerat reiciendis consequatur fuga? Et unde quia doloribus.                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="box b2">
                    <div className="img-box">
                      <img src={blog2} alt="" />
                    </div>
                    <div className="blog-detail">
                      <div className="blog_title">
                        <h5>
                          Photography
                        </h5>
                        <div className="blog_post">
                          <h6>
                            Post By: Pic studio
                          </h6>
                          <h6>
                            16-01-2020
                          </h6>
                        </div>
                      </div>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit sit ipsa, veritatis laboriosam consectetur, in quod quos excepturi rem dolorum voluptatibus accusamus. Alias illo id a veritatis iste repellat eligendi?                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section >
      {/* <!-- end blog section -->


  <!-- client section --> */}
      <section className='d-flex m-5'>
        <div className='w-50 m-5'>
          <h2>
            What our Customers say:
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eos! Rem aliquam harum deserunt. Repudiandae dolor velit veritatis inventore numquam consequatur, laudantium, in eaque nostrum corporis sed expedita. Architecto, aliquid.</p>
        </div>

        <div className='w-50 m-5 '>
          <Carousel items={items} />
        </div>
      </section>
      {/* <!-- end of client section --> */}

      {/* contact  us section */}
      <Contact />
      {/* end of contact  us section */}



      < script src="js/jquery-3.4.1.min.js" ></script >
      <script src="js/bootstrap.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
      <script src="js/custom.js"></script>
    </>

  );
}

export default App;
