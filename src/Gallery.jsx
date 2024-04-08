import { useState } from 'react';
import { Link } from 'react-router-dom';
const Carousel = () => {
  const items = [
    {
      imageUrl: 'https://img.freepik.com/free-photo/man-painting-with-watercolors_52683-108452.jpg?w=900&t=st=1712071998~exp=1712072598~hmac=4e21d116bf27e266fd618f50d7a94f782b6e7d9d37c5849c72e413cbf7e33ade',

    },
    {
      imageUrl: 'https://img.freepik.com/free-photo/man-painting-with-watercolors_52683-108452.jpg?w=900&t=st=1712071998~exp=1712072598~hmac=4e21d116bf27e266fd618f50d7a94f782b6e7d9d37c5849c72e413cbf7e33ade',

    }, {
      imageUrl: 'https://img.freepik.com/free-photo/man-painting-with-watercolors_52683-108452.jpg?w=900&t=st=1712071998~exp=1712072598~hmac=4e21d116bf27e266fd618f50d7a94f782b6e7d9d37c5849c72e413cbf7e33ade',

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
      <div className='m-5'>
        <h2 className='mb-4'>Gallery:</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa dignissimos non fuga? Aut distinctio id nulla provident illum nostrum, dolorum veritatis cupiditate, debitis molestiae, tempora neque nobis? Quo, nostrum?
        </p>

      </div>
      <div className='d-flex w-100 align-items-stretch mt-5'>
        <button
          className='btn btn-dark flex-fill'
          onClick={prevItem}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
          </svg>
        </button>
        <div className=''>
          <img src={items[currentItem].imageUrl}
            className='flex-fill' />

        </div>
        <button
          className='btn btn-dark flex-fill'
          onClick={nextItem}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>

      </div>

    </>


  );
}

export default Carousel

