// 데이터 인터페이스
export interface IProductTypes {
  id: number;
  name: string;
  price: number;
}
export interface ICartTypes {
  id: number;
  name: string;
  price: number;
  count: number;
}
export const products: IProductTypes[] = [
  { id: 1, name: '휴대용 무선 이어폰', price: 49900 },
  { id: 2, name: '스마트폰 케이스', price: 9900 },
  { id: 3, name: '블루투스 스피커', price: 29900 },
  { id: 4, name: '노트북 스탠드', price: 34900 },
  { id: 5, name: '무선 충전 패드', price: 19900 },
  { id: 6, name: '스마트워치', price: 59900 },
  { id: 7, name: '게이밍 마우스', price: 49900 },
  { id: 8, name: '키보드', price: 44900 },
  { id: 9, name: '플랜트 스탠드', price: 14900 },
  { id: 10, name: '커피 메이커', price: 24900 },
  { id: 11, name: '보조배터리', price: 19900 },
  { id: 12, name: '웹캠', price: 29900 },
  { id: 13, name: '스마트폰 홀더', price: 6900 },
  { id: 14, name: '헤드폰', price: 79900 },
  { id: 15, name: '모니터 스탠드', price: 39900 },
  { id: 16, name: '마우스 패드', price: 9900 },
  { id: 17, name: '이어폰 케이스', price: 3900 },
  { id: 18, name: '무선 키보드', price: 44900 },
  { id: 19, name: '블루투스 이어폰', price: 59900 },
  { id: 20, name: '워크스테이션', price: 99900 },
  { id: 21, name: '노트북 쿨링 패드', price: 27900 },
  { id: 22, name: '스마트폰 케이블', price: 7900 },
  { id: 23, name: '태블릿 스탠드', price: 16900 },
  { id: 24, name: '휴대용 모니터', price: 24900 },
  { id: 25, name: '디지털 카메라', price: 35900 },
  { id: 26, name: '노트북 가방', price: 19900 },
  { id: 27, name: '무선 이어폰 케이스', price: 5900 },
  { id: 28, name: '스마트폰 확대기', price: 9900 },
  { id: 29, name: '게임 컨트롤러', price: 44900 },
  { id: 30, name: '스탠딩 데스크', price: 79900 }
];
