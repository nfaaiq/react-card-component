import React from 'react';
import './styles.scss'
import spaceImg  from "./assets/marek-piwnicki-00gxM9Y05Q0-unsplash.png"
import superHero  from "./assets/superhero.png"
import { ColorRing } from 'react-loader-spinner'

const FollowButton = () => {
    const [following, setFollow] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleFollow = () => {
        setLoading(prev => !prev);
        setTimeout(() => {
            setFollow(prevState => !prevState);
            setLoading(prev => !prev);
        },1000)
        
    }
    return (<div className="follow-button-wrapper">
        {!loading &&
            <div className="follow-button" onClick={handleFollow}>
                {following  && <div className="text">Following</div>}
                {!following && <div className="text">Follow</div>}
            </div>}
            {loading && <div className="loader-wrapper">
                        <ColorRing
                            visible={true}
                            height="40"
                            width="40"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{top:'10px'}}
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        /></div>}
        </div>
    )
}


const CardComponent = () => {
       return (
        <div className="wrapper">
            <div className="space-card">
                <div className="space-ship-card">
                    <div className="layer-bottom">
                        <div className="space-ship-image">
                            <img src={spaceImg} className="image" />
                        </div>
                        <div className="space-ship-body">
                            <div className="card-info-middle-strip">
                                <div className="card-info-box">
                                    <img src={superHero} />
                                </div>
                               <FollowButton />
                            </div>
                            <div className="card-content">
                                <h2>Space Ship</h2>
                                <div className="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet,
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>   
            </div>
        </div>
    )

}

export default CardComponent;

