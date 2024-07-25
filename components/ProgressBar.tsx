import React from 'react';
import Image from 'next/image';

/**
 * ProgressBar component displays a progress bar with an icon and title.
 *
 * @component
 * @param {Object} props - The props that the component receives.
 * @param {string} props.title - The title of the progress bar.
 * @param {number} props.percentage - The completion percentage of the progress bar.
 * @param {string} props.iconPath - The path to the icon image.
 * @returns {JSX.Element} The rendered ProgressBar component.
 */
export default function ProgressBar({
  title,
  percentage,
  iconPath,
}: {
  title: string;
  percentage: number;
  iconPath: string;
}) {
  const isAnimated = iconPath.endsWith('.gif');

  return (
    <div className="mb-10">
      <div className="flex items-center mb-2 gap-1">
        <Image
          src={iconPath}
          height={60}
          width={60}
          alt={`${title} icon`}
          className="w-7 h-7"
          unoptimized={isAnimated} 
        />
        <div className="font-medium text-blue-950">
          {title}
        </div>
      </div>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-sm font-semibold inline-block text-blue-700">
              {`${percentage}%`}
            </span>
          </div>
        </div>
        <div className="w-full bg-gray-300 rounded-full">
          <div
            className="h-2 rounded-full bg-yellow-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
