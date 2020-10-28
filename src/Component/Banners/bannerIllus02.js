import React from 'react'
import { useSpring, animated } from 'react-spring'
import ILLUS2 from "../../static/images/illustration02.png";

const calc = (x, y) => [x - window.innerWidth / 6, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 70}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 20}px,0)`;

function BannerIll02() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    return (
        <div class="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.img  src={ILLUS2} alt="exploded computer blurded" style={{position:"absolute", filter: "blur(6px)",
                height: "38em",left: "2em",transform: props.xy.interpolate(trans1)}}/>
            <animated.img  src={ILLUS2} alt="exploded computer" style={{position:"absolute",
                height: "36em",left: "1em", transform: props.xy.interpolate(trans2)}}/>
        </div>
    )
}
export default BannerIll02

