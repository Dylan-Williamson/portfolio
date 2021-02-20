import React from 'react';
import { connect } from 'react-redux';
import AudioCard from '../components/AudioCard'

const AudioPage = (props) => {
    
    const audios = props.audios.audios

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

const mapStateToProps = (state) => ({
    audios: state.audios
  })
  
  export default connect(mapStateToProps)(AudioPage)