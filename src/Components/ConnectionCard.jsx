const ConnectionCard = ({ connection }) => {
  if (!connection) return <div>Loading...</div>;
  const { firstName, lastName, photoURL, skills } = connection;
  return (
    <div>
      {" "}
      <div className="card card-side bg-base-300 shadow-sm  my-5 w-150 ">
        <figure>
          <img
            className="w-50 h-50 p-2 rounded-2xl"
            src={photoURL}
            alt="photo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>{skills}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Chat</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConnectionCard;
