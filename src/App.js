import React, { useState,useEffect, useRef }  from "react";
import "./styles.css";

{/* all the image imports used in the side buttons*/}
import steeringImage from "../public/images/steeringImage.png";
import pedalsImage from "../public/images/pedalsImage.png";
import acImage from "../public/images/acImage.png";
import lightsImage from "../public/images/lightsImage.png";
import stopImage from "../public/images/stopImage.png";
import transmissionImage from "../public/images/transmissionImage.png";
import soundImage from "../public/images/soundImage.png";
import dialsImage from "../public/images/dialImage.png";

const App = () => {
    const historyBoxRef = useRef(null);
    {/* to make the history box scroll down as updated */}
    useEffect(() => {
        historyBoxRef.current.scrollTop = historyBoxRef.current.scrollHeight;
    }, [canBusLogs]);

    {/* connected variable is to store status of connection to CAN Bus */}
    const [connected, setConnected] = useState(false);
    const [connectDisplayText, setConnectDisplayText] = useState(
        "Connect CAN Bus Adapter"
    );
    
    {/* shows the canBusLogs in the history section*/}
    const [canBusLogs, setCanBusLogs] = useState([
        "kali@kali# python main.py",
        "Canbus adapter NOT connected"
      ]);
    
    {/* information is to display date and time, change IP and Version as needed */}
    const [information, setInformation] = useState([
    "Datetime: " + new Date().toLocaleString(),
    "IP: 10.0.0.1", 
    "Version: 1.0.0"
    ]);

    {/* These are used to fill in the buttons for the different screens */}
    const [imageSources, setImageSources] = useState(Array(12).fill(""));
    const [captions, setCaptions] = useState(Array(12).fill(""));
    const [empty] = useState(Array(12).fill(""));

    {/* These are to check what button we are on */}
    const [steering, setSteering] = useState(false);
    const [pedals, setPedals] = useState(false);
    const [ac, setAC] = useState(false);
    const [lights, setLights] = useState(false);
    const [transmission, setTransmission] = useState(false);
    const [sound, setSound] = useState(false);
    const [dials, setDials] = useState(false);

    {/* These are to check what button we are on within the different screens*/ }
    const [activeButton, setActiveButton] = useState(null);
    const [steeringIndex, setSteeringIndex] = useState(false);
    const [pedalsIndex, setPedalsIndex] = useState(false);
    const [acIndex, setACIndex] = useState(false);
    const [lightsIndex, setLightsIndex] = useState(false);
    const [transmissionIndex, setTransmissionIndex] = useState(false);
    const [soundIndex, setSoundIndex] = useState(false);
    const [dialsIndex, setDialsIndex] = useState(false);


    {/* Paths to the steering button images */}
    const imageSourcesSteering = [
        "/images/leftImage.png",
        "/images/rightImage.png",
        "/images/straightImage.png",
        "/images/randomImage.png", 
        ...Array(8).fill("")
      ];
    {/* Steering button captions */}
    const captionsSteering = [
        "TURN LEFT",
        "TURN RIGHT",
        "KEEP STRAIGHT",
        "RANDOM", 
        ...Array(8).fill("")
      ];
    
    

      {/* Paths to the pedal button images */}
    const imageSourcesPedals = [
        "/images/breaksOn.png",
        "/images/breaksOff.png",
        "/images/maxSpeed.png",
        "/images/lowSpeed.png", 
        ...Array(8).fill("")
      ];
    {/* Pedal button captions */}
    const captionsPedals = [
        "TURN BREAKS ON",
        "TURN BREAKS OFF",
        "MAX SPEED",
        "LOW SPEED", 
        ...Array(8).fill("")
      ];

    {/* Paths to the AC button images */}
    const imageSourcesAc = [
        "/images/acOn.png",
        "/images/acOff.png",
        "/images/coldAc.png",
        "/images/hotAc.png", 
        ...Array(8).fill("")
      ];
    {/* AC button captions */}
    const captionsAc = [
        "A/C ON",
        "A/C OFF",
        "COLD A/C",
        "HOT A/C", 
        ...Array(8).fill("")
      ];
    {/* Paths to the Lights button images */}
    const imageSourcesLights = [
        "/images/lightsOn.png",
        "/images/lightsOff.png",
        "/images/leftBlinker.png",
        "/images/rightBlinker.png", 
        "/images/lightsOn.png", 
        "/images/lightsOff.png", 
        "/images/lightsOn.png", 
        "/images/lightsOff.png", 
        "/images/funLights.png", 
        "/images/funLights.png", 
        "/images/funLights.png", 
        "/images/funLights.png" 
      ];
    {/* Lights button captions */}
    const captionsLights = [
        "HEADLIGHTS ON",
        "HEADLIGHTS OFF",
        "LEFT BLINKER ON",
        "RIGHT BLINKER ON", 
        "BACK LIGHTS ON", 
        "BACK LIGHTS OFF", 
        "INTERIOR LIGHTS ON", 
        "INTERIOR LIGHTS OFF", 
        "FUN LIGHTS 1", 
        "FUN LIGHTS 2", 
        "FUN LIGHTS 3", 
        "FUN LIGHTS 4"
      ];

    {/* Paths to the Transmission button images */}
    const imageSourcesTransmission = [
        "/images/gear1.png",
        "/images/gear2.png",
        "/images/gear3.png",
        "/images/gear4.png", 
        "/images/gear5.png", 
        "/images/gear6.png", 
        "/images/reverseGear.png", 
        "/images/neutralGear.png", 
        "/images/randomGear.png", 
        ...Array(3).fill("")
      ];
    {/* Transmission button captions */}
    const captionsTransmission = [
        "1st GEAR",
        "2nd GEAR",
        "3rd GEAR",
        "4th GEAR", 
        "5th GEAR", 
        "REVERSE", 
        "NEUTRAL", 
        "RANDOM", 
        ...Array(3).fill("")
      ];
    
     {/* Paths to the Sound button images */}
     const imageSourcesSound = [
        "/images/hornImage.png",
        "/images/radioImage.png",
        "/images/revImage.png",
        "/images/idleImage.png", 
        "/images/sirenImage.png", 
        "/images/specialImage.png", 
        "/images/specialImage.png", 
        "/images/specialImage.png", 
        "/images/randomSoundImage.png", 
        ...Array(3).fill("")
      ];
    {/* Sound button captions */}
    const captionsSound = [
        "HORN",
        "RADIO",
        "REV ENGINE",
        "ENGINE IDLE", 
        "SIREN", 
        "SPECIAL 1", 
        "SPECIAL 2", 
        "SPECIAL 3", 
        "RANDOM",
        ...Array(3).fill("")
      ];
    
    {/* Paths to the Dials button images */}
    const imageSourcesDials = [
        "/images/dialsImage.png",
        "/images/dialsImage.png",
        "/images/dialsImage.png",
        "/images/dialsImage.png",
        "/images/dialsImage.png",
        "/images/dialsImage.png",
        "/images/dialsImage.png",
        "/images/dialsImage.png",
        "/images/dialsImage.png",
        "/images/dialsImage.png",
        "/images/dialsImage.png",
        "/images/dialsImage.png",
      ];
    {/* Dials button captions */}
    const captionsDials = [
        "RPM",
        "MPH",
        "T-CASE Oil Temp",
        "Transmission Oil Temp", 
        "Hydraulic Oil Temp", 
        "Battery Voltage Aux", 
        "Engine Temp", 
        "Engine Oil Pressure", 
        "Fuel",
        "Air Tank Pressure Front",
        "Air Tank Pressure Rear",
        "Battery Voltage Auto",
      ];

    function handleConnectClick() {
        {/* include logic to actually determine if it's connected or not over here */}
        if (!connected) {
            setCanBusLogs([...canBusLogs, "Canbus adapter connected, birate @ 250k"]);
            setConnectDisplayText("Disconnect CAN Bus Adapter");
            setConnected(true);
          } else {
            setCanBusLogs([...canBusLogs, "Canbus adapter NOT connected"]);
            setConnectDisplayText("Connect CAN Bus Adapter");
            setConnected(false);
          }
    }

    function handleExitClick(){
        {/* include actual exit functionality here */}
        setCanBusLogs([...canBusLogs, "Canbus Exit Clicked."]);
        setImageSources(empty);
        setCaptions(empty);
        setSteering(false);
        setAC(false);
        setDials(false);
        setLights(false);
        setPedals(false);
        setTransmission(false);
        setSound(false);
    }

    function handleSteeringClick(){
        setImageSources(imageSourcesSteering);
        setCaptions(captionsSteering);
        setSteering(true);
        setAC(false);
        setDials(false);
        setLights(false);
        setPedals(false);
        setTransmission(false);
        setSound(false);
        setActiveButton(steeringIndex);
    }
    function handlePedalsClick(){
        setImageSources(imageSourcesPedals);
        setCaptions(captionsPedals);
        setSteering(false);
        setAC(false);
        setDials(false);
        setLights(false);
        setPedals(true);
        setTransmission(false);
        setSound(false);
        setActiveButton(pedalsIndex);
    }
    function handleAcClick(){
        setImageSources(imageSourcesAc);
        setCaptions(captionsAc);
        setSteering(false);
        setAC(true);
        setDials(false);
        setLights(false);
        setPedals(false);
        setTransmission(false);
        setSound(false);
        setActiveButton(acIndex);
    }
    function handleLightsClick(){
        setImageSources(imageSourcesLights);
        setCaptions(captionsLights);
        setSteering(false);
        setAC(false);
        setDials(false);
        setLights(true);
        setPedals(false);
        setTransmission(false);
        setSound(false);
        setActiveButton(lightsIndex);
    }
    function handleTransmissionClick(){
        setImageSources(imageSourcesTransmission);
        setCaptions(captionsTransmission);
        setSteering(false);
        setAC(false);
        setDials(false);
        setLights(false);
        setPedals(false);
        setTransmission(true);
        setSound(false);
        setActiveButton(transmissionIndex);
    }
    function handleSoundClick(){
        setImageSources(imageSourcesSound);
        setCaptions(captionsSound);
        setSteering(false);
        setAC(false);
        setDials(false);
        setLights(false);
        setPedals(false);
        setTransmission(false);
        setSound(true);
        setActiveButton(soundIndex);
    }
    function handleDialsClick(){
        setImageSources(imageSourcesDials);
        setCaptions(captionsDials);
        setSteering(false);
        setAC(false);
        setDials(true);
        setLights(false);
        setPedals(false);
        setTransmission(false);
        setSound(false);
        setActiveButton(dialsIndex);
    }
    const handleButtonClick = (index) => {
        {/* add handling logic based on current screen (check for like if steering === true) and index of button*/}
        {/* connect to backend to have proper response when it's clicked*/}

        if(steering === true && index == 0){
            setCanBusLogs([...canBusLogs, "-----------------------------------------------------------------------------",
            "Canbus message sent successful !", "PGN: 0x18EFFF Message: 0xDE 0xAD 0xBE 0xEF"]);
            {/* connect backend logic for the actual message to add into the logs */}
        } 
        {/* add more responses as needed*/}

        if(steering === true){
            setSteeringIndex(index);
        }else if(pedals === true){
            setPedalsIndex(index);
        }else if(ac === true){
            setACIndex(index);
        }else if(transmission === true){
            setTransmissionIndex(index);
        }else if(lights === true){
            setLightsIndex(index);
        }else if(dials === true){
            setDialsIndex(index);
        }else if(sound === true){
            setSoundIndex(index);
        }
        setActiveButton(index);
    }
    function handleStopEffectsClick() {
        setActiveButton(null);
        setCanBusLogs([...canBusLogs, "-----------------------------------------------------------------------------", "Canbus effect removed."]);
        setPedalsIndex(null);
        setSteeringIndex(null);
        setACIndex(null);
        setTransmissionIndex(null);
        setLightsIndex(null);
        setDialsIndex(null);
        setSoundIndex(null);
    }


    return (
    <div className="container">
        <div className="box" id="box">

        <div className="title-box">
            <button className="connect-button" onClick={handleConnectClick}>
                {connectDisplayText}
            </button>
            <div className="connect-represent">
                <div className={`circle ${connected ? "green-circle" : ""}`}></div>
            </div>
            <div className= "title-box-text">
                Automotive Lab CAN Bus GUI
            </div>
            <div className= "title-box-small-text">
                {information.map((log, index) => (
                <p key={index}>{log}</p>
                ))}
            </div>
            <div className = "title-box-exit">
                <button className= "exit" onClick={handleExitClick}> EXIT </button>
            </div>
        </div>
        <div className="left-box-container" id="left-box">
            <button className = {`button-box left-box-one ${steering ? "green-box" : ""}`} onClick={handleSteeringClick}> 
                <img src={steeringImage} alt="Steering" className="small-image" />
                STEERING 
            </button>
            <div className = {`button-box left-box-two ${pedals ? "green-box" : ""}`} onClick={handlePedalsClick}> 
                <img src={pedalsImage} alt="Pedals" className="small-image" />
                PEDALS
            </div>
            <div className = {`button-box left-box-three ${ac ? "green-box" : ""}`} onClick={handleAcClick}> 
                <img src={acImage} alt="A/C" className="small-image" />
                A/C
            </div>
            <div className = {`button-box left-box-four ${lights ? "green-box" : ""}`} onClick={handleLightsClick}> 
                <img src={lightsImage} alt="lights" className="small-image" />
                LIGHTS
            </div>
        </div>
        <div className="vertical-line vertical-line-left" ></div>

        {/* buttons for inside each of the tabs, like 4 buttons for steering etc. */}
        {dials && (
        <div className="dials-box">
            {imageSources.map((source, index) => (
                <button className = {`dials-button ${activeButton === index ? 'active' : ''}`} 
                    key={index}
                    onClick={() => handleButtonClick(index)}
                    >
                    <img key={index} src={source} className="dials-image" />
                    {captions[index]}
                </button>
            ))}           
        </div>
        )}
        {!dials && (
             <div className="inner-box">
                {imageSources.map((source, index) => (
                    <button className={`center-inside ${activeButton === index ? 'active' : ''}`}
                        key={index}
                        onClick={() => handleButtonClick(index)}>
                        <img src={source} className="medium-image" />
                        {captions[index]}
                    </button>
                ))}
            </div>
        )}

        <div className="vertical-line vertical-line-right" ></div>

        <div className= "right-box-container" id="right-box">
            <button className = "button-box right-box-one" onClick={handleStopEffectsClick}> 
                <img src={stopImage} alt="stop-effects" className="small-image" />
                STOP EFFECTS
            </button>
            <div className = {`button-box right-box-two ${transmission ? "green-box" : ""}`} onClick={handleTransmissionClick}> 
                <img src={transmissionImage} alt="transmission" className="small-image" />
                TRANSMISSION
            </div>
            <div className = {`button-box right-box-three ${sound ? "green-box" : ""}`} onClick={handleSoundClick}> 
                <img src={soundImage} alt="sound" className="small-image" />
                SOUND
            </div>
            <div className =  {`button-box right-box-four ${dials ? "green-box" : ""}`} onClick={handleDialsClick}> 
                <img src={dialsImage} alt="dials" className="small-image" />
                DIALS
            </div>
        </div>
        <div className="history-box" ref={historyBoxRef}>
            <div className="history-box-content">
            {canBusLogs.map((log, index) => (
              <p key={index}>{log}</p>
            ))}
            </div>
        </div>
        </div>
    </div>
    );
};



export default App;
