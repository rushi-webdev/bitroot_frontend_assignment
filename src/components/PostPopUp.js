import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
const PostPopup = ({ post, onClose, popupContainerRef }) => {

    useEffect(() => {
        if (popupContainerRef.current) {
            gsap.fromTo(popupContainerRef.current, { y: 100, opacity: 0 }, { y: 0, duration: 0.5, opacity: 1, ease: 'power3.out' });
        } else {
            gsap.fromTo(popupContainerRef.current, { y: 0, opacity: 1 }, { y: 100, duration: 0.5, opacity: 0, ease: 'power3.out' });
        }
    }, []);
    return (
        <div className="post_popup" ref={popupContainerRef}>
            <div className='pop_up_close_container'>
                <img src="/images/xmark-solid.svg" alt="" onClick={onClose} />
            </div>
            <div className="pop_up_img_container"
                style={{ backgroundImage: `url(${post.thumbnail.large})` }}
            ></div>
            <div className="pop_up_desc_container">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <div className='autor_details'>
                    <div className='author_profile'>
                        {
                            post.author.avatar ? <img src={post.author.avatar} alt="" /> :
                                <img src={"/images/user-solid.svg"} alt="" />
                        }
                    </div>
                    <div className="author_name">
                        <span>{post.author.name}</span>
                        <span>-</span>
                        <span>{post.author.role}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostPopup;
