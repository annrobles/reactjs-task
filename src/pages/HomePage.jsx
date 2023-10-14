import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

const HomePage = () => {
	return (
		<div>
			<Card style={{ padding: "25px", textAlign: "center" }}>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<div>
                <h1>Hi! My name is Florece Ann.</h1>
								<p>5+ years of building responsive front-end web-apps and integrating back-end technologies. ❤️ I love both web and mobile platforms, and I'm committed to enhancing the user experience across both. And I consider myself to be completely blessed that I get to build it for a living. 😇 I'm someone who believes in the transformative power of technology 🌱💻.</p>
                <p>🎓 I have a Bachelor’s Degree in Computer Science and am currently taking a diploma in Mobile Application Design and Development. I work with companies around the world, building Web user interfaces and digital products with focus on responsive design, accessibility, performance, and cutting-edge technology. 🎖️📌 Being recognized as 𝗘𝗺𝗽𝗹𝗼𝘆𝗲𝗲 𝗼𝗳 𝘁𝗵𝗲 𝗬𝗲𝗮𝗿 is a testament to my dedication to excellence. </p>
                <p>💎 Proficient in JavaScript, Angular, HTML5, CSS3, TypeScript, Swift, and modern web development tools. I am a quick learner and ready to learn new technology stacks as necessary. I am on the journey to better myself every day. </p>
                <p>Outside the office, I'm an avid mountain climber 🗻, having scaled peaks such as Mt. Fuji and Kota Kinabalu. My adventurous spirit doesn't stop there, as I have set a personal goal to conquer the Everest Base Camp in the near future. 🍀 This pursuit of challenge and adventure fuels my creativity and keeps me grounded, qualities that I carry into my professional life.</p>
                <h3>To know More About Me:</h3>
                <a href="https://annrobles.github.io/">annrobles.github.io</a>
							</div>
						</Grid>

						<Grid item xs={12} md={6}>
							<div>
								<img
									src="/profile.png"
									alt="Profile Image"
									style={{
										borderRadius: "25%",
										width: "400px",
										height: "500px",
									}}
								/>
							</div>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</div>
	);
};

export default HomePage;
