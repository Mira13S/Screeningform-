import React from "react";
import { useToast } from "@/hooks/use-toast";

const ToastContainer: React.FC = () => {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed top-4 right-4 space-y-3 z-50">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-white shadow-md border border-gray-200 rounded-lg p-4 w-96 text-gray-900"
        >
          <div className="flex justify-between items-center">
            <strong className="text-lg font-semibold">{toast.title}</strong>
            <button
              onClick={() => dismiss(toast.id)}
              className="text-gray-500 hover:text-red-600 focus:outline-none"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          {toast.description && (
            <div className="mt-2 text-sm text-gray-700">
              {toast.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
