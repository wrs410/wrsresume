import { useState, useEffect } from 'react'
import Pdf from '../public/WRS_Resume_2025.pdf'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './App.css'

function App() {
  const [panelName, setPanelName] = useState<string>('');

  useEffect(() => {
      console.log("Count updated:", panelName);
  }, [panelName]);

  return (
    <>
    <div className="content">
    <Menubar>
        <MenubarMenu>
          <MenubarTrigger onClick={() => setPanelName('home')}><FontAwesomeIcon icon={faHouseChimney} /></MenubarTrigger>
          <MenubarTrigger onClick={() => setPanelName('about')}>about</MenubarTrigger>
          <MenubarTrigger onClick={() => setPanelName('tools')}>tools</MenubarTrigger>
          <a href={Pdf} target="_blank" style={{'color': 'black'}}>
            <MenubarTrigger>cv</MenubarTrigger>
          </a>
        </MenubarMenu>
      </Menubar>
    </div>
    <div className="content-2">
      <Card>
        <CardHeader>
          <CardTitle>will scerbo</CardTitle>
          <CardDescription>web developer</CardDescription>
        </CardHeader>
        { (panelName == 'home') &&
          <CardContent>
     
          </CardContent>
        }

        { (panelName == 'about') &&
          <CardContent>
<p>I'm Will, a computer geek from Baltimore, Maryland, with a passion for crafting user-centric experiences on the web. In the workplace I'm fluent in translating technical jargon into understandable language for everyone, and I'm committed to fostering seamless communication between developers and stakeholders for exceptional project outcomes. More than anything, I value my teachability and aptitude for quickly learning new concepts. </p>
<br />
<p>
Initially, my interest in computers stemmed from electronic music. Trying to install old VST plugins on the family computer as a teenager got me into digging deeper into computers. Eventually, I taught myself how to write HTML and CSS while in college at Johns Hopkins pursuing a B.S. in Applied Math and I've been enamored by frontend development ever since. </p>
<br />
<p>Nowadays, I'm a web developer who's also an avid home cook, gardener, yogi, and reader. However, I spend the majority of my free to listening to and making music - I'm a keyboardist in multiple bands and I compose and produce solo music when I have the chance. </p>
          </CardContent>
        }

      { (panelName == 'tools') &&
          <CardContent>
            <p>
              <strong>Tech I Use: </strong>
              <ul>
                <li>JS Frameworks: <a href="https://react.dev/">React</a>, <a href="https://angular.dev/">Angular</a></li>
                <li>CSS: <a href="https://tailwindcss.com/">Tailwind</a>, <a href="https://ui.shadcn.com/">shadcn</a></li>
                <li>PHP: <a href="https://www.smarty.net/">Smarty</a></li>
                <li>Build Tools: <a href="https://webpack.js.org/">Webpack</a>, <a href="https://vite.dev/">Vite</a></li>
                <li>Version Control: <a href="https://github.com/">Git</a>, <a href="https://subversion.apache.org/">SVN</a></li>
                <li>Text Editor: <a href="https://code.visualstudio.com/">VS Code</a></li>
                <li>Other Tools: <a href="https://www.docker.com/">Docker</a>, <a href="https://aws.amazon.com/amplify/">AWS Amplify</a></li>
              </ul>
            </p>

          </CardContent>
        }

      { (panelName == 'cv') &&
          <CardContent>
            cv
          </CardContent>
        }

        <CardFooter className='card-footer'>
          <a href="mailto:will.scerbo.789@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://github.com/wrs410">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/will-scerbo-b9b921119/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </CardFooter>
      </Card>
    </div>
    </>
  )
}

export default App
