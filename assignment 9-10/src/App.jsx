import ContactForm from "./ContactForm";
import Counter from "./Counter";
import UserProfile from "./UserProfile";

function App() {
    return (
        <div>
            <ContactForm />

            <hr />

            <Counter />

            <hr />

            <UserProfile
                username="Vritika"
                email="vritika@gmail.com"
                isAdmin={true}
            />
        </div>
    );
}

export default App;