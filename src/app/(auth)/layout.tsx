import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-[75vh]">
        <div className="w-1/3 rounded-lg shadow-xl p-6">{children}</div>
      </div>
    </div>
  );
};

export default layout;
