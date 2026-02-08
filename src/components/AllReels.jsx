import { useState } from "react";
import reelsData from "../data/reelsdata";

export default function AllReels() {
    const [isLiked, setIsLiked] = useState(false);
    
    return (
        <div className="all-reels">
            {
                reelsData.map(reel => 
                <div className="reel" key={reel.id} onDoubleClick={() => {setIsLiked(!isLiked)}}>
                        {/* <img className="main-img" src={reel.mainImg} alt="" /> */}
                        <video autoPlay loop muted playsInline src={reel.video}></video>
                        <div className="bottom">
                            <div className="user">
                                <img className="user-img" src={reel.user.userImg} alt="" />
                                <h4 className="user-name">{reel.user.username}</h4>
                                <button className="follow-btn" >{reel.user.isFollowing?"Follow":"Following"}</button>
                            </div>
                            <h3>{reel.caption}</h3>
                        </div>
                        <div className="right">
                            <div className="like">
                                <h4 className="like-icon">
                                    <i className={isLiked?"ri-heart-3-fill liked":"ri-poker-hearts-line"}
                                    onClick={() => {setIsLiked(!isLiked)}}></i>
                                </h4>
                                <h6>{reel.stats.likes}</h6>
                            </div>
                            <div className="comment">
                                <h4 className="comment-icon">
                                    <i className="ri-chat-3-line"></i>
                                </h4>
                                <h6>{reel.stats.comments}</h6>
                            </div>
                            <div className="share">
                                <h4 className="share-icon">
                                    <i className="ri-share-forward-line"></i>
                                </h4>
                                <h6>{reel.stats.shares}</h6>
                            </div>
                            <div className="menu">
                                <h4 className="menu-icon">
                                    <i className="ri-more-2-line"></i>
                                </h4>
                            </div>
                        </div>
                    </div>
                    )
            }
        </div>
    )
}