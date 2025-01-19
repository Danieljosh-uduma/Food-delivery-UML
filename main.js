class User {
    // static properties
    static totalUser = 0;
    static onlineUser = 0;

    constructor (userId, username, email, RegisterDate) {
        this.userId = userId;
        this.username = username;
        this.email = email;
    }
}
// +userId: int
// +username: string
// +email: string
// +loginStatus: bool
// -registerDate: date