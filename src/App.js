import './App.css';
import { Card, Typography, Space, Button } from "antd";
import dashboard from "./images/dashboard.png";
import quiz from "./images/quiz.png";
import gallery from "./images/gallery.png";
import reset from "./images/reset.png";
import login from "./images/login.png"; 
import { 
  ArrowsAltOutlined,
  GithubFilled, 
  LinkedinFilled, 
  InstagramFilled,
  MailFilled,
  FacebookFilled
} from "@ant-design/icons";

function App() {
  return (
    <body className="App" style={{ display: "flex"}} 
      
    > 
        <div className="left" 
            style=
            {{ 
                flex: 6, 
                paddingTop: 100, 
                fontSize: 20, 
                position: "fixed", 
                marginLeft: "5vw"
            }}
        >
            <h1 style={{ marginRight: 60, fontFamily: "Sans-serif" }}>Miriam Nyaboke</h1>
            <h3 style={{ paddingTop: 10, paddingBottom: 10, marginRight: 90}}>Frontend Web developer</h3>
            <ul>
                <li style={{ marginRight: 100, paddingBottom: 5 }}>Excellent-pixel, engaging, and</li>
                <li style={{ marginRight: 95 }}>accessible digital experiences.</li>
            </ul>
            <div className="links">
                <ul style={{ marginTop: 50}}>
                    <li style={{ fontSize: 20, marginRight: 170, listStyle: "none", paddingBottom: 10, fontFamily: "sansSerif"}}>
                        <a href="#about" style={{ color: "black"}}>ABOUT</a>
                    </li>
                    <li style={{ fontSize: 20, marginRight: 150, listStyle: "none", fontFamily: "sansSerif"}}>
                        <a href="#projects" style={{ color: "black"}}>PROJECTS</a>
                    </li>
                </ul>  
            </div>
            <div className="link" 
                style=
                {{ 
                    display: "flex", 
                    paddingTop: "30px" 
                }}
            >
                <Typography.Link 
                >
                    <a href="https://github.com/M-Nyaboke" 
                        style=
                        {{ 
                            color: "black"
                        }}
                    >
                        <GithubFilled  style={{ paddingRight: "10px", fontSize: "30px" }}/>
                    </a>
                </Typography.Link>
                <Typography.Link target={"_blank"} 
                >
                    <a href="https://www.linkedin.com/in/miriam-nyaboke/"
                        style=
                        {{ 
                            color: "black"
                        }}
                    >
                        <LinkedinFilled style={{ paddingRight: "10px", fontSize: "30px" }}/>
                    </a>
                </Typography.Link>
                <Typography.Link target={"_blank"} 
                >
                    <a href="https://instagram.com/Nyabo_ke1" 
                        style=
                        {{ 
                            color: "black"
                        }}
                    >
                        <InstagramFilled style={{ paddingRight: "10px", fontSize: "30px" }}/>
                    </a>
                </Typography.Link>
                <Typography.Link target={"_blank"} 
                >
                    <a href="https://miriamnyaboke816@gmail.com" 
                        style=
                        {{ 
                            color: "black"
                        }}
                    >
                    <MailFilled style={{ paddingRight: "10px", fontSize: "30px" }}/>
                    </a>
                </Typography.Link>
                <Typography.Link target={"_blank"} 
                >
                    <a href="https://www.facebook/MiriamNyaboke" 
                        style=
                        {{ 
                            color: "black"
                        }}
                    >
                        <FacebookFilled style={{ paddingRight: "10px", fontSize: "30px" }}/>
                    </a>
                </Typography.Link>
            </div>       
        </div>    
        <div className="right" 
            style=
            {{ 
                flex: 6, 
                paddingTop: 100, 
                fontSize: 20, 
                marginLeft: "35vw"
            }}
        >
            <div id="about">
            <ul>          
                <li style={{ paddingLeft: 50}}>Back in 2023, I started with HTML and CSS and then moved to JavaScript</li>
                <li style={{ paddingLeft: 35}}>then React and Angular. Fast-forward to today, I,ve had the privilege of </li>
                <li style={{ marginRight: 345}}>building web development.</li>
                        
            </ul>
            <ul style={{ marginTop: 20}}>
                <li style={{ marginRight: 45}}>My main focus these days is to create websites for companies</li>
                <li style={{ paddingLeft: 15}}>to do better in business online. I most enjoy building software in the</li>
                <li style={{ marginRight: 0}}>sweet spot where design and engineering meet — things that look</li>
                <li style={{ marginRight: 200}}>good but are also built well under the hood.</li>          
            </ul> 
            </div>
            <div id="projects" >
                <Typography.Title 
                    style=
                    {{ 
                        marginRight: "470px", 
                        fontSize: 30, 
                        paddingBottom: 20, 
                        paddingTop: 20
                    }}
                >
                    Projects
                </Typography.Title>
                <Typography.Link to="https://dashboard-admin-d4i3a5e56-miriam-nyabokes-projects.vercel.app/" target={"_blank"}>
                    <Card 
                        style=
                        {{ 
                            width: "80%", 
                            height: "50%", 
                            marginLeft: "100px", 
                            border: "none",
                            backgroundColor: "transparent"
                        }}  
                        className="content"
                        hoverable          
                    >
                        <div className="contents" style={{ display: "flex"}}>
                            <Card style={{border: "none", backgroundColor: "transparent"}}>
                                <img src={dashboard} alt="" 
                                    style=
                                    {{ 
                                        width: "90%", 
                                        height: "90%", 
                                        flex: "left"
                                    }}
                                />
                            </Card>
                            <Card style={{ backgroundColor: "transparent", border: "none"}}>
                                <div style={{ flex: "right"}}>
                                    <h4>Dashboard</h4>
                                    <p style={{ paddingBottom: "50px", paddingTop: 0}}>
                                    A simple dashboard applcation using reactJs and antd Design.
                                    All of yhis data comes from an API. This project intergrets all pages
                                    with APIs.The inentory contains the list of the products which is fetched 
                                    from an API similar to orders and customers.
                                    </p>
                                    <div className="button">
                                        <Button type="primary" style={{ marginRight: 10 }}>HTML</Button>
                                        <Button type="primary" style={{ marginRight: 10 }}>React</Button>
                                        <Button type="primary" style={{ marginRight: 10 }}>Antd</Button> 
                                    </div>                
                                </div>
                            </Card>
                        </div>
                    </Card>
                </Typography.Link>
                <Space></Space>
                <Typography.Link to="https://quiz-app-tau-two.vercel.app/" target={"_blank"}>
                    <Card 
                        style=
                        {{ 
                            width: "80%", 
                            height: "50%", 
                            marginLeft: "100px", 
                            border: "none",
                            backgroundColor: "transparent"
                        }} className="content" hoverable
                    >            
                        <div className="contents" style={{ display: "flex"}}>
                            <Card style={{border: "none", backgroundColor: "transparent"}}>
                                <img src={quiz} alt="" 
                                    style=
                                    {{ 
                                        width: "100%", 
                                        height: "100%", 
                                        flex: "left"                      
                                    }}
                                />
                            </Card>
                            <Card style={{ backgroundColor: "transparent", border: "none", TextAlign: "flexStart"}}>
                                <div style={{ flex: "right"}}>
                                    <h4>Quiz App</h4>
                                    <div style={{ paddingBottom: "50px"}}>
                                        Quiz Application is a web-based application built using 
                                        React Hooks and Timer-Based State Management. 
                                        It provides users with a series of multiple-choice 
                                        questions and requires them to select an option
                                        within a given time limit.
                                    </div>
                                    <div className="button">
                                        <Button type="primary" style={{ marginRight: 10 }}>HTML</Button>
                                        <Button type="primary" style={{ marginRight: 10 }}>CSS</Button>
                                        <Button type="primary" style={{ marginRight: 10 }}>React</Button>
                                    </div> 
                                </div>        
                            </Card>          
                        </div>
                    </Card>
                </Typography.Link>
                <Space></Space>
                <Typography.Link to="https://submission-form-psi.vercel.app/" target={"_blank"}>
                    <Card 
                        style=
                        {{ 
                            width: "80%", 
                            height: "50%", 
                            paddingBottom: "20px", 
                            marginLeft: "100px",              
                            border: "none",
                            backgroundColor: "transparent"
                        }}
                        className="content"
                        hoverable
                    >
                        <div className="contents" style={{display: "flex"}}>
                            <Card style={{border: "none", backgroundColor: "transparent"}}>
                                <img src={login} alt="" 
                                    style=
                                    {{ 
                                        width: "170px", 
                                        height: "250px", 
                                        flex: "left"                     
                                    }}
                                />
                            </Card>
                            <div style={{ flex: "right"}}>
                                <Card style={{ backgroundColor: "transparent", border: "none"}}>
                                    <h4>Login Form</h4>
                                    <p style={{ paddingBottom: "50px",  paddingLeft: "100px"}}>
                                        A login form utilizes the credentials of a user, 
                                        in order to authenticate their access. 
                                        It generally consists of the typical username or email and password. 
                                        But more fields can be added to improve the site's security. 
                                        These can be in the form of a passcode, PIN number, or a secret phrase.
                                    </p>
                                    <div className="button">
                                        <Button type="primary" style={{ marginRight: 10 }}>HTML</Button>
                                        <Button type="primary" style={{ marginRight: 10 }}>React</Button>
                                        <Button type="primary" style={{ marginRight: 10 }}>Antd</Button>
                                    </div>
                                </Card>                                    
                            </div>
                        </div>
                    </Card>
                </Typography.Link>
                <Space></Space>
                <Typography.Link to="https://reset-form.vercel.app/" target={"_blank"}>
                    <Card 
                        style=
                        {{ 
                            width: "80%", 
                            height: "50%", 
                            paddingBottom: "20px", 
                            marginLeft: "100px",              
                            border: "none",
                            backgroundColor: "transparent"
                        }}
                        className="content"
                        hoverable
                    >
                        <div className="contents" style={{display: "flex"}}>
                            <Card style={{border: "none", backgroundColor: "transparent"}}>
                                <img src={reset} alt="" 
                                    style=
                                    {{ 
                                        width: "100%", 
                                        height: "100%", 
                                        flex: "left"                     
                                    }}
                                />
                            </Card>
                            <div style={{ flex: "right"}}>
                                <Card style={{ backgroundColor: "transparent", border: "none"}}>
                                    <h4>Reset Form</h4>
                                    <p style={{ paddingBottom: "50px"}}>
                                        This functionality is crucial for enhancing user experience, 
                                        especially in single-page applications where forms are frequently used.
                                    </p>
                                    <div className="button">
                                        <Button type="primary" style={{ marginRight: 10 }}>HTML</Button>
                                        <Button type="primary" style={{ marginRight: 10 }}>React</Button>
                                        <Button type="primary" style={{ marginRight: 10 }}>Antd</Button>
                                    </div>
                                </Card>                                    
                            </div>
                        </div>
                    </Card>
                </Typography.Link>
                <Space></Space>
                <Typography.Link to="https://image-gallery-kohl-ten.vercel.app/" target={"_blank"}>
                    <Card 
                        style=
                        {{ 
                            width: "80%", 
                            height: "50%", 
                            paddingBottom: "20px", 
                            marginLeft: "100px",              
                            border: "none",
                            backgroundColor: "transparent"
                        }}
                        className="content"
                        hoverable
                    >
                        <div className="contents" style={{display: "flex"}}>
                            <Card style={{border: "none", backgroundColor: "transparent"}}>
                                <img src={gallery} alt="" 
                                    style=
                                    {{ 
                                        width: "70%", 
                                        height: "80%", 
                                        flex: "left"                     
                                    }}
                                />
                            </Card>
                            <div style={{ flex: "right"}}>
                                <Card style={{ backgroundColor: "transparent", border: "none"}}>
                                    <h4>Reset Form</h4>
                                    <p style={{ paddingBottom: "50px"}}>
                                        Photo-gallery or Photo-grid application using reactJs aand antd.
                                        Images are fetched from APIs and showed in a grid of cards, with
                                        a nice hover effect on each of the cards.
                                    </p>
                                    <div className="button">
                                        <Button type="primary" style={{ marginRight: 10 }} >HTML</Button>
                                        <Button type="primary" style={{ marginRight: 10 }}>React</Button>
                                        <Button type="primary" style={{ marginRight: 10 }}>Antd</Button>
                                    </div>
                                </Card>                                    
                            </div>
                        </div>
                    </Card>
                </Typography.Link>        
            </div>
            <Typography.Link 
                style=
                {{
                    color: "black",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "30px",
                    paddingRight: "150px",
                    paddingTop: "50px"
                }}
                href="https://vercel.com/miriam-nyabokes-projects" target={"_blank"}
            >
                View more projects ... < ArrowsAltOutlined />
            </Typography.Link>         
        </div> 
        <div className="footer" 
          style=
          {{ 
            height: "60px",
            backgroundColor: "lightgrey",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly"
          }}
        >
          <Typography.Link href="https://www.google.com" target={"_blank"} 
            style={{ fontSize: 20, color: "black"}}
          >
            Privacy Policy
          </Typography.Link>
          <Typography.Link href="https://www.google.com" target={"_blank"}
            style={{ fontSize: 20, color: "black"}}
          >
            Terms & Conditions
          </Typography.Link>
          <Typography.Link href="https://www.google.com" target={"_blank"}
            style={{ fontSize: 20, color: "black"}}
          >
            Return Policy
          </Typography.Link>
          <Typography.Link href="tel:+254710402171" target={"_blank"}
            style={{ fontSize: 20, color: "black"}}
          >
            +254710402171
          </Typography.Link>
        </div>        
    </body>
  );
}
export default App;
