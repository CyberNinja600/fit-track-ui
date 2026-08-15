import { Layout } from '../components/Layout'

const engagementBars = [65, 82, 45, 94, 70, 88]

const activityLogs = [
  ['14:02:11', 'MEMBER_402 (Marcus V.)', 'completed', 'Hypertrophy_Phase_1 // Day 3', 'text-cyan-300'],
  ['13:45:02', 'MEMBER_119 (Sarah K.)', 'logged new metric:', 'Body_Fat 18.2% (-0.5%)', 'text-emerald-300'],
  ['12:30:58', 'SYSTEM', 'generated', 'Weekly_Performance_Digest', 'text-cyan-300'],
  ['11:15:20', 'MEMBER_982 (Liam W.)', 'subscribed to', 'Endurance_Base_V2', 'text-slate-200'],
]

export const Dashboard = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-[-0.08em] text-white md:text-4xl">TRAINER_DASHBOARD</h1>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">
              Operational status: <span className="text-emerald-400">Optimal</span> // Session ID: BK-8829
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            12 Active Clients
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-6 lg:col-span-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xs uppercase tracking-[0.2em] text-slate-400">Engagement_Metrics</h2>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">SYS_ENG_CORE</span>
            </div>

            <div className="flex h-56 flex-col gap-4 md:flex-row md:items-end">
              <div className="flex flex-1 items-end gap-2">
                {engagementBars.map((height) => (
                  <div key={height} className="flex h-full w-full items-end">
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-cyan-500 to-sky-300"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>

              <div className="w-full space-y-4 md:max-w-44">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Completion rate</p>
                  <p className="mt-2 text-3xl font-black tracking-[-0.08em] text-cyan-300">84.2%</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Active streak</p>
                  <p className="mt-2 text-3xl font-black tracking-[-0.08em] text-violet-300">14 Days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-6 lg:col-span-4">
            <h2 className="text-xs uppercase tracking-[0.2em] text-slate-400">Total_Members</h2>
            <p className="mt-4 text-5xl font-black tracking-[-0.08em] text-white">1,248</p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-emerald-400">+12.4% This Month</p>

            <div className="mt-8 space-y-4 border-t border-slate-700 pt-5">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                <span>Active</span>
                <span className="text-base font-bold text-cyan-300">892</span>
              </div>
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                <span>Churn risk</span>
                <span className="text-base font-bold text-rose-300">14</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-900/60 lg:col-span-7">
            <div className="flex items-center justify-between border-b border-slate-700 px-6 py-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-slate-400">Recent_Activity_Log</h2>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-slate-500" />
                <span className="h-2 w-2 rounded-full bg-slate-500" />
                <span className="h-2 w-2 rounded-full bg-slate-500" />
              </div>
            </div>

            <div className="space-y-1 p-4">
              {activityLogs.map(([time, actor, action, detail, accent]) => (
                <div key={`${time}-${actor}`} className="flex items-start gap-3 rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-slate-800/60">
                  <span className="min-w-20 text-xs uppercase tracking-[0.2em] text-cyan-300">{time}</span>
                  <div className="flex flex-wrap items-center gap-1 text-sm">
                    <span className="font-semibold text-white">{actor}</span>
                    <span className="text-slate-400">{action}</span>
                    <span className={`${accent} font-medium`}>{detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded bg-cyan-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-300">Latest build</span>
                <span className="text-slate-400">↗</span>
              </div>
              <h3 className="text-2xl font-black tracking-[-0.08em] text-white">NEURAL_ADAPTATION_V4</h3>
              <p className="mt-3 text-sm text-slate-400">High-frequency central nervous system optimization for advanced powerlifters.</p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-slate-800 p-3">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Active</div>
                  <div className="mt-2 text-sm font-semibold text-cyan-300">342 Users</div>
                </div>
                <div className="rounded-lg bg-slate-800 p-3">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">ROI</div>
                  <div className="mt-2 text-sm font-semibold text-emerald-300">+18% Strength</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-5">
              <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-slate-400">Program_Quicklinks</h3>
              <div className="space-y-3">
                {['Hypertrophy_Phase_1', 'Metabolic_Reset_B', 'Endurance_Base_V2'].map((program) => (
                  <button
                    key={program}
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-3 text-left text-xs uppercase tracking-[0.18em] text-slate-200 transition hover:border-cyan-500 hover:text-cyan-300"
                  >
                    <span>{program}</span>
                    <span>›</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
