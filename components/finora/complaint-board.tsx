export function ComplaintBoard() {
  const rows = [
    { srNo: 1, receivedFrom: "Directly from Investors", pendingLastMonth: 0, received: 0, resolved: 0, totalPending: 0, pendingOver3Months: 0, avgResolutionDays: 0 },
    { srNo: 2, receivedFrom: "SEBI (SCORES)", pendingLastMonth: 0, received: 0, resolved: 0, totalPending: 0, pendingOver3Months: 0, avgResolutionDays: 0 },
    { srNo: 3, receivedFrom: "Other Sources (if any)", pendingLastMonth: 0, received: 0, resolved: 0, totalPending: 0, pendingOver3Months: 0, avgResolutionDays: 0 },
  ]

  const grandTotal = { pendingLastMonth: 0, received: 0, resolved: 0, totalPending: 0, pendingOver3Months: 0, avgResolutionDays: 0 }

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-[#1B4332] text-white px-5 py-2.5 rounded-full text-sm font-medium mb-5">
            <span className="w-2 h-2 bg-[#C5D82D] rounded-full" />
            SEBI Compliance
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B4332]">
            Investor Complaint Board
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            Formats for investors complaints data to be disclosed monthly by Research Analysts on their website / mobile application as per SEBI guidelines.
          </p>
        </div>

        {/* Mobile swipe hint */}
        <div className="flex md:hidden items-center justify-center gap-2 mb-4">
          <div className="h-px w-8 bg-gray-300" />
          <p className="text-[11px] text-gray-400 font-medium tracking-wide text-center">
            Swipe left to view the full complaint board
          </p>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-gray-400 animate-bounce" aria-hidden="true">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="h-px w-8 bg-gray-300" />
        </div>

        {/* Table Container */}
        <div className="rounded-2xl overflow-hidden border border-[#1B4332]/15 shadow-lg">

          {/* Annexure Header */}
          <div className="bg-[#1B4332] px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <p className="text-white font-bold text-base tracking-wide underline underline-offset-4 decoration-[#C5D82D]">
                Annexure – B
              </p>
              <p className="text-[#C5D82D] text-xs font-semibold mt-1 tracking-widest uppercase">
                Complaint Data to be Displayed by RAs
              </p>
            </div>
            <div className="text-right">
              <p className="text-white/60 text-xs">Data for the month ending:</p>
              <p className="text-white font-semibold text-sm">31st May, 2026</p>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse">
              {/* Column Headers */}
              <thead>
                <tr className="bg-[#F3F8F0]">
                  <th className="border border-[#1B4332]/15 px-4 py-4 text-center text-xs font-bold text-[#1B4332] uppercase tracking-wide w-16">
                    Sr. No.
                  </th>
                  <th className="border border-[#1B4332]/15 px-4 py-4 text-center text-xs font-bold text-[#1B4332] uppercase tracking-wide">
                    Received from
                  </th>
                  <th className="border border-[#1B4332]/15 px-4 py-4 text-center text-xs font-bold text-[#1B4332] uppercase tracking-wide">
                    Pending at last<br />month end
                  </th>
                  <th className="border border-[#1B4332]/15 px-4 py-4 text-center text-xs font-bold text-[#1B4332] uppercase tracking-wide">
                    Received
                  </th>
                  <th className="border border-[#1B4332]/15 px-4 py-4 text-center text-xs font-bold text-[#1B4332] uppercase tracking-wide">
                    Resolved*
                  </th>
                  <th className="border border-[#1B4332]/15 px-4 py-4 text-center text-xs font-bold text-[#1B4332] uppercase tracking-wide">
                    Total Pending#
                  </th>
                  <th className="border border-[#1B4332]/15 px-4 py-4 text-center text-xs font-bold text-[#1B4332] uppercase tracking-wide">
                    Pending<br />&gt;3 months
                  </th>
                  <th className="border border-[#1B4332]/15 px-4 py-4 text-center text-xs font-bold text-[#1B4332] uppercase tracking-wide">
                    Avg. Resolution<br />Time (days)^
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.srNo}
                    className={index % 2 === 0 ? "bg-white" : "bg-[#F9FCF7]"}
                  >
                    <td className="border border-[#1B4332]/10 px-4 py-4 text-center text-sm text-gray-600">
                      {row.srNo}
                    </td>
                    <td className="border border-[#1B4332]/10 px-4 py-4 text-center text-sm text-gray-700">
                      {row.receivedFrom}
                    </td>
                    <td className="border border-[#1B4332]/10 px-4 py-4 text-center">
                      <DataCell value={row.pendingLastMonth} />
                    </td>
                    <td className="border border-[#1B4332]/10 px-4 py-4 text-center">
                      <DataCell value={row.received} />
                    </td>
                    <td className="border border-[#1B4332]/10 px-4 py-4 text-center">
                      <DataCell value={row.resolved} />
                    </td>
                    <td className="border border-[#1B4332]/10 px-4 py-4 text-center">
                      <DataCell value={row.totalPending} />
                    </td>
                    <td className="border border-[#1B4332]/10 px-4 py-4 text-center">
                      <DataCell value={row.pendingOver3Months} />
                    </td>
                    <td className="border border-[#1B4332]/10 px-4 py-4 text-center">
                      <DataCell value={row.avgResolutionDays} />
                    </td>
                  </tr>
                ))}

                {/* Grand Total Row */}
                <tr className="bg-[#1B4332]/5">
                  <td className="border border-[#1B4332]/15 px-4 py-4 text-center text-sm font-bold text-[#1B4332]">
                    —
                  </td>
                  <td className="border border-[#1B4332]/15 px-4 py-4 text-center text-sm font-bold text-[#1B4332]">
                    Grand Total
                  </td>
                  <td className="border border-[#1B4332]/15 px-4 py-4 text-center">
                    <DataCell value={grandTotal.pendingLastMonth} bold />
                  </td>
                  <td className="border border-[#1B4332]/15 px-4 py-4 text-center">
                    <DataCell value={grandTotal.received} bold />
                  </td>
                  <td className="border border-[#1B4332]/15 px-4 py-4 text-center">
                    <DataCell value={grandTotal.resolved} bold />
                  </td>
                  <td className="border border-[#1B4332]/15 px-4 py-4 text-center">
                    <DataCell value={grandTotal.totalPending} bold />
                  </td>
                  <td className="border border-[#1B4332]/15 px-4 py-4 text-center">
                    <DataCell value={grandTotal.pendingOver3Months} bold />
                  </td>
                  <td className="border border-[#1B4332]/15 px-4 py-4 text-center">
                    <DataCell value={grandTotal.avgResolutionDays} bold />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer Note */}
          <div className="bg-[#F3F8F0] px-6 py-4 flex flex-wrap gap-4 justify-between items-start border-t border-[#1B4332]/10">
            <div className="space-y-1">
              <p className="text-xs text-gray-500">
                <span className="font-semibold text-[#1B4332]">*</span> Inclusive of complaints of previous months resolved in the current month.
              </p>
              <p className="text-xs text-gray-500">
                <span className="font-semibold text-[#1B4332]">#</span> Inclusive of complaints pending as on the last day of the month.
              </p>
              <p className="text-xs text-gray-500">
                <span className="font-semibold text-[#1B4332]">^</span> Average of total complaints resolved during the month including complaints of previous months.
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-[#1B4332] font-semibold">SEBI Registered Research Analyst</p>
              <p className="text-xs text-gray-400 mt-0.5">Money Ventures | Registration No.: INH000026114</p>
            </div>
          </div>
        </div>

        {/* Notes + Scores link — compact single row */}
        <div className="mt-5 bg-[#F3F8F0] rounded-xl px-5 py-4 border border-[#1B4332]/10 space-y-2">
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <p className="text-xs text-gray-500"><span className="font-semibold text-[#1B4332]">*Resolved:</span> Includes previous months&apos; complaints resolved in current month.</p>
            <p className="text-xs text-gray-500"><span className="font-semibold text-[#1B4332]">#Pending:</span> Includes complaints pending at month end.</p>
            <p className="text-xs text-gray-500"><span className="font-semibold text-[#1B4332]">^Avg Time:</span> Total resolution days &divide; resolved complaints.</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#1B4332]/10">
            <p className="text-xs text-gray-500">
              <span className="font-semibold text-[#1B4332]">Impersonation complaints received: 0</span>
              {" "}(may be excluded from totals after due process)
            </p>
            <p className="text-xs text-gray-400">
              Also lodge at{" "}
              <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer"
                className="text-[#1B4332] font-medium underline underline-offset-2 hover:text-[#C5D82D] transition-colors">
                scores.sebi.gov.in
              </a>
            </p>
          </div>
        </div>

        {/* Trend of Monthly Complaint Disposal — always visible */}
        <div className="mt-4 rounded-xl border border-[#1B4332]/15 overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-3 bg-[#1B4332]">
            <span className="text-white font-semibold text-sm">Trend of Monthly Complaint Disposal</span>
            <span className="text-[#C5D82D] text-xs font-medium">(Jun-25 – May-26)</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] border-collapse text-xs">
              <thead>
                <tr className="bg-[#F3F8F0]">
                  {["Month", "Carried Forward", "Received", "Resolved*", "Pending#"].map((h) => (
                    <th key={h} className="border border-[#1B4332]/15 px-3 py-2.5 text-center font-bold text-[#1B4332] uppercase tracking-wide">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TREND_ROWS.map((row, i) => (
                  <tr key={row.month} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FCF7]"}>
                    <td className="border border-[#1B4332]/10 px-3 py-2 text-center font-semibold text-gray-600">{row.month}</td>
                    <td className="border border-[#1B4332]/10 px-3 py-2 text-center text-gray-500">{row.carriedForward}</td>
                    <td className="border border-[#1B4332]/10 px-3 py-2 text-center text-gray-500">{row.received}</td>
                    <td className="border border-[#1B4332]/10 px-3 py-2 text-center text-gray-500">{row.resolved}</td>
                    <td className="border border-[#1B4332]/10 px-3 py-2 text-center text-gray-500">{row.pending}</td>
                  </tr>
                ))}
                <tr className="bg-[#1B4332]/8">
                  <td className="border border-[#1B4332]/15 px-3 py-2.5 text-center font-bold text-[#1B4332]">Grand Total</td>
                  {[0,0,0,0].map((v,i) => (
                    <td key={i} className="border border-[#1B4332]/15 px-3 py-2.5 text-center font-bold text-[#1B4332]">{v}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  )
}

const TREND_ROWS = [
  { month: "Jun-25", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { month: "Jul-25", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { month: "Aug-25", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { month: "Sep-25", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { month: "Oct-25", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { month: "Nov-25", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { month: "Dec-25", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { month: "Jan-26", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { month: "Feb-26", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { month: "Mar-26", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { month: "Apr-26", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { month: "May-26", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
]

function DataCell({ value, bold = false }: { value: number; bold?: boolean }) {
  return (
    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm ${
      value === 0
        ? bold
          ? "bg-[#1B4332] text-white font-bold"
          : "bg-[#F3F8F0] text-gray-500"
        : "bg-[#C5D82D] text-[#1B4332] font-bold"
    }`}>
      {value}
    </span>
  )
}
