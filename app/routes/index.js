import Route from '@ember/routing/route';

export default Route.extend({
    model: function() {
        var questions = [{
            id: 1,
            question: "Who is this?",
            user: "Ravi Kumar",
            avatar: "https://randomuser.me/api/portraits/thumb/lego/5.jpg",
            note: ""
        },{
            id: 2,
            question: "Who is this?",
            user: "Ravi Kumar",
            avatar: "https://randomuser.me/api/portraits/thumb/lego/3.jpg",
            note: ""
        },{
            id: 3,
            question: "Who is this?",
            user: "Ravi Kumar",
            avatar: "https://randomuser.me/api/portraits/thumb/lego/2.jpg",
            note: ""
        },{
            id: 4,
            question: "Who is this?",
            user: "Ravi Kumar",
            avatar: "https://randomuser.me/api/portraits/thumb/lego/1.jpg",
            note: ""
        },{
            id: 5,
            question: "Who is this?",
            user: "Ravi Kumar",
            avatar: "https://randomuser.me/api/portraits/thumb/lego/4.jpg",
            note: ""
        },{
            id: 6,
            question: "Who is this?",
            user: "Ravi Kumar",
            avatar: "https://randomuser.me/api/portraits/thumb/lego/8.jpg",
            note: ""
        }];
        return questions;
    }
});
