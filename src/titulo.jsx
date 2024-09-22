import { useState } from "react";

function Titulo() {
  const [count, setCount] = useState(0);

  function Click() {
    setCount(count + 1);
  }

  return (
    <div>
      <button type="button" class="btn btn-primary" onClick={Click}>
        Primary
      </button>

      <input type="text" onChange={Click} />

      <p>Ha presionado el boton {count} veces mi loco</p>
    </div>
  );
}

export default Titulo;
