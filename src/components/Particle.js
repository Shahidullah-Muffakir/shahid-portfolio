// import React from "react";
// import Particles from "react-tsparticles";

// function Particle() {
//   return (
//     <Particles
//       id="tsparticles"
//       params={{
//         particles: {
//           number: {
//             value: 160,
//             density: {
//               enable: true,
//               value_area: 1500,
//             },
//           },
//           line_linked: {
//             enable: false,
//             opacity: 0.03,
//           },
//           move: {
//             direction: "right",
//             speed: 0.05,
//           },
//           size: {
//             value: 1,
//           },
//           opacity: {
//             anim: {
//               enable: true,
//               speed: 1,
//               opacity_min: 0.05,
//             },
//           },
//         },
//         interactivity: {
//           events: {
//             onclick: {
//               enable: true,
//               mode: "push",
//             },
//           },
//           modes: {
//             push: {
//               particles_nb: 1,
//             },
//           },
//         },
//         retina_detect: true,
//       }}
//     />
//   );
// }

// export default Particle;


import React from "react";
import Particles from "react-tsparticles";

function SimpleParticle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          color: {
            value: "#ffffff",
          },
          line_linked: {
            color: "#ffffff",
            distance: 150,
            width: 1,
          },
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "",
              width: 100,
              height: 100,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default SimpleParticle;


// import React from "react";
// import Particles from "react-tsparticles";

// function FancyParticle() {
//   return (
//     <Particles
//       id="tsparticles"
//       params={{
//         particles: {
//           color: {
//             value: "#ff0000",
//           },
//           line_linked: {
//             color: "#ff0000",
//             distance: 150,
//             width: 2,
//           },
//           number: {
//             value: 120,
//             density: {
//               enable: true,
//               value_area: 800,
//             },
//           },
//           shape: {
//             type: "star",
//             stroke: {
//               width: 3,
//               color: "#ff0000",
//             },
//             polygon: {
//               nb_sides: 5,
//             },
//             image: {
//               src: "",
//               width: 100,
//               height: 100,
//             },
//           },
//           size: {
//             value: 4,
//             random: true,
//             anim: {
//               enable: true,
//               speed: 10,
//               size_min: 0.1,
//               sync: false,
//             },
//           },
//           opacity: {
//             value: 0.7,
//             random: false,
//             anim: {
//               enable: true,
//               speed: 1,
//               opacity_min: 0.1,
//               sync: false,
//             },
//           },
//         },
//         interactivity: {
//           detect_on: "canvas",
//           events: {
//             onhover: {
//               enable: true,
//               mode: "repulse",
//             },
//             onclick: {
//               enable: true,
//               mode: "push",
//             },
//             resize: true,
//           },
//           modes: {
//             grab: {
//               distance: 140,
//               line_linked: {
//                 opacity: 1,
//               },
//             },
//             bubble: {
//               distance: 400,
//               size: 40,
//               duration: 2,
//               opacity: 8,
//               speed: 3,
//             },
//             repulse: {
//               distance: 200,
//               duration: 0.4,
//             },
//             push: {
//               particles_nb: 4,
//             },
//             remove: {
//               particles_nb: 2,
//             },
//           },
//         },
//         retina_detect: true,
//       }}
//     />
//   );
// }

// export default FancyParticle;
