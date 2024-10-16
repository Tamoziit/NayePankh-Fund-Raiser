// eslint-disable-next-line react/prop-types
const ProgressTracker = ({ progress }) => {
    const radius = 70; // radius for chart
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex items-center justify-center">
      <svg width="200" height="100" className="overflow-visible"> 
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#A78BFA', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Background Circle (Gray) */}
        <path
          stroke="gray"
          fill="transparent"
          strokeWidth="6"
          d={`M 10,100 A ${radius},${radius} 0 1,1 190,100`}
        />
        
        {/* Progress Circle (Gradient) */}
        <path
          stroke="url(#gradient)"
          fill="transparent"
          strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          d={`M 10,100 A ${radius},${radius} 0 1,1 190,100`}
        />
      </svg>
      <div className="absolute text-center flex flex-col gap-0 mt-5">
        <span className="text-red-600 font-semibold">Goal Achieved</span>
        <span className="text-xl font-bold">{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressTracker;
