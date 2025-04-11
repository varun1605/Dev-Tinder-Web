const SignUp = () => {
  return (
    <div className="flex justify-center my-12">
      <fieldset className="fieldset w-xs bg-base-300 border border-base-300 p-4 rounded-box">
        <h2 className="card-title flex justify-center">Signup</h2>

        <label className="fieldset-label">Firstname</label>
        <input type="text" className="input" />
        <label className="fieldset-label">Lastname</label>
        <input type="text" className="input" />

        <label className="fieldset-label">Email</label>
        <input type="email" className="input" />

        <label className="fieldset-label">Password</label>
        <input type="password" className="input" />
        <label className="fieldset-label">Gender</label>
        <select defaultValue="Pick a color" className="select">
          <option disabled={true}>Select gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
        </select>

        <button className="btn btn-neutral mt-4">Signup</button>
      </fieldset>
    </div>
  );
};
export default SignUp;
