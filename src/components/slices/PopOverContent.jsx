export const PopOverContent = ({ name, children }) => (
  <div
    data-popover
    id={`popover-${name}`}
    role="tooltip"
    className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-90 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
  >
    <div className="p-3 space-y-2">{children}</div>
    <div data-popper-arrow></div>
  </div>
);
