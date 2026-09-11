import React, { useState } from 'react';
import { Database, Zap, GitBranch, CheckCircle2, ArrowRight, Activity, Layers, Server, Shield, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

interface ParallaxVisualMockupProps {
  studyId: string;
  client: string;
  title: string;
  tools: string[];
}

export const ParallaxVisualMockup: React.FC<ParallaxVisualMockupProps> = ({
  studyId,
  client,
  title,
  tools,
}) => {
  const [activeTab, setActiveTab] = useState<'workspace' | 'automation' | 'schema'>('workspace');
  const [isPulseActive, setIsPulseActive] = useState(false);

  const handleTabChange = (tab: 'workspace' | 'automation' | 'schema', e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playClick();
    setActiveTab(tab);
  };

  const handleTriggerPulse = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playTrigger();
    setIsPulseActive(true);
    setTimeout(() => setIsPulseActive(false), 2000);
  };

  return (
    <div className="relative w-full rounded-2xl bg-[#0F1512] border border-black/10 overflow-hidden shadow-inner font-mono text-xs">
      
      {/* Mockup Window Toolbar */}
      <div className="p-2.5 sm:px-3.5 bg-[#090D0B] border-b border-black/10 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#04703D]/80" />
          <span className="text-[10px] text-[#0A0A0A]/40 ml-2 font-mono hidden sm:inline">
            oparaku-os://{studyId}.sys
          </span>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 bg-black/5 p-0.5 rounded-lg border border-black/10">
          <button
            onClick={(e) => handleTabChange('workspace', e)}
            className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'workspace'
                ? 'bg-[#04703D] text-[#111815] font-bold'
                : 'text-[#0A0A0A]/60 hover:text-[#0A0A0A]'
            }`}
          >
            Workspace
          </button>
          <button
            onClick={(e) => handleTabChange('automation', e)}
            className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'automation'
                ? 'bg-[#04703D] text-[#111815] font-bold'
                : 'text-[#0A0A0A]/60 hover:text-[#0A0A0A]'
            }`}
          >
            Make.com
          </button>
          <button
            onClick={(e) => handleTabChange('schema', e)}
            className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'schema'
                ? 'bg-[#04703D] text-[#111815] font-bold'
                : 'text-[#0A0A0A]/60 hover:text-[#0A0A0A]'
            }`}
          >
            Schema
          </button>
        </div>
      </div>

      {/* Dynamic View Body */}
      <div className="p-4 sm:p-5 min-h-[220px] sm:min-h-[240px] flex flex-col justify-between bg-gradient-to-b from-[#131A16] to-[#0D1310]">
        
        {/* VIEW 1: Live Workspace Simulation */}
        {activeTab === 'workspace' && (
          <div className="space-y-3 animate-in fade-in duration-200">
            {/* Header breadcrumb */}
            <div className="flex items-center justify-between text-[11px] pb-2 border-b border-black/5">
              <span className="text-[#0A0A0A]/70 flex items-center gap-1.5 font-bold">
                <span className="text-[#04703D]">📁</span> {client} Master Operations
              </span>
              <span className="text-[10px] text-[#04703D] bg-emerald-950/60 px-2 py-0.5 rounded border border-[#04703D]/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#04703D] animate-pulse" />
                Live Sync Active
              </span>
            </div>

            {/* Custom Database Rows based on study */}
            <div className="space-y-2 text-[11px]">
              {studyId === 'louis-lessor' && (
                <>
                  <div className="p-2.5 rounded-xl bg-black/5 border border-black/5 flex items-center justify-between hover:border-[#04703D]/40 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#04703D]" />
                      <span className="text-[#0A0A0A] font-medium">Lead: Marcus Vance (Tier 1)</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 text-[10px] border border-blue-500/30">
                      Assigned: Coach David
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/5 border border-black/5 flex items-center justify-between hover:border-[#04703D]/40 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#04703D]" />
                      <span className="text-[#0A0A0A] font-medium">Pipeline: $48,000 Group Q3</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 text-[10px] border border-[#04703D]/30">
                      Closed • Deposit In
                    </span>
                  </div>
                </>
              )}

              {studyId === 'donor-pulse' && (
                <>
                  <div className="p-2.5 rounded-xl bg-black/5 border border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#04703D]" />
                      <span className="text-[#0A0A0A] font-medium">Donor: Vanguard Foundation</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 text-[10px] border border-[#04703D]/30">
                      Active • $125k Grant
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/5 border border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="text-[#0A0A0A] font-medium">Cadence: Check-in Due (14d)</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-amber-900/60 text-amber-300 text-[10px] border border-amber-500/30">
                      Health: Due for Outreach
                    </span>
                  </div>
                </>
              )}

              {studyId === 'vultures-vzw' && (
                <>
                  <div className="p-2.5 rounded-xl bg-black/5 border border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#04703D]" />
                      <span className="text-[#0A0A0A] font-medium">Client Ops: 8 DB Interconnect</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#059C54] text-[#04703D] text-[10px] border border-[#04703D]/30">
                      8 Relational Bases
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/5 border border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="text-[#0A0A0A] font-medium">Onboarding Pipeline Auto-Webhook</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 text-[10px] border border-blue-500/30">
                      Synced 100%
                    </span>
                  </div>
                </>
              )}

              {studyId === 'client-management-system' && (
                <>
                  <div className="p-2.5 rounded-xl bg-black/5 border border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#04703D]" />
                      <span className="text-[#0A0A0A] font-medium">Stage 03: Production Delivery</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-yellow-900/60 text-yellow-300 text-[10px] border border-yellow-500/30">
                      12 / 12 Confirmed
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/5 border border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#04703D]" />
                      <span className="text-[#0A0A0A] font-medium">Workback Milestones</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 text-[10px] border border-[#04703D]/30">
                      100% On-Time
                    </span>
                  </div>
                </>
              )}

              {studyId === 'marcus-system' && (
                <>
                  <div className="p-2.5 rounded-xl bg-black/5 border border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="text-[#0A0A0A] font-medium">Wholesale Stock: Core SKU #408</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 text-[10px] border border-blue-500/30">
                      1,850 Units • Reorder OK
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/5 border border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#04703D]" />
                      <span className="text-[#0A0A0A] font-medium">Supplier Lead Time Tracker</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 text-[10px] border border-[#04703D]/30">
                      PO #1042 Dispatched
                    </span>
                  </div>
                </>
              )}

              {studyId === 'knight-jewelries' && (
                <>
                  <div className="p-2.5 rounded-xl bg-black/5 border border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#04703D]" />
                      <span className="text-[#0A0A0A] font-medium">Commission: 1.8ct Sapphire Ring</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#059C54] text-[#04703D] text-[10px] border border-[#04703D]/30">
                      3D CAD Approved
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/5 border border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400" />
                      <span className="text-[#0A0A0A] font-medium">Bench Production & QA Setting</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-purple-900/60 text-purple-300 text-[10px] border border-purple-500/30">
                      Platinum 950 Verified
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Quick Metrics Tag */}
            <div className="pt-2 flex items-center justify-between text-[10px] text-[#0A0A0A]/50 border-t border-black/5">
              <span>Auto-Rollups Active</span>
              <span className="text-[#04703D]">Permissions: Scoped</span>
            </div>
          </div>
        )}

        {/* VIEW 2: Make.com Automation Visualizer */}
        {activeTab === 'automation' && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center justify-between text-[11px] pb-1">
              <span className="text-[#04703D] font-bold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" /> Make.com 4-Node Scenario
              </span>
              <button
                onClick={handleTriggerPulse}
                className="px-2 py-0.5 rounded bg-[#04703D]/20 text-[#04703D] border border-[#04703D]/40 hover:bg-[#04703D] hover:text-white transition-colors cursor-pointer text-[10px]"
              >
                {isPulseActive ? '⚡ Pulse Firing...' : '⚡ Test Webhook'}
              </button>
            </div>

            {/* Visual Node Chain */}
            <div className="grid grid-cols-4 gap-2 relative py-3 items-center">
              {/* Connector line */}
              <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-0.5 bg-black/10 -z-0">
                <div
                  className={`h-full bg-gradient-to-r from-[#04703D] to-emerald-400 transition-all duration-1000 ${
                    isPulseActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </div>

              {/* Node 1 */}
              <div className="z-10 p-2 rounded-xl bg-[#059C54] border border-[#04703D]/40 text-center shadow-lg">
                <span className="block text-[9px] text-[#04703D] uppercase">01 Trigger</span>
                <span className="text-[10px] text-[#0A0A0A] font-bold block truncate">Webhook</span>
              </div>

              {/* Node 2 */}
              <div className="z-10 p-2 rounded-xl bg-white border border-black/20 text-center shadow-lg">
                <span className="block text-[9px] text-[#0A0A0A]/50 uppercase">02 Router</span>
                <span className="text-[10px] text-[#0A0A0A] font-bold block truncate">Filter logic</span>
              </div>

              {/* Node 3 */}
              <div className="z-10 p-2 rounded-xl bg-white border border-black/20 text-center shadow-lg">
                <span className="block text-[9px] text-[#0A0A0A]/50 uppercase">03 Database</span>
                <span className="text-[10px] text-[#0A0A0A] font-bold block truncate">Notion DB</span>
              </div>

              {/* Node 4 */}
              <div className="z-10 p-2 rounded-xl bg-[#059C54] border border-[#04703D]/40 text-center shadow-lg">
                <span className="block text-[9px] text-[#04703D] uppercase">04 Action</span>
                <span className="text-[10px] text-[#0A0A0A] font-bold block truncate">Slack/Email</span>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-black/40 border border-black/5 text-[10px] text-[#0A0A0A]/60 flex items-center justify-between">
              <span>Status: <strong className="text-[#04703D]">200 OK</strong></span>
              <span>Execution Time: <strong className="text-[#0A0A0A]">180ms</strong></span>
            </div>
          </div>
        )}

        {/* VIEW 3: Relational Schema View */}
        {activeTab === 'schema' && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center justify-between text-[11px] pb-1">
              <span className="text-[#04703D] font-bold flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" /> Relational Architecture Map
              </span>
              <span className="text-[10px] text-[#0A0A0A]/50">4 Linked DBs</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="p-2.5 rounded-xl bg-black/5 border border-black/10">
                <div className="text-[#04703D] font-bold mb-1">Accounts DB</div>
                <div className="text-[#0A0A0A]/60 text-[9px] space-y-0.5">
                  <div>→ Rel: Deals (1:N)</div>
                  <div>→ Rel: Invoices (1:N)</div>
                  <div>→ Rollup: Total Revenue</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-black/5 border border-black/10">
                <div className="text-[#04703D] font-bold mb-1">Deliverables DB</div>
                <div className="text-[#0A0A0A]/60 text-[9px] space-y-0.5">
                  <div>→ Rel: Team Assignee</div>
                  <div>→ Status: Sprint Stage</div>
                  <div>→ Formula: Days to Due</div>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-[#04703D] bg-emerald-950/40 p-2 rounded-lg border border-[#04703D]/20 text-center font-mono">
              ✓ Zero duplicate record entries across departments
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
