import React from 'react'

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <>
        <div className={`skills-card ${isActive ? 'active' : ''}`}onClick={()=>onClick()}>
            <div className='skill-icon'>
                <img src={iconUrl} className='IconImage' alt={title} />
            </div>
            <span className='spanTitle'>{title}</span>
        </div>
    </>
  )
}

export default SkillCard;