export default function HeroGradient() {
  return (
    <>
      {/* Organic flowing gradient background */}
      <div className="absolute top-0 left-0 right-0 h-[800px] overflow-hidden">
        <div className="absolute -top-[400px] -left-[300px] w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute -top-[200px] -right-[400px] w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-[200px] left-[10%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[80px]"></div>
      </div>

      {/* Diagonal lines for asymmetric feel */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent transform rotate-[5deg] origin-left"></div>
        <div className="absolute top-[30%] right-0 w-full h-[1px] bg-gradient-to-r from-cyan-500/50 via-transparent to-transparent transform -rotate-[8deg] origin-right"></div>
        <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent transform rotate-[3deg] origin-left"></div>
      </div>
    </>
  )
}
