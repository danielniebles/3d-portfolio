import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  /* const [Leva, { x, y, z }] = useLeva("Cube"); */

  const {
    deskPosition,
    deskScale,
    targetPosition,
    reactLogoPosition,
    cubePosition,
    ringPosition,
  } = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen flex flex-col w-full relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Daniel <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>
      <div className="h-full w-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <Suspense fallback={<CanvasLoader />}>
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={deskPosition}
                rotation={[0, -Math.PI, 0]}
                scale={deskScale}
              />
            </HeroCamera>
            <group>
              <Target position={targetPosition} />
              <ReactLogo position={reactLogoPosition} />
              <Cube position={cubePosition} />
              <Rings position={ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
