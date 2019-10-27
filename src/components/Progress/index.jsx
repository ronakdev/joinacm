import React from 'react';

import { Progress } from "antd";

const ProgressBar = () => (
  <div className="progressbar">
    <Progress
      strokeColor={{
        "0%": "#108ee9",
        "100%": "#87d068"
      }}
      strokeWidth={20}
      percent={99.9}
    />
  </div>
);

export default ProgressBar;
