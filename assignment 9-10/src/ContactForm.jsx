function ContactForm() {
    return (
        <div>
            <h1>Contact Form</h1>

            <form>
                <label>Name:</label>
                <input type="text" placeholder="Enter your name" />
                <br /><br />

                <label>Email:</label>
                <input type="email" placeholder="Enter your email" />
                <br /><br />

                <label>Mobile:</label>
                <input type="text" placeholder="Enter your mobile number" />
                <br /><br />

                <label>Address:</label>
                <textarea placeholder="Enter your address"></textarea>
                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default ContactForm;