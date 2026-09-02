import React, { useState, useEffect } from 'react';
import { CHAPTERS_DATA } from './data/curriculumData';
import { Header } from './components/Header';
import { ChapterNav } from './components/ChapterNav';
import { ChapterView } from './components/ChapterView';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { DiagramGalleryModal } from './components/DiagramGalleryModal';
import { DecisionFlowModal } from './components/DecisionFlowModal';
import { OneMinuteChecklistModal } from './components/OneMinuteChecklistModal';
import { WaterPhysicsCalculatorModal } from './components/WaterPhysicsCalculatorModal';
import { RiverScoutingSandboxModal } from './components/RiverScoutingSandboxModal';
import { WhistleSignalsModal } from './components/WhistleSignalsModal';
import { FieldGuidePrintModal } from './components/FieldGuidePrintModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [currentChapterId, setCurrentChapterId] = useState<number>(CHAPTERS_DATA[0].id);
  const [completedChapters, setCompletedChapters] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('anma_completed_chapters');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [activeTab, setActiveTab] = useState<'curriculum' | 'cases'>('curriculum');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals state
  const [isDiagramGalleryOpen, setIsDiagramGalleryOpen] = useState<boolean>(false);
  const [selectedDiagramId, setSelectedDiagramId] = useState<string | null>(null);
  const [isChecklistOpen, setIsChecklistOpen] = useState<boolean>(false);
  const [isDecisionFlowOpen, setIsDecisionFlowOpen] = useState<boolean>(false);
  const [isPhysicsCalculatorOpen, setIsPhysicsCalculatorOpen] = useState<boolean>(false);
  const [isRiverScoutingOpen, setIsRiverScoutingOpen] = useState<boolean>(false);
  const [isWhistleSignalsOpen, setIsWhistleSignalsOpen] = useState<boolean>(false);
  const [isFieldGuidePrintOpen, setIsFieldGuidePrintOpen] = useState<boolean>(false);

  // Sync completed chapters to storage
  useEffect(() => {
    try {
      localStorage.setItem('anma_completed_chapters', JSON.stringify(completedChapters));
    } catch {
      // Ignore in strict sandbox
    }
  }, [completedChapters]);

  const toggleChapterComplete = (id: number) => {
    setCompletedChapters((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const currentChapterIndex = CHAPTERS_DATA.findIndex((c) => c.id === currentChapterId);
  const currentChapter = CHAPTERS_DATA[currentChapterIndex] || CHAPTERS_DATA[0];

  const handleNextChapter = () => {
    if (currentChapterIndex < CHAPTERS_DATA.length - 1) {
      setCurrentChapterId(CHAPTERS_DATA[currentChapterIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevChapter = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterId(CHAPTERS_DATA[currentChapterIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenDiagramModal = (diagramId: string) => {
    setSelectedDiagramId(diagramId);
    setIsDiagramGalleryOpen(true);
  };

  // Filtered chapters if search query
  const matchingChapters = searchQuery
    ? CHAPTERS_DATA.filter((c) => {
        const q = searchQuery.toLowerCase();
        return (
          c.title.toLowerCase().includes(q) ||
          c.coreMessage.toLowerCase().includes(q) ||
          c.actionPoints.some((p) => p.toLowerCase().includes(q)) ||
          c.commonMistakes.some((m) => m.toLowerCase().includes(q)) ||
          c.prohibitions.some((pr) => pr.toLowerCase().includes(q)) ||
          c.detailedContent?.paragraphs.some((dp) => dp.toLowerCase().includes(q))
        );
      })
    : CHAPTERS_DATA;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Header */}
      <Header
        currentChapterIndex={currentChapterIndex}
        onSelectChapter={(idx) => {
          if (CHAPTERS_DATA[idx]) {
            setCurrentChapterId(CHAPTERS_DATA[idx].id);
            setActiveTab('curriculum');
          }
        }}
        onOpenChecklist={() => setIsChecklistOpen(true)}
        onOpenDecisionFlow={() => setIsDecisionFlowOpen(true)}
        onOpenDiagramGallery={() => {
          setSelectedDiagramId(null);
          setIsDiagramGalleryOpen(true);
        }}
        onOpenPhysicsCalculator={() => setIsPhysicsCalculatorOpen(true)}
        onOpenRiverScouting={() => setIsRiverScoutingOpen(true)}
        onOpenWhistleSignals={() => setIsWhistleSignalsOpen(true)}
        onOpenFieldGuidePrint={() => setIsFieldGuidePrintOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalChapters={CHAPTERS_DATA.length}
      />

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex flex-col lg:flex-row">
        {/* Navigation Sidebar */}
        <ChapterNav
          currentChapterId={currentChapterId}
          onSelectChapter={(id) => {
            setCurrentChapterId(id);
            setActiveTab('curriculum');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          completedChapters={completedChapters}
          onToggleComplete={toggleChapterComplete}
          onSelectTab={(tab) => setActiveTab(tab as 'curriculum' | 'cases')}
          activeTab={activeTab}
        />

        {/* Content Body */}
        <main className="flex-1 min-w-0 bg-slate-950">
          {/* Search Result notice if active */}
          {searchQuery && (
            <div className="p-4 bg-slate-900 border-b border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <div>
                搜尋關鍵字「<span className="text-emerald-400 font-bold">{searchQuery}</span>」匹配到 {matchingChapters.length} 個章節
              </div>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-emerald-400 hover:underline cursor-pointer"
              >
                清除搜尋
              </button>
            </div>
          )}

          {activeTab === 'curriculum' ? (
            <ChapterView
              chapter={currentChapter}
              onNextChapter={handleNextChapter}
              onPrevChapter={handlePrevChapter}
              hasNext={currentChapterIndex < CHAPTERS_DATA.length - 1}
              hasPrev={currentChapterIndex > 0}
              onOpenDiagramModal={handleOpenDiagramModal}
              isCompleted={completedChapters.includes(currentChapter.id)}
              onToggleComplete={() => toggleChapterComplete(currentChapter.id)}
            />
          ) : (
            <CaseStudiesSection />
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <DiagramGalleryModal
        isOpen={isDiagramGalleryOpen}
        onClose={() => {
          setIsDiagramGalleryOpen(false);
          setSelectedDiagramId(null);
        }}
        selectedDiagramId={selectedDiagramId}
        onSelectDiagram={(id) => setSelectedDiagramId(id)}
      />

      <DecisionFlowModal
        isOpen={isDecisionFlowOpen}
        onClose={() => setIsDecisionFlowOpen(false)}
      />

      <OneMinuteChecklistModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
      />

      <WaterPhysicsCalculatorModal
        isOpen={isPhysicsCalculatorOpen}
        onClose={() => setIsPhysicsCalculatorOpen(false)}
      />

      <RiverScoutingSandboxModal
        isOpen={isRiverScoutingOpen}
        onClose={() => setIsRiverScoutingOpen(false)}
      />

      <WhistleSignalsModal
        isOpen={isWhistleSignalsOpen}
        onClose={() => setIsWhistleSignalsOpen(false)}
      />

      <FieldGuidePrintModal
        isOpen={isFieldGuidePrintOpen}
        onClose={() => setIsFieldGuidePrintOpen(false)}
      />
    </div>
  );
};

export default App;
