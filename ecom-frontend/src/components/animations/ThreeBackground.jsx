const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 dark:from-blue-900/10 dark:to-purple-900/10" />
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-2000" />
    </div>
  );
};

export default ThreeBackground;