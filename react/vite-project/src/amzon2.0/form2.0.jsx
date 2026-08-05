import { useState } from "react";

function Form2() {
  // Single state object for all inputs
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // Generic change handler for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={input.phone}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Live list of current state values */}
      <h3>Current State (updates as you type):</h3>
      <ul>
        <li>Name: {input.name}</li>
        <li>Email: {input.email}</li>
        <li>Phone: {input.phone}</li>
        <li>Password: {input.password}</li>
      </ul>
    </div>
  );
}

export default Form2;