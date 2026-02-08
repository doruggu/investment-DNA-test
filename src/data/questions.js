export const questions = [
    // --- Risk Axis (Aggressive vs Defensive) ---
    {
        id: 1,
        question: "내가 산 종목이 갑자기 -10% 하락했다면?",
        axis: "risk",
        image: "https://images.unsplash.com/photo-1628532102741-26a2df954bb5?auto=format&fit=crop&w=800&q=80", // Panic/Down
        options: [
            { text: "추가 매입의 기회! 더 지른다.", value: "A" },
            { text: "손절가 확인 후 대응한다.", value: "D" }
        ]
    },
    {
        id: 2,
        question: "여유 자금 1000만원이 생겼다. 어디에 투자할까?",
        axis: "risk",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80", // Money/Rich
        options: [
            { text: "상한가 노리는 변동성 큰 급등주", value: "A" },
            { text: "배당 잘 주는 우량주나 지수 ETF", value: "D" }
        ]
    },
    {
        id: 3,
        question: "수익이 났다! 언제 매매를 마무리할까?",
        axis: "risk",
        image: "https://images.unsplash.com/photo-1579532536935-619928decd08?auto=format&fit=crop&w=800&q=80", // Celebration
        options: [
            { text: "끝까지 발라먹어야지, 수익 극대화!", value: "A" },
            { text: "무릎에 사서 어깨에 팔기, 분할 매도", value: "D" }
        ]
    },
    {
        id: 4,
        question: "재산의 대부분을 주식에 넣는 것에 대해 어떻게 생각하나?",
        axis: "risk",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80", // Portfolio Focus
        options: [
            { text: "인생은 한 방, 집중 투자가 답이다.", value: "A" },
            { text: "계란은 여러 바구니에, 분산 투자가 필수.", value: "D" }
        ]
    },

    // --- Analysis Axis (Technical vs Fundamental) ---
    {
        id: 5,
        question: "[지식 퀴즈] 기업의 시가총액을 순자산으로 나눈 값(PBR)이 1보다 낮다는 것은?",
        axis: "analysis",
        image: "https://images.unsplash.com/photo-1611095777215-dec8c7d81a96?auto=format&fit=crop&w=800&q=80", // Business/Analysis
        options: [
            { text: "차트가 바닥권이라는 매수 신호다.", value: "T" },
            { text: "회사의 자산가치 대비 주가가 저평가된 상태다.", value: "F" }
        ]
    },
    {
        id: 6,
        question: "종목을 고를 때 가장 먼저 보는 것은?",
        axis: "analysis",
        image: "https://images.unsplash.com/photo-1640341719021-98759bb81045?auto=format&fit=crop&w=800&q=80", // Research/Examining
        options: [
            { text: "정배열, 골든크로스 등 차트의 모양", value: "T" },
            { text: "매출 성장성, PER, 영업이익률", value: "F" }
        ]
    },
    {
        id: 7,
        question: "[지식 퀴즈] 주가 이동평균선이 골든크로스를 그렸다면?",
        axis: "analysis",
        image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=800&q=80", // Chart/Stock
        options: [
            { text: "단기적으로 강한 상승 추세 진입을 뜻한다.", value: "T" },
            { text: "회사의 펀더멘털이 개선되었다는 뜻이다.", value: "F" }
        ]
    },
    {
        id: 8,
        question: "주식이 오를 때 내가 느끼는 감정은?",
        axis: "analysis",
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=800&q=80", // Bitcoin/Stock Up
        options: [
            { text: "수급이 붙었네, 역시 차트는 정직해!", value: "T" },
            { text: "내 분석이 맞았어, 기업 가치는 변하지 않아!", value: "F" }
        ]
    },

    // --- Speed Axis (Short-term vs Long-term) ---
    {
        id: 9,
        question: "주식 앱을 하루에 얼마나 자주 열어보나?",
        axis: "speed",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80", // Mobile Phone
        options: [
            { text: "장 중에는 거의 켜놓고 산다.", value: "S" },
            { text: "가끔 생각날 때나 종가 정도만 확인한다.", value: "L" }
        ]
    },
    {
        id: 10,
        question: "내가 선호하는 매매 호흡은?",
        axis: "speed",
        image: "https://images.unsplash.com/photo-1508962942671-0bdb31d1f1b0?auto=format&fit=crop&w=800&q=80", // Quick/Slow
        options: [
            { text: "당일 결판을 내야 잠이 잘 온다.", value: "S" },
            { text: "수개월, 길게는 수년을 기다릴 수 있다.", value: "L" }
        ]
    },
    {
        id: 11,
        question: "10% 수익이 났다! 언제 매매를 마무리할까?",
        axis: "speed",
        image: "https://images.unsplash.com/photo-1542222024-c39e2281f121?auto=format&fit=crop&w=800&q=80", // Success Target
        options: [
            { text: "이 정도면 충분해, 바로 익절!", value: "S" },
            { text: "이제 시작일 뿐, 목표가까지 존버!", value: "L" }
        ]
    },
    {
        id: 12,
        question: "주말 휴장일에 드는 생각은?",
        axis: "speed",
        image: "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5c?auto=format&fit=crop&w=800&q=80", // Waiting/Rest
        options: [
            { text: "월요일이 빨리 와서 매매하고 싶다.", value: "S" },
            { text: "주식은 잊고 푹 쉬는 게 최고다.", value: "L" }
        ]
    },

    // --- Source Axis (Independent vs External) ---
    {
        id: 13,
        question: "[지식 퀴즈] '공시' 시스템을 통해 주로 확인하는 정보는?",
        axis: "source",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80", // Contract/Legal
        options: [
            { text: "유명 유튜버가 설명해주는 요약 내용", value: "E" },
            { text: "금융감독원(DART)의 정기 보고서 원문", value: "I" }
        ]
    },
    {
        id: 14,
        question: "새로운 종목을 발견하는 주된 통로는?",
        axis: "source",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80", // Discovery/New
        options: [
            { text: "스크리너를 돌려 직접 발굴한다.", value: "I" },
            { text: "리포트, 뉴스, 커뮤니티 추천을 참고한다.", value: "E" }
        ]
    },
    {
        id: 15,
        question: "매수 버튼을 누르기 직전, 나는?",
        axis: "source",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", // Business Laptop
        options: [
            { text: "내가 분석한 근거를 다시 확인한다.", value: "I" },
            { text: "좋다고 추천한 멘토의 말을 다시 떠올린다.", value: "E" }
        ]
    },
    {
        id: 16,
        question: "손실이 났을 때 방문하는 곳은?",
        axis: "source",
        image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=800&q=80", // Community/Gathering
        options: [
            { text: "나의 매매 복기 노트", value: "I" },
            { text: "네이버 종목토론방 (위로와 정보 습득)", value: "E" }
        ]
    }
];
