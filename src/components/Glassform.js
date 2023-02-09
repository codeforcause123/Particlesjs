import "./config/Styles.css";
export default function Glassform() {
  return (
    <div className="glassform">
      <form>
        <h3>
          Welcome Back!
          <span>Login to your account.</span>
        </h3>

        <label for="username">Username</label>
        <input
          type="text"
          placeholder="For ex. CodingArtist"
          id="username"
        ></input>

        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Minimum 6 characters"
          id="password"
        ></input>

        <button>Sign In</button>
      </form>
    </div>
  );
}
