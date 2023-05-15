import { Spin } from "antd";

function Loading({ isLoading }) {
  return (
    <div className="wrap">
      <Spin size="large" spinning={isLoading} />
      <style jsx>{`
        .wrap {
          position: absolute;
          top: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 999;
        }
      `}</style>
    </div>
  );
}

export default Loading;
