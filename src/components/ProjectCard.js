import React from 'react'

export const ProjectCard = ( {details} ) => {
  return (
    <>
        <div className="project-card">
            <h5>{details.title}</h5>
            <div className="Time-Duration">
                {details.date}
            </div>
            <ul>
                {details.description.map((item) => (
                    <li key = {item}>{item}</li>
                ))}
            </ul>
        </div>
    </>
  )
}
