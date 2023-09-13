import React from 'react'
import './UserProfileCard.css'
import profile_icon from '../assets/xdcoder.jpeg'
const UserProfileCard = () => {
  return (
    <div className='upc'>
        <div className="gradiant"></div>
        <div className="profile-down">
            <img src={profile_icon} alt=""/>
            <div className="profile-title">xdCoder</div>
            <div className="profile-description">I'm both a software engineer and a frontend developer, with a diverse range of skills including React, BootStrap, Python, Java, and MongoDB.
            </div>
        </div>
        <div className="profile-button">
            <a href = "mailto:subhaiyash@gmail.com">Contact Me</a>
            </div>
    </div>
  )
}

export default UserProfileCard
