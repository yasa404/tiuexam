// End-to-end tests run against index.html opened straight from disk (file://), like a student would.
// Uses the installed Google Chrome by default; set PW_CHANNEL=msedge for Edge, or PW_CHANNEL=bundled
// to use Playwright's own Chromium (after `npx playwright install chromium`).
const channel = process.env.PW_CHANNEL || 'chrome';
module.exports = {
  testDir: 'tests/e2e',
  timeout: 90000,
  reporter: 'list',
  use: {
    browserName: 'chromium',
    channel: channel === 'bundled' ? undefined : channel,
    headless: true,
    viewport: { width: 1280, height: 900 }
  }
};
