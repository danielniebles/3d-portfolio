import { Leva, useControls } from "leva";

const useLeva = (schema) => {
  const controls = useControls(schema, {
    positionX: {
      value: 0,
      min: -50,
      max: 50,
    },
    positionY: {
      value: 0,
      min: -50,
      max: 50,
    },
    positionZ: {
      value: 0,
      min: -50,
      max: 50,
    },
  });

  return [
    Leva,
    {
      x: controls.positionX,
      y: controls.positionY,
      z: controls.positionZ,
    },
  ];
};

export default useLeva;
