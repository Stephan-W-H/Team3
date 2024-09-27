const model = {
    app:{
        activeUser: '',
        page: '',
    },


    input:{
        registration: {
            userName: null,
            password: null,
            epost: null
        },

        editUser: {
            userName: null,
            newPassword: null,
            userBio: null,
            email: null,
            profilPic: null,
            favoriteGenre: null,
            favoriteActors: null
        },

        login: {
            userName: null,
            password: null
        },

        searchBar: null,


       // addNewMovie: {
            
        //}, 
        
        filtrate: {
            age: null,
            title: null,
            genre: null,
            year: null,
            rating: null,
            actors: null
        },

        rating: null,
        comments: null,

    },

    data: {

        users: [ 
            {
            id: 123312,
            userName: null,
            password: null,
            epost: null,
            usrBio: null,
            profilePic: "google.com/bilde.png",
            myRatings: [],                              
            myComments: [],
            myFavorites: [],
            favoriteGenre: [],
            favoriteActors: [],
            },
            
            {
                id: 1212,
                userName: null,
                password: null,
                epost: null,
                usrBio: null,
                profilePic: null,
                myRatings: [],
                myComments: [],
                myFavorites: [],
                favoriteGenre: [],
                favoriteActors: [],
            } 
        ],

        movies: [
            {
                id: 234,
                rating: null,
                picture: null,
                year: null,
                actors: [],
                genre: [],
                title: null,
            },

            {
                id: 345756,
                rating: null,
                picture: null,
                year: null,
                actors: [],
                genre: [],
                title: null,
                

            }
        ],

        recomendedMovies: [],
        topRatedMovies: [],
        newMovies: [],
        popularNowMovies: [],
  
        
    },

}



