function TextContainer({ children, className }) {
  return (
    <div
      className={`flex justify-center border border-cyan-500 bg-cyan-500/10 px-12 py-4 relative ${className}`}
    >
      <p className="text-xl text-white font-bold">{children}</p>
      <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-cyan-500 opacity-60"></span>
      <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-cyan-500 opacity-60"></span>
      <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-cyan-500 opacity-60"></span>
      <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-cyan-500 opacity-60"></span>
    </div>
  );
}

export default TextContainer;
