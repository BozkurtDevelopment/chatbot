/*
-------------------------------------------
          © Copyright 2023
          Bozkurt Development
-------------------------------------------
*/


const chatbot = {
    knowledgeBase: {},
    unknownAnswers: [],

    add(question, answer) {
        this.knowledgeBase[question] = answer;
    },

    question(userInput) {
        if (this.knowledgeBase.hasOwnProperty(userInput)) {
            return this.knowledgeBase[userInput];
        } else {
            return this.getRandomUnknownAnswer();
        }
    },

    addUnknownAnswer(answer) {
        this.unknownAnswers.push(answer);
    },

    getRandomUnknownAnswer() {
        if (this.unknownAnswers.length > 0) {
        const randomIndex = Math.floor(Math.random() * this.unknownAnswers.length);
        return this.unknownAnswers[randomIndex];
        } else {
            return 'Bilmiyorum.'
        }
    }
};

module.exports = chatbot;
