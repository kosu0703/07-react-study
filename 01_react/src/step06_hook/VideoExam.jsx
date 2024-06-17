import React, { useEffect, useRef, useState } from 'react'

function VideoExam() {
    //  useRef 를 videoRef 변수에 할당
    const videoRef = useRef(null);

    const playVideo = () => {
        videoRef.current.play();
    }

    const pauseVideo = () => {
        videoRef.current.pause();
        //  비디오 지우기
        //videoRef.current.remove();
    }

    return (
        <div>
            <div>
                <button onClick={playVideo}>play</button>
                <button onClick={pauseVideo}>pause</button>
            </div>
            <video ref={videoRef} width="320" height="240" controls>
                <source 
                    type='video/mp4'
                    src='https://player.vimeo.com/external/544643152.sd.mp4?s=7dbf132a4774254dde51f4f9baabbd92f6941282&profile_id=165'
                />
            </video>
        </div>
    )
}

export default VideoExam

