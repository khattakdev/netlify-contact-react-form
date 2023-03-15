import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <form name="contact" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div className="input">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />
        </div>
        <div className="input">
          <label for="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default App;
