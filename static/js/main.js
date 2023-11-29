
class Book {
    constructor(image, title, author, longDesc, genres, firstPubl, format, published, isbn, lang, supply, status) {
        this.image = image;
        this.title = title;
        this.author = author;
        this.longDesc = longDesc;
        this.genres = genres;
        this.firstPubl = firstPubl;
        this.format = format;
        this.published = published;
        this.isbn = isbn;
        this.lang = lang;
        this.supply = supply;
        this.status = status;
    }
}

fetch('https://xyedvqcuefnbboegrzwa.supabase.co/rest/v1/Books?select=*', {
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5ZWR2cWN1ZWZuYmJvZWdyendhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NjkzNTUyOCwiZXhwIjoyMDAyNTExNTI4fQ.dGcUljOSIuP6JsEmRTZJy1YPnjrsBf9NjzFcKLB5dyI",
        "Content-Type": "application/JSON" 
    }
})
.then((response) => response.json())
.then((result) => { allBooks = result; console.log(allBooks);})

const app = Vue.createApp({
    data() {
        return {
            signUp: false,
            role: 'student',
            recommendedBooks: [{
                image: "images/Engravings.png",
                tags: ['Medicine'],
                title: "Engravings of the Bones, Muscles, and Joints",
                author: "John Bell"
            },
            {
                image: "images/Western Philosophy.png",
                tags: ['Philosophy', 'History'],
                title: "A History of Western Philosophy",
                author: "Bertrand Russell"
            },
            {
                image: "images/Orthopaedics.png",
                tags: ['Physiotherapy'],
                title: "Essentials of Orthopaedics and Applied Physiotherapy ",
                author: "Jayant Joshi"
            }],
            requestedBooks: [{
                image: "images/Obstetrics.png",
                title: "Basic Sciences for Obstetrics and Gynaecology",
                author: "Tim Chard"
            },{
                image: "images/Operations Research.png",
                title: "Operation research: An Introduction",
                author: "Hamdy A.Taha"
            },{
                image: "images/Statistical Learning.png",
                title: "The Elements of Statistical Learning",
                author: "Robert Fri"
            },{
                image: "images/Mathematical Programming.png",
                title: "Introduction to Mathematical Programming",
                author: "Wayne Winston"
            },{
                image: "images/UML.png",
                title: "An Introduction to Object-Oriented Modeling",
                author: "Martina Seidl"
            }],
            libraryBooks: [{
                image: "images/Engravings.png",
                tags: ['Medicine'],
                shortDesc: "Engravings of the Bones, Muscles, and Joints",
                author: "John Bell"
            },
            {
                image: "images/Western Philosophy.png",
                tags: ['Philosophy', 'History'],
                shortDesc: "A History of Western Philosophy",
                author: "Bertrand Russell"
            },
            {
                image: "images/Orthopaedics.png",
                tags: ['Physiotherapy'],
                shortDesc: "Essentials of Orthopaedics and Applied Physiotherapy ",
                author: "Jayant Joshi"
            },
            {
                image: "images/Operations Research.png",
                tags: ['Science', 'Mathematics'],
                shortDesc: "Operation research: An Introduction",
                author: "Hamdy A.Taha"
            },
            {
                image: "images/Statistical Learning.png",
                tags: ['Computer', 'Mathematics'],
                shortDesc: "The Elements of Statistical Learning",
                author: "Robert Fri"
            },
            {
                image: "images/Mathematical Programming.png",
                tags: ['Engineering'],
                shortDesc: "Introduction to Mathematical Programming",
                author: "Wayne Winston"
            },
            {
                image: "images/Database MD.png",
                tags: ['Computer'],
                shortDesc: "Database Management and Design",
                author: "Gary W. Hansen"
            },
            {
                image: "images/Probability.png",
                tags: ['Mathematics', 'Computer'],
                shortDesc: "A First Course in probability",
                author: "Sheldon M.Ross"
            },
            {
                image: "images/UML.png",
                tags: ['Computer'],
                shortDesc: "An Introduction to Object-Oriented Modeling",
                author: "Martina Seidl"
            }],
            borrowedBooks: [{
                image: "images/Engravings.png",
                tags: ['Medicine'],
                title: "Engravings of the Bones, Muscles, and Joints",
                author: "John Bell"
            },
            {
                image: "images/Statistical Learning.png",
                tags: ['Computer', 'Mathematics'],
                title: "The Elements of Statistical Learning",
                author: "Robert Fri"
            },
            {
                image: "images/Western Philosophy.png",
                tags: ['Philosophy', 'History'],
                title: "A History of Western Philosophy",
                author: "Bertrand Russell"
            },
            {
                image: "images/Orthopaedics.png",
                tags: ['Physiotherapy'],
                title: "Essentials of Orthopaedics and Applied Physiotherapy ",
                author: "Jayant Joshi"
            },
            {
                image: "images/Database MD.png",
                tags: ['Computer'],
                title: "Database Management and Design",
                author: "Gary W. Hansen"
            },
            {
                image: "images/UML.png",
                tags: ['Computer'],
                title: "An Introduction to Object-Oriented Modeling",
                author: "Martina Seidl"
            }],
            overdueBooks: [{
                image: "images/Engravings.png",
                tags: ['Medicine'],
                title: "Engravings of the Bones, Muscles, and Joints",
                author: "John Bell"
            },
            {
                image: "images/Statistical Learning.png",
                tags: ['Computer', 'Mathematics'],
                title: "The Elements of Statistical Learning",
                author: "Robert Fri"
            },
            {
                image: "images/Western Philosophy.png",
                tags: ['Philosophy', 'History'],
                title: "A History of Western Philosophy",
                author: "Bertrand Russell"
            },
            {
                image: "images/Orthopaedics.png",
                tags: ['Physiotherapy'],
                title: "Essentials of Orthopaedics and Applied Physiotherapy ",
                author: "Jayant Joshi"
            }]
        }
    },
    computed: {
        largeBook() {
            let longDesc = "This book mainly addresses beginners and readers with a basic knowledge of object-oriented programming languages like Java or C#,"
            + " but with little or no modeling or software engineering experience" 
            + "– thus reflecting the majority of students in introductory courses at universities."
            + "Using UML, it introduces basic modeling concepts in a highly precise manner, while refraining from the interpretation of rare special cases. "
            return new Book("images/UML.png", "An Introduction to Object-Oriented Modeling",
            "Martina Seidl", longDesc, "Computer Science", "October 19, 2012", "218 pages, Paperback",
            "March 9, 2015 by Springer", 22314, "English", 3, "library");
        },
        admin() {
            return false;
        },
        fullname() {
            return 
        }
    },
    methods: {
        switchComp(index) {
            let compsList = document.getElementById('core-comps-list').children;
            for(let i = 0; i < compsList.length; i++){
                if (compsList[i].classList.contains("active-comp")){
                    compsList[i].classList.remove("active-comp");
                    break;
                }
            }
            if (compsList[index]){
                compsList[index].classList.add('active-comp');
            }
        }
    },
})