import { useState } from 'react'; 
import { API_URL } from '../../data/apiPath';

const Register1 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/vendor/register`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      const isJson = response.headers.get('content-type')?.includes('application/json');
      const data = isJson ? await response.json() : null;

      if (!response.ok) {
        const error = (data && data.message) || 'Registration failed';
        throw new Error(error);
      }

      console.log(data);
      alert("Vendor registered successfully");
    } catch (error) {
      console.error("Registration failed", error);
      alert("Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="registerSection">
      <form className="authForm" onSubmit={handleSubmit}>
        <h3>Registration of Vendor</h3><br />
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        /><br />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        /><br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        /><br />
        <div className="btnSubmit">
        <button type="submit">Submit</button>
         
          
        </div>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Register1;
