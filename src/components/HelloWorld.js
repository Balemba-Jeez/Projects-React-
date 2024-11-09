import React from "react";

class HelloJessy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 1000);
    this.playGreetingSound();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  playGreetingSound() {
    const audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
    audio.play();
  }

  handleMouseMove = (e) => {
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;
    document.body.style.backgroundPosition = `${x}% ${y}%`;
  }

  handleClick = () => {
    alert('You clicked me! 🎉');
    document.getElementById("clickMeBtn").style.transform = "scale(1.1)";
    document.getElementById("clickMeBtn").style.transition = "transform 0.3s ease-in-out";
  }

  render() {
    const style = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        background: 'linear-gradient(45deg, #ff6b81, #d4a5a5, #6b88d0)',
        backgroundSize: '400% 400%',
        animation: 'gradientAnimation 6s ease infinite',
        fontFamily: 'Roboto, sans-serif',
        color: '#fff',
        textAlign: 'center',
        overflow: 'hidden',
        transition: 'background-position 0.1s ease-out',
        position: 'relative',
      },
      greeting: {
        fontSize: '5rem',
        fontWeight: '900',
        textAlign: 'center',
        marginBottom: '20px',
        animation: 'fadeInUp 2s ease-out',
        textShadow: '5px 5px 20px rgba(0, 0, 0, 0.5)',
        letterSpacing: '3px',
        transform: 'scale(1.1)',
        transition: 'transform 0.3s ease-in-out',
        cursor: 'pointer',
      },
      time: {
        fontSize: '3.5rem',
        fontWeight: '500',
        animation: 'fadeInUp 2.5s ease-out',
        textShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)',
        transition: 'color 0.5s ease',
        letterSpacing: '1px',
      },
      iconsContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
        gap: '30px',
      },
      icon: {
        width: '60px',
        height: '60px',
        transition: 'transform 0.3s ease, fill 0.3s ease',
        cursor: 'pointer',
        ':hover': {
          transform: 'scale(1.3)',
          fill: '#00ff80',
        },
      },
      button: {
        padding: '15px 25px',
        fontSize: '1.5rem',
        backgroundColor: '#00ff80',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease-in-out, background-color 0.3s ease',
        marginTop: '30px',
      }
    };

    return (
      <div style={style.container} onMouseMove={this.handleMouseMove}>
        <style>
          {`
            @keyframes gradientAnimation {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }

            @keyframes fadeInUp {
              0% { opacity: 0; transform: translateY(30px); }
              100% { opacity: 1; transform: translateY(0); }
            }

            h1:hover {
              color: #00ff80;
              transform: scale(1.2);
            }

            svg:hover {
              transform: scale(1.4);
              fill: #00ff80;
            }

            button:hover {
              background-color: #33cc99;
              transform: scale(1.1);
            }

            svg {
              cursor: pointer;
              transition: transform 0.3s ease;
            }
          `}
        </style>
        <h1 style={style.greeting} onClick={() => alert('Hello, Jessy!')}>
          Hello, Jessy!
        </h1>
        <h2 style={style.time}>{this.state.time}</h2>
        <div style={style.iconsContainer}>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" style={style.icon} viewBox="0 0 24 24"><path d="M20 0H4C2.9 0 2 .9 2 2v20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM9 19H6v-7h3v7zm-1.5-8.5h-.02c-.99 0-1.5-.67-1.5-1.35 0-.74.51-1.35 1.47-1.35 1.02 0 1.53.67 1.53 1.35 0 .68-.51 1.35-1.53 1.35zm12.5 8.5h-3v-4.5c0-1.2-.4-2-1.4-2s-1.6.8-1.6 2v4.5h-3v-7h3v1.7c.7-1.1 2-1.5 3.1-1.5 2.5 0 4.5 1.6 4.5 4.5v6.8z"/></svg>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" style={style.icon} viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.3-4-1.3-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 2.3 1.3 2.3 1.3.5 1.2 1.5.9 2.1.7 1.1-1.3 1.3-2.4 1.3-2.4 1.3-.7.9-1.3 1.3-.2 1.3 0 2.3-1.4 3.1-4 3.2z"/></svg>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" style={style.icon} viewBox="0 0 24 24"><path d="M23.4 4.3c-.8.4-1.6.6-2.5.7.9-.5 1.6-1.3 1.9-2.2-.9.5-1.9.9-2.9 1.1-.9-.9-2.2-1.5-3.6-1.5-3 0-5.4 2.6-5.4 5.9 0 .5.1.9.2 1.3-4.5-.3-8.5-2.5-11.2-5.9-.4.6-.6 1.2-.6 1.9 0 1.3.7 2.4 1.7 3-.8-.1-1.7-.3-2.5-.7v.1c0 1.9 1.3 3.6 3.1 4.1-.6.2-1.2.3-1.8.3-.4 0-.7-.1-1.1-.2.7 2.2 2.7 3.7 5.1 3.7-1.9 1.5-4.2 2.3-6.6 2.3-.4 0-.7 0-1.1-.1 2.3 1.4 5.1 2.3 8 2.3 9.6 0 14.9-7.7 14.9-14.3 0-.2 0-.4-.1-.6.9-.6 1.7-1.3 2.3-2.1z"/></svg>
          </a>
        </div>
        <button id="clickMeBtn" style={style.button} onClick={this.handleClick}>
          Click Me!
        </button>
      </div>
    );
  }
}

export default HelloJessy;
