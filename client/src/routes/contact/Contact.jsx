import "./contact.scss";

function Contact() {
  return (
    <div className="contact">
      <div className="contactContainer">
        <h1>Contact Us</h1>
        <p>If you have any questions or inquiries, feel free to reach out!</p>

        <div className="contactInfo">
          <div className="infoItem">
            <strong>Name:</strong> Anurag Soni
          </div>
          <div className="infoItem">
            <strong>Mobile:</strong> 6267886716
          </div>
          <div className="infoItem">
            <strong>Email:</strong> <a href="mailto:anuragsoni20@gmail.com">anuragsoni20@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
