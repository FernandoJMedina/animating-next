import { motion } from "framer-motion";
import Scrollbar from "react-smooth-scrollbar";
import { useOnScreen } from "../hook";
export default function Smooth() {
  const [sec1, isVisibleSec1] = useOnScreen({ threshold: 0.5 });
  const [sec2, isVisibleSec2] = useOnScreen({ threshold: 0.5 });
  const [sec3, isVisibleSec3] = useOnScreen({ threshold: 0.5 });

  return (
    <Scrollbar
      damping={0.1}
      thumbMinSize={20}
      renderByPixels={true}
      alwaysShowTracks={false}
      continuousScrolling={true}
      plugins={{}}
    >
      <div
        ref={sec1}
        style={{
          height: "100vh",
          backgroundColor: `orange`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          style={{ fontSize: 50 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisibleSec1 ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          hola
        </motion.div>
      </div>
      <div
        ref={sec2}
        style={{
          height: "100vh",
          backgroundColor: `orangered`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          style={{ fontSize: 50 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisibleSec2 ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          hola
        </motion.div>
      </div>
      <div
        ref={sec3}
        style={{
          height: "100vh",
          backgroundColor: `darkblue`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          style={{ fontSize: 50 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisibleSec3 ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          hola
        </motion.div>
      </div>
    </Scrollbar>
  );
}
