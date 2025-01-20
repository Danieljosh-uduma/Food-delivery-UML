class Food {
    constructor (foodId, foodName, price, quantity) {
        this.foodId = foodId;
        this.foodName = foodName;
        this.price = price;
        this.quantity = quantity;
    }

    static delete(id) {
        if (id == this.foodId) {
            this.delete;
        } 
    }
}

class User {
    // static properties
    static totalUser = 0;

    // private properties
    #password;
    #registerDate;
    

    constructor (userId, email, registerDate, password) {
        this.userId = userId;
        this.email = email;
        this.#registerDate = registerDate;
        this.#password = password;
    }

    static signUp() {
        User.totalUser++;
        console.log('Signed up!');
    }

    resetPassword(password) {
        this.#password = password;
        console.log('Password changed successfully');
    }

    logIn(password) {
        if (password === this.#password) {
            console.log('logged in successfully')
        }
        else {
            console.log('Logging In Unsuccessfully')
        }
    }
}

class Customer extends User {
    constructor (customerId, customerName, address, accountBalance) {
        super();
        this.customerId = customerId;
        this.customerName = customerName;
        this.address = address;
        this.accountBalance = accountBalance;
    }

    addMoney(amount) {
        this.accountBalance += amount;
        console.log(`${amount} Added successfully.`);
    }

    updateProfile(customerName, email, address) {
        this.customerName = customerName;
        this.email = email;
        this.address = address;
        console.log('Profile Updated successfully');
    }

}

class Dispatcher extends User {
    constructor (riderId, riderName, PhoneNumber) {
        super();
        this.riderId = riderId;
        this.riderName = riderName;
        this.PhoneNumber = PhoneNumber;
    }
}

class Chef extends User {
    constructor (chefId, chefName) {
        super();
        this.chefId = chefId;
        this.chefName = chefName;
    }

    addFoodDetail(foodId, foodName, price, quantity) {
        let food = new Food(foodId, foodName, price, quantity);
        console.log(`${food.foodName} added successfully`)
    }
}


