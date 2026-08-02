

const About = ({ name, age, isAdmin, hobbies, onDelete }) => {

  return (
   <>
   <h2>{name}</h2>
      <p>Age: {age}</p>
      {isAdmin && <span>Admin</span>}
      <ul>
        {hobbies.map(h => <li key={h}>{h}</li>)}
      </ul>
      <button onClick={onDelete}>Delete</button>
   </>
  )
}

export default About