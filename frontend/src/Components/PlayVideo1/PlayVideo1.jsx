import React from 'react'
import './PlayVideo1.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo1 = () => {
    return (
        <div className='play-video'>
            <video src={video1} controls autoPlay muted></video>
            <h3>best yt to learn coding</h3>
            <div className="play-video-info">
                <p>1323 views</p>
                <div>
                    <span><img src={like} alt="" />125</span>
                    <span><img src={dislike} alt="" />15</span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>GreatStack</p>
                    <span>1M subscriber</span>
                </div>
                <button>
                    Subscribe
                </button>
            </div>
            <div className="vid-description">
                <p>channel that make things easy</p>
                <p>subscribe to great stack</p>
                <hr />
                <h4>130 comments</h4>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>jack <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia eos nostrum dolor autem, veniam exercitationem commodi dignissimos rem? Impedit dignissimos blanditiis deserunt reprehenderit dolores at similique facilis placeat tempora exercitationem.

                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>233</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>jack <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia eos nostrum dolor autem, veniam exercitationem commodi dignissimos rem? Impedit dignissimos blanditiis deserunt reprehenderit dolores at similique facilis placeat tempora exercitationem.

                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>233</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>jack <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia eos nostrum dolor autem, veniam exercitationem commodi dignissimos rem? Impedit dignissimos blanditiis deserunt reprehenderit dolores at similique facilis placeat tempora exercitationem.

                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>233</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>jack <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia eos nostrum dolor autem, veniam exercitationem commodi dignissimos rem? Impedit dignissimos blanditiis deserunt reprehenderit dolores at similique facilis placeat tempora exercitationem.

                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>233</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>jack <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia eos nostrum dolor autem, veniam exercitationem commodi dignissimos rem? Impedit dignissimos blanditiis deserunt reprehenderit dolores at similique facilis placeat tempora exercitationem.

                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>233</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PlayVideo1
