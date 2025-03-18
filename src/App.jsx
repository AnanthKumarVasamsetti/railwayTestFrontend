import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("https://railwaytest-production-087c.up.railway.app/api/data")
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleSubmit = () => {
        axios.post("https://railwaytest-production-087c.up.railway.app/api/data", { message })
            .then(response => {
                setData([...data, response.data.data]);
                setMessage("");
            });
    };

    return (
        <div>
            <h1>React + Express + MongoDB</h1>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSubmit}>Add Message</button>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.message}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
