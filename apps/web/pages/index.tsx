import { Button, Header } from "ui";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />
      <Header
        onCreateAccount={() => {}}
        onLogin={function noRefCheck() {}}
        onLogout={function noRefCheck() {}}
        user={{
          name: "Jane Doe",
        }}
      />
    </div>
  );
}
