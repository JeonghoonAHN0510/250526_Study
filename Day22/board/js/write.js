function boardWrite(){
    console.log('----boardWrite----');
    // 1. 입력 마크업 객체 가져오기
    const titleInput = document.querySelector('#titleInput');
    const contentInput = document.querySelector('#contentInput');
    const pwdInput = document.querySelector('#pwdInput');
    // 2. 입력 마크업의 입력값 가져오기
    const title = titleInput.value;
    const content = contentInput.value;
    const pwd = pwdInput.value;
    // 3. 객체화
    const obj = {
        title,
        content,
        pwd
    };      // 속성명과 속성값이 같다면, 속성명 생략 가능
    // 4. localStorage에서 배열 가져오기 -> 나중에 함수로 간단하게 정리
    let boardList = localStorage.getItem('boardList');
    if ( boardList == null ){
        boardList = [];
    }else {
        boardList = JSON.parse( boardList );
    }
    // 자동 게시물 번호 부여
    obj.no = boardList.length == 0 ? 1 : boardList[boardList.length - 1].no + 1;
    // 5. 객체를 배열에 저장
    boardList.push( obj );
    // 6. localStorage에 배열 저장하기
    localStorage.setItem('boardList', JSON.stringify(boardList));
    // 7. 기타 등등
    alert('게시물 작성 성공');
    location.href = 'list.html';    // 글쓰기 성공 시, 'list.html'로 이동
}

//==============================localStorage에서 boardList 가져오는 함수 만들어보기======================================