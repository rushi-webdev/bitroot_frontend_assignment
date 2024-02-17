import React, { useEffect } from 'react'
import gsap from 'gsap';
const Posts = ({ data,onClick }) => {

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const handleMouseEnter = (e) => {
    const imgHoverContainer = e.currentTarget.querySelector('.img_hover_container');
    const imgText = e.currentTarget.querySelector('.img_hover_text');
    gsap.fromTo(imgHoverContainer, { y: '100%' }, {
      display: 'block', y: '0%', duration: .3
    });
    gsap.fromTo(imgText, { y: '20px', opacity: 0 }, { y: '0px', display: 'block', opacity: 1, delay: .1 })
  };

  const handleMouseLeave = (e) => {
    const imgHoverContainer = e.currentTarget.querySelector('.img_hover_container');
    const imgText = e.currentTarget.querySelector('.img_hover_text');
    gsap.fromTo(imgText, { y: '0px', opacity: 1 }, { y: '20px', opacity: 0, display: 'none' })
    gsap.fromTo(imgHoverContainer, { y: '0%' }, { delay: .2, y: '100%', display: 'none' })
  };

  const handlePostClick = () => {
    onClick(data);
  };

  useEffect(() => {
  }, [handleMouseEnter, handleMouseLeave])

  return (
    <div className="post" >
      <div className="img_container" style={{ backgroundImage: `url(${data.thumbnail.small})` }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handlePostClick}>
        <div className="img_hover_container"></div>
        <div className="img_hover_text">Learn More</div>
      </div>
      <div className="post_desc_container">
        <div className="colors">
          <span></span>
          <span></span>
        </div>
        <div className="post_heading">
          <h1>{data.title}</h1>
        </div>
        <div className="post_para">
          <p>{data.content}</p>
        </div>
        <div className="post_author">
          <span>{data.author.name}</span>
          <span>{formatDate(data.date)}</span>
        </div>
      </div>
    </div>
  )
}

export default Posts