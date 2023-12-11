import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm";
import { FindPage, SignInBox, SocialLoginContainer } from "../styles/Login/Login.styled";
import TitledHeader from "../components/Header/TitledHeader";
import NaverLoginForm from "../components/SocialLogin/NaverLoginForm";
import KakaoLoginForm from "../components/SocialLogin/KakaoLoginForm";

const LoginPage = () => {

    const navigate = useNavigate();

    return (
        <>
        <TitledHeader title="로그인"/>
        <br/>
            <SignInBox>
                <h2 className="title">최애의 학식</h2>
            
                <LoginForm/>

                <div class="form-check">
                    <input class="form-check-input" 
                            type="checkbox" 
                            value="" 
                            id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                    자동로그인
                    </label>
                </div>

                <FindPage>
                    <button className="textBtn" onClick={() => navigate("/SearchIdPage")}>아이디 찾기</button>
                    <button className="textBtn" onClick={() => navigate("/SearchPwPage")}>비밀번호 찾기</button>
                </FindPage>
                
                <div
                    style={{
                    width: "100%",
                    textAlign: "center",
                    borderBottom: "1px solid #aaa",
                    lineHeight: "0.1em",
                    margin: "10px 0 20px",
                }}>
                    <span style={{ background: "#F1F1F1", padding: "0 10px" }}>소셜 로그인</span>
                </div>
                </SignInBox>
                
                <SocialLoginContainer>
                    {/* <KakaoLoginForm/>  */}
                    <NaverLoginForm/>

                <FindPage>
                <p>계정이 없으신가요? 
                <button className="underline" onClick={() => navigate("/JoinPage")}>가입하기</button>
                </p>
                </FindPage>
            </SocialLoginContainer>
        </>
    );
}

export default LoginPage;