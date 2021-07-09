import React from "react";
import LoginForm from "./components/LoginForm";
function App(): JSX.Element {
  const [isDisabled, setIsDisabled] = React.useState<boolean>(true);
  const [inputContent, setInputContent] = React.useState<string>("");

  React.useEffect(() => {
    inputContent.length ? setIsDisabled(false) : setIsDisabled(true);
  }, [inputContent]);

  return (
    <div>
      <h1>Hello tests</h1>
      <input
        data-testid="myInput"
        type="text"
        value={inputContent}
        onChange={({ target }: React.ChangeEvent<HTMLInputElement>): void =>
          setInputContent(target.value)
        }
      />
      <button data-testid="myBtn" disabled={isDisabled}>
        Click me
      </button>

      <LoginForm />
    </div>
  );
}

export default App;
