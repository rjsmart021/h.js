//Module 11 Lesson 2: Assignments | React State and Props
//Task 1: Code Correction
//The current implementation of the user profile component has a bug in state management. Analyze and correct the code to ensure the user's name is displayed correctly.
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
    }

    // Incorrect function
    changeName() {
        this.state.name = 'Charlie';
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}
