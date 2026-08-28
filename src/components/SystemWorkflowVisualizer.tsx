import React, { useState } from 'react';
import { Zap, Play, CheckCircle2, RefreshCw, Terminal, Layers, ArrowRight, ShieldCheck, Database, MessageSquare } from 'lucide-react';
import { sound } from '../utils/audio';

export const SystemWorkflowVisualizer: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [logs, setLogs] = useState<string[]>([
    '[SYSTEM READY] Oparaku Engine v4.2 initialized.',
    '[LISTENER ACTIVE] Webhooks listening on /api/v1/intake-leads'
  ]);

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);
    sound.playTrigger();
    setLogs(['[TRIGGER RECEIVED] New $15,000 Client Inquiry submitted via Typeform.']);

    // Step 1: Webhook received
    setTimeout(() => {
      setActiveStep(1);
      sound.playHover();
      setLogs((prev) => [
        ...prev,
        '[MAKE.COM ROUTER] Payload validated. Extracted fields: Company, Budget, Stack: [Notion, Make].'
      ]);
    }, 900);

    // Step 2: Database created
    setTimeout(() => {
      setActiveStep(2);
      sound.playHover();
      setLogs((prev) => [
        ...prev,
        '[NOTION RELATIONAL CRM] Lead record created in Master Pipeline. Scoped to Coach #2.'
      ]);
    }, 1800);

    // Step 3: Slack & Calendar dispatched
    setTimeout(() => {
      setActiveStep(3);
      sound.playTrigger();
      setLogs((prev) => [
        ...prev,
        '[COMMUNICATION BOT] Slack notification dispatched with Cal.com calendar link.',
        '[COMPLETED 200 OK] Hand-off completed in 420ms with ZERO human intervention.'
      ]);
      setIsRunning(false);
    }, 2700);
  };

  return (
    <div className="rounded-3xl bg-[#0E1411]/88 border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden my-12">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
              LIVE SYSTEMS SIMULATOR
            </span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">
            Watch an Oparaku Automation in Real-Time
          </h3>
        </div>

        <button
          onClick={runSimulation}
          disabled={isRunning}
          className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg ${
            isRunning
              ? 'bg-white/10 text-white/40 cursor-not-allowed'
              : 'bg-[#D4AF37] text-[#111815] hover:bg-[#E5C358]'
          }`}
        >
          {isRunning ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Executing Pipeline...</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Run Test Scenario</span>
            </>
          )}
        </button>
      </div>

      {/* Visual Step Modules */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6 relative">
        
        {/* Step 1: Intake Form */}
        <div className={`p-4 rounded-2xl border transition-all duration-300 ${
          activeStep >= 0
            ? 'bg-[#1B4332] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/10'
            : 'bg-[#141C18] border-white/5 opacity-60'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] text-[#D4AF37] uppercase">01 Intake</span>
            <span className={`w-2 h-2 rounded-full ${activeStep >= 0 ? 'bg-emerald-400 animate-ping' : 'bg-white/20'}`} />
          </div>
          <div className="font-bold text-white text-sm mb-1">Typeform Submission</div>
          <p className="text-[11px] text-white/60 font-mono">Lead captures client stack & budget</p>
        </div>

        {/* Step 2: Make.com Router */}
        <div className={`p-4 rounded-2xl border transition-all duration-300 ${
          activeStep >= 1
            ? 'bg-[#1B4332] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/10'
            : 'bg-[#141C18] border-white/5 opacity-60'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] text-[#D4AF37] uppercase">02 Router</span>
            <Zap className={`w-3.5 h-3.5 ${activeStep >= 1 ? 'text-[#D4AF37]' : 'text-white/20'}`} />
          </div>
          <div className="font-bold text-white text-sm mb-1">Make.com Logic</div>
          <p className="text-[11px] text-white/60 font-mono">Filters by deal size & assigns rep</p>
        </div>

        {/* Step 3: Notion Database */}
        <div className={`p-4 rounded-2xl border transition-all duration-300 ${
          activeStep >= 2
            ? 'bg-[#1B4332] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/10'
            : 'bg-[#141C18] border-white/5 opacity-60'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] text-[#D4AF37] uppercase">03 Database</span>
            <Database className={`w-3.5 h-3.5 ${activeStep >= 2 ? 'text-[#D4AF37]' : 'text-white/20'}`} />
          </div>
          <div className="font-bold text-white text-sm mb-1">Notion CRM Sync</div>
          <p className="text-[11px] text-white/60 font-mono">Creates scoped deal card & rollups</p>
        </div>

        {/* Step 4: Instant Action */}
        <div className={`p-4 rounded-2xl border transition-all duration-300 ${
          activeStep >= 3
            ? 'bg-[#1B4332] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/10'
            : 'bg-[#141C18] border-white/5 opacity-60'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] text-emerald-400 uppercase">04 Complete</span>
            <CheckCircle2 className={`w-3.5 h-3.5 ${activeStep >= 3 ? 'text-emerald-400' : 'text-white/20'}`} />
          </div>
          <div className="font-bold text-white text-sm mb-1">Slack & Calendar</div>
          <p className="text-[11px] text-white/60 font-mono">Founder alerted; zero manual work</p>
        </div>

      </div>

      {/* Terminal Real-Time Log Output */}
      <div className="rounded-2xl bg-black/60 border border-white/10 p-4 font-mono text-xs text-white/80">
        <div className="flex items-center gap-2 pb-2 mb-2 border-b border-white/10 text-white/40 text-[10px]">
          <Terminal className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>REAL-TIME AUDIT LOG</span>
        </div>
        <div className="space-y-1 max-h-28 overflow-y-auto">
          {logs.map((log, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-[#D4AF37] select-none">›</span>
              <span className={index === logs.length - 1 ? 'text-emerald-400 font-semibold' : 'text-white/70'}>
                {log}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
