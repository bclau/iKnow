function questionViewModel (id_p, domainID_p, question_p, answer1_p, answer2_p, answer3_p, answer4_p, correct_p) {
    this.questionID = ko.observable(id_p);
    this.domainID   = ko.observable(domainID_p);
    this.question   = ko.observable(question_p);
    this.answer1    = ko.observable(answer1_p);
    this.answer2    = ko.observable(answer2_p);
    this.answer3    = ko.observable(answer3_p);
    this.answer4    = ko.observable(answer4_p);
    this.correct    = ko.observable(correct_p);
}

function domainViewModel (domainID_p, name_p) {
    this.domainID = ko.observable(domainID_p);
    this.name     = ko.observable(name_p);
}

function playerViewModel(playerID_p, name_p, score_p, gamesPlayed_p, avatar_p){
    this.playerID      = ko.observable("playerID_p");
    this.name_p        = ko.observable("name_p");
    this.avatar        = ko.observable("avatar_p");
    this.score_p       = ko.observable("score_p");
    this.gamesPlayed_p = ko.observable("gamesPlayed_p");
}

function suggestedQuestionViewModel(suggestedQuestionID_p, suggestedQuestion_p, suggestedAnswer_p){
    this.suggestedQuestionID = ko.observable("suggestedQuestionID_p");
    this.suggestedQuestion   = ko.observable("suggestedQuestion_p");
    this.suggestedAnswer     = ko.observable("suggestedAnswer_p");
}


var question = document.getElementById("questionView");

ko.applyBindings(new questionViewModel("1","2","4",4,5,6,7,8), question);