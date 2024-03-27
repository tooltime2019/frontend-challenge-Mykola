import './QuestionsList.css';
import { Question } from './Question.types';
import { useState, useEffect } from 'react';
import QuestionItem from './QuestionItem';


//fetch data from api
//render it in the list



export default function QuestionsList() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const fetchQuestions = () => {
        const response = fetch(`https://polls.apiblueprint.org/questions`)
            .then((response) => {
                return response.json()
            }).then((data) => {
                setQuestions(data);
                console.log('data: ', data);
            });
        return response;
    }


    useEffect(() => {
        fetchQuestions();
    }, [])


    return (
        <div className="grid-container">

            {questions.map((question) => (
                <QuestionItem length={question.choices.length} published_at={question.published_at} question={question.question} />

            ))}

        </div>
    );

}