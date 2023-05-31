import { useState, useEffect } from "react";
import { S } from "./login.styled";

const Login = () => {
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const clearData = () => {
    setUserName("");
    setPassword("");
    setEmail("");
  };

  useEffect(() => {
    clearData();
  }, [showLogin]);

  return (
    <S.MainContainer>
      {showLogin ? (
        <S.ContentWrapper>
          <S.HeaderText>Login</S.HeaderText>
          <S.InputContainer>
            <S.CustomTextfield
              id="outlined-basic"
              label="User Name"
              variant="outlined"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
            <S.CustomTextfield
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <S.LoginBtn variant="contained">Log in</S.LoginBtn>
          </S.InputContainer>
          <S.SubContainer>
            Don't you have an account?
            <S.CustomBtn
              onClick={() => setShowLogin((prev) => !prev)}
              disableRipple
            >
              Create Account
            </S.CustomBtn>
          </S.SubContainer>
        </S.ContentWrapper>
      ) : (
        <S.ContentWrapper>
          <S.HeaderText>Create account</S.HeaderText>
          <S.InputContainer>
            <S.CustomTextfield
              id="outlined-basic"
              label="User Name"
              variant="outlined"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
            <S.CustomTextfield
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <S.CustomTextfield
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <S.LoginBtn variant="contained">Create Account</S.LoginBtn>
          </S.InputContainer>

          <S.SubContainer>
            Already Have an account?
            <S.CustomBtn
              onClick={() => setShowLogin((prev) => !prev)}
              disableRipple
            >
              Log in
            </S.CustomBtn>
          </S.SubContainer>
        </S.ContentWrapper>
      )}

      <S.ImageWrapper></S.ImageWrapper>
    </S.MainContainer>
  );
};

export default Login;
