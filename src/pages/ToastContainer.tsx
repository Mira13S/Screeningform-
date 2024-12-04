import React, { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const TOAST_AUTO_CLOSE_DELAY = 5000; // 5 seconds

const ToastContainer: React.FC = () => {
  const { toasts, dismiss } = useToast();

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    toasts.forEach((toast) => {
      if (toast.open) {
        const timer = setTimeout(() => {
          dismiss(toast.id);
        }, TOAST_AUTO_CLOSE_DELAY);
        timers.push(timer);
      }
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [toasts, dismiss]);


  return (
    <div className="fixed top-4 right-4 space-y-3 z-50">
      {toasts.map((toast) => (
        <div
          key={toast.id}

          className={`transition-transform transform ${
            toast.open ? "opacity-100 scale-100" : "opacity-0 scale-95"
          } bg-white shadow-md border border-gray-200 rounded-lg p-4 w-96 text-gray-900 relative`}

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

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300">
            <div
              className="h-full bg-blue-500 transition-all"
              style={{
                animation: `progress ${TOAST_AUTO_CLOSE_DELAY}ms linear`,
              }}
            />
          </div>

        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
