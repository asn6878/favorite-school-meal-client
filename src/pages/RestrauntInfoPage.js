import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TitledHeader from "../components/Header/TitledHeader";
import MapInfo from "../components/Map/MapInfo";
import PostTable from "../components/Post/PostTable";
import PostButton from "../components/Post/PostButton";
import axios from "axios";

const S = {
    Wrapper : styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
    `,
    PostWrapper : styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 348px;
        height: 513px;
        border-radius: 30px;
        background: #FFF;
        padding-top : 5px;
    `, 
    SubtitleText : styled.a`
        text-align: left;
        color: #000;
        font-family: Noto Sans KR;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin: 12px 0 12px 20px;
    `,
    WriteButton : styled.div`
        position : absolute;
        bottom : 30px;
        left: 50%;
        transform : translateX(-50%);
    `
}

const RestrauntInfoPage = () => {
    const routerParams = useParams();
    const [data, setData] = useState();
    
    useEffect(() => {
        axios.get('/restaurants/' + routerParams.RestaurantId + '/posts').then((res) => {
            const formattedData = (res.data.data.content).map(post => ({
                PostId: post.postId,
                WriterId: post.memberId,
                Title : post.title,
                Content : post.content,
                MatchingState : post.matching.matchingStatus,
                CreatedTime : post.createdAt,
                CommentCount : post.commentCount
            }));
            console.log(res.data.data.content);
            console.log(formattedData);
            setData(formattedData);
        }).catch((err) => {
            console.log();
            console.log(err);
        });
    },[]);

    // 여기 인라인 스타일 적용이 안됨...
    return(
        <>
            <TitledHeader title="식당 정보"/>
            <S.Wrapper>
                <div style={{height : "19px"}}></div>
                <MapInfo 
                    id={routerParams.RestaurantId}
                    pageType={""}
                    />
                <div style={{height : "19px"}}></div>
                {/* 이부분 컴포넌트로 분리할 필요 있어보임.*/}
                <S.PostWrapper>
                    <S.SubtitleText>학식메이트  게시판</S.SubtitleText>
                        {data && data.map((item) => (
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
                </S.PostWrapper>
            </S.Wrapper>
            <S.WriteButton>
                <PostButton type="Restaurant" restaurantId={routerParams.RestaurantId}/>
            </S.WriteButton>
        </>
    )
}

export default RestrauntInfoPage;