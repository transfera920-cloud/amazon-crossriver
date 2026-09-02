import React, { useState } from 'react';
import { X, Gauge, AlertTriangle, ShieldCheck, Waves, Info, RefreshCw, Zap } from 'lucide-react';

interface WaterPhysicsCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaterPhysicsCalculatorModal: React.FC<WaterPhysicsCalculatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Inputs
  const [depthCm, setDepthCm] = useState<number>(45); // cm
  const [velocityMs, setVelocityMs] = useState<number>(1.2); // m/s
  const [bodyWeightKg, setBodyWeightKg] = useState<number>(65); // kg
  const [packWeightKg, setPackWeightKg] = useState<number>(18); // kg
  const [packSeparated, setPackSeparated] = useState<boolean>(false);
  const [riverbedFriction, setRiverbedFriction] = useState<'high' | 'medium' | 'low'>('medium');
  const [crossingMode, setCrossingMode] = useState<'solo_single_pole' | 'solo_dual_poles' | 'team_3_linked' | 'pendulum_rope'>('solo_dual_poles');

  if (!isOpen) return null;

  // Physics calculation
  // Effective depth in meters
  const depthM = depthCm / 100;
  
  // Rule of thumb product: Depth(m) * Velocity(m/s)
  const depthVelocityProduct = depthM * velocityMs;

  // Submerged Area Approximation:
  // Legs submerged area + (if depth > 75cm, torso submerged)
  // If pack attached and depth > 60cm, pack adds huge drag area
  let projectedArea = 0.18 * (depthM / 0.8); // 2 legs area
  if (depthM > 0.8) {
    projectedArea += 0.3 * (depthM - 0.8); // torso
  }
  if (!packSeparated && depthM > 0.6) {
    projectedArea += 0.25 * (depthM - 0.6); // pack drag in water
  }

  // Drag Force: F_drag = 0.5 * rho * v^2 * Cd * Area
  // rho = 1000 kg/m3, Cd ~ 1.1 for human body in rough water
  const rho = 1000;
  const Cd = 1.15;
  const dragForceNewtons = 0.5 * rho * Math.pow(velocityMs, 2) * Cd * projectedArea;
  const dragForceKgf = dragForceNewtons / 9.81;

  // Buoyancy effect (reduces normal ground reaction force)
  // Submerged volume roughly 10L per 15cm leg height + pack buoyancy if attached
  let submergedVolumeLiters = (depthCm / 85) * 40;
  if (!packSeparated && depthCm > 60) {
    // A 50-70L waterproofed backpack acts like a 15-30L float trapping air
    submergedVolumeLiters += 20; 
  }
  submergedVolumeLiters = Math.min(submergedVolumeLiters, bodyWeightKg * 0.85);

  const effectiveWeightKg = Math.max(5, bodyWeightKg + (packSeparated ? 0 : packWeightKg) - submergedVolumeLiters);
  
  // Friction coefficient
  const muMap = {
    high: 0.65, // Coarse gravel, felt sole / good lugs
    medium: 0.45, // River rocks
    low: 0.25, // Algae covered slick boulders
  };
  const mu = muMap[riverbedFriction];

  // Maximum static holding friction (before slipping)
  let maxHoldingFrictionKgf = effectiveWeightKg * mu;

  // Crossing mode multipliers on holding stability
  const modeMultiplier = {
    solo_single_pole: 1.0,
    solo_dual_poles: 1.45,
    team_3_linked: 2.6,
    pendulum_rope: 3.2,
  }[crossingMode];

  maxHoldingFrictionKgf *= modeMultiplier;

  // Stability Ratio: Holding Force / Drag Force
  const stabilityRatio = maxHoldingFrictionKgf / Math.max(1, dragForceKgf);

  // Risk Classification
  let riskLevel: 'safe' | 'caution' | 'warning' | 'extreme' = 'safe';
  if (depthVelocityProduct > 1.3 || stabilityRatio < 1.0 || (depthCm > 85 && velocityMs > 1.5)) {
    riskLevel = 'extreme';
  } else if (depthVelocityProduct > 0.85 || stabilityRatio < 1.4) {
    riskLevel = 'warning';
  } else if (depthVelocityProduct > 0.5 || stabilityRatio < 2.0) {
    riskLevel = 'caution';
  } else {
    riskLevel = 'safe';
  }

  const handleReset = () => {
    setDepthCm(45);
    setVelocityMs(1.2);
    setBodyWeightKg(65);
    setPackWeightKg(18);
    setPackSeparated(false);
    setRiverbedFriction('medium');
    setCrossingMode('solo_dual_poles');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-100">
                水文流速與水深力學風險計算器
              </h2>
              <p className="text-xs text-slate-400">
                模擬水流推力 $F_{'{'}drag{'}'}$、浮力減重效應與河床抓地力平衡
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 custom-scrollbar">
          {/* Quick Preset / Reset Bar */}
          <div className="flex items-center justify-between bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-xs">
            <span className="text-slate-400">
              調整下方水文與裝備參數，即時估算橫渡受力與穩定度。
            </span>
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-slate-400 hover:text-cyan-400 flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" /> 恢復預設值
            </button>
          </div>

          {/* Core Interactive Parameters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Left Column: Environmental / Stream Hydrodynamics */}
            <div className="space-y-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Waves className="w-4 h-4" />
                溪流水文與環境參數
              </div>

              {/* Water Depth Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">溪水深度 (Water Depth)</span>
                  <span className="font-mono font-bold text-cyan-300">
                    {depthCm} cm{' '}
                    <span className="text-slate-500 font-normal">
                      ({depthCm < 35 ? '腳踝至小腿' : depthCm < 55 ? '及膝水深' : depthCm < 75 ? '大腿水深' : '及腰/胸險水'})
                    </span>
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="110"
                  step="5"
                  value={depthCm}
                  onChange={(e) => setDepthCm(Number(e.target.value))}
                  className="w-full accent-cyan-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Velocity Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">表面流速 (Flow Velocity)</span>
                  <span className="font-mono font-bold text-cyan-300">
                    {velocityMs.toFixed(1)} m/s{' '}
                    <span className="text-slate-500 font-normal">
                      ({velocityMs < 0.8 ? '緩流' : velocityMs < 1.5 ? '中等急流' : velocityMs < 2.5 ? '洶湧白水' : '極度狂暴'})
                    </span>
                  </span>
                </div>
                <input
                  type="range"
                  min="0.3"
                  max="3.5"
                  step="0.1"
                  value={velocityMs}
                  onChange={(e) => setVelocityMs(Number(e.target.value))}
                  className="w-full accent-cyan-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Riverbed Friction Type */}
              <div className="space-y-1.5">
                <span className="text-xs text-slate-300 font-medium block">河床底質與抓地力</span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setRiverbedFriction('high')}
                    className={`p-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                      riverbedFriction === 'high'
                        ? 'bg-emerald-950 border-emerald-500/60 text-emerald-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                    }`}
                  >
                    粗碎石沙質
                  </button>
                  <button
                    type="button"
                    onClick={() => setRiverbedFriction('medium')}
                    className={`p-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                      riverbedFriction === 'medium'
                        ? 'bg-cyan-950 border-cyan-500/60 text-cyan-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                    }`}
                  >
                    普通卵石河床
                  </button>
                  <button
                    type="button"
                    onClick={() => setRiverbedFriction('low')}
                    className={`p-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                      riverbedFriction === 'low'
                        ? 'bg-red-950 border-red-500/60 text-red-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                    }`}
                  >
                    濕滑青苔大滾石
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Person & Gear State */}
            <div className="space-y-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-4 h-4" />
                人員體態與背包配置
              </div>

              {/* Body Weight */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">隊員體重 (Body Weight)</span>
                  <span className="font-mono font-bold text-amber-300">{bodyWeightKg} kg</span>
                </div>
                <input
                  type="range"
                  min="45"
                  max="95"
                  step="5"
                  value={bodyWeightKg}
                  onChange={(e) => setBodyWeightKg(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Pack Weight & Separation Toggle */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">背包重量 (Pack Weight)</span>
                  <span className="font-mono font-bold text-amber-300">{packWeightKg} kg</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="30"
                  step="2"
                  value={packWeightKg}
                  onChange={(e) => setPackWeightKg(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />

                {/* Separation Toggle Button */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => setPackSeparated(!packSeparated)}
                    className={`w-full p-2.5 rounded-xl border text-xs font-bold flex items-center justify-between transition-all cursor-pointer ${
                      packSeparated
                        ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-300'
                        : 'bg-red-950/50 border-red-500/40 text-red-200 hover:bg-red-900/40'
                    }`}
                  >
                    <span>{packSeparated ? '✓ 啟動：主動人包分離 (空身涉水)' : '⚠️ 背包負重渡溪 (產生巨大浮力與阻力)'}</span>
                    <span className="text-[10px] underline">{packSeparated ? '改為背負' : '改為人包分離'}</span>
                  </button>
                </div>
              </div>

              {/* Crossing Stance / Formation */}
              <div className="space-y-1.5">
                <span className="text-xs text-slate-300 font-medium block">橫渡姿態與協同陣型</span>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setCrossingMode('solo_single_pole')}
                    className={`p-2 rounded-lg text-xs font-medium border text-left cursor-pointer ${
                      crossingMode === 'solo_single_pole'
                        ? 'bg-sky-950 border-sky-500 text-sky-200'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    單人單杖 (支撐低)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCrossingMode('solo_dual_poles')}
                    className={`p-2 rounded-lg text-xs font-medium border text-left cursor-pointer ${
                      crossingMode === 'solo_dual_poles'
                        ? 'bg-sky-950 border-sky-500 text-sky-200'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    雙杖三角穩固支撐
                  </button>
                  <button
                    type="button"
                    onClick={() => setCrossingMode('team_3_linked')}
                    className={`p-2 rounded-lg text-xs font-medium border text-left cursor-pointer ${
                      crossingMode === 'team_3_linked'
                        ? 'bg-sky-950 border-sky-500 text-sky-200'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    3人互挽並排破水
                  </button>
                  <button
                    type="button"
                    onClick={() => setCrossingMode('pendulum_rope')}
                    className={`p-2 rounded-lg text-xs font-medium border text-left cursor-pointer ${
                      crossingMode === 'pendulum_rope'
                        ? 'bg-sky-950 border-sky-500 text-sky-200'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    鐘擺繩索確保系統
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Real-time Calculations Output */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* Metric 1: Depth x Velocity Product */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="text-[11px] text-slate-400 font-medium">水深×流速乘積指標</div>
              <div className="text-xl font-extrabold font-mono text-slate-100">
                {depthVelocityProduct.toFixed(2)}{' '}
                <span className="text-xs text-slate-400">m²/s</span>
              </div>
              <div className="text-[10px] text-slate-400">
                {depthVelocityProduct < 0.6 ? '安全水文 (<0.6)' : depthVelocityProduct < 1.0 ? '臨界注意 (0.6~1.0)' : '⚠️ 致命水文 (>1.0)'}
              </div>
            </div>

            {/* Metric 2: Estimated Drag Force */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="text-[11px] text-slate-400 font-medium">水流推力 (Drag Force)</div>
              <div className="text-xl font-extrabold font-mono text-cyan-300">
                {dragForceKgf.toFixed(1)}{' '}
                <span className="text-xs text-slate-400">kgf</span>
              </div>
              <div className="text-[10px] text-slate-400">
                ≈ {(dragForceNewtons).toFixed(0)} N 水流衝擊動壓
              </div>
            </div>

            {/* Metric 3: Ground Normal Force */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="text-[11px] text-slate-400 font-medium">有效接地抓地力</div>
              <div className="text-xl font-extrabold font-mono text-amber-300">
                {maxHoldingFrictionKgf.toFixed(1)}{' '}
                <span className="text-xs text-slate-400">kgf</span>
              </div>
              <div className="text-[10px] text-slate-400">
                浮力減損：-{submergedVolumeLiters.toFixed(0)} kg
              </div>
            </div>

            {/* Metric 4: Stability Index */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="text-[11px] text-slate-400 font-medium">穩定餘裕指數</div>
              <div className={`text-xl font-extrabold font-mono ${stabilityRatio > 1.5 ? 'text-emerald-400' : stabilityRatio > 1.0 ? 'text-amber-400' : 'text-red-400'}`}>
                {stabilityRatio.toFixed(2)}x
              </div>
              <div className="text-[10px] text-slate-400">
                {stabilityRatio > 1.5 ? '穩固安全' : stabilityRatio > 1.0 ? '即將失足' : '必定被沖倒'}
              </div>
            </div>
          </div>

          {/* Risk Verdict Banner */}
          <div
            className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
              riskLevel === 'safe'
                ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
                : riskLevel === 'caution'
                ? 'bg-sky-950/40 border-sky-500/50 text-sky-200'
                : riskLevel === 'warning'
                ? 'bg-amber-950/50 border-amber-500/60 text-amber-200'
                : 'bg-red-950/70 border-red-500/80 text-red-100'
            }`}
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-extrabold text-base sm:text-lg">
                {riskLevel === 'safe' && <ShieldCheck className="w-5 h-5 text-emerald-400" />}
                {riskLevel === 'caution' && <Info className="w-5 h-5 text-sky-400" />}
                {riskLevel === 'warning' && <AlertTriangle className="w-5 h-5 text-amber-400" />}
                {riskLevel === 'extreme' && <AlertTriangle className="w-5 h-5 text-red-400 animate-pulse" />}
                
                {riskLevel === 'safe' && '水況評估：可安全徒手涉水 (Low Risk)'}
                {riskLevel === 'caution' && '水況評估：需謹慎專注，建議雙杖或協同 (Moderate Risk)'}
                {riskLevel === 'warning' && '水況評估：高度危險！必須主動人包分離或鐘擺確保 (High Hazard)'}
                {riskLevel === 'extreme' && '🛑 嚴格禁止渡溪！水力已超越人體極限 (LETHAL CONDITION)'}
              </div>
              <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                {riskLevel === 'safe' && '水深流速均在安全範圍內，解開背包胸腰扣，雙杖面向上游45°穩步通過。'}
                {riskLevel === 'caution' && '水流具備一定推力，注意腳下青苔滾石。建議 2~3 人並排互挽或尋找更寬的漫流處。'}
                {riskLevel === 'warning' && '背包若在身上將嚴重漂浮並成水阻！強烈要求啟動「主動人包分離」，或架設上游鐘擺確保。'}
                {riskLevel === 'extreme' && '推力大於腳下抓地力，一旦入水必定失足翻滾！立即退回安全岸邊原地紮營或高繞！'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
