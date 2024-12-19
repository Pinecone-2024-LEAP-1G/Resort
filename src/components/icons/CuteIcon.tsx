export const CuteTrainSVG = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="100"
        height="100"
        className="animate-moveTrain text-green-500"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          d="M4 8l6 2 6-2 6 2v10h-2V8l-6 2-6-2-6 2V18H4V8z"
        />
      </svg>
    </div>
  );
};
