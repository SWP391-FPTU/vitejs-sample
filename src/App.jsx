import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [test] = useState({ name: "ViteJS" });

    const handleChangeName = () => {
        setCount(count + 1);
        test.name = "ReactJS";
    };

    return (
        <div>
            {test.name}
            <button type="button" onClick={handleChangeName}>
                Click
            </button>
        </div>
    );
}

export default App;
