function LoginModal({ setLoggedIn, close }) {
  const login = () => {
    setLoggedIn(true);
    window.location.href = "/dashboard";
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ background: "white", padding: 20 }}>
        <h2>Login</h2>

        <input placeholder="Email" />
        <br />
        <input placeholder="Password" />
        <br />

        <button onClick={login}>Login</button>
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
}

export default LoginModal;
