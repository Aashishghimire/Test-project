import React, {useState} from "react"
import './Right_Container.css'
import Avatar from "@material-ui/core/Avatar"


function Right_Container() {
    return (
        <div className="Right_Container">
            <div className="Right_Container_Header">
             <Avatar
            className="post_avatar"
            alt="Aashish"
            src="/static/images/avatar/1.jpg"
            />
           <h3>Aashish Ghimire</h3>
           <button className="follow">Switch</button>
           </div>
           

           <div className="suggestion_box">
           <p className="suggestion">Suggestion For You
           <button className="see_all">See All</button>
           </p>
           <div className= "Suggestion_User">
           <Avatar
            className="post_avatar"
            alt="Sandesh"
            src="/static/images/avatar/1.jpg"
            />
            <h4>Sandesh Vaniya</h4>
            <button className="follow">Follow</button>
            </div>
            <p className="Suggestion_Followed">followed by bibek_2020</p>
            
            <div className= "Suggestion_User">
           <Avatar
            className="post_avatar"
            alt="Rohit"
            src="/static/images/avatar/1.jpg"
            />
            <h4>Rohit Poddar</h4>
            <button className="follow">Follow</button>
            </div>
            <p className="Suggestion_Followed">followed by Nima Tamang</p>

            <div className= "Suggestion_User">
           <Avatar
            className="post_avatar"
            alt="Nima"
            src="/static/images/avatar/1.jpg"
            />
            <h4>Nima Tamang</h4>
            <button className="follow">Follow</button>
            </div>

            <p className="Suggestion_Followed">followed by Rohit Poddar</p>
            </div>

            <div className="right_container_footer">
                <button className="footer_button">About</button>
                <button className="footer_button">Help</button>
                <button className="footer_button">Press</button>
                <button className="footer_button">API</button>
                <button className="footer_button">Jobs</button>
                <button className="footer_button">Privacy</button>
                <button className="footer_button">Terms</button>
                <button className="footer_button">Locations</button>
                <button className="footer_button">Top Accounts</button>
                <button className="footer_button">Hashtags</button>
                <button className="footer_button">Languages</button>
            </div>
            
            <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
        </div>
    )
}

export default Right_Container
