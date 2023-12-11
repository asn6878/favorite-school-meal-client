import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import clock_logo from '../../media/Map/clock_logo.svg';
import { Link } from 'react-router-dom';

const ButtonTextStyles = styled.div`
    font-family: Noto Sans KR;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;


const S = {
    Wrapper : styled.div`
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        padding : 13px 9px 13px 17px;
    `,
    InfoBox : styled.div`
        width: 330px;
        height: 210px;
        background-color: #FFF;
        border-radius: 20px;
    `,
    TitleText : styled.a`
        color: #000;
        font-family: Noto Sans KR;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    `,
    TypeText : styled.a`
        color: #A1A1A1;
        font-family: Noto Sans KR;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin : 10px 0 10px 0;
    `,
    RestrauntImage : styled.div`
        width: 80px;
        height: 80px;
        background-color: #C4C4C4;
        border-radius: 20px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    `,
    LowerWrapper : styled.div`
        display: flex;
        align-items: center;
        width: 100%;
        margin-top : 12px;
    `,
    TimeWrapper : styled.div`
        display: flex;
        flex-direction: column;
        margin-left : 7px;
    `,
    TimeText : styled.a`
        color: #A1A1A1;
        font-family: Noto Sans KR;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `,
    Button : styled.div`
        width: 90px;
        height: 31px;
        border-radius: 20px;
        background: #609966;
        color: #fff;
        margin-left : auto;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    `,
    DetailButtonText : styled(ButtonTextStyles)`
        color: #FFFFFF;
    `,
    MenuInfoButtonText : styled(ButtonTextStyles)`
        color: #000;
    `
}

// 추후에는 마커클릭시 위치 기반으로 식당 id를 받아오고, 그 id를 props로 전달.
// axios로 id를 기반으로 식당 정보를 받아오는 API를 호출.
// 해당 데이터 활용해 완성.

/** pageType 의 종류는 "Map" 혹은 "Detail" 이다. Map같은 경우는 지도에서 표시되는 경우 이고
    Detail은 식당 상세페이지에서 표시되는 경우이다. */
const MapInfo= ({id, pageType}) => {
    const [data, setData] = useState({
        title : "기본 식당 이름", 
        isOnCampus : true,
        category : "기본 식당 카테고리", 
        thumbnail_url : "기본 식당이미지", 
        businessHours : "기본 식당 운영시간",
        menuImage_url : null
    });

    useEffect(() => {
        axios.get('/restaurants/' + id).then((res) => {
            console.log(res.data.data);
            const restaurant = res.data.data;
            const formattedData = {
                    title : restaurant.name,
                    isOnCampus : restaurant.isOnCampus,
                    category : restaurant.category,
                    thumbnail_url : restaurant.thumbnail_url,
                    businessHours : restaurant.businessHours,
                    menuImage_url : restaurant.menuImage_url,    
            };
            console.log(formattedData);
            setData(formattedData);
        })
    },[id]);

    const downloadImage = () => {
        // 이미지가 있는 URL 확인
        if (data.menuImage_url) {
          // 이미지를 다운로드하기 위해 <a> 엘리먼트 생성
          const link = document.createElement('a');
          link.href = data.menuImage_url;
          link.download = 'downloaded-image'; // 이미지 다운로드될 때의 파일명
    
          // DOM에 엘리먼트 추가하고 클릭하여 다운로드 진행
          document.body.appendChild(link);
          link.click();
    
          // 다운로드가 완료되었으므로 추가한 엘리먼트 제거
          document.body.removeChild(link);
        } else {
          console.error('이미지 URL이 없습니다.');
        }
    };


    
    if (!id) {
        return null;
    }

    return (
        <S.InfoBox>
            <S.Wrapper>
                <S.TitleText>{data.title}</S.TitleText>
                <S.TypeText>{data.category}</S.TypeText>
                <S.RestrauntImage><img src={data.thumbnail_url}/></S.RestrauntImage>
                <S.LowerWrapper>
                    <img src={clock_logo}/>
                    <S.TimeWrapper>
                        <S.TimeText>{data.businessHours}</S.TimeText>
                        {/* <S.TimeText>{data.businessHours}</S.TimeText> */}
                    </S.TimeWrapper>
                    {
                        (pageType === "Map"
                        ?   <S.Button>
                                <Link to={`/MapPage/${id}`} style={{ textDecoration: "none"}}>
                                    <S.DetailButtonText>자세히 보기</S.DetailButtonText>
                                </Link>
                            </S.Button>
                        : (data.isOnCampus
                            ? <S.Button style={{width: "109px"}}>
                                <Link to={`/MapPage/${id}`} style={{ textDecoration: "none"}}>
                                    <S.DetailButtonText onClick={downloadImage}>메뉴 정보 조회하기</S.DetailButtonText>
                                </Link>
                            </S.Button>
                            : null
                        ))  
                    }
                    
                </S.LowerWrapper>
                {/* {latlng && <a>lat = {latlng.Ma} <br/>lng = {latlng.La}</a>} */}
                <S.TitleText></S.TitleText>
            </S.Wrapper>
        </S.InfoBox>
    );
}

export default MapInfo;