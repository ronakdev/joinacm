import React from 'react';

import { Progress } from "antd";

const ProgressBar = () => (
  <div className="progressbar">
    <Progress
      strokeColor={{
        "10%": "#bd250f",
        "100%": "#18e310"
      }}
      strokeWidth={20}
      percent={99.9}
    />
  </div>
);

export default ProgressBar;
