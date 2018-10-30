var users = [
    {
        name: 'Lucy',
        gender: 'F',
        hobby: 'pets',
        avatar:'avatar1.jpg'
    },
    {
        name: 'Betty',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar2.jpeg'
    },
    {
        name: 'Ronald',
        gender: 'M',
        hobby: 'music',
        avatar: 'avatar3.jpeg'
    },
    {
        name: 'Christopher',
        gender: 'M',
        hobby: 'sports',
        avatar: 'avatar4.png'
    },
    {
        name: 'Ximena',
        gender: 'F',
        hobby: 'reading',
        avatar: 'avatar5.jpeg'
    },
    {
        name: 'Paul',
        gender: 'M',
        hobby: 'shopping',
        avatar: 'avatar6.jpeg'
    },
    {
        name: 'Charlie',
        gender: 'M',
        hobby: 'pets',
        avatar: 'avatar7.png'
    },

]

window.addEventListener('load',function() {

    var results = document.getElementById('results');

    function search() {
        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;

        //get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;

        var resultsHtml = '';
        var usersLength = users.length;

        for(var i = 0; i < usersLength;i++){

            if(gender == 'A' || gender == users[i].gender){

                if(hobby == '' || hobby == users[i].hobby){

                    resultsHtml += '<div class="person-row">\
                    <img src="images/' + users[i].avatar + '" width=50 />\
                    <div class="person-info">\
                        <div>' + users[i].name + '</div>\
                        <div>' + users[i].hobby + '</div>\
                    </div>\
                    <button>Add as friend</button>\
                </div>';
                }
            }
        }

        results.innerHTML = resultsHtml;
    }

    var searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click',search);

});