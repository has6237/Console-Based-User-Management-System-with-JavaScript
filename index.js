var user = [];

function menu() {
	console.log("Menu");
	console.log("1. Signup");
	console.log("2. Login");

	const menuChoice = prompt("Enter your choice: ");

	if (menuChoice == 1) {
		signup();
	}
	else if (menuChoice == 2) {
		login();
	}
	else {
		console.log("Invalid choice!");
		menu();
	}
}

function signup() {
	let newName = prompt("Enter your name: ");
	let newPassword = prompt("Enter a password: ");
	let confirmNewpassword = prompt("Confirm new password: ");
	let newUsername = prompt("Enter a unique username: ");
	let newContact = prompt("Enter your email or phone: ");

	const find1 = user.findIndex(u => u.username === newUsername);
	const find2 = user.findIndex(u => u.contact === newContact);

	if (find1 !== -1 || find2 !== -1) {
		console.log("Username or Contact already taken! Use a different one");
		signup();
	}

	else {
		if (newPassword == confirmNewpassword) {
			user.push({
				username: newUsername,
				contact: newContact,
				name: newName,
				password: newPassword
			});

			console.log("ID successfully created!");
			menu();
		}
		else {
			console.log("Password did not match!");
			signup();
		}
	}
}

function login() {
	var myUsername = prompt("Enter your username: ");
	var myPassword = prompt("Enter your password: ");

	const find = user.find(u => u.username === myUsername && u.password === myPassword);

	if (find) {
		console.log("Welcome " + myUsername);
		userMenu(myUsername);
	}
	else {
		console.log("Invalid username or password! Please try again.");
		login();
	}
}


function userMenu(myUsername) {
	console.log("Welcome to user menu");
	console.log("1. My Profile");
	console.log("2. Change Password");
	console.log("3. Change Contact");
	console.log("4. Delete My ID");
	console.log("5. Search friends");
	console.log("6. Logout");

	const userChoice = prompt("Enter your choice: ");

	if (userChoice == 1) {
		myProfile(myUsername);
	}
	else if (userChoice == 2) {
		changePassword(myUsername);
	}
	else if (userChoice == 3) {
		changeContact(myUsername);
	}
	else if (userChoice == 4) {
		deleteID(myUsername);
	}
	else if (userChoice == 5) {
		searchFriend();
	}
	else if (userChoice == 6) {
		logout();
	}
	else {
		console.log("Invalid choice!");
		userMenu(myUsername);
	}
}

function myProfile(myUsername) {
	const find = user.find(u => u.username === myUsername);

	if (find) {
		console.log("Username: " + find.username);
		console.log("Name: " + find.name);
		console.log("Contact: " + find.contact);
	}

	userMenu(myUsername);
}

function changePassword(myUsername) {
	const find = user.find(u => u.username === myUsername);

	let enterPassAgain = prompt("Enter your old password: ");

	if (find.password == enterPassAgain) {
		let enterNewPass = prompt("Enter new password: ");
		let confirmEnterNewPass = prompt("Confirm new password: ");

		if (enterNewPass == confirmEnterNewPass) {
			find.password = enterNewPass;
			console.log("Password successfully changed.");
			console.log("Please logout and login again to execute the change");
			userMenu(myUsername);
		}
		else {
			console.log("New password did not match");
			userMenu(myUsername);
		}

	}
	else {
		console.log("Old password is incorrect.");
		userMenu(myUsername);
	}
}

function changeContact(myUsername) {
	const find = user.find(u => u.username === myUsername);
	if (find) {
		console.log("Contact: " + find.contact);
	}

	let updatedContact = prompt("Enter your new contact: ");

	const find1 = user.findIndex(u => u.contact === updatedContact);

	if (find1 !== -1) {
		console.log("Contact already used!");
		userMenu(myUsername);
	}
	else {

		if (find) {
			find.contact = updatedContact;
			console.log("Contact successfully changed.");
		}
		else {
			console.log("User not found!");
		}

		userMenu(myUsername);
	}
}

function deleteID(myUsername) {
	const find = user.find(u => u.username === myUsername);
	const index = user.findIndex(u => u.username === myUsername);
	let enterPassword = prompt("Enter your password: ");
	if (find.password == enterPassword) {

		if (index !== -1) {
			user.splice(index, 1);
			console.log("Account deleted successfully.");
			menu();
		}
		else {
			console.log("User not found.");
			userMenu(myUsername);
		}
	}
	else {
		console.log("Incorrect password!");
		userMenu(myUsername);
	}
}

function searchFriend() {
	let search = prompt("Enter username to search: ");
	const find = user.find(u => u.username === search);

	if (find) {
		console.log("User found!");
		console.log("Username: " + find.username);
		console.log("Name: " + find.name);
		console.log("Contact: " + find.contact);
	} else {
		console.log("No user found with that username.");
	}
	userMenu();
}

function logout() {
	console.log("Logged out successfully.");
	menu();
}

menu();
