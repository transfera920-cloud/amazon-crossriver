export type TabKey = 'actionPoints' | 'diagram' | 'commonMistakes' | 'prohibitions';

export interface Chapter {
  id: number;
  slug: string;
  title: string;
  tag: string;
  category: 'foundation' | 'water_assessment' | 'methods' | 'ropes' | 'pack_separation' | 'team_decision';
  coreMessage: string;
  actionPoints: string[];
  diagramId?: string;
  diagramTitle?: string;
  diagramDescription?: string;
  commonMistakes: string[];
  prohibitions: string[];
  detailedContent?: {
    subtitle: string;
    paragraphs: string[];
    bulletLists?: {
      title: string;
      items: string[];
    }[];
  };
}

export interface CaseStudy {
  id: number;
  title: string;
  tag: string;
  scenario: string;
  question: string;
  analysis: string[];
  correctDecision: string;
  dangerAlert?: string;
  keyTakeaway: string;
}

export interface TeamRole {
  id: string;
  name: string;
  tagline: string;
  responsibilities: string[];
  crucialDecisions: string[];
  requiredGear: string[];
  warningNote: string;
}

export interface VoiceCommand {
  command: string;
  meaning: string;
  usageContext: string;
  response: string;
  urgency: 'high' | 'medium' | 'critical';
}

export interface MethodComparison {
  method: string;
  primaryPurpose: string;
  applicableContext: string;
  prerequisites: string;
  riskLevel: '低' | '中' | '中高' | '高（進階技術）' | '緊急處置';
  keyAdvantage: string;
  fatalLimitation: string;
}

export interface ChecklistCategory {
  id: string;
  title: string;
  iconName: string;
  items: {
    id: string;
    label: string;
    description: string;
    warningIfUnchecked: string;
  }[];
}
