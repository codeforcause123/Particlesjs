import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback,} from "react";
import Config from "./config/Particleconfig.json";

const ParticlesComponent = (props) => {
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);
  return <Particles id={props.id} init={particlesInit} options={Config} />;
};

export default ParticlesComponent;
