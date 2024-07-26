import React from 'react';

/**
 * TabButton component for creating a tab button with active state styling.
 *
 * @component
 * @param {Object} props - The props that the component receives.
 * @param {boolean} props.active - Indicates whether the tab is active.
 * @param {Function} props.selectTab - Function to select the tab when clicked.
 * @param {React.ReactNode} props.children - The content of the tab button.
 * @returns {JSX.Element} The rendered TabButton component.
 */
export default function TabButton({ active, selectTab, children }) {
  // Determine the button classes based on the active state
  const buttonClasses = active
    ? 'text-sky-300 border-b border-yellow-300'
    : 'text-blue-900';

  return (
    <button onClick={selectTab}>
      <p className={`mr-3  hover:text-yellow-300 ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
}
