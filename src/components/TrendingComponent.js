import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';



function Trending(props) {
  
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="tasty"
                    options={{height: 400}}
                />
                </div>
                <div className="col-md m-1">
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="nytfood"
                    options={{height: 400}}
                />
                </div>
                <div className="col-md m-1">
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="fooddotcom"
                    options={{height: 400}}
                />
                </div>
                <div className="col-md m-1">
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="seriouseats"
                    options={{height: 400}}
                />
                </div>
            </div>
        </div>    
    );
}

export default Trending;