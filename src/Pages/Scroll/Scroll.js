import React from "react";
import "./Scroll.css";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";
import { useState } from "react";

export default function Scroll() {
  const [toggleTxt, setToggleTxt] = useState(false);

  const animation = useSpring({
    opacity: toggleTxt ? 1 : 0,
    transform: toggleTxt ? "translateX(0)" : "translateX(-50%)",
  });

  return (
    <div>
      <p className="scroll-txt">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
        laboriosam beatae sed? Voluptatibus quo debitis, nobis, ut quas
        consequatur numquam quasi eaque provident ullam amet placeat aliquid
        architecto odit sequi perspiciatis aperiam, doloribus voluptatem
        exercitationem sunt reiciendis nemo sint excepturi. Commodi quos
        temporibus pariatur? Architecto libero ducimus rem ex autem minima?
        Corrupti commodi porro dolorum culpa minima autem repellat ducimus fuga,
        vel consequuntur odio sed rem laudantium iusto eaque in veniam quae.
        Vero exercitationem facilis voluptas ab vitae inventore maxime, quis rem
        dolorem perferendis explicabo corrupti delectus consequuntur molestiae
        nisi earum sunt, a tempore reiciendis nobis ratione omnis porro! Eveniet
        neque minima unde quisquam iste similique ut, numquam a hic dolor
        veritatis dolorem porro odio dicta esse nesciunt id accusamus? Natus
        nulla ex cum saepe distinctio? Enim fugiat repudiandae culpa aliquid
        quia esse fugit sit ratione, voluptas ea maiores incidunt earum, nemo
        perspiciatis placeat inventore optio veniam sunt! Quibusdam vero
        perspiciatis saepe repellendus nisi sunt molestiae, ipsum, ad iste, rem
        beatae impedit. Eligendi eos temporibus sapiente nemo asperiores
        explicabo ea! Modi quasi voluptatum error dolore eum cumque, magni ut
        voluptate odit maiores distinctio quis eligendi molestiae sequi dolorum
        nam fuga quia fugiat velit dicta mollitia recusandae cum corporis.
        Expedita, dignissimos!
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
        laboriosam beatae sed? Voluptatibus quo debitis, nobis, ut quas
        consequatur numquam quasi eaque provident ullam amet placeat aliquid
        architecto odit sequi perspiciatis aperiam, doloribus voluptatem
        exercitationem sunt reiciendis nemo sint excepturi. Commodi quos
        temporibus pariatur? Architecto libero ducimus rem ex autem minima?
        Corrupti commodi porro dolorum culpa minima autem repellat ducimus fuga,
        vel consequuntur odio sed rem laudantium iusto eaque in veniam quae.
        Vero exercitationem facilis voluptas ab vitae inventore maxime, quis rem
        dolorem perferendis explicabo corrupti delectus consequuntur molestiae
        nisi earum sunt, a tempore reiciendis nobis ratione omnis porro! Eveniet
        neque minima unde quisquam iste similique ut, numquam a hic dolor
        veritatis dolorem porro odio dicta esse nesciunt id accusamus? Natus
        nulla ex cum saepe distinctio? Enim fugiat repudiandae culpa aliquid
        quia esse fugit sit ratione, voluptas ea maiores incidunt earum, nemo
        perspiciatis placeat inventore optio veniam sunt! Quibusdam vero
        perspiciatis saepe repellendus nisi sunt molestiae, ipsum, ad iste, rem
        beatae impedit. Eligendi eos temporibus sapiente nemo asperiores
        explicabo ea! Modi quasi voluptatum error dolore eum cumque, magni ut
        voluptate odit maiores distinctio quis eligendi molestiae sequi dolorum
        nam fuga quia fugiat velit dicta mollitia recusandae cum corporis.
        Expedita, dignissimos!
      </p>
      <Waypoint
        bottomOffset="30%"
        onEnter={() => {
          if(!toggleTxt){
            setToggleTxt(true)
          }
        }}
      ></Waypoint>
      <animated.div style={animation} className='cta-section'>
        <h2>N'en ratez pas une miette !</h2>
        <form>
          <label htmlFor="email">Inscrivez-vous à la newsletter</label>
          <input type="email" id="email" />
        </form>
      </animated.div>
      <p className="scroll-txt">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
        laboriosam beatae sed? Voluptatibus quo debitis, nobis, ut quas
        consequatur numquam quasi eaque provident ullam amet placeat aliquid
        architecto odit sequi perspiciatis aperiam, doloribus voluptatem
        exercitationem sunt reiciendis nemo sint excepturi. Commodi quos
        temporibus pariatur? Architecto libero ducimus rem ex autem minima?
        Corrupti commodi porro dolorum culpa minima autem repellat ducimus fuga,
        vel consequuntur odio sed rem laudantium iusto eaque in veniam quae.
        Vero exercitationem facilis voluptas ab vitae inventore maxime, quis rem
        dolorem perferendis explicabo corrupti delectus consequuntur molestiae
        nisi earum sunt, a tempore reiciendis nobis ratione omnis porro! Eveniet
        neque minima unde quisquam iste similique ut, numquam a hic dolor
        veritatis dolorem porro odio dicta esse nesciunt id accusamus? Natus
        nulla ex cum saepe distinctio? Enim fugiat repudiandae culpa aliquid
        quia esse fugit sit ratione, voluptas ea maiores incidunt earum, nemo
        perspiciatis placeat inventore optio veniam sunt! Quibusdam vero
        perspiciatis saepe repellendus nisi sunt molestiae, ipsum, ad iste, rem
        beatae impedit. Eligendi eos temporibus sapiente nemo asperiores
        explicabo ea! Modi quasi voluptatum error dolore eum cumque, magni ut
        voluptate odit maiores distinctio quis eligendi molestiae sequi dolorum
        nam fuga quia fugiat velit dicta mollitia recusandae cum corporis.
        Expedita, dignissimos!
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
        laboriosam beatae sed? Voluptatibus quo debitis, nobis, ut quas
        consequatur numquam quasi eaque provident ullam amet placeat aliquid
        architecto odit sequi perspiciatis aperiam, doloribus voluptatem
        exercitationem sunt reiciendis nemo sint excepturi. Commodi quos
        temporibus pariatur? Architecto libero ducimus rem ex autem minima?
        Corrupti commodi porro dolorum culpa minima autem repellat ducimus fuga,
        vel consequuntur odio sed rem laudantium iusto eaque in veniam quae.
        Vero exercitationem facilis voluptas ab vitae inventore maxime, quis rem
        dolorem perferendis explicabo corrupti delectus consequuntur molestiae
        nisi earum sunt, a tempore reiciendis nobis ratione omnis porro! Eveniet
        neque minima unde quisquam iste similique ut, numquam a hic dolor
        veritatis dolorem porro odio dicta esse nesciunt id accusamus? Natus
        nulla ex cum saepe distinctio? Enim fugiat repudiandae culpa aliquid
        quia esse fugit sit ratione, voluptas ea maiores incidunt earum, nemo
        perspiciatis placeat inventore optio veniam sunt! Quibusdam vero
        perspiciatis saepe repellendus nisi sunt molestiae, ipsum, ad iste, rem
        beatae impedit. Eligendi eos temporibus sapiente nemo asperiores
        explicabo ea! Modi quasi voluptatum error dolore eum cumque, magni ut
        voluptate odit maiores distinctio quis eligendi molestiae sequi dolorum
        nam fuga quia fugiat velit dicta mollitia recusandae cum corporis.
        Expedita, dignissimos!
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
        laboriosam beatae sed? Voluptatibus quo debitis, nobis, ut quas
        consequatur numquam quasi eaque provident ullam amet placeat aliquid
        architecto odit sequi perspiciatis aperiam, doloribus voluptatem
        exercitationem sunt reiciendis nemo sint excepturi. Commodi quos
        temporibus pariatur? Architecto libero ducimus rem ex autem minima?
        Corrupti commodi porro dolorum culpa minima autem repellat ducimus fuga,
        vel consequuntur odio sed rem laudantium iusto eaque in veniam quae.
        Vero exercitationem facilis voluptas ab vitae inventore maxime, quis rem
        dolorem perferendis explicabo corrupti delectus consequuntur molestiae
        nisi earum sunt, a tempore reiciendis nobis ratione omnis porro! Eveniet
        neque minima unde quisquam iste similique ut, numquam a hic dolor
        veritatis dolorem porro odio dicta esse nesciunt id accusamus? Natus
        nulla ex cum saepe distinctio? Enim fugiat repudiandae culpa aliquid
        quia esse fugit sit ratione, voluptas ea maiores incidunt earum, nemo
        perspiciatis placeat inventore optio veniam sunt! Quibusdam vero
        perspiciatis saepe repellendus nisi sunt molestiae, ipsum, ad iste, rem
        beatae impedit. Eligendi eos temporibus sapiente nemo asperiores
        explicabo ea! Modi quasi voluptatum error dolore eum cumque, magni ut
        voluptate odit maiores distinctio quis eligendi molestiae sequi dolorum
        nam fuga quia fugiat velit dicta mollitia recusandae cum corporis.
        Expedita, dignissimos!
      </p>
    </div>
  );
}
