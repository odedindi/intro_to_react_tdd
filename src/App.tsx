import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
function App(): JSX.Element {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [inputContent, setInputContent] = useState<string>("");

  React.useEffect(() => {
    inputContent.length ? setIsDisabled(false) : setIsDisabled(true);
  }, [inputContent]);

  const [shouldRemember] = useState(true);
  const onInputChange = (variable: { username: string; password: string }) => {
    console.log(variable);
  };
  const onRememberChange = (remember: boolean) => {
    console.log(remember);
  };
  const onSubmit = (username: string, password: string) => {
    console.log(username, password);
  };
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

      <LoginForm
        shouldRemember={shouldRemember}
        onInputChange={onInputChange}
        onRememberChange={onRememberChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default App;
