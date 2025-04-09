import styles from "./about.module.scss";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h1>About Our Real Estate Platform</h1>
        <p>
          Welcome to our Real Estate platform, where we make buying, selling, or renting property simple and trustworthy.
          Whether you're looking for your dream home or listing one, we’ve got you covered.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>✅ Verified Listings</li>
          <li>✅ Real-time Chat with Owners</li>
          <li>✅ Secure Login & Registration</li>
          <li>✅ Personalized Recommendations</li>
        </ul>

        <h2>Our Vision</h2>
        <p>
          We aim to simplify the real estate process with transparency, user-friendly features, and tools that empower buyers and sellers alike.
        </p>

        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? Reach out to us via our contact form or drop us a message anytime.
        </p>
      </div>
    </div>
  );
}

export default About;
