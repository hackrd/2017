class User {
    constructor() {
        this.mUser = null;
        this.mID = null;
        this.mName = null;
        this.mEmail = null;
    }

    Reset() {
        this.mID = null;
        this.mName = null;
        this.mEmail = null;
    }
}

var gUser = new User();
var AUTH = null;

// Called on load
(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyALLUIoRJcStxtFHuZbUssDnWHwuWwOu1s",
        authDomain: "eventman-fc568.firebaseapp.com",
        databaseURL: "https://eventman-fc568.firebaseio.com",
        projectId: "eventman-fc568",
        storageBucket: "eventman-fc568.appspot.com",
        messagingSenderId: "60194496673"
    };
    firebase.initializeApp(config);

    AUTH = firebase.auth();
    gUser.User = AUTH.currentUser;

    // Get elements by ID
    const EmailInput = $('#EmailField');
    const PasswordInput = $('#PasswordField');
    const ButtonLogIn = $('#ButtonLogIn');
    const ButtonLogOut = $('#ButtonLogOut');

    // Log In Event
    ButtonLogIn.click(function (e) {
        const tPromise = AUTH.signInWithEmailAndPassword(EmailInput.val(), PasswordInput.val());
        tPromise.catch(e => console.log(e.message));
        console.log(EmailInput.val());
    });

    ButtonLogOut.click(function (e) {
        window.location = "../Eventman/logout.html";
        AUTH.signOut();
        gUser.Reset();
    });

    // Listener
    AUTH.onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log("User Logged In");
            gUser.User = AUTH.currentUser;
            gUser.User.providerData.forEach(function (pProfile) {
                gUser.ID = pProfile.uID;
                gUser.Name = pProfile.displayName;
                gUser.mEmail = pProfile.email;
            });
        } else {
            gUser.Reset();
        }
    });
}());

// Redirect upon success
function IsSuccess() {
    window.location = "../Eventman/index.html";
}

function IsFailure() {
    window.location = "../2017/login.html";
}