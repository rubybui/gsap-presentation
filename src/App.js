import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "./App.css";
gsap.registerPlugin(MotionPathPlugin);

export default function App() {
  const rocketRef = useRef();
  const planetRef = useRef();
  const starRef = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    let rocket = rocketRef.current
    let planet = planetRef.current

    //rocket movement
    gsap.set(rocket, { transformOrigin: "right center", rotation: 20 })

    let tl = gsap.timeline({
      defaults: {   // You can now define default property values for all tweens in a timeline!!                           // Now check out line 9 to see how you can overwrite a property value :)
        stagger: .1,
        ease: "bounce.out",
        opacity: 0,
      }, repeat: -1, yoyo: true, repeatDelay: 2
    });

    tl.to(rocket, {
      duration: 1.5,
      opacity: 1,
      yPercent: 20,
      transformOrigin: 'center',
    });
    // planet orbit movement
    gsap.to(planet, {
      duration: 10,
      repeat: -1,
      repeatDelay: 0,
      ease: "power1.inOut",
      motionPath: {
        path: "M 0, 0 m -250, 0 a 250,250 0 1,0 500,0 a 250,250 0 1,0 -500,0",
        type: "cubic",
        autoRotate: true,
      }
    });

  })
  return (
    <div className="App">
      <div className="box" ref={rocketRef}><img src="https://www.coderpush.com/spaceship.png" /></div>
      <div className="planet" ref={planetRef}><img src="https://www.coderpush.com/planet5.png" /></div>
    </div>
  );
}