// Renders cv/cv.html to public/CV.pdf with a locally installed Chrome or Edge.
import { execFileSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean)

const browser = candidates.find((p) => existsSync(p))
if (!browser) {
  console.error('No Chrome or Edge found. Set CHROME_PATH to your browser executable.')
  process.exit(1)
}

const source = pathToFileURL(resolve('cv/cv.html')).href
const output = resolve('public/CV.pdf')

execFileSync(browser, [
  '--headless=new',
  '--disable-gpu',
  '--no-pdf-header-footer',
  '--virtual-time-budget=8000', // give the web fonts time to load
  `--print-to-pdf=${output}`,
  source,
])
console.log(`Wrote ${output}`)
