const UserCard = ({ user }) => {
  console.log(user);
  console.log(user.skills);
  const skillsArray = Array.isArray(user?.skills)
    ? user.skills
    : typeof user?.skills === "string"
    ? user.skills.split(",")
    : [];

  //const { firstName, lastName, photoURL, gender, skills, age } = user;
  return (
    <div>
      <div className="fieldset w-xs bg-base-300 border border-base-300 p-4 rounded-box  ">
        <figure>
          <img src={user.photoURL} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{user.firstName + " " + user.lastName}</h2>
          <div>
            <p>{user.age}</p>
            <p>{user.gender}</p>

            <ul>
              {skillsArray.map((e) => (
                <li key={e.trim()}>{e.trim()}</li>
              ))}
            </ul>
          </div>
          <div className="card-actions justify-evenly my-5">
            <button className="btn btn-primary">Interested </button>
            <button className="btn btn-secondary">Ignore</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
