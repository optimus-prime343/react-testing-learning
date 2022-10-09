import { useState } from 'react'

export interface SkillsProps {
  skills: readonly string[]
}
export const Skills = ({ skills }: SkillsProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setTimeout(() => setIsLoggedIn(true), 500)
  }
  return (
    <>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </>
  )
}
