// StatusIcon.tsx
import React from "react";
import {
  Shield,
  AlertTriangle,
  XCircle,
  Plus,
  MapPin,
  AlertOctagon,
  CheckCircle,
  ThumbsDown,
  MoreHorizontal,
  AlertCircle,
  MapPinPlusInside,
  ThumbsUp,
} from "lucide-react";

export type StatusType = "risk" | "conflicts" | "approvals" | "general";
export type StatusLevel =
  | "low"
  | "medium"
  | "high"
  | "approved"
  | "denied"
  | "evaluation"
  | "unavailable";

interface StatusIconProps {
  type: StatusType;
  level: StatusLevel;
  size?: number;
  onClick: () => void;
}

export const StatusIcon = ({
  type,
  level,
  size = 50,
  onClick,
}: StatusIconProps) => {
  const getIcon = () => {
    switch (type) {
      case "risk":
        switch (level) {
          case "low":
            return <Shield className="text-green-500" size={size} />;
          case "medium":
            return <AlertTriangle className="text-yellow-500" size={size} />;
          case "high":
            return <XCircle className="text-red-500" size={size} />;
          case "unavailable":
            return <AlertCircle className="text-gray-500" size={size} />;
          case "evaluation":
            return <MoreHorizontal className="text-gray-500" size={size} />;
          default:
            return null;
        }
      case "conflicts":
        switch (level) {
          case "low":
            return <MapPinPlusInside className="text-green-500" size={size} />;
          case "medium":
            return <MapPin className="text-yellow-500" size={size} />;
          case "high":
            return <AlertOctagon className="text-red-500" size={size} />;
          case "evaluation":
            return <MoreHorizontal className="text-gray-500" size={size} />;

          default:
            return null;
        }
      case "approvals":
        switch (level) {
          case "approved":
            return <ThumbsUp className="text-green-500" size={size} />;
          case "denied":
            return <ThumbsDown className="text-red-500" size={size} />;
          case "evaluation":
            return <MoreHorizontal className="text-gray-600" size={size} />;
          default:
            return null;
        }
      default:
        return null;
    }
  };

  return (
    <div className="inline-flex items-center justify-center">{getIcon()}</div>
  );
};
