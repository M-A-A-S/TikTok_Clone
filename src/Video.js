import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSibebar from './VideoSibebar';

function Video({
    url,
    channel,
    description,
    song,
    likes,
    messages,
    shares
}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = _ => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
            <video 
                className="video__player" 
                loop
                onClick={ onVideoPress }
                ref={ videoRef }
                src={ url }
            >
            </video>

            {/* Embed for Youtube */}
            {/* <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/nTvDi_SB2vQ" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            >
            </iframe> */}
            <VideoFooter
                channel={ channel }
                description={ description }
                song={ song }
            />
            <VideoSibebar
                likes={ likes }
                messages={ messages }
                shares={ shares }
            />
        </div>
    )
}

export default Video;