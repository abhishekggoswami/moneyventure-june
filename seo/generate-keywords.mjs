/**
 * SEO Keyword Generator — Month 1 (1,500 keywords)
 * Money Ventures Research (SEBI RA INH000026114)
 *
 * Produces categorized, realistic long-tail keywords for a SEBI-registered
 * research analyst. Output is written to /seo/*.txt files for client review.
 *
 * Run: node seo/generate-keywords.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs"
import { dirname } from "node:path"
import { fileURLToPath } from "node:url"

const OUT_DIR = dirname(fileURLToPath(import.meta.url))

// ── Modifiers used to build natural long-tail variations ──────────────────────
const INTENT = [
  "", "best", "top", "trusted", "reliable", "affordable", "professional",
  "expert", "verified", "SEBI registered", "experienced",
]
const LOCATION = [
  "", "in India", "India", "near me", "online", "in Mumbai", "in Delhi",
  "in Bangalore", "in Hyderabad", "in Pune", "in Chennai", "in Ahmedabad",
  "in Kolkata", "for beginners", "for working professionals",
]
const SUFFIX = [
  "", "service", "services", "tips", "advice", "advisory", "calls",
  "recommendations", "analysis", "guidance", "consultant", "company", "firm",
  "for 2025", "subscription", "plan", "review",
]

// ── Category base terms ───────────────────────────────────────────────────────
const CATEGORIES = {
  "01-equity-research": [
    "equity research analyst", "stock market research", "share market research",
    "fundamental analysis", "equity advisory", "long term stock picks",
    "multibagger stock research", "value investing research", "blue chip stock advice",
    "stock portfolio review", "equity investment research", "stock market analysis",
  ],
  "02-intraday-trading": [
    "intraday trading tips", "intraday stock calls", "day trading signals",
    "intraday trading strategy", "best intraday stocks", "intraday tips provider",
    "intraday research analyst", "scalping strategy", "momentum trading calls",
    "intraday trading for beginners", "BTST trading tips", "intraday breakout stocks",
  ],
  "03-options-trading": [
    "options trading tips", "nifty options calls", "bank nifty options tips",
    "option buying strategy", "option selling strategy", "weekly options tips",
    "options trading research", "index options calls", "options trading strategy",
    "call put option tips", "options trading for beginners", "expiry day option tips",
  ],
  "04-commodity-trading": [
    "commodity trading tips", "MCX trading calls", "gold trading tips",
    "silver trading calls", "crude oil trading tips", "commodity research analyst",
    "natural gas trading tips", "base metal trading calls", "commodity advisory",
    "bullion trading tips", "agri commodity tips", "MCX research analyst",
  ],
  "05-ipo-analysis": [
    "IPO analysis", "upcoming IPO review", "IPO subscription advice",
    "IPO GMP analysis", "IPO recommendation", "new IPO research",
    "IPO allotment guidance", "mainboard IPO review", "SME IPO analysis",
    "IPO investment advice", "best IPO to apply", "IPO listing gains analysis",
  ],
  "06-futures-derivatives": [
    "futures trading tips", "stock futures calls", "nifty futures tips",
    "F&O trading research", "derivatives trading advisory", "positional futures calls",
    "futures and options tips", "hedging strategy advice", "stock derivatives research",
    "index futures calls", "F&O stock recommendations", "futures trading strategy",
  ],
  "07-swing-positional": [
    "swing trading tips", "positional trading calls", "short term stock tips",
    "swing trading strategy", "positional stock recommendations", "weekly stock tips",
    "momentum swing stocks", "positional investment advice", "short term trading research",
    "swing trading for beginners", "delivery based stock tips", "monthly stock picks",
  ],
  "08-technical-analysis": [
    "technical analysis service", "chart pattern analysis", "candlestick analysis",
    "support and resistance levels", "technical analysis course", "stock chart analysis",
    "price action trading", "technical analysis for beginners", "trend analysis stocks",
    "moving average strategy", "RSI MACD analysis", "breakout trading analysis",
  ],
  "09-investment-advisory": [
    "investment advisory", "stock market advisor", "wealth management advice",
    "financial planning advisory", "portfolio management advice", "long term investment advice",
    "mutual fund vs stocks advice", "retirement investment planning", "SIP investment guidance",
    "goal based investment advice", "personal finance advisory", "smart investment planning",
  ],
  "10-market-education": [
    "stock market course", "share market classes", "learn stock trading",
    "trading mentorship program", "stock market for beginners", "online trading course",
    "technical analysis training", "options trading course", "stock market webinar",
    "demat account guidance", "trading psychology coaching", "stock market basics",
  ],
}

// ── Generation ────────────────────────────────────────────────────────────────
function buildVariations(base, target) {
  const out = new Set()
  // Always include the clean base term first
  out.add(base)
  // intent + base
  for (const i of INTENT) {
    const v = `${i} ${base}`.replace(/\s+/g, " ").trim()
    out.add(v)
  }
  // intent + base + location
  for (const i of INTENT) {
    for (const l of LOCATION) {
      if (out.size >= target) break
      const v = `${i} ${base} ${l}`.replace(/\s+/g, " ").trim()
      out.add(v)
    }
  }
  // base + suffix + location
  for (const s of SUFFIX) {
    for (const l of LOCATION) {
      if (out.size >= target) break
      const v = `${base} ${s} ${l}`.replace(/\s+/g, " ").trim()
      out.add(v)
    }
  }
  return [...out].slice(0, target)
}

const PER_CATEGORY = 150 // 10 categories x 150 = 1500
let grandTotal = 0
const summary = []
const allKeywords = []

for (const [cat, bases] of Object.entries(CATEGORIES)) {
  const perBase = Math.ceil(PER_CATEGORY / bases.length)
  const set = new Set()
  for (const base of bases) {
    for (const kw of buildVariations(base, perBase)) {
      if (set.size >= PER_CATEGORY) break
      set.add(kw)
    }
  }
  const list = [...set].slice(0, PER_CATEGORY).sort()
  grandTotal += list.length
  summary.push({ cat, count: list.length })
  allKeywords.push(...list.map((k) => `${k}\t[${cat}]`))

  const title = cat.replace(/^\d+-/, "").replace(/-/g, " ").toUpperCase()
  const header =
    `============================================================\n` +
    ` MONEY VENTURES RESEARCH — SEO KEYWORDS\n` +
    ` Category: ${title}\n` +
    ` Total keywords: ${list.length}\n` +
    ` Month: 1 of ongoing campaign  |  SEBI RA: INH000026114\n` +
    `============================================================\n\n`
  writeFileSync(`${OUT_DIR}/keywords-${cat}.txt`, header + list.join("\n") + "\n")
}

// Master file
const master =
  `============================================================\n` +
  ` MONEY VENTURES RESEARCH — MASTER KEYWORD LIST (MONTH 1)\n` +
  ` Total keywords: ${grandTotal}\n` +
  ` Categories: ${summary.length}\n` +
  ` SEBI Registered Research Analyst — INH000026114\n` +
  `============================================================\n\n` +
  summary.map((s) => `  ${s.count.toString().padStart(4)}  ${s.cat}`).join("\n") +
  `\n\n------------------------------------------------------------\n` +
  ` KEYWORD\tCATEGORY\n` +
  `------------------------------------------------------------\n` +
  allKeywords.join("\n") +
  "\n"
writeFileSync(`${OUT_DIR}/keywords-MASTER.txt`, master)

console.log(`Generated ${grandTotal} keywords across ${summary.length} categories.`)
summary.forEach((s) => console.log(`  ${s.cat}: ${s.count}`))
