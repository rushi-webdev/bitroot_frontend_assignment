import React, { useState, useRef, useEffect } from 'react';
import Posts from './components/Posts';
import datas from './data.json';
import PostPopup from './components/PostPopUp';

const App = () => {
  const [popupPost, setPopupPost] = useState(null);
  const popupContainerRef = useRef(null);

  const handlePostClick = (post) => {
    setPopupPost(post);
  };

  const handleClosePopup = () => {
    setPopupPost(null);
  };

  const handleClickOutsidePopup = (event) => {
    if (popupContainerRef.current && !popupContainerRef.current.contains(event.target)) {
      handleClosePopup();
    }
  };


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsidePopup);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsidePopup);
    };
  }, []);

  return (
    <div className='main-container'>
      <div className="posts-main-container">
        <div className="posts_container">
          {
            datas?.map(data => (
              <Posts key={data.id} data={data} onClick={handlePostClick} />
            ))
          }
        </div>
      </div>
      {popupPost && <div className='pop_container' >
        <PostPopup post={popupPost} onClose={handleClosePopup} popupContainerRef={popupContainerRef} />
      </div>
      }
    </div>
  );
};

export default App;
