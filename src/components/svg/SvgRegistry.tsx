import React from 'react';
import { StreamAnatomySvg } from './StreamAnatomySvg';
import { StreamVectorsSvg } from './StreamVectorsSvg';
import { SafeCrossingPositionSvg } from './SafeCrossingPositionSvg';
import { HazardousPositionSvg } from './HazardousPositionSvg';
import { SoloCrossingStanceSvg } from './SoloCrossingStanceSvg';
import { TeamCrossingSvg } from './TeamCrossingSvg';
import { BasicRopeBelaySvg } from './BasicRopeBelaySvg';
import { SingleRopePendulumSvg } from './SingleRopePendulumSvg';
import { DoubleRopePendulumSvg } from './DoubleRopePendulumSvg';
import { PendulumLeadSvg } from './PendulumLeadSvg';
import { PendulumFollowerSvg } from './PendulumFollowerSvg';
import { PendulumSweepSvg } from './PendulumSweepSvg';
import { ActivePackSeparationSvg } from './ActivePackSeparationSvg';
import { RopeWaterTransportSvg } from './RopeWaterTransportSvg';
import { EmergencyPackReleaseSvg } from './EmergencyPackReleaseSvg';
import { RetreatPathSvg } from './RetreatPathSvg';
import { TeamRolesSvg } from './TeamRolesSvg';
import { DecisionFlowSvg } from './DecisionFlowSvg';

export interface DiagramMeta {
  id: string;
  title: string;
  category: string;
  description: string;
  component: React.FC<{ className?: string; activeStage?: number; onStageSelect?: (s: number) => void }>;
}

export const DIAGRAM_REGISTRY: Record<string, DiagramMeta> = {
  'stream-anatomy': {
    id: 'stream-anatomy',
    title: '溪流結構全景圖',
    category: '水文判讀',
    description: '標示主流深水槽、淺灘寬面、迴流區 (Eddy)、障礙物倒木 (Strainer) 及落差陷阱。',
    component: StreamAnatomySvg,
  },
  'stream-vectors': {
    id: 'stream-vectors',
    title: '水流力學與推力向量圖',
    category: '力學分析',
    description: '水流力學推力與流速平方成正比；標示水流推力、人體摩擦阻力、鐘擺牽引力及合力方向。',
    component: StreamVectorsSvg,
  },
  'safe-crossing-position': {
    id: 'safe-crossing-position',
    title: '理想過溪點地形示意圖',
    category: '地形選點',
    description: '展示水面開闊平緩、水深膝下、兩岸坡度平緩、下游具備安全迴流緩衝區的優良地形。',
    component: SafeCrossingPositionSvg,
  },
  'hazardous-position': {
    id: 'hazardous-position',
    title: '危險渡溪地形與河中島孤立陷阱',
    category: '危險地形',
    description: '展示河中沙洲暴漲夾攻、倒木卡人篩子 (Strainer)、吸入孔及瀑布落差等致命地形。',
    component: HazardousPositionSvg,
  },
  'solo-crossing-stance': {
    id: 'solo-crossing-stance',
    title: '基本徒手渡溪身體姿態與三角支撐圖',
    category: '徒手技巧',
    description: '身體面向上游45°微蹲低重心，雙杖三角支撐、三點不動一點動、小步擦地側移，解開背包胸腰扣。',
    component: SoloCrossingStanceSvg,
  },
  'team-crossing': {
    id: 'team-crossing',
    title: '多人協同渡溪陣型圖（並排互挽與三角破水）',
    category: '團隊協同',
    description: '上游強者破水、弱者居中、下游強者收尾；或三角陣型以頂點破水分流，抗推力大幅增強。',
    component: TeamCrossingSvg,
  },
  'basic-rope-belay': {
    id: 'basic-rope-belay',
    title: '登山繩索確保系統架構圖',
    category: '繩索系統',
    description: '出發岸高位天然主錨點、操作確保員制動端、水中先鋒快卸系統、目標對岸接應站及順流撤退弧度。',
    component: BasicRopeBelaySvg,
  },
  'single-rope-pendulum': {
    id: 'single-rope-pendulum',
    title: '單繩鐘擺橫渡力學與弧形運動軌跡圖',
    category: '鐘擺橫渡',
    description: '上游固定點提供張力，人員借力順流向對岸弧形鐘擺；踩空失足時自動擺回原岸安全脫困。',
    component: SingleRopePendulumSvg,
  },
  'double-rope-pendulum': {
    id: 'double-rope-pendulum',
    title: '雙繩鐘擺進階控制系統架構圖',
    category: '鐘擺橫渡',
    description: '繩索1（上游張力主繩）抗水流，繩索2（出發岸控制繩）調控推進與回拉，雙重安全冗餘。',
    component: DoubleRopePendulumSvg,
  },
  'pendulum-lead': {
    id: 'pendulum-lead',
    title: '鐘擺式先鋒渡溪作業圖',
    category: '先鋒作業',
    description: '先鋒空身入水、胸前配備割繩刀、出發岸確保員均勻放繩，登岸後迅速建立副錨點並口令呼應。',
    component: PendulumLeadSvg,
  },
  'pendulum-follower': {
    id: 'pendulum-follower',
    title: '鐘擺式後繼隊員渡溪與兩岸協同交接圖',
    category: '後繼隊員',
    description: '堅持「水中一次僅限一人」原則，出發岸放繩與對岸收繩同步配合，順利受控橫渡。',
    component: PendulumFollowerSvg,
  },
  'pendulum-sweep': {
    id: 'pendulum-sweep',
    title: '收尾者渡溪與對岸可回收繩索系統圖',
    category: '收尾清場',
    description: '出發岸架設穿環對折主繩，對岸全員主動確保收尾者，抵達對岸後抽單端完整回收繩索。',
    component: PendulumSweepSvg,
  },
  'active-pack-separation': {
    id: 'active-pack-separation',
    title: '主動式人包分離 5 畫面全景圖（先運裝備，再渡人）',
    category: '核心精華',
    description: '五階段分解：1.出發岸繫繩、2.水流推進+繩索導引、3.背包抵對岸安全區、4.人員空身涉水、5.對岸會合重新整裝。',
    component: ActivePackSeparationSvg,
  },
  'rope-water-transport': {
    id: 'rope-water-transport',
    title: '利用繩索＋水流運送裝備力學向量與操作圖',
    category: '裝備運送',
    description: '水流是前進引擎，繩索是方向盤，操作員是煞車；裝備順利擺渡過溪，人員零負重渡溪。',
    component: RopeWaterTransportSvg,
  },
  'emergency-pack-release': {
    id: 'emergency-pack-release',
    title: '緊急式人包分離與防衛性仰漂自救圖',
    category: '緊急自救',
    description: '踩空瞬間1秒脫包解除水阻沉溺，身體轉為防衛性仰漂姿態：頭朝上游、雙腳朝下游防撞、斜向划向平緩岸。',
    component: EmergencyPackReleaseSvg,
  },
  'retreat-path': {
    id: 'retreat-path',
    title: '撤退方向與安全路徑圖',
    category: '撤退準則',
    description: '暴雨山洪來襲時嚴禁強渡，立即循張力弧度撤回出發岸高地避難紮營，保全隊伍安全。',
    component: RetreatPathSvg,
  },
  'team-roles': {
    id: 'team-roles',
    title: '登山隊伍過溪分工與通訊網絡圖',
    category: '團隊管理',
    description: '領隊指揮、先鋒開拓、操作員制動、收尾者清場、接應員輔助，搭配 8 大單音節短口令。',
    component: TeamRolesSvg,
  },
  'decision-flow': {
    id: 'decision-flow',
    title: '如何選擇渡溪方法決策流程圖',
    category: '決策流程',
    description: '從高繞評估、水況判斷、徒手涉水、人包分離到繩索橫渡的嚴謹五階篩選漏斗。',
    component: DecisionFlowSvg,
  },
};

export const DiagramRenderer: React.FC<{
  id: string;
  className?: string;
  activeStage?: number;
  onStageSelect?: (s: number) => void;
}> = ({ id, className, activeStage, onStageSelect }) => {
  const item = DIAGRAM_REGISTRY[id];
  if (!item) {
    return (
      <div className="p-8 text-center bg-slate-900 border border-slate-800 rounded-xl text-slate-400">
        圖解尚未載入或標識符不存在：{id}
      </div>
    );
  }

  const Component = item.component;
  return <Component className={className} activeStage={activeStage} onStageSelect={onStageSelect} />;
};
