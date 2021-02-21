import React from 'react';
import AudioCard from '../components/AudioCard'

const AudioPage = () => {
    
    const audios = [

        {
            id: 1,
            name: "Lil Crawfish - Right Now",
            link: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/TswDR8Hyzbs\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        }
        
    ]

    return (
        <>
            <h1>Audio</h1>
            <h3>Browse songs I've Recorded, Mixed & Mastered!</h3><br/>
            <div className="audio-cards">
                { audios.map(audio => <AudioCard key={ audio.id } { ...audio } />) }
            </div><br/><br/>
        </>
    )
}

export default AudioPage