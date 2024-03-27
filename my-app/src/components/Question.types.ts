export interface Choice {
    choice: string;
    url: string;
    votes: number;
}

export interface Question {
    question: string;
    published_at: string;
    choices: Choice[];
}