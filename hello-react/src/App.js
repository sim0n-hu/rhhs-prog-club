
import './App.css';
import logo from './imgs/bordered_logo.svg';
import group from './imgs/schoolphoto.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (





    
    <div className="App">
      <header className="header">
        <ul>
          <li id="home">Home</li>
          <li>Calendar</li>
          <li>Resources</li>
          <li>Competitions</li>
          <li>Officers</li>
          <li>Contact Us</li>
        </ul>
      </header>

      <div className="welcome">
          <img src={logo} />
          <h2>Hello! Welcome to the</h2>
          <h1>River Hill High School Programming Club Official Website</h1>
          <p>Where happiness goes to die *just jokes xd*</p>
      </div>

      <div className="about">
        <div className="content">
          <img src={group} />
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignisim eget enim sed ornare. Maecenas neque sapien, porttitor non placerat quis, dignissim vitae urna. Donec quis scelerisque metus. In congue quis diam ut laoreet. Integer turpis mi, ultricies lobortis sapien a, bibendum ullamcorper elit. Phasellus nec lectus tincidunt, mattis elit vitae, facilisis nunc. Nulla vel leo commodo, aliquet libero sit amet, auctor metus. Ut scelerisque velit quis metus sagittis, vel suscipit magna pulvinar. Vivamus neque mi, pharetra vitae magna at, molestie facilisis turpis. Aenean quis pellentesque neque. Cras malesuada dolor vel massa dignissim, a vulputate felis gravida.</p>
         </div>
      </div>

      <div className="whatdowedo">
        <div className="content">
         <h2>What Do We Do?</h2>

         <div className="boxes"> 
            <div className="answer">
              <FontAwesomeIcon icon = {faCode} className="icon" size="2x" color="gold"/>
              <h3>Learn Code</h3>
              <p>No prior experience necessary! We're all here to learn. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim eget enim sed ornare.</p>
            </div>

            <div className="answer">
              <FontAwesomeIcon icon = {faCrown} className="icon" size="2x" color="gold"/> 
              <h3>Competitions</h3>
              <p>For the more advanced programmers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim eget enim sed ornare.</p>
            </div>

            <div className="answer">
              <FontAwesomeIcon icon = {faFolderOpen} className="icon" size="2x" color="gold"/>
              <h3>Projects</h3>
              <p>Projects like this website are made by the bright students in this club. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim eget enim sed ornare.</p>
            </div>

            <div className="answer">
              <FontAwesomeIcon icon = {faHandsHelping} className="icon" size="2x" color="gold"/>
              <h3>Community Service</h3>
              <p>Tutoring services are in the work! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim eget enim sed ornare.</p>
            </div>

            <div className="answer">
              <FontAwesomeIcon icon = {faMicrophone} className="icon" size="2x" color="gold"/>
              <h3>Guest Speakers</h3>
              <p>Learn about CS going into college and career. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim eget enim sed ornare.</p>
            </div>

            <div className="answer">
              <FontAwesomeIcon icon={faAccessibleIcon} className="icon" size="2x" color="gold"/>
              <h3>Something else?</h3>
              <p>an even 6 boxes looks better so xddd. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim eget enim sed ornare.</p>
            </div>
          </div>

        </div>
      </div>

        <div className="footer">
          <div className ="content">
            <h2>Want to Learn More?</h2>
          </div>
        </div>

      

      
    </div>











  );
}

export default App;
