import React, { useState } from 'react';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);

    const questions = [
        {
            questionText: 'What is the difference between margin and padding in CSS?',
            options: [
                'Margin adds space outside the border, while padding adds space inside the border.',
                'Margin adds space inside the border, while padding adds space outside the border.',
                'Margin and padding are the same thing.',
                'Margin is used for vertical spacing, while padding is used for horizontal spacing.'
            ],
            correctAnswer: 'Margin adds space outside the border, while padding adds space inside the border.'
        },
        {
            questionText: 'What is the purpose of the "box-shadow" property in CSS?',
            options: [
                'To add a shadow to the border of an element.',
                'To change the background color of an element.',
                'To adjust the spacing between elements.',
                'To rotate an element on the page.'
            ],
            correctAnswer: 'To add a shadow to the border of an element.'
        },
        {
            questionText: 'What does the acronym "API" stand for?',
            options: [
                'Application Programming Interface',
                'Active Page Integration',
                'Advanced Programming Interface',
                'Automated Package Installer'
            ],
            correctAnswer: 'Application Programming Interface'
        },
        {
            questionText: 'Which of the following is not a programming language commonly used for front-end development?',
            options: [
                'HTML',
                'CSS',
                'JavaScript',
                'Python'
            ],
            correctAnswer: 'Python'
        },
        {
            questionText: 'What does the acronym "HTTP" stand for?',
            options: [
                'Hypertext Transfer Protocol',
                'Hyperlink Text Transfer Protocol',
                'Hypertext Testing Protocol',
                'Hyperlink Testing Protocol'
            ],
            correctAnswer: 'Hypertext Transfer Protocol'
        },

        // Add more questions here
    ];

    const handleAnswerOptionClick = (selectedAnswer) => {
        setSelectedOption(selectedAnswer);
    };

    const handleNextQuestion = () => {
        if (selectedOption !== null) {
            if (selectedOption === questions[currentQuestion].correctAnswer) {
                setScore(score + 1);
            }
            setSelectedOption(null);
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handleSubmitQuiz = () => {
        if (selectedOption !== null) {
            if (selectedOption === questions[currentQuestion].correctAnswer) {
                setScore(score + 1);
            }
            setCurrentQuestion(questions.length);
        }
    };

    return (
        <div className="quiz">
            <h2 className="quiz-title"></h2>
            {currentQuestion < questions.length ? (
                <>
                    <div className="question">
                        <h3>{questions[currentQuestion].questionText}</h3>
                    </div>
                    <div className="answer-options">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                className={`answer-option ${selectedOption === option ? 'selected' : ''
                                    }`}
                                onClick={() => handleAnswerOptionClick(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    {selectedOption !== null ? (
                        <button className="next-button" onClick={handleNextQuestion}>
                            Next Question
                        </button>
                    ) : (
                        <p className="info-text">Please select an answer</p>
                    )}
                </>
            ) : (
                <div className="quiz-completed">
                    <h3>Quiz Completed!</h3>
                    <p className="score">Your score: {score}/{questions.length}</p>
                    <button className="submit-button" onClick={handleSubmitQuiz}>
                        Submit Quiz
                    </button>
                </div>
            )}
        </div>
    );
};

export default Quiz;
