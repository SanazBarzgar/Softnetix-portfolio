import blog1 from "./images/blog1.jpg";
import blog2 from "./images/blog2.jpg";
import gallery1 from "./images/gallery1.jpg";
import Header from "./header";
import { Link } from "react-router-dom";
import { useState } from "react";



const Blog = () => {
  const items = [
    {
      imageUrl: 'https://img.freepik.com/free-photo/man-painting-with-watercolors_52683-108452.jpg?w=900&t=st=1712071998~exp=1712072598~hmac=4e21d116bf27e266fd618f50d7a94f782b6e7d9d37c5849c72e413cbf7e33ade',
      title: 'Item 1',
      credit: 'Post By: Pic studio',
      desc: 'description : lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alire magna aliqua.',
    },
    {
      imageUrl: 'https://img.freepik.com/free-photo/man-painting-with-watercolors_52683-108452.jpg?w=900&t=st=1712071998~exp=1712072598~hmac=4e21d116bf27e266fd618f50d7a94f782b6e7d9d37c5849c72e413cbf7e33ade',
      title: 'Item 2',
      credit: 'Post By: Pic apou',
      desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali',
    }, {
      imageUrl: 'https://img.freepik.com/free-photo/man-painting-with-watercolors_52683-108452.jpg?w=900&t=st=1712071998~exp=1712072598~hmac=4e21d116bf27e266fd618f50d7a94f782b6e7d9d37c5849c72e413cbf7e33ade',
      title: 'Item 3',
      credit: 'Post By: Pic poic',
      desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. loremem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali',
    }
  ];
  const [currentItem, setCurrentItem] = useState(0);


    const prevItem = () => {
        setCurrentItem((prevItem) => (prevItem === 0 ? items.length - 1 : prevItem - 1));
    };
    const nextItem = () => {
        setCurrentItem((currentItem) => (currentItem + 1) % items.length);
    };
  
  return (
    <>
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container d-block">
            <div className="d-flex ">
              <Link to='/' className="text-white font-weight-bold mr-3 " >Brand Name</Link>
              <Link to='/' className="text-warning mr-3 " >Home </Link>
              <Link to='/login' className="text-warning " >Login</Link>
            

            </div>
          </nav>
        </div>
      </header >
      <div className="d-flex">
        <div className="container-fluid w-50 m-5">
        <h2 className="mb-5  ">Blogs:</h2>
        <hr />
        <hr />
        <hr />
        <p className="lh-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quibusdam iure nam repudiandae ipsa quo aut praesentium rem dignissimos atque non perferendis veniam laudantium, labore aliquid dolor, explicabo suscipit sequi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore repellendus maxime suscipit nulla id esse et provident numquam nam, officiis ipsam beatae ea. Fugiat, libero numquam illum molestiae hic dolore.</p>
        <div>
        <button
        className="btn btn-light p-3 m-2"
        onClick={prevItem}>Prev Blog</button>
        <button
                className="btn btn-light p-3 m-2"
        onClick={nextItem}>Next blog</button>
      </div>
        </div>

        <div className="w-50">
        < section className="blog_section layout_padding " >
                <div className="col-md-12">
                  <div className="box b2">
                    <div className="img-box">
                      <img src={items[currentItem].imageUrl} />
                    </div>
                    <div className="blog-detail">
                      <div className="blog_title">
                        <h5>
                        {items[currentItem].title}
                        </h5>
                        <div className="blog_post">
                          <h6>
                          {items[currentItem].credit}
                          </h6>
                        </div>
                      </div>
                      <p>
                        {items[currentItem].desc}
                      </p>
                    </div>
                  </div>
                </div>
                
      </section >
        </div>

      </div>


      
    </>

  )
}

export default Blog