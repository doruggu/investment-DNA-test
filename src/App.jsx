import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, BarChart2, Zap, Layout, Share2, RefreshCcw } from 'lucide-react';
import { questions } from './data/questions';
import { results } from './data/results';
import AdSense from './components/AdSense';
import './App.css';

function App() {
    const [step, setStep] = useState('landing'); // landing, quiz, result
    const [currentIdx, setCurrentIdx] = useState(0);
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [scores, setScores] = useState({
        risk: { A: 0, D: 0 },
        analysis: { T: 0, F: 0 },
        speed: { S: 0, L: 0 },
        source: { I: 0, E: 0 }
    });

    const startQuiz = () => {
        // Pick 4 random questions from each axis to make a 16-question set
        const shuffle = (array) => array.sort(() => Math.random() - 0.5);

        const axes = ['risk', 'analysis', 'speed', 'source'];
        const selected = [];

        axes.forEach(axis => {
            const filtered = questions.filter(q => q.axis === axis);
            const shuffledAxis = shuffle([...filtered]);
            selected.push(...shuffledAxis.slice(0, 4));
        });

        // Final shuffle of the combined 16 questions
        setQuizQuestions(shuffle(selected));
        setStep('quiz');
        setCurrentIdx(0);
        setScores({
            risk: { A: 0, D: 0 },
            analysis: { T: 0, F: 0 },
            speed: { S: 0, L: 0 },
            source: { I: 0, E: 0 }
        });
    };

    const handleAnswer = (value) => {
        const axis = quizQuestions[currentIdx].axis;
        setScores(prev => ({
            ...prev,
            [axis]: { ...prev[axis], [value]: prev[axis][value] + 1 }
        }));

        if (currentIdx < quizQuestions.length - 1) {
            setCurrentIdx(currentIdx + 1);
        } else {
            setStep('result');
        }
    };

    const getResultKey = () => {
        const r = scores.risk.A >= scores.risk.D ? 'A' : 'D';
        const a = scores.analysis.T >= scores.analysis.F ? 'T' : 'F';
        const s = scores.speed.S >= scores.speed.L ? 'S' : 'L';
        const i = scores.source.I >= scores.source.E ? 'I' : 'E';
        return `${r}${a}${s}${i}`;
    };

    const result = results[getResultKey()] || results["AFLI"];

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        alert('링크가 복사되었습니다!');
    };

    return (
        <div className="app-container">
            <AnimatePresence mode="wait">
                {step === 'landing' && (
                    <motion.div
                        key="landing"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="hero-section"
                    >
                        <div style={{ marginBottom: '20px', color: '#00ff88' }}>
                            <TrendingUp size={48} />
                        </div>
                        <h1 className="hero-title">Investment DNA Test</h1>
                        <p className="hero-subtitle">
                            당신은 굶주린 사자인가요, 아니면 지혜로운 거북이인가요?<br />
                            12가지 질문으로 알아보는 나의 투자 MBTI
                        </p>
                        <button className="btn-primary" onClick={startQuiz} style={{ marginBottom: '30px' }}>
                            테스트 시작하기
                        </button>
                        <AdSense adSlot="LANDING_AD_SLOT" />
                        <div className="footer">Produced by Antigravity Studio</div>
                    </motion.div>
                )}

                {step === 'quiz' && (
                    <motion.div
                        key="quiz"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="glass-card"
                    >
                        <div className="progress-container">
                            <div
                                className="progress-bar"
                                style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }}
                            ></div>
                        </div>
                        <p style={{ color: '#888', marginBottom: '10px', fontSize: '0.9rem' }}>
                            {currentIdx + 1} / {quizQuestions.length}
                        </p>

                        {quizQuestions[currentIdx] && quizQuestions[currentIdx].image && (
                            <div className="question-image-container">
                                <img src={quizQuestions[currentIdx].image} alt="meme" className="question-image" />
                            </div>
                        )}

                        {quizQuestions[currentIdx] && (
                            <>
                                <h2 className="question-text">{quizQuestions[currentIdx].question}</h2>
                                <div className="options-container">
                                    {quizQuestions[currentIdx].options.map((opt, i) => (
                                        <button
                                            key={i}
                                            className="option-btn"
                                            onClick={() => handleAnswer(opt.value)}
                                        >
                                            {opt.text}
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                        <AdSense adSlot="QUIZ_AD_SLOT" />
                    </motion.div>
                )}

                {step === 'result' && (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass-card result-card"
                    >
                        <AdSense adSlot="RESULT_TOP_AD_SLOT" />
                        <div className="result-header">
                            <span className="result-tag">{result.tag}</span>
                            <h1 className="result-title">{result.title}</h1>
                        </div>

                        <div className="result-emoji">
                            {result.emoji}
                        </div>

                        <p className="result-desc">{result.description}</p>

                        <div className="mbti-chart">
                            {Object.entries({
                                risk: ['A', 'D', '공격', '방어'],
                                analysis: ['T', 'F', '기술', '가치'],
                                speed: ['S', 'L', '단기', '장기'],
                                source: ['I', 'E', '독립', '의존']
                            }).map(([axis, [v1, v2, l1, l2]]) => {
                                const total = scores[axis][v1] + scores[axis][v2];
                                const p1 = Math.round((scores[axis][v1] / total) * 100) || 50;
                                const p2 = 100 - p1;
                                return (
                                    <div key={axis} className="mbti-bar-row">
                                        <div className="mbti-label-left">
                                            <span className="mbti-type">{v1}</span>
                                            <span className="mbti-desc">{l1} {p1}%</span>
                                        </div>
                                        <div className="mbti-bar-bg">
                                            <div className="mbti-bar-fill" style={{ width: `${p1}%` }}></div>
                                        </div>
                                        <div className="mbti-label-right">
                                            <span className="mbti-desc">{p2}% {l2}</span>
                                            <span className="mbti-type">{v2}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '30px' }}>
                            <button className="btn-primary share-btn" onClick={copyLink}>
                                <Share2 size={18} style={{ marginRight: '8px' }} /> 공유하기
                            </button>
                            <button className="btn-primary share-btn" style={{ background: '#222', color: '#fff' }} onClick={startQuiz}>
                                <RefreshCcw size={18} style={{ marginRight: '8px' }} /> 다시하기
                            </button>
                        </div>

                        <AdSense adSlot="RESULT_BOTTOM_AD_SLOT" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
