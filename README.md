# 최애의 학식

## 1. 실행방법
1. **npm install** → 프로젝트에 필요한 라이브러리나 패키지를 모두 다운로드하여 프로젝트를 초기화 하거나 새로운 의존성을 추가할 때 꼭 필요한 명령어 이므로 npm start 과정 전에 반드시 진행하여야 한다.

2. **npm start** → start 명령어 안에 실행할 수 있는 기본적인 서버 혹은 파일의 주소를 넣으면 그 주소로 실행된다. (package.json의 scripts에 있는 start 명령어를 실행)
## 2.Design
<img width="250" alt="스크린샷 2023-12-01 오후 6 40 05" src="https://github.com/Favorite-School-Meal/favorite-school-meal-client/assets/122153297/1c924a87-635d-4baa-ab18-0de9249c0018">

### 3. introduce

본 프로젝트는 대학 캠퍼스 커뮤니케이션 및 식당 정보 제공 플랫폼이며, 모바일 웹 기반 서비스이다.

### 4. 배포링크
https://favorite-school.me

### 5. 사용법
#### 메인페이지
<img width="240" alt="스크린샷 2023-12-01 오후 11 25 23" src="https://github.com/yanni13/favorite-school-meal-client/assets/122153297/c1344bd6-3c63-495d-a5a1-de366b129a6c">


1. ‘최애의 학식’을 이용하고자 하는 사용자는 회원가입을 통해 최애의 학식에서 제공하는 모든 기능을 이용할 수 있다.
<img width="240" alt="스크린샷 2023-12-01 오후 11 15 08" src="https://github.com/yanni13/favorite-school-meal-client/assets/122153297/a5759252-986b-4269-9c87-5b341555da96">


2. 로그인 된 사용자는 메뉴에서 알람정보를 확인할 수 있다.
<img width="240" alt="스크린샷 2023-12-01 오후 11 15 56" src="https://github.com/yanni13/favorite-school-meal-client/assets/122153297/b8de6dd3-91de-4f92-862c-e016ba681ca6">

   
3. 비회원 사용자는 식당 정보와 게시글 조회가 가능하며 ‘최애의 학식’에서 제공하는 일부 기능을 이용하지 못한다.

  
4. 소셜로그인을 통해 로그인을 진행 할 수 있으며, 아이디 찾기, 비밀번호 찾기, 비밀번호 재설정 기능을 이용할 수 있고, 비밀번호 찾기에서 이메일을 통한 임시비밀번호 발급을 통해 로그인을 진행할 수 있다.
  <img width="240" alt="스크린샷 2023-12-01 오전 1 28 10" src="https://github.com/yanni13/favorite-school-meal-client/assets/122153297/54409681-c5c4-4ca6-ae60-87780a77df53">
  


  **비밀번호 찾기**
  비밀번호 찾기에서 아이디와 이메일을 입력하면 임시 비밀번호를 가입한 이메일로 발송해준다. 발급받은 임시비밀번호를 통해 로그인을 할 수 있고, 비밀번호 재설정 기능까지 이용할 수 있다.
  
 <img width="240" alt="스크린샷 2023-12-02 오전 1 08 52" src="https://github.com/Favorite-School-Meal/favorite-school-meal-client/assets/122153297/9850d3b0-5742-44a4-bfb7-ca45203578ed">
  <img width="440" alt="스크린샷 2023-12-02 오전 1 14 42" src="https://github.com/Favorite-School-Meal/favorite-school-meal-client/assets/122153297/f763c0c9-c092-4c32-b931-5c540b38ee3e">
 <img width="240" alt="스크린샷 2023-12-02 오전 1 04 43" src="https://github.com/Favorite-School-Meal/favorite-school-meal-client/assets/122153297/da4449c1-a8cf-4e70-b7c5-91f245d633f8">

<img width="440" alt="스크린샷 2023-12-02 오전 1 15 25" src="https://github.com/Favorite-School-Meal/favorite-school-meal-client/assets/122153297/f929f3f6-a931-4607-96ae-9b944f7f03c9">


 
  

5. ‘최애의 학식’사용자는 게시판에 글을 작성할 수 있고 수정, 삭제 할 수 있다.
<img width="240" alt="스크린샷 2023-12-01 오후 11 20 30" src="https://github.com/yanni13/favorite-school-meal-client/assets/122153297/e5b93f4a-57b2-4ff5-8415-cde7202f1b93">


   
6. 식당 조회에서 학교 외 식당, 학교 내 식당 조회가 가능하며 학교 내 식당조회에서는 메뉴까지 조회할 수 있다.
<img width="240" alt="스크린샷 2023-12-01 오후 11 22 13" src="https://github.com/yanni13/favorite-school-meal-client/assets/122153297/e78a06d3-70b1-4d9c-be87-77c9ea15d827">


<img width="240" alt="스크린샷 2023-12-01 오후 11 23 54" src="https://github.com/yanni13/favorite-school-meal-client/assets/122153297/34afcfc1-b9e6-4375-9e5f-046d52716be9">


7. 매칭 게시글에 매칭 상태를 ‘진행중, 마감’ 상태로 표시함으로써 사용자는 매칭상태를 확인하고 매칭 신청을 할 수 있다.
<img width="240" alt="스크린샷 2023-12-01 오후 11 19 24" src="https://github.com/yanni13/favorite-school-meal-client/assets/122153297/bfbe292b-efea-4ee7-926e-16b867a59463">


8. 사용자는 매칭 게시글 안에서 댓글을 달 수 있고 수정, 삭제 또한 가능하다.
<img width="240" alt="스크린샷 2023-12-01 오후 11 00 23" src="https://github.com/yanni13/favorite-school-meal-client/assets/122153297/1de64d0c-9b25-44d7-a1df-b5568821ef1f">


9. 마이페이지에 접속하면 내가 작성한 게시글을 확인할 수 있고, 프로필 수정, 회원탈퇴 기능을 이용할 수 있다.

<img width="240" alt="스크린샷 2023-12-01 오후 11 16 47" src="https://github.com/yanni13/favorite-school-meal-client/assets/122153297/ce008955-9ec3-40a9-bfb9-38377e7578d4">


<img width="237" alt="스크린샷 2023-12-01 오후 11 17 14" src="https://github.com/yanni13/favorite-school-meal-client/assets/122153297/590fbb2d-a317-45ec-a60c-1c0b168647e3">


10. 특정회원 마이페이지에 들어가면 다른 사용자의 프로필, 닉네임, 성별, 나이, 자기소개, 최근 게시글을 볼 수 있다.
<img width="240" alt="스크린샷 2023-12-01 오후 11 16 56" src="https://github.com/yanni13/favorite-school-meal-client/assets/122153297/c1b3a0b5-5784-4a68-ba83-57735e8652c4">


