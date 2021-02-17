import React from "react";
import { Link } from 'react-router-dom'

const Home = () => {
        return (
                <>
                    <img className="home-logo" src="https://i.ibb.co/HNTGzd1/DWLOGO.jpg" alt="Dylan Williamson" /><br/>
                    <h2>I'm a Software Engineer based out of Upstate New York</h2>
                    <h2>My background includes Audio Engineering & Music Production</h2><br/><br/><br/><br/>
                    <div className="container">
                        <div className="center">
                            <Link to='/projects'>
                                <button id="projects">
                                    Projects
                                </button>
                            </Link>
                            <Link to='#'>
                                <button id="audio">
                                    Audio
                                </button>
                            </Link>
                            <Link to='#'>
                                <button id="beats">
                                    Beats
                                </button>
                            </Link>
                        </div>
                    </div>
                </>
        )
}

export default Home