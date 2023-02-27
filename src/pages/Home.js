import React from "react";
import RenderComponents from "../modules/RenderComponents";
import elements from "../elements.json";
import exportStyle from "../utils/styles.export";
function Home() {
  exportStyle(elements);
  return <RenderComponents elements={elements} />;
}

export default Home;
