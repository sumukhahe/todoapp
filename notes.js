
const fs = require('fs')

var fetchnotes = () => {

    try {

        return JSON.parse(fs.readFileSync('notes.txt'));

    }
    catch (error) {

        return [];
    }

};

var addingnote = (title,body) => {

    var notes = fetchnotes();


    var note ={
        title,
        body
    };

    notes.push(note);

    fs.writeFileSync('notes.txt',JSON.stringify(notes))

};

var removenote = (title) => {

    var notes = fetchnotes();

    var filterednotes = notes.filter((note) => note.title !== title)

    fs.writeFileSync('notes.txt',JSON.stringify(filterednotes))
};

var readnote = (title) => {

    var notes = fetchnotes();

    var filterednotes = notes.filter((note) => note.title === title)

    console.log('Title: '+filterednotes[0].title +'\n'+'Body: ' + filterednotes[0].body);

}

var listnote = () => {

    var notes = fetchnotes();

    console.log(notes)

}

module.exports ={

    addingnote,
    removenote,
    readnote,
    listnote
}
