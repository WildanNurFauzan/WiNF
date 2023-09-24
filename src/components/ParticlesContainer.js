import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticlesContainer = () => {
  // init
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      classname="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={ {
        fullscreen: { enable: false },
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            // onHover: {
            //   enable: true,
            //   mode: "repulse",
            // },
            // resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
            repulse: {
              distance: 250,
              duration: 0.5,
            },
          },
        },
        particles: {
          color: {
            value: "#26291f",
          },
          links: {
            color: "#1d6969",
            distance: "150",
            enable: true,
            opacity: 0.7,
            width: 0.4,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
         
        },
        
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
