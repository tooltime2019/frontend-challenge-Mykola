import { Modal } from './Modal';
import { Question } from './Question.types';
import { useState } from 'react';

export default function QuestionItem(questionData: { question: string; published_at: string; length: number }) {
    const [isModelOpen, setIsModelOpen] = useState<Boolean>();


    return (<div className="grid-item" key={Math.random()} onClick={() => {
        setIsModelOpen(!isModelOpen);
    }}>
        {isModelOpen && <div> Modal view</div>}
        <h1>{questionData.question}</h1>
        <div>{questionData.published_at}</div>
        <div>{questionData.length}</div>
    </div>);
}