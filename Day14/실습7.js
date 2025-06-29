// [ 실습7 요구사항]
// 키오스크 주문 시스템을 위한 설계하는 임무를 맡았습니다.
// 이 카페는 고객이 키오스크를 통해 직접 음료와 디저트를 주문하고 결제하는 시스템을 도입하고자 합니다.
// 카페의 운영 방침과 키오스크의 기능 요구사항은 다음과 같습니다.

// 메뉴 구성: 메뉴는 "커피", "티", "베이커리" 와 같은 카테고리로 명확하게 구분됩니다.
// 제품 정보: 각 제품은 이름, 가격, 그리고 키오스크에 표시될 이미지 정보를 가집니다. 때때로 특정 메뉴가 품절될 수 있어, 판매 가능 여부를 관리해야 합니다.
// 주문 방식: 고객은 한 번의 주문에 여러 종류의 제품을 담을 수 있습니다. 예를 들어, 아이스 아메리카노 2잔과 소금빵 1개를 함께 주문할 수 있습니다.
// 주문 기록: 모든 주문은 고유한 주문 번호와 함께 주문 시간, 최종 결제 금액이 기록되어야 합니다.
// 가격 변동: 제품의 가격은 향후 변동될 수 있습니다. 따라서 주문 내역을 조회할 때는, 가격이 오르거나 내리더라도 주문 당시의 가격을 기준으로 표시할 수 있어야 합니다.

// 1. 스프레드시트에 예제와 같이 샘플 데이터를 표로 표현하시오.
// 2. 스프레드시트에서 작성한 표를 참고하여 JS객체로 표현하시오.