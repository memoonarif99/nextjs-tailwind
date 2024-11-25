import { FC } from "react";

interface LabelProps {
  color?: "primary" | "secondary" | "error" | "warning" | "success";
  children?: React.ReactNode;
  className?: string;
}

const Label: FC<LabelProps> = ({
  color = "primary",
  children,
  className = "",
  ...rest
}) => {
  const colorStyles = {
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    error: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
    success: "bg-green-100 text-green-800",
  };

  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5
        rounded-full text-xs font-medium
        ${colorStyles[color]}
        ${className}
      `}
      {...rest}
    >
      {children}
    </span>
  );
};

export default Label;
