import "./agents.scss";

const agents = [
    {
      name: "Anurag Soni",
      phone: "6267886716",
      email: "anuragsoni20@gmail.com",
      location: "Jabalpur, MP",
      image: "",
    },
    {
      name: "Aarav Mehta",
      phone: "9876543210",
      email: "aarav.mehta@gmail.com",
      location: "Indore, MP",
      image: "https://media.istockphoto.com/id/2194431260/photo/close-up-profile-face-of-pensive-handsome-indian-man.jpg?s=612x612&w=0&k=20&c=f3kwlmR5jbtVU1PFuA7EJ6DvPrDHNZu2Ty3BPhzpWuY=",
    },
    {
      name: "Priya Sharma",
      phone: "8123456789",
      email: "priya.sharma@yahoo.com",
      location: "Bhopal, MP",
      image: "https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.jpg?s=612x612&w=0&k=20&c=aQw5YhGl99hL1O77thwpQTmqVE7bc8rCX9H0gTeoX_k=",
    },
    {
      name: "Rohan Verma",
      phone: "9988776655",
      email: "rohan.verma@realestate.com",
      location: "Nagpur, MH",
      image: "https://media.istockphoto.com/id/95062289/photo/east-indian-man.jpg?s=612x612&w=0&k=20&c=lO73M-iWWlltyDnnR30HlK93hM2D78tdLXcV9F3ceBc=",
    },
    {
      name: "Isha Kapoor",
      phone: "9090909090",
      email: "isha.kapoor@gmail.com",
      location: "Pune, MH",
      image: "https://media.istockphoto.com/id/2161914631/photo/typing-chair-and-woman-with-laptop-in-studio-for-school-project-knowledge-or-browsing.jpg?s=612x612&w=0&k=20&c=A410X76aCuslAl5ZHQqxKW0W6ggwx4pPlIvc0MbSL6s=",
    },
    {
      name: "Karan Malhotra",
      phone: "8888777766",
      email: "karan.malhotra@gmail.com",
      location: "Delhi NCR",
      image: "https://media.istockphoto.com/id/837507356/photo/portrait-of-young-handsome-indian-sikh-businessman-wearing-turban-at-the-bts-sky-train-station.jpg?s=612x612&w=0&k=20&c=pTnY1HzHzlMsjnCr3syfvamiotIEfG0ouhQXqxngsd0=",
    },
    {
      name: "Neha Singh",
      phone: "9191919191",
      email: "neha.singh@homes.com",
      location: "Raipur, CG",
      image: "https://media.istockphoto.com/id/1320811419/photo/head-shot-portrait-of-confident-successful-smiling-indian-businesswoman.webp?a=1&b=1&s=612x612&w=0&k=20&c=cLDx_InZZ4uLc4iNaNP-Wc48j7FOrtqxHpS2ztugjb8=",
    },
    {
      name: "Aditya Joshi",
      phone: "8787878787",
      email: "aditya.joshi@hotmail.com",
      location: "Ahmedabad, GJ",
      image: "https://images.unsplash.com/photo-1659353221603-7c9d5fe2a4bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMCUyMCUyMHByb2Zlc3Npb25hbCUyMGZhY2VzJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Simran Kaur",
      phone: "7676767676",
      email: "simran.kaur@gmail.com",
      location: "Lucknow, UP",
      image: "https://media.istockphoto.com/id/1501770003/photo/happy-handsome-young-indian-man-head-shot-front-portrait.jpg?s=1024x1024&w=is&k=20&c=QRSvAaqxxzLRSFTP-dJDTp1RdLkE-SVMKIAGOUFMGSw=",
    },
    {
      name: "Vikram Chauhan",
      phone: "7070707070",
      email: "vikram.chauhan@estates.com",
      location: "Jaipur, RJ",
      image: "https://media.istockphoto.com/id/912230102/photo/indian-man-thinking-moody-portrait.jpg?s=1024x1024&w=is&k=20&c=jOtfC_9x14lfgt-z4TORkU-QbNeNqHz0js99MAfxCH8=",
    },
  ];
  
  

function Agents() {
  return (
    <div className="agents">
      <div className="agentsContainer">
        <h1>Meet Our Agents</h1>
        <p>We work with certified, experienced agents across India to help you find your perfect property.</p>

        <ul className="highlights">
          <li>🏡 Local market expertise in your city</li>
          <li>📋 Verified and government-registered brokers</li>
          <li>🤝 Dedicated to personalized property support</li>
        </ul>

        <div className="agentsGrid">
          {agents.map((agent, index) => (
        <div className="agentCard" key={index}>
        <img src={agent.image} alt={agent.name} className="profilePic" />
        <h3>{agent.name}</h3>
        <p><strong>Phone:</strong> {agent.phone}</p>
        <p><strong>Email:</strong> <a href={`mailto:${agent.email}`}>{agent.email}</a></p>
        <p><strong>Location:</strong> {agent.location}</p>
      </div>
      
          ))}
        </div>

        <div className="policySection">
          <h4>Our Policy</h4>
          <p>
            All agents listed on our platform adhere to our transparency and service quality standards.
            We conduct background verification, track customer satisfaction ratings, and ensure regular training
            for our brokers. Your trust and safety is our priority.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Agents;
