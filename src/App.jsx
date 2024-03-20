import { useState } from "react";

function App() {
  const [firstImputNum, setFirstImputNum] = useState();
  const [secondImputNum, setSecondImputNum] = useState();
  const [answer, setAnswer] = useState();

  function sumImputs() {
    const sum = Number(firstImputNum) + Number(secondImputNum);
    setAnswer(sum);
  }

  return (
    <>
      <App2 />
      <App3 />
      <input
        type="text"
        value={firstImputNum}
        onChange={(event) => setFirstImputNum(event.target.value)}
      />
      +
      <input
        type="text"
        value={secondImputNum}
        onChange={(event) => setSecondImputNum(event.target.value)}
      />
      <button onClick={sumImputs}>Answer</button>
      <div>{answer}</div>
    </>
  );
}

function App3() {
  const [firstImputNum, setFirstImputNum] = useState();
  const [secondImputNum, setSecondImputNum] = useState();
  const [answer, setAnswer] = useState();

  function sumImputs() {
    const sum = Number(firstImputNum) + Number(secondImputNum);
    setAnswer(sum);
  }

  return (
    <>
      <input
        type="text"
        value={firstImputNum}
        onChange={(event) => setFirstImputNum(event.target.value)}
      />
      +
      <input
        type="text"
        value={secondImputNum}
        onChange={(event) => setSecondImputNum(event.target.value)}
      />
      <button onClick={sumImputs}>Answer</button>
      <div>{answer}</div>
    </>
  );
}

function App2() {
  const [firstImputNum, setFirstImputNum] = useState();
  const [secondImputNum, setSecondImputNum] = useState();
  const [answer, setAnswer] = useState();

  function sumImputs() {
    const sum = Number(firstImputNum) + Number(secondImputNum);
    setAnswer(sum);
  }

  return (
    <>
      <input
        type="text"
        value={firstImputNum}
        onChange={(event) => setFirstImputNum(event.target.value)}
      />
      +
      <input
        type="text"
        value={secondImputNum}
        onChange={(event) => setSecondImputNum(event.target.value)}
      />
      <button onClick={sumImputs}>Answer</button>
      <div>{answer}</div>
    </>
  );
}

export default App;
