//마이페이지(남)
import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostBox, ProfileDetails, ProfilePicture } from "../../styles/Login/MyPage.styled";
import axios from "axios";
import { getCookie, setCookie } from "../../Cookies";
import { FaUserCircle } from "react-icons/fa";
import { SignInBox } from "../../styles/Login/Login.styled";
import PostTable from "../Post/PostTable";
import styled from "styled-components";

const S = {
    InfoWrapper: styled.div`
        margin : 25px 0 25px 0;
        display : flex;
        gap: 15px;
    `,
    NickNameText : styled.a`
        color: #000;
        font-family: Noto Sans KR;
        font-size: 26px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    `,
    GenderAgeText : styled.a`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #000;
        font-family: Noto Sans KR;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    `,
    ButtonWrapper : styled.div`
        width: 350px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 13px;
    `,
    CustomButton : styled.button`
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 144px;
        height: 39px;
        border-radius: 3px;
        border: none;
        text-decoration: none;
        background: #A4D0A9;
        color: #000;
        font-family: sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `,
    IntroduceBox : styled.div`
        width: 320px;
        height: 211px;
        background-color: #FFFFFF;
        border-radius: 10px;
        padding: 10px;
    `,
    RecentPostTitle : styled.div`
        width: 320px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin : 14px 0 8px 0;
        color: #000;
        font-family: sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    `,
    PostBox : styled.div`
        width: 340px;
        height: 170px;
        background-color: #FFFFFF;
        border-radius: 10px;
    `
}

const Profile = () => {
    const userId = useParams();

    const [userData, setUserData] = useState();
    const [isRequesting, setIsRequseting] = useState(false);

    const [postData, setPostData] = useState();

    // 이부분 MyPage거랑 겹치는 부분이라 따로 컴포넌트 분리해서 리팩토링 해야함.
    const size = 3;
        useEffect(() => {
            axios.get(`/members/${userId.UserId}/posts?size=${size}`).then((res) => {
                const formattedData = (res.data.data.content).map(post => ({
                    PostId: post.postId,
                    WriterId: post.writerId,
                    Title : post.title,
                    Content : post.content,
                    MatchingState : post.matching.matchingStatus,
                    CreatedTime : post.createdAt,
                    CommentCount : post.commentCount
                }));
                setPostData(formattedData);
            }).catch((err) => {
                console.log(err);
            });
        },[]);


    const userInfoFormat = (gender, age) => {
        const formattedGender = gender === "FEMALE" ? "여" : "남";
        return `${formattedGender}(${age})`;
    }

    useEffect(()=>{
        axios.get('/members/' + `${userId.UserId}`).then((res) => {
                setUserData(res.data.data); //받아온 데이터 저장                
            })
            .catch((error)=>{
            console.log(error);
        });

    }, []);
    

    const handleFriendRequest = async () => { //친구신청 정보 백엔드에 넘겨줌
        try {
            setIsRequseting(true);
            const requestData = {
            };
            //const responseData = await sendFriendRequest(requestData);
            alert('친구 신청이 성공적으로 완료되었습니다.');
        }  catch(err) {
            console.err('Error handling friend request:', err.message);
        } finally {
            setIsRequseting(false);
        }
    };

    const handleMemberReport = (e) => { //회원신고 axios
        e.preventDefault();

        const confirmed = window.confirm('정말로 신고하시겠습니까?');

        if(confirmed) { //사용자가 확인을 눌렀을 때 로직

        axios.post('/reports', {

            "reportedMemberId": 0,
            "content": 1,
            "reportType": "PROFILE",
            "postId": 0,
            "commentId": 0,
            "chatId": 0
           
            .then(res => {
                console.log("회원이 신고되었습니다.", res.data);
                alert("회원신고가 성공적으로 진행되었습니다.");
            })
            .catch(err => {
                console.err("회원신고 중 오류 발생", err.data)
            })
        })
    }
    }

    return (
        <>

        {userData &&
            <>
                <div style={{ height: "50px" }}></div>
                <ProfilePicture>
                    {userData && <img className="profile-image" src={`https://api.favorite-school.me/api/v1${userData.profileImageEndpoint}`} alt="프로필 사진" />}
                </ProfilePicture>
                <ProfileDetails>
                    <S.InfoWrapper>
                        <S.NickNameText>{userData.nickname}</S.NickNameText>
                        <S.GenderAgeText>{userInfoFormat(userData.gender, userData.age)}</S.GenderAgeText>
                    </S.InfoWrapper>
                </ProfileDetails>
            
                <S.ButtonWrapper> 
                    {/* 여기 친구신청 여부 또 확인할라면... 내가 현재 얘한테 친구신청 넣었는지? 를 확인해야한다 API 개발중 */}
                    <S.CustomButton className="block" type="submit" onClick={handleFriendRequest} disabled={isRequesting}>{isRequesting ? '신청 취소' : '친구 신청'}</S.CustomButton>
                    <S.CustomButton className="block" type="submit" onClick={handleMemberReport}>회원신고</S.CustomButton>
                </S.ButtonWrapper>
                <S.IntroduceBox>
                    {userData.introduction}
                </S.IntroduceBox>

                <S.RecentPostTitle>최근에 작성한 게시글</S.RecentPostTitle>

                <S.PostBox>
                    {postData && postData.map((item) => (
                    <PostTable
                        key={item.PostId} // Add a unique key when rendering lists
                        PostId={item.PostId}
                        WriterId={item.WriterId}
                        Title={item.Title}
                        Content={item.Content}
                        MatchingState={item.MatchingState}
                        CreatedTime={item.CreatedTime}
                        CommentCount={item.CommentCount}
                    />
                ))}
                </S.PostBox>
            </>
        }
    </>

    )

}

export default Profile;