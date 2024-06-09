import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alert, setAlertClicked] = useState(false);

  return (
    <div>
      {alert && <Alert onClose={() => setAlertClicked(false)}>My Alert</Alert>}
      <Button color="primary" onClick={() => setAlertClicked(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
