export const questions = [
    // --- Risk Axis (Aggressive vs Defensive) --- (Total 8)
    { id: 1, axis: "risk", question: "내가 산 종목이 갑자기 -10% 하락했다면?", image: "https://picsum.photos/seed/down1/800/400", options: [{ text: "추가 매입의 기회! 더 지른다.", value: "A" }, { text: "손절가 확인 후 대응한다.", value: "D" }] },
    { id: 2, axis: "risk", question: "여유 자금 1000만원이 생겼다. 어디에 투자할까?", image: "https://picsum.photos/seed/money/800/400", options: [{ text: "상한가 노리는 변동성 큰 급등주", value: "A" }, { text: "배당 잘 주는 우량주나 지수 ETF", value: "D" }] },
    { id: 3, axis: "risk", question: "수익이 났다! 언제 매매를 마무리할까?", image: "https://picsum.photos/seed/success/800/400", options: [{ text: "끝까지 발라먹어야지, 수익 극대화!", value: "A" }, { text: "무릎에 사서 어깨에 팔기, 분할 매도", value: "D" }] },
    { id: 4, axis: "risk", question: "재산의 대부분을 주식에 넣는 것에 대해 어떻게 생각하나?", image: "https://picsum.photos/seed/allin/800/400", options: [{ text: "인생은 한 방, 집중 투자가 답이다.", value: "A" }, { text: "계란은 여러 바구니에, 분산 투자가 필수.", value: "D" }] },
    { id: 17, axis: "risk", question: "대출을 받아서 주식을 하는 '레버리지' 투자를 어떻게 생각하나?", image: "https://picsum.photos/seed/risk5/800/400", options: [{ text: "수익 극대화를 위해 적절히 활용한다.", value: "A" }, { text: "절대 금지, 빚내서 하는 투자는 파멸이다.", value: "D" }] },
    { id: 18, axis: "risk", question: "신규 상장주(IPO)가 따상을 노리고 상장한다면?", image: "https://picsum.photos/seed/risk6/800/400", options: [{ text: "불나방처럼 달려들어 한 입 크게 먹는다.", value: "A" }, { text: "거품이 빠질 때까지 관망한다.", value: "D" }] },
    { id: 19, axis: "risk", question: "친한 친구가 대박 정보라고 추천해준 급등주가 있다면?", image: "https://picsum.photos/seed/risk7/800/400", options: [{ text: "일단 묻지마 매수 후 상황을 본다.", value: "A" }, { text: "리스크가 너무 크다. 무시한다.", value: "D" }] },
    { id: 20, axis: "risk", question: "나의 주식 계좌가 -50%를 찍고 있다면?", image: "https://picsum.photos/seed/risk8/800/400", options: [{ text: "언젠간 오르겠지, 영혼까지 끌어모아 물타기한다.", value: "A" }, { text: "뼈아프지만 실패를 인정하고 포트폴리오를 재편한다.", value: "D" }] },

    // --- Analysis Axis (Technical vs Fundamental) --- (Total 8)
    { id: 5, axis: "analysis", question: "[지식 퀴즈] 기업의 시가총액을 순자산으로 나눈 값(PBR)이 1보다 낮다는 것은?", image: "https://picsum.photos/seed/chart/800/400", options: [{ text: "차트가 바닥권이라는 매수 신호다.", value: "T" }, { text: "회사의 자산가치 대비 주가가 저평가된 상태다.", value: "F" }] },
    { id: 6, axis: "analysis", question: "종목을 고를 때 가장 먼저 보는 것은?", image: "https://picsum.photos/seed/search/800/400", options: [{ text: "정배열, 골든크로스 등 차트의 모양", value: "T" }, { text: "매출 성장성, PER, 영업이익률", value: "F" }] },
    { id: 7, axis: "analysis", question: "[지식 퀴즈] 주가 이동평균선이 골든크로스를 그렸다면?", image: "https://picsum.photos/seed/graph/800/400", options: [{ text: "단기적으로 강한 상승 추세 진입을 뜻한다.", value: "T" }, { text: "회사의 펀더멘털이 개선되었다는 뜻이다.", value: "F" }] },
    { id: 8, axis: "analysis", question: "주식이 오를 때 내가 느끼는 감정은?", image: "https://picsum.photos/seed/happy/800/400", options: [{ text: "수급이 붙었네, 역시 차트는 정직해!", value: "T" }, { text: "내 분석이 맞았어, 기업 가치는 변하지 않아!", value: "F" }] },
    { id: 21, axis: "analysis", question: "[지식 퀴즈] 자기자본을 얼마나 알차게 사용했는지 알려주는 지표(ROE)가 높다면?", image: "https://picsum.photos/seed/ana5/800/400", options: [{ text: "거래량이 터지기 직전의 전조 현상이다.", value: "T" }, { text: "회사가 장사를 아주 효율적으로 잘하고 있다는 뜻이다.", value: "F" }] },
    { id: 22, axis: "analysis", question: "주식 차트에서 '거래량'이 터진 장대양봉이 나타났다면?", image: "https://picsum.photos/seed/ana6/800/400", options: [{ text: "강한 매수 신호! 추격 매수를 준비한다.", value: "T" }, { text: "분명 호재가 있을 것이다. 재무제표와 공시를 확인한다.", value: "F" }] },
    { id: 23, axis: "analysis", question: "회사의 실적 발표 시 '어닝 서프라이즈'가 떴다면?", image: "https://picsum.photos/seed/ana7/800/400", options: [{ text: "재료 소멸인지, 추가 상승 차트인지 분석한다.", value: "T" }, { text: "회사의 내재 가치가 한 단계 점프했음을 확신한다.", value: "F" }] },
    { id: 24, axis: "analysis", question: "유명한 가치투자자의 철학과 현란한 트레이더의 기법 중 더 끌리는 쪽은?", image: "https://picsum.photos/seed/ana8/800/400", options: [{ text: "차트로 세력의 머리 위에 올라타는 기법", value: "T" }, { text: "숫자로 기업의 진짜 가치를 증명하는 철학", value: "F" }] },

    // --- Speed Axis (Short-term vs Long-term) --- (Total 8)
    { id: 9, axis: "speed", question: "주식 앱을 하루에 얼마나 자주 열어보나?", image: "https://picsum.photos/seed/phone/800/400", options: [{ text: "장 중에는 거의 켜놓고 산다.", value: "S" }, { text: "가끔 생각날 때나 종가 정도만 확인한다.", value: "L" }] },
    { id: 10, axis: "speed", question: "내가 선호하는 매매 호흡은?", image: "https://picsum.photos/seed/fast/800/400", options: [{ text: "당일 결판을 내야 잠이 잘 온다.", value: "S" }, { text: "수개월, 길게는 수년을 기다릴 수 있다.", value: "L" }] },
    { id: 11, axis: "speed", question: "10% 수익이 났다! 언제 매매를 마무리할까?", image: "https://picsum.photos/seed/sell/800/400", options: [{ text: "이 정도면 충분해, 바로 익절!", value: "S" }, { text: "이제 시작일 뿐, 목표가까지 존버!", value: "L" }] },
    { id: 12, axis: "speed", question: "주말 휴장일에 드는 생각은?", image: "https://picsum.photos/seed/weekend/800/400", options: [{ text: "월요일이 빨리 와서 매매하고 싶다.", value: "S" }, { text: "주식은 잊고 푹 쉬는 게 최고다.", value: "L" }] },
    { id: 25, axis: "speed", question: "1년 뒤 100% 수익과 내일 10% 수익 중 고른다면?", image: "https://picsum.photos/seed/speed5/800/400", options: [{ text: "당장 내일 수익 실현하는 10%!", value: "S" }, { text: "시간을 견뎌서 얻는 100%!", value: "L" }] },
    { id: 26, axis: "speed", question: "주식 투자에서 가장 중요한 미덕은?", image: "https://picsum.photos/seed/speed6/800/400", options: [{ text: "번개 같은 결단력과 빠른 손놀림", value: "S" }, { text: "흔들리지 않는 침착함과 기다림", value: "L" }] },
    { id: 27, axis: "speed", question: "점심시간, 동료들이 주식 이야기를 할 때 나는?", image: "https://picsum.photos/seed/speed7/800/400", options: [{ text: "방금 전 매매 상황을 중계하느라 바쁘다.", value: "S" }, { text: "나의 포트폴리오는 평온하다. 조용히 듣기만 한다.", value: "L" }] },
    { id: 28, axis: "speed", question: "은행의 '정기 예금' 3년을 넣는 것을 어떻게 생각하나?", image: "https://picsum.photos/seed/speed8/800/400", options: [{ text: "돈이 묶이는 게 너무 지루하고 답답하다.", value: "S" }, { text: "안전하게 불려 나가는 좋은 방식이다.", value: "L" }] },

    // --- Source Axis (Independent vs External) --- (Total 8)
    { id: 13, axis: "source", question: "[지식 퀴즈] '공시' 시스템을 통해 주로 확인하는 정보는?", image: "https://picsum.photos/seed/dart/800/400", options: [{ text: "유명 유튜버가 설명해주는 요약 내용", value: "E" }, { text: "금융감독원(DART)의 정기 보고서 원문", value: "I" }] },
    { id: 14, axis: "source", question: "새로운 종목을 발견하는 주된 통로는?", image: "https://picsum.photos/seed/news/800/400", options: [{ text: "스크리너를 돌려 직접 발굴한다.", value: "I" }, { text: "리포트, 뉴스, 커뮤니티 추천을 참고한다.", value: "E" }] },
    { id: 15, axis: "source", question: "매수 버튼을 누르기 직전, 나는?", image: "https://picsum.photos/seed/buy/800/400", options: [{ text: "내가 분석한 근거를 다시 확인한다.", value: "I" }, { text: "좋다고 추천한 멘토의 말을 다시 떠올린다.", value: "E" }] },
    { id: 16, axis: "source", question: "손실이 났을 때 방문하는 곳은?", image: "https://picsum.photos/seed/sad/800/400", options: [{ text: "나의 매매 복기 노트", value: "I" }, { text: "네이버 종목토론방 (위로와 정보 습득)", value: "E" }] },
    { id: 29, axis: "source", question: "어떤 회사가 '글로벌 잭팟' 계약을 맺었다는 지라시가 돌고 있다면?", image: "https://picsum.photos/seed/sou5/800/400", options: [{ text: "관련 데이터를 뜯어보며 팩트 체크를 한다.", value: "I" }, { text: "주변의 반응과 전문가들의 해석을 찾아본다.", value: "E" }] },
    { id: 30, axis: "source", question: "주식 고수와 나, 단 둘이 무인도에 있다면?", image: "https://picsum.photos/seed/sou6/800/400", options: [{ text: "혼자서 낚시 도구를 만들어 물고기를 잡는다.", value: "I" }, { text: "고수의 낚시 비법을 물어보고 시키는 대로 한다.", value: "E" }] },
    { id: 31, axis: "source", question: "기업 탐방을 갈 기회가 생긴다면?", image: "https://picsum.photos/seed/sou7/800/400", options: [{ text: "직접 공장문을 두드리고 IR 담당자를 몰아붙인다.", value: "I" }, { text: "블로거들의 탐방기나 증권사 리포트 요약을 기다린다.", value: "E" }] },
    { id: 32, axis: "source", question: "유료 리딩방이나 멤버십 서비스에 대해 어떻게 생각하나?", image: "https://picsum.photos/seed/sou8/800/400", options: [{ text: "그런 도움 없이도 내 분석만으로 충분하다.", value: "I" }, { text: "빠르고 정확한 고급 유료 정보는 돈값이 된다.", value: "E" }] }
];
