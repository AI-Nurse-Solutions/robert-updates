# Local Seed Garden / Speed Sprint viewer

The local implementation extends the existing `kanban.html` and preserves all 27 original seeds, adding one Speed Sprint link. The local package contains the complete UI, `serve_speed_sprint.py`, `sprint_control.py`, an offline HTML snapshot, the detailed plan and test evidence. It is a development viewer, not a cloud deployment. The live GitHub Pages board is not changed by this planning PR.

Run `python3 serve_speed_sprint.py --open` from the extracted package (Windows: `py -3 serve_speed_sprint.py --open`). It binds only to 127.0.0.1:8765 and serves an explicit read-only file allowlist. Stop with Ctrl+C. No local write/model/tool endpoint exists. Python 3.10+ is required. Nothing has been installed on Robert's computer by creating these files.

Opening the board loads bundled/local project metadata. The explicit Fetch public sprint updates button reads the fixed GitHub review-branch JSON only after confirmation; no notes or files are uploaded. This updates the visible view, not the repository or local files. Notes remain in the browser, unencrypted and non-authoritative. Do not enter sensitive material. Clearing browser storage deletes notes.

Actual setup checks: 36 Python tests (including real loopback HTTP requests), 13 Node assertions and 12 Chromium offline DOM checks passed. Browser-to-localhost navigation was blocked by environment policy; that restriction was not disabled. Browser storage persistence, successful clipboard write, live GitHub refresh and WCAG conformance remain unverified here. Offline checks verified safe storage/clipboard failure reporting.
