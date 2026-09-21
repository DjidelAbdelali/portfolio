const e=`<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
<title>CRM &mdash; Tickets &amp; Caisse</title>
<style>
  #ticket-app-root {
    --paper: #FAF7F0;
    --paper-dim: #F0EBDF;
    --ink: #241F1B;
    --ink-soft: #5C554C;
    --stamp: #C1440E;
    --stamp-soft: #E8C9BC;
    --line: #D8D0BE;
    --ok: #43664A;

    font-family: 'Inter', -apple-system, sans-serif;
    background: var(--paper);
    color: var(--ink);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
  #ticket-app-root *, #ticket-app-root *::before, #ticket-app-root *::after { box-sizing: border-box; }

  .ta-mono { font-family: 'Space Mono', 'Courier New', monospace; }

  .ta-header {
    padding: 22px 26px 18px;
    border-bottom: 2px dashed var(--line);
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }
  .ta-header h1 {
    font-family: 'Space Mono', monospace;
    font-size: 20px;
    letter-spacing: 0.5px;
    margin: 0;
    text-transform: uppercase;
  }
  .ta-header .ta-sub {
    font-size: 12px;
    color: var(--ink-soft);
    margin-top: 4px;
  }
  .ta-total-badge {
    font-family: 'Space Mono', monospace;
    font-size: 13px;
    background: var(--ink);
    color: var(--paper);
    padding: 8px 14px;
    border-radius: 3px;
  }
  .ta-margin-badge.ta-margin-pos { background: var(--ok); }
  .ta-margin-badge.ta-margin-neg { background: var(--stamp); }
  .ta-margin-badge.ta-margin-none { background: var(--ink-soft); }
  .ta-header-actions { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
  .ta-export-btn {
    font-family: 'Space Mono', monospace; font-size: 12px; text-transform: uppercase;
    letter-spacing: 0.3px; padding: 8px 14px; border-radius: 3px; border: 1px solid var(--ok);
    background: var(--paper); color: var(--ok); cursor: pointer;
  }
  .ta-export-btn:hover { background: var(--ok); color: var(--paper); }
  .ta-export-btn:disabled { opacity: 0.4; cursor: not-allowed; }

  .ta-filter-bar {
    margin: 0 16px 12px;
    padding: 12px;
    border: 1px dashed var(--line);
    border-radius: 4px;
    background: var(--paper-dim);
  }
  .ta-filter-title {
    font-family: 'Space Mono', monospace; font-size: 10.5px; text-transform: uppercase;
    letter-spacing: 0.5px; color: var(--ink-soft); margin-bottom: 8px;
  }
  .ta-filter-row { display: flex; gap: 6px; margin-bottom: 6px; }
  .ta-filter-row label {
    flex: 1; font-size: 10.5px; color: var(--ink-soft); display: flex; flex-direction: column; gap: 3px;
  }
  .ta-filter-row input[type="date"] {
    font-family: 'Space Mono', monospace; font-size: 11.5px; padding: 5px 6px;
    border: 1px solid var(--line); border-radius: 3px; background: var(--paper); color: var(--ink);
    width: 100%;
  }
  .ta-filter-reset {
    width: 100%; font-family: 'Space Mono', monospace; font-size: 10.5px; text-transform: uppercase;
    padding: 6px; border-radius: 3px; border: 1px solid var(--line); background: transparent;
    color: var(--ink-soft); cursor: pointer; margin-top: 2px;
  }
  .ta-filter-reset:hover { border-color: var(--stamp); color: var(--stamp); }

  .ta-body {
    display: flex;
    flex: 1;
    min-height: 0;
  }

  .ta-sidebar {
    width: 280px;
    flex-shrink: 0;
    border-right: 2px dashed var(--line);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .ta-dropzone {
    margin: 16px;
    padding: 18px 14px;
    border: 2px dashed var(--stamp);
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    background: var(--paper-dim);
    transition: background 0.15s ease, transform 0.1s ease;
    position: relative;
  }
  .ta-dropzone:hover { background: var(--stamp-soft); }
  .ta-dropzone.ta-drag-over { background: var(--stamp-soft); transform: scale(1.01); }
  .ta-dropzone .ta-dz-icon { font-size: 22px; margin-bottom: 4px; }
  .ta-dropzone .ta-dz-title {
    font-family: 'Space Mono', monospace;
    font-size: 12.5px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--stamp);
  }
  .ta-dropzone .ta-dz-hint { font-size: 11px; color: var(--ink-soft); margin-top: 3px; }
  .ta-dropzone input { display: none; }
  .ta-dz-actions { display: flex; flex-direction: column; gap: 6px; margin-top: 12px; }
  .ta-dz-btn {
    font-family: 'Space Mono', monospace; font-size: 11px; text-transform: uppercase;
    letter-spacing: 0.3px; padding: 8px 10px; border-radius: 4px; border: 1px solid var(--stamp);
    background: var(--paper); color: var(--stamp); cursor: pointer;
  }
  .ta-dz-btn:hover { background: var(--stamp); color: var(--paper); }
  .ta-dz-btn:disabled { opacity: 0.5; cursor: not-allowed; }
  .ta-dz-btn:disabled:hover { background: var(--paper); color: var(--stamp); }
  .ta-dz-divider {
    display: flex; align-items: center; gap: 8px; margin: 12px 0 0;
    font-family: 'Space Mono', monospace; font-size: 9.5px; text-transform: uppercase;
    letter-spacing: 0.5px; color: var(--ink-soft);
  }
  .ta-dz-divider::before, .ta-dz-divider::after { content: ""; flex: 1; height: 1px; background: var(--line); }
  .ta-dz-btn-alt {
    border-style: dashed; border-color: var(--line); color: var(--ink-soft); background: transparent;
  }
  .ta-dz-btn-alt:hover { border-color: var(--ink-soft); color: var(--ink); background: var(--paper-dim); }
  .ta-dz-btn-alt:disabled:hover { border-color: var(--line); color: var(--ink-soft); background: transparent; }
  .ta-dropzone.ta-drag-over-excel { background: var(--paper-dim); outline: 2px dashed var(--ink-soft); outline-offset: -2px; }

  .ta-date-list { overflow-y: auto; flex: 1; padding: 0 8px 16px; }
  .ta-date-item {
    padding: 11px 12px;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 3px;
    border: 1px solid transparent;
  }
  .ta-date-item:hover { background: var(--paper-dim); }
  .ta-date-item.ta-active { background: var(--ink); }
  .ta-date-item.ta-active .ta-date-label,
  .ta-date-item.ta-active .ta-date-total,
  .ta-date-item.ta-active .ta-date-count { color: var(--paper); }
  .ta-date-label { font-family: 'Space Mono', monospace; font-size: 13px; font-weight: 700; }
  .ta-date-count { font-size: 11px; color: var(--ink-soft); margin-top: 2px; }
  .ta-date-total { font-family: 'Space Mono', monospace; font-size: 12px; color: var(--stamp); margin-top: 3px; }
  .ta-date-margin { font-family: 'Space Mono', monospace; font-size: 10.5px; margin-top: 2px; }
  .ta-date-margin.ta-margin-pos-text { color: var(--ok); }
  .ta-date-margin.ta-margin-neg-text { color: var(--stamp); }
  .ta-date-item.ta-active .ta-date-margin { color: var(--paper); opacity: 0.85; }

  .ta-empty-sidebar { padding: 24px 18px; font-size: 12.5px; color: var(--ink-soft); text-align: center; }

  .ta-main { flex: 1; overflow-y: auto; padding: 20px 28px 40px; }

  .ta-empty-main {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--ink-soft);
    text-align: center;
    gap: 6px;
  }
  .ta-empty-main .ta-big { font-size: 34px; }
  .ta-empty-main .ta-t1 { font-family: 'Space Mono', monospace; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
  .ta-empty-main .ta-t2 { font-size: 12.5px; max-width: 320px; }

  .ta-day-heading {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 16px;
    flex-wrap: wrap;
    gap: 8px;
  }
  .ta-day-heading h2 {
    font-family: 'Space Mono', monospace;
    font-size: 18px;
    margin: 0;
    text-transform: uppercase;
  }
  .ta-day-heading .ta-day-total { font-family: 'Space Mono', monospace; font-size: 14px; color: var(--stamp); }

  .ta-receipt {
    background: var(--paper);
    border: 1.5px solid var(--ink);
    border-radius: 2px;
    margin-bottom: 22px;
    position: relative;
    box-shadow: 3px 3px 0 var(--line);
  }
  .ta-receipt::before {
    content: "";
    position: absolute;
    top: -1px; left: -1px; right: -1px;
    height: 8px;
    background:
      linear-gradient(135deg, var(--paper) 50%, transparent 50%) 0 0,
      linear-gradient(-135deg, var(--paper) 50%, transparent 50%) 0 0;
    background-size: 12px 12px;
    background-repeat: repeat-x;
    background-color: var(--ink);
  }
  .ta-receipt-inner { padding: 18px 18px 14px; }
  .ta-receipt-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px dashed var(--line);
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  .ta-receipt-merchant { font-family: 'Space Mono', monospace; font-weight: 700; font-size: 14px; }
  .ta-receipt-meta { font-size: 11px; color: var(--ink-soft); margin-top: 3px; }
  .ta-receipt-del {
    background: none; border: 1px solid var(--line); border-radius: 3px;
    color: var(--ink-soft); font-size: 11px; padding: 4px 9px; cursor: pointer;
    font-family: 'Space Mono', monospace;
  }
  .ta-receipt-del:hover { border-color: var(--stamp); color: var(--stamp); }

  .ta-products { width: 100%; border-collapse: collapse; font-size: 13px; }
  .ta-products th {
    text-align: left; font-family: 'Space Mono', monospace; font-size: 10.5px;
    text-transform: uppercase; color: var(--ink-soft); font-weight: 400;
    padding: 4px 4px 6px; border-bottom: 1px solid var(--line);
  }
  .ta-products th:last-child, .ta-products td:last-child { text-align: right; }
  .ta-products td { padding: 6px 4px; border-bottom: 1px dotted var(--line); }
  .ta-products tr:last-child td { border-bottom: none; }
  .ta-products .ta-price { font-family: 'Space Mono', monospace; }

  .ta-receipt-total {
    display: flex; justify-content: space-between; align-items: center;
    margin-top: 10px; padding-top: 10px; border-top: 1px dashed var(--line);
    font-family: 'Space Mono', monospace; font-size: 13.5px; font-weight: 700;
  }

  .ta-toast {
    position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
    background: var(--ink); color: var(--paper); padding: 10px 18px;
    border-radius: 4px; font-size: 13px; z-index: 50;
    box-shadow: 0 4px 14px rgba(0,0,0,0.2);
  }
  .ta-toast.ta-err { background: var(--stamp); }

  .ta-overlay {
    position: fixed; inset: 0; background: rgba(36,31,27,0.55);
    display: flex; align-items: center; justify-content: center; z-index: 60;
  }
  .ta-modal {
    background: var(--paper); border-radius: 6px; padding: 24px 26px;
    width: 380px; max-width: 90vw; box-shadow: 0 12px 40px rgba(0,0,0,0.25);
  }
  .ta-modal h3 { font-family: 'Space Mono', monospace; font-size: 15px; margin: 0 0 8px; text-transform: uppercase; }
  .ta-modal p { font-size: 13px; color: var(--ink-soft); margin: 0 0 14px; }
  .ta-modal-row { display: flex; gap: 10px; margin-top: 16px; }
  .ta-btn {
    font-family: 'Space Mono', monospace; font-size: 12px; text-transform: uppercase;
    padding: 9px 14px; border-radius: 4px; border: 1px solid var(--ink); cursor: pointer;
    background: transparent; color: var(--ink); flex: 1;
  }
  .ta-btn.ta-primary { background: var(--ink); color: var(--paper); }
  .ta-btn.ta-danger { background: var(--stamp); color: var(--paper); border-color: var(--stamp); }

  .ta-review-modal { width: 460px; max-width: 94vw; max-height: 88vh; overflow-y: auto; }
  .ta-review-field { margin-bottom: 10px; }
  .ta-review-field label {
    display: block; font-family: 'Space Mono', monospace; font-size: 10.5px;
    text-transform: uppercase; color: var(--ink-soft); margin-bottom: 4px;
  }
  .ta-review-field input[type="date"], .ta-review-field input[type="text"] {
    width: 100%; padding: 8px 9px; border: 1px solid var(--line); border-radius: 3px;
    font-size: 13px; font-family: inherit; background: var(--paper); color: var(--ink);
  }
  .ta-review-table { width: 100%; border-collapse: collapse; margin-top: 6px; font-size: 12.5px; }
  .ta-review-table th {
    text-align: left; font-family: 'Space Mono', monospace; font-size: 10px;
    text-transform: uppercase; color: var(--ink-soft); font-weight: 400; padding: 3px 4px;
  }
  .ta-review-table td { padding: 3px 4px; }
  .ta-review-table input[type="text"] {
    width: 100%; padding: 6px 7px; border: 1px solid var(--line); border-radius: 3px;
    font-size: 12.5px; background: var(--paper); color: var(--ink);
  }
  .ta-review-table input[type="number"] {
    width: 100%; padding: 6px 5px; border: 1px solid var(--line); border-radius: 3px;
    font-size: 12.5px; background: var(--paper); color: var(--ink);
  }
  .ta-edit-del-row {
    background: none; border: none; color: var(--ink-soft); font-size: 16px;
    cursor: pointer; line-height: 1; padding: 4px 6px;
  }
  .ta-edit-del-row:hover { color: var(--stamp); }
  .ta-edit-add-row {
    margin-top: 8px; font-family: 'Space Mono', monospace; font-size: 11px; text-transform: uppercase;
    padding: 6px 10px; border-radius: 3px; border: 1px dashed var(--line); background: transparent;
    color: var(--ink-soft); cursor: pointer;
  }
  .ta-edit-add-row:hover { border-color: var(--ok); color: var(--ok); }
  .ta-review-total {
    margin-top: 14px; padding-top: 10px; border-top: 1px dashed var(--line);
    font-family: 'Space Mono', monospace; font-size: 14px; font-weight: 700; text-align: right;
  }
  .ta-review-margin { margin-top: 4px; padding-top: 0; border-top: none; font-size: 13px; }
  .ta-review-margin.ta-margin-pos-text, .ta-review-total.ta-margin-pos-text { color: var(--ok); }
  .ta-review-margin.ta-margin-neg-text, .ta-review-total.ta-margin-neg-text { color: var(--stamp); }
  .ta-receipt-actions { display: flex; gap: 6px; }
  .ta-receipt-edit {
    background: none; border: 1px solid var(--line); border-radius: 3px;
    color: var(--ink-soft); font-size: 11px; padding: 4px 9px; cursor: pointer;
    font-family: 'Space Mono', monospace;
  }
  .ta-receipt-edit:hover { border-color: var(--ok); color: var(--ok); }

  .ta-btn:disabled { opacity: 0.4; cursor: not-allowed; }
  .ta-import-modal { width: 500px; }
  .ta-import-table-wrap {
    max-height: 280px; overflow-y: auto; border: 1px solid var(--line);
    border-radius: 4px; padding: 0 8px; margin-top: 4px;
  }
  .ta-import-table th:first-child, .ta-import-table td:first-child { width: 22px; }
  .ta-import-table td { vertical-align: top; padding: 7px 4px; }
  .ta-import-table input[type="checkbox"] { width: 15px; height: 15px; accent-color: var(--ok); cursor: pointer; }
  .ta-import-row.ta-import-dup { background: var(--stamp-soft); }
  .ta-import-dup-tag {
    font-family: 'Space Mono', monospace; font-size: 9.5px; text-transform: uppercase;
    color: var(--stamp); margin-top: 2px;
  }
  .ta-import-summary {
    display: flex; justify-content: space-between; align-items: center; gap: 8px;
    margin-top: 6px; font-size: 11px; color: var(--ink-soft);
  }
  .ta-import-select-all { font-size: 10.5px; color: var(--ink-soft); cursor: pointer; text-decoration: underline; background: none; border: none; padding: 0; font-family: inherit; }
  .ta-import-select-all:hover { color: var(--ink); }

  .ta-spinner {
    width: 14px; height: 14px; border: 2px solid var(--paper);
    border-top-color: transparent; border-radius: 50%;
    display: inline-block; animation: ta-spin 0.7s linear infinite; margin-right: 6px;
    vertical-align: -2px;
  }
  @keyframes ta-spin { to { transform: rotate(360deg); } }

  /* Tabs */
  .ta-tabs { display: flex; gap: 2px; padding: 0 20px; border-bottom: 2px solid var(--line); background: var(--paper-dim); }
  .ta-tab-btn {
    font-family: 'Space Mono', monospace; font-size: 12px; text-transform: uppercase; letter-spacing: 0.3px;
    padding: 10px 16px; border: none; background: transparent; color: var(--ink-soft); cursor: pointer;
    border-bottom: 3px solid transparent; margin-bottom: -2px;
  }
  .ta-tab-btn:hover { color: var(--ink); }
  .ta-tab-btn.ta-active { color: var(--ink); border-bottom-color: var(--stamp); font-weight: 700; }

  /* Caisse module */
  .ta-caisse-nav { display: flex; justify-content: space-between; align-items: center; padding: 14px 20px 0; flex-wrap: wrap; gap: 10px; }
  .ta-caisse-subtabs { display: flex; gap: 6px; flex-wrap: wrap; }
  .ta-subtab-btn {
    font-family: 'Space Mono', monospace; font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.3px;
    padding: 7px 12px; border-radius: 20px; border: 1px solid var(--line); background: var(--paper);
    color: var(--ink-soft); cursor: pointer;
  }
  .ta-subtab-btn:hover { border-color: var(--ink-soft); color: var(--ink); }
  .ta-subtab-btn.ta-active { background: var(--ink); border-color: var(--ink); color: var(--paper); }
  .ta-lock-btn {
    font-family: 'Space Mono', monospace; font-size: 10.5px; text-transform: uppercase;
    padding: 7px 12px; border-radius: 20px; border: 1px solid var(--stamp); background: var(--paper);
    color: var(--stamp); cursor: pointer;
  }
  .ta-lock-btn:hover { background: var(--stamp); color: var(--paper); }
  .ta-caisse-content { padding: 16px 20px 40px; max-width: 760px; }
  .ta-caisse-empty { color: var(--ink-soft); font-size: 13px; padding: 30px 0; text-align: center; }

  .ta-section-title {
    font-family: 'Space Mono', monospace; font-size: 12.5px; text-transform: uppercase; letter-spacing: 0.3px;
    margin: 22px 0 10px; padding-bottom: 6px; border-bottom: 1px dashed var(--line); color: var(--ink);
  }
  .ta-section-title:first-child { margin-top: 0; }

  .ta-register-datebar { display: flex; align-items: center; gap: 8px; margin-bottom: 16px; }
  .ta-date-nav {
    width: 30px; height: 30px; border-radius: 4px; border: 1px solid var(--line); background: var(--paper);
    color: var(--ink); cursor: pointer; font-size: 14px;
  }
  .ta-date-nav:hover { border-color: var(--ink-soft); }
  .ta-register-datebar input[type="date"] {
    font-family: 'Space Mono', monospace; font-size: 13px; padding: 6px 8px; border: 1px solid var(--line);
    border-radius: 4px; background: var(--paper); color: var(--ink);
  }
  .ta-today-btn {
    font-family: 'Space Mono', monospace; font-size: 10.5px; text-transform: uppercase; padding: 7px 10px;
    border-radius: 4px; border: 1px solid var(--line); background: var(--paper); color: var(--ink-soft); cursor: pointer;
  }
  .ta-today-btn:hover { border-color: var(--ink-soft); color: var(--ink); }

  .ta-register-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 16px; }
  @media (max-width: 640px) { .ta-register-grid { grid-template-columns: 1fr; } }
  .ta-register-card { border: 1px solid var(--line); border-radius: 6px; padding: 12px 14px; background: var(--paper); }
  .ta-register-card label {
    display: block; font-family: 'Space Mono', monospace; font-size: 10px; text-transform: uppercase;
    letter-spacing: 0.3px; color: var(--ink-soft); margin-bottom: 6px;
  }
  .ta-register-card input[type="number"] {
    width: 100%; font-family: 'Space Mono', monospace; font-size: 18px; font-weight: 700; padding: 6px 4px;
    border: none; border-bottom: 2px solid var(--line); background: transparent; color: var(--ink);
  }
  .ta-register-card input[type="number"]:focus { outline: none; border-bottom-color: var(--stamp); }
  .ta-register-hint { font-size: 11px; color: var(--ink-soft); margin-top: 6px; }
  .ta-link-btn {
    background: none; border: none; padding: 0; margin-top: 4px; font-size: 11px; text-decoration: underline;
    color: var(--stamp); cursor: pointer; font-family: inherit;
  }

  .ta-register-summary { border: 1px solid var(--line); border-radius: 6px; padding: 4px 14px; background: var(--paper-dim); }
  .ta-sum-row { display: flex; justify-content: space-between; padding: 8px 0; font-size: 13px; border-bottom: 1px dashed var(--line); font-family: 'Space Mono', monospace; }
  .ta-sum-row:last-child { border-bottom: none; }
  .ta-sum-total { font-weight: 700; font-size: 14px; }
  .ta-sum-ecart.ta-ok { color: var(--ok); font-weight: 700; }
  .ta-sum-ecart.ta-warn { color: var(--stamp); font-weight: 700; }
  .ta-register-actions { margin-top: 14px; }

  .ta-caisse-form { border: 1px solid var(--line); border-radius: 6px; padding: 14px; background: var(--paper); margin-bottom: 16px; }
  .ta-caisse-form-row { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 10px; }
  .ta-caisse-form-field { flex: 1; min-width: 130px; }
  .ta-caisse-form-field label {
    display: block; font-family: 'Space Mono', monospace; font-size: 9.5px; text-transform: uppercase;
    letter-spacing: 0.3px; color: var(--ink-soft); margin-bottom: 4px;
  }
  .ta-caisse-form-field input, .ta-caisse-form-field select {
    width: 100%; font-size: 13px; font-family: inherit; padding: 7px 8px; border: 1px solid var(--line);
    border-radius: 4px; background: var(--paper); color: var(--ink); box-sizing: border-box;
  }
  .ta-caisse-form-field input:focus, .ta-caisse-form-field select:focus { outline: none; border-color: var(--stamp); }

  .ta-employee-list { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 18px; }
  .ta-employee-chip {
    display: flex; align-items: center; gap: 8px; padding: 6px 10px; border-radius: 20px;
    border: 1px solid var(--line); background: var(--paper); font-size: 12.5px;
  }
  .ta-employee-chip-total { font-family: 'Space Mono', monospace; color: var(--stamp); font-size: 11.5px; }
  .ta-employee-chip-del { background: none; border: none; color: var(--ink-soft); cursor: pointer; font-size: 14px; line-height: 1; padding: 0; }
  .ta-employee-chip-del:hover { color: var(--stamp); }

  .ta-data-table { width: 100%; border-collapse: collapse; font-size: 12.5px; }
  .ta-data-table th {
    text-align: left; font-family: 'Space Mono', monospace; font-size: 10px; text-transform: uppercase;
    letter-spacing: 0.3px; color: var(--ink-soft); border-bottom: 1px solid var(--line); padding: 6px 6px;
  }
  .ta-data-table td { padding: 8px 6px; border-bottom: 1px dashed var(--line); vertical-align: top; }
  .ta-data-table tr:last-child td { border-bottom: none; }
  .ta-data-table .ta-price { text-align: right; font-family: 'Space Mono', monospace; white-space: nowrap; }
  .ta-row-del { background: none; border: none; color: var(--ink-soft); cursor: pointer; font-size: 15px; padding: 0 4px; }
  .ta-row-del:hover { color: var(--stamp); }
  .ta-badge-client, .ta-badge-employe {
    display: inline-block; font-family: 'Space Mono', monospace; font-size: 9px; text-transform: uppercase;
    padding: 2px 6px; border-radius: 10px; margin-left: 6px; vertical-align: 1px;
  }
  .ta-badge-client { background: var(--paper-dim); color: var(--ink-soft); border: 1px solid var(--line); }
  .ta-badge-employe { background: var(--stamp-soft); color: var(--stamp); }

  .ta-balance-cards { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 18px; }
  .ta-balance-card { border: 1px solid var(--line); border-radius: 6px; padding: 10px 14px; min-width: 150px; background: var(--paper); }
  .ta-balance-card-name { font-size: 12.5px; font-weight: 600; }
  .ta-balance-card-amount { font-family: 'Space Mono', monospace; font-size: 16px; font-weight: 700; margin-top: 4px; }
  .ta-balance-card-amount.ta-owed { color: var(--stamp); }
  .ta-balance-card-amount.ta-settled { color: var(--ok); }

  .ta-pin-overlay .ta-modal { width: 300px; text-align: center; }
  .ta-pin-input {
    width: 100%; font-family: 'Space Mono', monospace; font-size: 26px; letter-spacing: 8px; text-align: center;
    padding: 10px 8px; border: 1px solid var(--line); border-radius: 6px; background: var(--paper); color: var(--ink);
    box-sizing: border-box; margin-bottom: 6px;
  }
  .ta-pin-input:focus { outline: none; border-color: var(--stamp); }
  .ta-pin-hint { font-size: 11px; color: var(--ink-soft); margin-bottom: 10px; }
  .ta-pin-error { font-size: 12px; color: var(--stamp); margin: 6px 0 0; min-height: 16px; }

  .ta-settings-note { font-size: 12px; color: var(--ink-soft); margin-top: 10px; }

  @media (max-width: 720px) {
    .ta-body { flex-direction: column; }
    .ta-sidebar { width: 100%; border-right: none; border-bottom: 2px dashed var(--line); max-height: 260px; }
  }
</style>
</head>
<body>

<div id="ticket-app-root">
  <div class="ta-header">
    <div>
      <h1>&#128203; Registre de tickets</h1>
      <div class="ta-sub">Scannez un ticket &mdash; date, produits et prix d'achat sont extraits automatiquement</div>
    </div>
    <div class="ta-header-actions">
      <button class="ta-export-btn" id="ta-export-btn">&#11015; Exporter Excel</button>
      <div class="ta-total-badge" id="ta-grand-total">Total: 0,00 DA</div>
      <div class="ta-total-badge ta-margin-badge" id="ta-grand-margin">Marge: 0,00 DA</div>
    </div>
  </div>

  <div class="ta-tabs">
    <button class="ta-tab-btn ta-active" id="ta-tab-tickets" data-tab="tickets">&#128203; Tickets</button>
    <button class="ta-tab-btn" id="ta-tab-caisse" data-tab="caisse">&#128274; Caisse</button>
  </div>

  <div class="ta-view" id="ta-view-tickets">
  <div class="ta-body">
    <div class="ta-sidebar">
      <div class="ta-dropzone" id="ta-dropzone">
        <div class="ta-dz-icon">&#128248;</div>
        <div class="ta-dz-title">Scanner un ticket</div>
        <div class="ta-dz-hint">Photo, galerie, ou glissez vos images ici (jusqu'à 50 à la fois)</div>
        <div class="ta-dz-actions">
          <button type="button" class="ta-dz-btn" id="ta-btn-camera">&#128247; Prendre une photo</button>
          <button type="button" class="ta-dz-btn" id="ta-btn-gallery">&#128193; Depuis la galerie</button>
        </div>
        <div class="ta-dz-divider">ou</div>
        <div class="ta-dz-actions">
          <button type="button" class="ta-dz-btn ta-dz-btn-alt" id="ta-btn-import">&#128202; Importer un fichier Excel</button>
        </div>
        <input type="file" id="ta-file-input-camera" accept="image/*" capture="environment" style="display:none" />
        <input type="file" id="ta-file-input-gallery" accept="image/*" multiple style="display:none" />
        <input type="file" id="ta-file-input-excel" accept=".xlsx,.xls" style="display:none" />
      </div>
      <div class="ta-filter-bar">
        <div class="ta-filter-title">&#128197; Filtrer par p&eacute;riode</div>
        <div class="ta-filter-row">
          <label>Du <input type="date" id="ta-filter-from" /></label>
          <label>Au <input type="date" id="ta-filter-to" /></label>
        </div>
        <button type="button" class="ta-filter-reset" id="ta-filter-reset">R&eacute;initialiser</button>
      </div>
      <div class="ta-date-list" id="ta-date-list"></div>
    </div>
    <div class="ta-main" id="ta-main"></div>
  </div>
  </div>

  <div class="ta-view" id="ta-view-caisse" style="display:none"></div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"><\/script>
<script>
// ------------------------------------------------------------------
// Stockage autonome (IndexedDB) : quand l'app tourne DANS Claude.ai,
// window.storage existe d\\u00E9j\\u00E0 et est utilis\\u00E9 tel quel. D\\u00E8s qu'elle
// tourne en dehors (d\\u00E9ploiement local, ex. http://crm/), ce shim la
// remplace avec la m\\u00EAme interface (get/set/delete/list) mais bas\\u00E9e
// sur IndexedDB du navigateur \\u2014 les donn\\u00E9es restent alors stock\\u00E9es
// localement, li\\u00E9es \\u00E0 l'adresse utilis\\u00E9e (toujours ouvrir http://crm/,
// jamais localhost, pour retrouver les m\\u00EAmes donn\\u00E9es \\u00E0 chaque fois).
(function () {
  if (window.storage) return; // d\\u00E9j\\u00E0 fourni par l'environnement (Claude.ai)

  function idbRequest(req) {
    return new Promise((resolve, reject) => {
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  const DB_NAME = 'crm_local_storage';
  const STORE = 'kv';
  let dbPromise = null;
  function getDb() {
    if (!dbPromise) {
      dbPromise = new Promise((resolve, reject) => {
        const req = indexedDB.open(DB_NAME, 1);
        req.onupgradeneeded = () => { req.result.createObjectStore(STORE); };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
    }
    return dbPromise;
  }
  async function store(mode) {
    const db = await getDb();
    return db.transaction(STORE, mode).objectStore(STORE);
  }

  window.storage = {
    async get(key) {
      const s = await store('readonly');
      const value = await idbRequest(s.get(key));
      if (value === undefined) throw new Error('Cl\\u00E9 introuvable : ' + key);
      return { key, value, shared: false };
    },
    async set(key, value) {
      const s = await store('readwrite');
      await idbRequest(s.put(value, key));
      return { key, value, shared: false };
    },
    async delete(key) {
      const s = await store('readwrite');
      await idbRequest(s.delete(key));
      return { key, deleted: true, shared: false };
    },
    async list(prefix) {
      const s = await store('readonly');
      const allKeys = await idbRequest(s.getAllKeys());
      const keys = prefix ? allKeys.filter(k => String(k).startsWith(prefix)) : allKeys;
      return { keys, prefix, shared: false };
    }
  };
})();
<\/script>
<script>
(function() {
  const root = document.getElementById('ticket-app-root');
  const dropzone = document.getElementById('ta-dropzone');
  const cameraInput = document.getElementById('ta-file-input-camera');
  const galleryInput = document.getElementById('ta-file-input-gallery');
  const btnCamera = document.getElementById('ta-btn-camera');
  const btnGallery = document.getElementById('ta-btn-gallery');
  const dateListEl = document.getElementById('ta-date-list');
  const mainEl = document.getElementById('ta-main');
  const grandTotalEl = document.getElementById('ta-grand-total');
  const grandMarginEl = document.getElementById('ta-grand-margin');
  const exportBtn = document.getElementById('ta-export-btn');
  const importBtn = document.getElementById('ta-btn-import');
  const importInput = document.getElementById('ta-file-input-excel');
  const filterFromEl = document.getElementById('ta-filter-from');
  const filterToEl = document.getElementById('ta-filter-to');
  const filterResetEl = document.getElementById('ta-filter-reset');
  const tabTicketsBtn = document.getElementById('ta-tab-tickets');
  const tabCaisseBtn = document.getElementById('ta-tab-caisse');
  const viewTicketsEl = document.getElementById('ta-view-tickets');
  const viewCaisseEl = document.getElementById('ta-view-caisse');

  let tickets = [];        // {id, date, merchant, products:[{name, price, qty}], total}
  let selectedDate = null;
  let filterFrom = null;   // 'YYYY-MM-DD' or null
  let filterTo = null;
  let deleteTarget = null; // ticket id pending delete confirmation

  // --- Module Caisse (admin) ---
  let activeTab = 'tickets';         // 'tickets' | 'caisse'
  let adminAuthed = false;           // r\\u00E9initialis\\u00E9 \\u00E0 chaque rechargement de page
  let caisseSubTab = 'register';     // 'register' | 'payroll' | 'credits' | 'settings'
  let caisseConfig = { pin: '1234' };
  let registers = {};                // { 'YYYY-MM-DD': {date, opening, openingManual, closing, closingNote} }
  let employees = [];                // [{id, name, note}]
  let payrollEntries = [];           // [{id, employeeId, employeeName, date, amount, note}]
  let creditEntries = [];            // [{id, personName, personType, date, movement, amount, note}]
  let caisseSelectedDate = new Date().toISOString().slice(0, 10);
  let creditFilterPerson = '';       // filtre d'affichage dans le panneau Cr\\u00E9dits

  const fmt = (n) => (Number(n) || 0).toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' DA';

  function toast(msg, isErr) {
    const t = document.createElement('div');
    t.className = 'ta-toast' + (isErr ? ' ta-err' : '');
    t.textContent = msg;
    root.appendChild(t);
    setTimeout(() => t.remove(), 3200);
  }

  async function loadTickets() {
    try {
      const idx = await window.storage.get('ticket-index');
      const ids = idx ? JSON.parse(idx.value) : [];
      const loaded = [];
      for (const id of ids) {
        try {
          const r = await window.storage.get('ticket:' + id);
          if (r) loaded.push(JSON.parse(r.value));
        } catch (e) { /* skip missing */ }
      }
      loaded.sort((a, b) => (b.date || '').localeCompare(a.date || '') || (b.createdAt || 0) - (a.createdAt || 0));
      tickets = loaded;
      if (tickets.length && !selectedDate) selectedDate = tickets[0].date;
    } catch (e) {
      tickets = [];
    }
    render();
  }

  async function saveTicket(ticket) {
    await window.storage.set('ticket:' + ticket.id, JSON.stringify(ticket));
    const idxRes = await window.storage.get('ticket-index').catch(() => null);
    const ids = idxRes ? JSON.parse(idxRes.value) : [];
    if (!ids.includes(ticket.id)) ids.push(ticket.id);
    await window.storage.set('ticket-index', JSON.stringify(ids));
  }

  async function deleteTicket(id) {
    await window.storage.delete('ticket:' + id).catch(() => {});
    const idxRes = await window.storage.get('ticket-index').catch(() => null);
    const ids = idxRes ? JSON.parse(idxRes.value).filter(x => x !== id) : [];
    await window.storage.set('ticket-index', JSON.stringify(ids));
    tickets = tickets.filter(t => t.id !== id);
    if (selectedDate && !tickets.some(t => t.date === selectedDate)) {
      selectedDate = tickets.length ? tickets[0].date : null;
    }
    render();
    toast('Ticket supprim\\u00E9');
  }

  function ticketTotal(t) {
    return (t.products || []).reduce((s, p) => s + (Number(p.price) || 0) * (Number(p.qty) || 1), 0);
  }

  // Marge = diff\\u00E9rence entre prix d'achat et prix de vente, uniquement sur les
  // articles pour lesquels un prix de vente a \\u00E9t\\u00E9 renseign\\u00E9 (article vendu).
  function itemMargin(p) {
    if (p.salePrice === null || p.salePrice === undefined || p.salePrice === '') return null;
    return (Number(p.salePrice) - Number(p.price) || 0) * (Number(p.qty) || 1);
  }
  function ticketSaleTotal(t) {
    return (t.products || []).reduce((s, p) => {
      if (p.salePrice === null || p.salePrice === undefined || p.salePrice === '') return s;
      return s + (Number(p.salePrice) || 0) * (Number(p.qty) || 1);
    }, 0);
  }
  function ticketMargin(t) {
    return (t.products || []).reduce((s, p) => s + (itemMargin(p) || 0), 0);
  }
  function ticketHasSales(t) {
    return (t.products || []).some(p => p.salePrice !== null && p.salePrice !== undefined && p.salePrice !== '');
  }

  function groupByDate() {
    const map = {};
    for (const t of tickets) {
      if (filterFrom && t.date < filterFrom) continue;
      if (filterTo && t.date > filterTo) continue;
      if (!map[t.date]) map[t.date] = [];
      map[t.date].push(t);
    }
    return map;
  }

  function getFilteredTickets() {
    return tickets.filter(t => {
      if (filterFrom && t.date < filterFrom) return false;
      if (filterTo && t.date > filterTo) return false;
      return true;
    });
  }

  function frDate(iso) {
    if (!iso) return 'Date inconnue';
    const d = new Date(iso + 'T00:00:00');
    if (isNaN(d)) return iso;
    return d.toLocaleDateString('fr-FR', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' });
  }

  function render() {
    const grouped = groupByDate();
    const dates = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

    const filteredTickets = getFilteredTickets();
    const grand = filteredTickets.reduce((s, t) => s + ticketTotal(t), 0);
    const grandMargin = filteredTickets.reduce((s, t) => s + ticketMargin(t), 0);
    const anySales = filteredTickets.some(ticketHasSales);
    const filterActive = !!(filterFrom || filterTo);
    grandTotalEl.textContent = (filterActive ? 'Total filtr\\u00E9: ' : 'Total: ') + fmt(grand);
    grandMarginEl.textContent = 'Marge: ' + fmt(grandMargin);
    grandMarginEl.classList.remove('ta-margin-pos', 'ta-margin-neg', 'ta-margin-none');
    grandMarginEl.classList.add(!anySales ? 'ta-margin-none' : (grandMargin >= 0 ? 'ta-margin-pos' : 'ta-margin-neg'));
    exportBtn.disabled = getFilteredTickets().length === 0;

    // Sidebar
    if (!dates.length) {
      dateListEl.innerHTML = '<div class="ta-empty-sidebar">Aucun ticket enregistr\\u00E9 pour le moment.</div>';
    } else {
      dateListEl.innerHTML = '';
      for (const date of dates) {
        const dayTickets = grouped[date];
        const dayTotal = dayTickets.reduce((s, t) => s + ticketTotal(t), 0);
        const dayMargin = dayTickets.reduce((s, t) => s + ticketMargin(t), 0);
        const dayHasSales = dayTickets.some(ticketHasSales);
        const item = document.createElement('div');
        item.className = 'ta-date-item' + (date === selectedDate ? ' ta-active' : '');
        item.innerHTML = \`
          <div class="ta-date-label">\${frDate(date)}</div>
          <div class="ta-date-count">\${dayTickets.length} ticket\${dayTickets.length > 1 ? 's' : ''}</div>
          <div class="ta-date-total">\${fmt(dayTotal)}</div>
          \${dayHasSales ? \`<div class="ta-date-margin \${dayMargin >= 0 ? 'ta-margin-pos-text' : 'ta-margin-neg-text'}">Marge \${dayMargin >= 0 ? '+' : ''}\${fmt(dayMargin)}</div>\` : ''}
        \`;
        item.onclick = () => { selectedDate = date; render(); };
        dateListEl.appendChild(item);
      }
    }

    // Main
    if ((!selectedDate || !grouped[selectedDate]) && dates.length) {
      selectedDate = dates[0];
    }
    if (!selectedDate || !grouped[selectedDate]) {
      mainEl.innerHTML = filterActive ? \`
        <div class="ta-empty-main">
          <div class="ta-big">&#128203;</div>
          <div class="ta-t1">Aucun ticket dans cette p\\u00E9riode</div>
          <div class="ta-t2">Essaie d'\\u00E9largir les dates du filtre, ou r\\u00E9initialise-le.</div>
        </div>\` : \`
        <div class="ta-empty-main">
          <div class="ta-big">&#129534;</div>
          <div class="ta-t1">Aucun ticket s\\u00E9lectionn\\u00E9</div>
          <div class="ta-t2">Scannez une photo de ticket pour l'ajouter automatiquement \\u00E0 la date d\\u00E9tect\\u00E9e.</div>
        </div>\`;
      return;
    }

    const dayTickets = grouped[selectedDate];
    const dayTotal = dayTickets.reduce((s, t) => s + ticketTotal(t), 0);

    let html = \`
      <div class="ta-day-heading">
        <h2>\${frDate(selectedDate)}</h2>
        <div class="ta-day-total">\${fmt(dayTotal)}</div>
      </div>\`;

    for (const t of dayTickets) {
      const total = ticketTotal(t);
      const hasSales = ticketHasSales(t);
      const saleTotal = ticketSaleTotal(t);
      const margin = ticketMargin(t);
      const rows = (t.products || []).map(p => {
        const m = itemMargin(p);
        return \`
        <tr>
          <td>\${escapeHtml(p.name)}</td>
          <td class="ta-price">\${p.qty && p.qty !== 1 ? p.qty + '&times;' : ''}</td>
          <td class="ta-price">\${fmt(p.price)}</td>
          \${hasSales ? \`<td class="ta-price">\${p.salePrice !== null && p.salePrice !== undefined && p.salePrice !== '' ? fmt(p.salePrice) : '&mdash;'}</td>
          <td class="ta-price \${m == null ? '' : (m >= 0 ? 'ta-margin-pos-text' : 'ta-margin-neg-text')}">\${m == null ? '&mdash;' : (m >= 0 ? '+' : '') + fmt(m)}</td>\` : ''}
        </tr>\`;
      }).join('');

      html += \`
        <div class="ta-receipt">
          <div class="ta-receipt-inner">
            <div class="ta-receipt-top">
              <div>
                <div class="ta-receipt-merchant">\${escapeHtml(t.merchant || 'Ticket')}</div>
                <div class="ta-receipt-meta">\${(t.products || []).length} article\${(t.products || []).length > 1 ? 's' : ''}</div>
              </div>
              <div class="ta-receipt-actions">
                <button class="ta-receipt-edit" data-id="\${t.id}">Modifier</button>
                <button class="ta-receipt-del" data-id="\${t.id}">Supprimer</button>
              </div>
            </div>
            <table class="ta-products">
              <thead><tr><th>Produit</th><th>Qt&eacute;</th><th>Achat</th>\${hasSales ? '<th>Vente</th><th>Marge</th>' : ''}</tr></thead>
              <tbody>\${rows || \`<tr><td colspan="\${hasSales ? 5 : 3}" style="color:var(--ink-soft)">Aucun article d\\u00E9tect\\u00E9</td></tr>\`}</tbody>
            </table>
            <div class="ta-receipt-total"><span>Total achats</span><span>\${fmt(total)}</span></div>
            \${hasSales ? \`
            <div class="ta-receipt-total"><span>Total ventes</span><span>\${fmt(saleTotal)}</span></div>
            <div class="ta-receipt-total \${margin >= 0 ? 'ta-margin-pos-text' : 'ta-margin-neg-text'}"><span>Marge</span><span>\${margin >= 0 ? '+' : ''}\${fmt(margin)}</span></div>\` : ''}
          </div>
        </div>\`;
    }

    mainEl.innerHTML = html;
    mainEl.querySelectorAll('.ta-receipt-del').forEach(btn => {
      btn.onclick = () => confirmDelete(btn.getAttribute('data-id'));
    });
    mainEl.querySelectorAll('.ta-receipt-edit').forEach(btn => {
      btn.onclick = () => openEditForSavedTicket(btn.getAttribute('data-id'));
    });
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  // Ouvre une fen\\u00EAtre de v\\u00E9rification/correction pour un ticket.
  // R\\u00E9sout avec {action:'save', ticket} | {action:'skip'} | {action:'cancel'}
  function editTicketModal(ticketData, opts) {
    opts = opts || {};
    return new Promise((resolve) => {
      const draft = JSON.parse(JSON.stringify(ticketData));
      if (!Array.isArray(draft.products)) draft.products = [];
      const overlay = document.createElement('div');
      overlay.className = 'ta-overlay';
      root.appendChild(overlay);

      function currentTotal() {
        return draft.products.reduce((s, p) => s + (Number(p.price) || 0) * (Number(p.qty) || 1), 0);
      }
      function currentMargin() {
        return draft.products.reduce((s, p) => s + (itemMargin(p) || 0), 0);
      }

      function readFormIntoDraft() {
        const dateInp = overlay.querySelector('#ta-edit-date');
        const merchInp = overlay.querySelector('#ta-edit-merchant');
        if (dateInp) draft.date = dateInp.value || draft.date;
        if (merchInp) draft.merchant = merchInp.value;
        const rows = overlay.querySelectorAll('#ta-edit-rows tr');
        draft.products = Array.from(rows).map(row => {
          const saleInp = row.querySelector('.ta-edit-sale');
          const saleVal = saleInp ? saleInp.value.trim() : '';
          return {
            name: row.querySelector('.ta-edit-name').value || 'Article',
            qty: Number(row.querySelector('.ta-edit-qty').value) || 1,
            price: Number(row.querySelector('.ta-edit-price').value) || 0,
            salePrice: saleVal === '' ? null : Number(saleVal)
          };
        });
      }

      function paint() {
        const rowsHtml = draft.products.map((p, i) => \`
          <tr data-i="\${i}">
            <td><input type="text" class="ta-edit-name" value="\${escapeHtml(p.name || '')}" /></td>
            <td><input type="number" step="1" min="0" class="ta-edit-qty" value="\${p.qty != null ? p.qty : 1}" /></td>
            <td><input type="number" step="0.01" min="0" class="ta-edit-price" value="\${p.price != null ? p.price : 0}" /></td>
            <td><input type="number" step="0.01" min="0" class="ta-edit-sale" placeholder="&mdash;" value="\${p.salePrice !== null && p.salePrice !== undefined ? p.salePrice : ''}" /></td>
            <td><button type="button" class="ta-edit-del-row" data-i="\${i}" title="Supprimer cet article">&times;</button></td>
          </tr>\`).join('');

        overlay.innerHTML = \`
          <div class="ta-modal ta-review-modal">
            <h3>\${escapeHtml(opts.title || 'V\\u00E9rifier le ticket')}</h3>
            \${opts.subtitle ? \`<p>\${escapeHtml(opts.subtitle)}</p>\` : ''}
            <div class="ta-review-field">
              <label>Date</label>
              <input type="date" id="ta-edit-date" value="\${draft.date || ''}" />
            </div>
            <div class="ta-review-field">
              <label>Magasin</label>
              <input type="text" id="ta-edit-merchant" value="\${escapeHtml(draft.merchant || '')}" />
            </div>
            <table class="ta-review-table">
              <thead><tr><th>Produit</th><th>Qt&eacute;</th><th>Achat (DA)</th><th>Vente (DA)</th><th></th></tr></thead>
              <tbody id="ta-edit-rows">\${rowsHtml || ''}</tbody>
            </table>
            <button type="button" class="ta-edit-add-row" id="ta-edit-add-row">+ Ajouter un article</button>
            <div class="ta-review-total" id="ta-edit-total">Total achats : \${fmt(currentTotal())}</div>
            <div class="ta-review-total ta-review-margin \${currentMargin() >= 0 ? 'ta-margin-pos-text' : 'ta-margin-neg-text'}" id="ta-edit-margin" style="\${currentMargin() === 0 && !draft.products.some(p => p.salePrice !== null && p.salePrice !== undefined && p.salePrice !== '') ? 'display:none' : ''}">Marge : \${currentMargin() >= 0 ? '+' : ''}\${fmt(currentMargin())}</div>
            <div class="ta-modal-row">
              \${opts.allowSkip
                ? '<button class="ta-btn" id="ta-edit-skip">Ignorer ce ticket</button>'
                : '<button class="ta-btn" id="ta-edit-cancel">Annuler</button>'}
              <button class="ta-btn ta-primary" id="ta-edit-save">\${escapeHtml(opts.saveLabel || 'Valider')}</button>
            </div>
          </div>\`;
        wire();
      }

      function wire() {
        const totalEl = overlay.querySelector('#ta-edit-total');
        const marginEl = overlay.querySelector('#ta-edit-margin');
        function recalcTotalDisplay() {
          const rows = overlay.querySelectorAll('#ta-edit-rows tr');
          let t = 0, m = 0, anySale = false;
          rows.forEach(row => {
            const q = Number(row.querySelector('.ta-edit-qty').value) || 0;
            const pr = Number(row.querySelector('.ta-edit-price').value) || 0;
            const saleRaw = row.querySelector('.ta-edit-sale').value.trim();
            t += q * pr;
            if (saleRaw !== '') {
              anySale = true;
              m += (Number(saleRaw) - pr) * q;
            }
          });
          totalEl.textContent = 'Total achats : ' + fmt(t);
          marginEl.style.display = anySale ? '' : 'none';
          marginEl.textContent = 'Marge : ' + (m >= 0 ? '+' : '') + fmt(m);
          marginEl.classList.remove('ta-margin-pos-text', 'ta-margin-neg-text');
          marginEl.classList.add(m >= 0 ? 'ta-margin-pos-text' : 'ta-margin-neg-text');
        }
        overlay.querySelectorAll('.ta-edit-qty, .ta-edit-price, .ta-edit-sale').forEach(inp => {
          inp.addEventListener('input', recalcTotalDisplay);
        });
        overlay.querySelector('#ta-edit-add-row').onclick = () => {
          readFormIntoDraft();
          draft.products.push({ name: '', qty: 1, price: 0, salePrice: null });
          paint();
        };
        overlay.querySelectorAll('.ta-edit-del-row').forEach(btn => {
          btn.onclick = () => {
            readFormIntoDraft();
            const i = Number(btn.getAttribute('data-i'));
            draft.products.splice(i, 1);
            paint();
          };
        });
        const skipBtn = overlay.querySelector('#ta-edit-skip');
        const cancelBtn = overlay.querySelector('#ta-edit-cancel');
        if (skipBtn) skipBtn.onclick = () => { overlay.remove(); resolve({ action: 'skip' }); };
        if (cancelBtn) cancelBtn.onclick = () => { overlay.remove(); resolve({ action: 'cancel' }); };
        overlay.querySelector('#ta-edit-save').onclick = () => {
          readFormIntoDraft();
          overlay.remove();
          resolve({ action: 'save', ticket: draft });
        };
      }

      paint();
    });
  }

  async function openEditForSavedTicket(id) {
    const existing = tickets.find(t => t.id === id);
    if (!existing) return;
    const result = await editTicketModal(existing, {
      title: 'Modifier le ticket',
      subtitle: 'Corrige la date, le magasin ou les articles.',
      allowSkip: false,
      saveLabel: 'Enregistrer les modifications'
    });
    if (result.action === 'save') {
      const updated = Object.assign({}, existing, result.ticket, { id: existing.id, createdAt: existing.createdAt });
      await saveTicket(updated);
      const idx = tickets.findIndex(t => t.id === id);
      if (idx !== -1) tickets[idx] = updated;
      selectedDate = updated.date;
      render();
      toast('Ticket mis \\u00E0 jour');
    }
  }

  function confirmDelete(id) {
    deleteTarget = id;
    const overlay = document.createElement('div');
    overlay.className = 'ta-overlay';
    overlay.innerHTML = \`
      <div class="ta-modal">
        <h3>Supprimer ce ticket ?</h3>
        <p>Cette action est d\\u00E9finitive et retirera le ticket et ses articles.</p>
        <div class="ta-modal-row">
          <button class="ta-btn" id="ta-cancel-del">Annuler</button>
          <button class="ta-btn ta-danger" id="ta-confirm-del">Supprimer</button>
        </div>
      </div>\`;
    root.appendChild(overlay);
    overlay.querySelector('#ta-cancel-del').onclick = () => overlay.remove();
    overlay.querySelector('#ta-confirm-del').onclick = async () => {
      overlay.remove();
      await deleteTicket(id);
    };
  }

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(r.result);
      r.onerror = () => reject(new Error('Lecture du fichier \\u00E9chou\\u00E9e'));
      r.readAsDataURL(file);
    });
  }

  // Normalise n'importe quelle image (HEIC/HEIF, PNG, grande r\\u00E9solution...) en JPEG
  // exploitable par l'API, via un passage par <img> + <canvas>.
  function normalizeImage(dataUrl) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const timeout = setTimeout(() => reject(new Error('D\\u00E9lai d\\u00E9pass\\u00E9 lors de la lecture de l\\u2019image')), 10000);
      img.onload = () => {
        clearTimeout(timeout);
        try {
          if (!img.naturalWidth || !img.naturalHeight) {
            reject(new Error('image vide (format non support\\u00E9 par ce navigateur)'));
            return;
          }
          const maxDim = 1800;
          let { naturalWidth: width, naturalHeight: height } = img;
          if (width > maxDim || height > maxDim) {
            const scale = maxDim / Math.max(width, height);
            width = Math.round(width * scale);
            height = Math.round(height * scale);
          }
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, width, height);
          ctx.drawImage(img, 0, 0, width, height);
          const jpegDataUrl = canvas.toDataURL('image/jpeg', 0.88);
          resolve(jpegDataUrl.split(',')[1]);
        } catch (e) {
          reject(e);
        }
      };
      img.onerror = () => { clearTimeout(timeout); reject(new Error('format illisible par ce navigateur')); };
      img.src = dataUrl;
    });
  }

  const API_SUPPORTED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  const MAX_FILES = 50;

  // Traite un seul fichier image et renvoie le ticket extrait (ou l\\u00E8ve une erreur).
  async function processSingleFile(file) {
    const dataUrl = await fileToBase64(file);
    let base64;
    let mediaType = 'image/jpeg';
    try {
      base64 = await normalizeImage(dataUrl);
    } catch (convErr) {
      console.error('Conversion image \\u00E9chou\\u00E9e', convErr, 'type original:', file.type, 'taille:', file.size);
      if (API_SUPPORTED_TYPES.includes(file.type)) {
        base64 = dataUrl.split(',')[1];
        mediaType = file.type;
      } else {
        throw new Error("Format illisible (" + (file.name || 'photo') + ") \\u2014 essaie \\u00AB Le plus compatible \\u00BB dans R\\u00E9glages > Appareil photo, ou une capture d'\\u00E9cran.");
      }
    }

    const today = new Date().toISOString().slice(0, 10);
    const prompt = \`Tu regardes la photo d'un ticket de caisse / facture d'achat. Extrait les informations et r\\u00E9ponds UNIQUEMENT avec un objet JSON valide, sans texte avant ni apr\\u00E8s, sans balises markdown, au format exact suivant:
{"date":"YYYY-MM-DD","merchant":"nom du magasin ou vide si illisible","products":[{"name":"nom du produit","price":0.00,"qty":1}],"total":0.00}

R\\u00E8gles:
- "date" doit \\u00EAtre la date du ticket au format YYYY-MM-DD. Si aucune date n'est visible, utilise "\${today}".
- "price" est le prix d'achat unitaire en nombre d\\u00E9cimal (pas de texte, pas de symbole monnaie).
- "qty" est la quantit\\u00E9 (1 si non pr\\u00E9cis\\u00E9).
- Liste TOUS les produits/articles visibles sur le ticket.
- Si un champ est vraiment illisible, laisse une valeur raisonnable par d\\u00E9faut plut\\u00F4t que d'inventer.
- R\\u00E9ponds avec le JSON seul, rien d'autre.\`;

    let response;
    let lastErr;
    let lastStatus = null;
    let lastBody = '';
    const maxAttempts = 3;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'claude-sonnet-4-6',
            max_tokens: 1500,
            messages: [{
              role: 'user',
              content: [
                { type: 'image', source: { type: 'base64', media_type: mediaType, data: base64 } },
                { type: 'text', text: prompt }
              ]
            }]
          })
        });
      } catch (netErr) {
        lastErr = netErr;
        console.error('Network error attempt ' + attempt, netErr);
        if (attempt < maxAttempts) { await new Promise(r => setTimeout(r, 1200 * attempt)); continue; }
        break;
      }
      if (response.ok) { lastErr = null; break; }
      lastStatus = response.status;
      try { lastBody = await response.text(); } catch (e) { lastBody = ''; }
      console.error('API error attempt ' + attempt, lastStatus, lastBody);
      lastErr = new Error('status ' + lastStatus);
      if ((lastStatus === 420 || lastStatus === 429 || lastStatus === 529 || lastStatus === 500 || lastStatus === 503) && attempt < maxAttempts) {
        await new Promise(r => setTimeout(r, 1500 * attempt));
        continue;
      }
      break;
    }
    if (lastErr) {
      let detail = lastStatus ? ('code ' + lastStatus) : 'connexion impossible';
      let bodySnippet = '';
      try {
        const parsedBody = JSON.parse(lastBody);
        bodySnippet = (parsedBody && parsedBody.error && parsedBody.error.message) ? ' \\u2014 ' + parsedBody.error.message : '';
      } catch (e) { /* ignore */ }
      throw new Error('Erreur API (' + detail + ')' + bodySnippet);
    }
    const data = await response.json();
    const textBlock = (data.content || []).find(b => b.type === 'text');
    if (!textBlock) throw new Error('R\\u00E9ponse vide');

    let clean = textBlock.text.trim().replace(/^\`\`\`json/i, '').replace(/^\`\`\`/, '').replace(/\`\`\`$/, '').trim();
    let parsed;
    try {
      parsed = JSON.parse(clean);
    } catch (e) {
      throw new Error("Impossible de lire les donn\\u00E9es du ticket");
    }

    return {
      id: 't_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8),
      date: /^\\d{4}-\\d{2}-\\d{2}$/.test(parsed.date) ? parsed.date : today,
      merchant: parsed.merchant || 'Ticket',
      products: Array.isArray(parsed.products) ? parsed.products.map(p => ({
        name: p.name || 'Article',
        price: Number(p.price) || 0,
        qty: Number(p.qty) || 1
      })) : [],
      createdAt: Date.now()
    };
  }

  async function handleFiles(fileListLike) {
    let files = Array.from(fileListLike || []).filter(f => f && f.type && f.type.startsWith('image/'));
    if (!files.length) {
      toast('Merci de s\\u00E9lectionner au moins une image', true);
      return;
    }
    if (files.length > MAX_FILES) {
      toast(\`Maximum \${MAX_FILES} photos \\u00E0 la fois \\u2014 seules les \${MAX_FILES} premi\\u00E8res seront trait\\u00E9es\`, true);
      files = files.slice(0, MAX_FILES);
    }

    const dzTitle = dropzone.querySelector('.ta-dz-title');
    const dzIcon = dropzone.querySelector('.ta-dz-icon');
    const origTitle = dzTitle.textContent;
    dzIcon.style.opacity = '0.4';
    dropzone.style.pointerEvents = 'none';

    const extracted = []; // tickets analys\\u00E9s, en attente de validation
    let failCount = 0;

    for (let i = 0; i < files.length; i++) {
      dzTitle.innerHTML = \`<span class="ta-spinner"></span>Analyse \${i + 1}/\${files.length}...\`;
      try {
        const ticket = await processSingleFile(files[i]);
        extracted.push(ticket);
      } catch (err) {
        console.error('Ticket \\u00E9chou\\u00E9 (' + (files[i].name || i) + ')', err);
        failCount++;
      }
    }

    dzTitle.textContent = origTitle;
    dzIcon.style.opacity = '1';
    dropzone.style.pointerEvents = 'auto';
    cameraInput.value = '';
    galleryInput.value = '';

    if (!extracted.length) {
      toast(\`\\u00C9chec de l'analyse (\${failCount} photo\${failCount > 1 ? 's' : ''})\`, true);
      return;
    }

    // \\u00C9tape de v\\u00E9rification : chaque ticket extrait passe par une
    // validation manuelle avant d'\\u00EAtre enregistr\\u00E9.
    let savedCount = 0;
    let skippedCount = 0;
    let lastDate = null;

    for (let i = 0; i < extracted.length; i++) {
      const result = await editTicketModal(extracted[i], {
        title: \`Ticket \${i + 1}/\${extracted.length} \\u2014 V\\u00E9rifie et corrige si besoin\`,
        subtitle: "Modifie la date, le magasin ou les articles avant d'enregistrer.",
        allowSkip: true,
        saveLabel: 'Valider et enregistrer'
      });
      if (result.action === 'save') {
        const finalTicket = Object.assign({}, result.ticket, {
          id: extracted[i].id,
          createdAt: extracted[i].createdAt
        });
        await saveTicket(finalTicket);
        tickets.unshift(finalTicket);
        lastDate = finalTicket.date;
        savedCount++;
        render();
      } else {
        skippedCount++;
      }
    }

    if (lastDate) selectedDate = lastDate;
    render();

    let msg = savedCount ? \`\${savedCount} ticket\${savedCount > 1 ? 's' : ''} enregistr\\u00E9\${savedCount > 1 ? 's' : ''}\` : 'Aucun ticket enregistr\\u00E9';
    if (skippedCount) msg += \`, \${skippedCount} ignor\\u00E9\${skippedCount > 1 ? 's' : ''}\`;
    if (failCount) msg += \`, \${failCount} \\u00E9chec\${failCount > 1 ? 's' : ''} d'analyse\`;
    toast(msg, !savedCount);
  }

  btnCamera.addEventListener('click', () => cameraInput.click());
  btnGallery.addEventListener('click', () => galleryInput.click());
  cameraInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length) handleFiles(e.target.files);
  });
  galleryInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length) handleFiles(e.target.files);
  });
  ['dragenter', 'dragover'].forEach(ev => {
    dropzone.addEventListener(ev, (e) => { e.preventDefault(); dropzone.classList.add('ta-drag-over'); });
  });
  ['dragleave', 'drop'].forEach(ev => {
    dropzone.addEventListener(ev, (e) => { e.preventDefault(); dropzone.classList.remove('ta-drag-over'); });
  });
  dropzone.addEventListener('drop', (e) => {
    const dropped = Array.from(e.dataTransfer.files || []);
    if (!dropped.length) return;
    const excelFile = dropped.find(f => /\\.(xlsx|xls)$/i.test(f.name || ''));
    const imageFiles = dropped.filter(f => f.type && f.type.startsWith('image/'));
    if (imageFiles.length) {
      handleFiles(imageFiles);
    } else if (excelFile) {
      importFromExcel(excelFile);
    } else {
      toast('Fichier non reconnu \\u2014 dépose une image ou un fichier .xlsx', true);
    }
  });

  filterFromEl.addEventListener('change', () => {
    filterFrom = filterFromEl.value || null;
    render();
  });
  filterToEl.addEventListener('change', () => {
    filterTo = filterToEl.value || null;
    render();
  });
  filterResetEl.addEventListener('click', () => {
    filterFrom = null;
    filterTo = null;
    filterFromEl.value = '';
    filterToEl.value = '';
    render();
  });

  function exportToExcel() {
    if (typeof XLSX === 'undefined') {
      toast("La biblioth\\u00E8que d'export n'a pas pu se charger \\u2014 v\\u00E9rifie ta connexion et r\\u00E9essaie", true);
      return;
    }
    const filtered = getFilteredTickets().slice().sort((a, b) => a.date.localeCompare(b.date) || a.createdAt - b.createdAt);
    if (!filtered.length) {
      toast('Aucun ticket \\u00E0 exporter', true);
      return;
    }

    const detailRows = [];
    for (const t of filtered) {
      const prods = t.products && t.products.length ? t.products : [{ name: '(aucun article d\\u00E9tect\\u00E9)', price: 0, qty: 1, salePrice: null }];
      for (const p of prods) {
        const m = itemMargin(p);
        detailRows.push({
          'Date': t.date,
          'Magasin': t.merchant || '',
          'Produit': p.name || '',
          'Quantit\\u00E9': Number(p.qty) || 1,
          'Prix unitaire (DA)': Number(p.price) || 0,
          'Total ligne (DA)': (Number(p.price) || 0) * (Number(p.qty) || 1),
          'Prix de vente (DA)': (p.salePrice !== null && p.salePrice !== undefined && p.salePrice !== '') ? Number(p.salePrice) : '',
          'Marge (DA)': m == null ? '' : Number(m.toFixed(2))
        });
      }
    }

    const byDate = {};
    for (const t of filtered) {
      if (!byDate[t.date]) byDate[t.date] = { count: 0, total: 0, margin: 0 };
      byDate[t.date].count += 1;
      byDate[t.date].total += ticketTotal(t);
      byDate[t.date].margin += ticketMargin(t);
    }
    const summaryRows = Object.keys(byDate).sort().map(date => ({
      'Date': date,
      'Nombre de tickets': byDate[date].count,
      'Total (DA)': Number(byDate[date].total.toFixed(2)),
      'Marge (DA)': Number(byDate[date].margin.toFixed(2))
    }));
    const grandTotal = filtered.reduce((s, t) => s + ticketTotal(t), 0);
    const grandMarginExport = filtered.reduce((s, t) => s + ticketMargin(t), 0);
    summaryRows.push({ 'Date': 'TOTAL', 'Nombre de tickets': filtered.length, 'Total (DA)': Number(grandTotal.toFixed(2)), 'Marge (DA)': Number(grandMarginExport.toFixed(2)) });

    const wb = XLSX.utils.book_new();
    const wsDetail = XLSX.utils.json_to_sheet(detailRows);
    wsDetail['!cols'] = [{ wch: 12 }, { wch: 20 }, { wch: 30 }, { wch: 10 }, { wch: 14 }, { wch: 14 }, { wch: 14 }, { wch: 12 }];
    const wsSummary = XLSX.utils.json_to_sheet(summaryRows);
    wsSummary['!cols'] = [{ wch: 12 }, { wch: 16 }, { wch: 12 }, { wch: 12 }];
    XLSX.utils.book_append_sheet(wb, wsSummary, 'Totaux par jour');
    XLSX.utils.book_append_sheet(wb, wsDetail, 'D\\u00E9tail des articles');

    const suffix = (filterFrom || filterTo)
      ? \`_\${filterFrom || 'debut'}_\${filterTo || 'fin'}\`
      : '_' + new Date().toISOString().slice(0, 10);
    XLSX.writeFile(wb, \`tickets\${suffix}.xlsx\`);
    toast('Export Excel g\\u00E9n\\u00E9r\\u00E9');
  }

  exportBtn.addEventListener('click', exportToExcel);

  function excelCellToDate(v) {
    if (v instanceof Date && !isNaN(v)) {
      const y = v.getFullYear(), m = String(v.getMonth() + 1).padStart(2, '0'), d = String(v.getDate()).padStart(2, '0');
      return \`\${y}-\${m}-\${d}\`;
    }
    const s = String(v == null ? '' : v).trim();
    if (/^\\d{4}-\\d{2}-\\d{2}/.test(s)) return s.slice(0, 10);
    const m = s.match(/^(\\d{1,2})[\\/\\-](\\d{1,2})[\\/\\-](\\d{4})$/);
    if (m) return \`\${m[3]}-\${m[2].padStart(2, '0')}-\${m[1].padStart(2, '0')}\`;
    return null;
  }

  function rowVal(row, keys) {
    for (const k of keys) {
      if (row[k] !== undefined && row[k] !== '') return row[k];
    }
    return '';
  }

  function frDateShort(iso) {
    const d = new Date(iso + 'T00:00:00');
    if (isNaN(d)) return iso;
    return d.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  function parseExcelGroups(rows) {
    const groups = [];
    let current = null;
    for (const row of rows) {
      const date = excelCellToDate(rowVal(row, ['Date']));
      if (!date) continue; // ignore lignes de titre/s\\u00E9paration/total
      const merchant = String(rowVal(row, ['Magasin']) || '').trim();
      const name = String(rowVal(row, ['Produit']) || '').trim();
      const qty = Number(rowVal(row, ['Quantit\\u00E9', 'Quantite'])) || 1;
      const price = Number(rowVal(row, ['Prix unitaire (DA)', 'Prix unitaire'])) || 0;
      const saleRaw = rowVal(row, ['Prix de vente (DA)', 'Prix de vente']);
      const salePrice = (saleRaw === '' || saleRaw === undefined) ? null : Number(saleRaw);

      if (!current || current.date !== date || current.merchant !== merchant) {
        current = { date, merchant, products: [] };
        groups.push(current);
      }
      if (name && name !== '(aucun article d\\u00E9tect\\u00E9)') {
        current.products.push({ name, price, qty, salePrice });
      }
    }
    return groups;
  }

  // Aper\\u00E7u avant import : montre chaque ticket d\\u00E9tect\\u00E9, pr\\u00E9-coche tout sauf
  // les doublons probables (m\\u00EAme date + magasin + total qu'un ticket existant),
  // et laisse l'utilisateur affiner sa s\\u00E9lection avant d'\\u00E9crire quoi que ce soit.
  function showImportPreview(groups) {
    return new Promise((resolve) => {
      const keyOf = (date, merchant, total) => \`\${date}|\${(merchant || '').trim().toLowerCase()}|\${Math.round(total * 100)}\`;
      const existingKeys = new Set(tickets.map(t => keyOf(t.date, t.merchant, ticketTotal(t))));

      const rows = groups.map((g, i) => {
        const total = g.products.reduce((s, p) => s + (Number(p.price) || 0) * (Number(p.qty) || 1), 0);
        const isDup = existingKeys.has(keyOf(g.date, g.merchant, total));
        return { idx: i, date: g.date, merchant: g.merchant, products: g.products, total, isDup, include: !isDup };
      });

      const overlay = document.createElement('div');
      overlay.className = 'ta-overlay';
      root.appendChild(overlay);

      const selCount = () => rows.filter(r => r.include).length;
      const selTotal = () => rows.filter(r => r.include).reduce((s, r) => s + r.total, 0);
      const dupCount = rows.filter(r => r.isDup).length;

      function paint() {
        const rowsHtml = rows.map(r => \`
          <tr class="ta-import-row\${r.isDup ? ' ta-import-dup' : ''}">
            <td><input type="checkbox" class="ta-import-check" data-i="\${r.idx}" \${r.include ? 'checked' : ''}></td>
            <td class="ta-mono">\${frDateShort(r.date)}</td>
            <td>\${escapeHtml(r.merchant || '\\u2014')}\${r.isDup ? '<div class="ta-import-dup-tag">Doublon probable</div>' : ''}</td>
            <td class="ta-price">\${r.products.length}</td>
            <td class="ta-price">\${fmt(r.total)}</td>
          </tr>\`).join('');

        overlay.innerHTML = \`
          <div class="ta-modal ta-review-modal ta-import-modal">
            <h3>Aper\\u00E7u de l'import</h3>
            <p>\${rows.length} ticket\${rows.length > 1 ? 's' : ''} d\\u00E9tect\\u00E9\${rows.length > 1 ? 's' : ''}\${dupCount ? \` \\u2014 \${dupCount} ressemble\${dupCount > 1 ? 'nt' : ''} \\u00E0 des doublons d\\u00E9j\\u00E0 enregistr\\u00E9s et \${dupCount > 1 ? 'sont' : 'est'} d\\u00E9coch\\u00E9\${dupCount > 1 ? 's' : ''}\` : ''}. D\\u00E9coche ce que tu ne veux pas importer.</p>
            <div class="ta-import-table-wrap">
              <table class="ta-review-table ta-import-table">
                <thead><tr><th></th><th>Date</th><th>Magasin</th><th>Art.</th><th>Total</th></tr></thead>
                <tbody id="ta-import-rows">\${rowsHtml}</tbody>
              </table>
            </div>
            <div class="ta-import-summary">
              <button type="button" class="ta-import-select-all" id="ta-import-toggle-all">Tout (d\\u00E9)s\\u00E9lectionner</button>
              <span id="ta-import-total">\${selCount()} s\\u00E9lectionn\\u00E9\${selCount() !== 1 ? 's' : ''} \\u2014 \${fmt(selTotal())}</span>
            </div>
            <div class="ta-modal-row">
              <button class="ta-btn" id="ta-import-cancel">Annuler</button>
              <button class="ta-btn ta-primary" id="ta-import-confirm" \${selCount() === 0 ? 'disabled' : ''}>Importer</button>
            </div>
          </div>\`;
        wire();
      }

      function refreshSummary() {
        overlay.querySelector('#ta-import-total').textContent = \`\${selCount()} s\\u00E9lectionn\\u00E9\${selCount() !== 1 ? 's' : ''} \\u2014 \${fmt(selTotal())}\`;
        overlay.querySelector('#ta-import-confirm').disabled = selCount() === 0;
      }

      function wire() {
        overlay.querySelectorAll('.ta-import-check').forEach(cb => {
          cb.onchange = () => {
            rows[Number(cb.getAttribute('data-i'))].include = cb.checked;
            refreshSummary();
          };
        });
        overlay.querySelector('#ta-import-toggle-all').onclick = () => {
          const allSelected = selCount() === rows.length;
          rows.forEach(r => { r.include = !allSelected; });
          paint();
        };
        overlay.querySelector('#ta-import-cancel').onclick = () => { overlay.remove(); resolve(null); };
        overlay.querySelector('#ta-import-confirm').onclick = () => {
          overlay.remove();
          resolve(rows.filter(r => r.include));
        };
      }

      paint();
    });
  }

  function setImportBusy(busy) {
    importBtn.disabled = busy;
    importBtn.innerHTML = busy
      ? '<span class="ta-spinner" style="border-color:var(--ink-soft);border-top-color:transparent;"></span>Lecture du fichier...'
      : '&#128202; Importer un fichier Excel';
  }

  async function importFromExcel(file) {
    if (typeof XLSX === 'undefined') {
      toast("La biblioth\\u00E8que d'import n'a pas pu se charger \\u2014 v\\u00E9rifie ta connexion et r\\u00E9essaie", true);
      return;
    }
    if (!/\\.(xlsx|xls)$/i.test(file.name || '')) {
      toast('Merci de s\\u00E9lectionner un fichier .xlsx ou .xls', true);
      return;
    }

    setImportBusy(true);
    let groups;
    try {
      const buf = await file.arrayBuffer();
      const wb = XLSX.read(buf, { type: 'array', cellDates: true });
      const sheetName = wb.SheetNames.find(n => /d[e\\u00E9]tail/i.test(n)) || wb.SheetNames[0];
      const rows = XLSX.utils.sheet_to_json(wb.Sheets[sheetName], { defval: '' });
      if (!rows.length) {
        toast('Le fichier ne contient aucune ligne \\u00E0 importer', true);
        return;
      }
      groups = parseExcelGroups(rows);
      if (!groups.length) {
        toast('Aucune donn\\u00E9e reconnue (colonnes attendues\\u00A0: Date, Magasin, Produit, Quantit\\u00E9, Prix unitaire)', true);
        return;
      }
    } catch (err) {
      console.error('Lecture Excel \\u00E9chou\\u00E9e', err);
      toast("\\u00C9chec de la lecture \\u2014 fichier invalide ou format non reconnu", true);
      return;
    } finally {
      setImportBusy(false);
    }

    const chosen = await showImportPreview(groups);
    if (!chosen || !chosen.length) {
      if (chosen && !chosen.length) { /* rien coch\\u00E9, confirm d\\u00E9sactiv\\u00E9 normalement */ }
      return;
    }

    const base = Date.now();
    const newTickets = chosen.map((g, i) => ({
      id: 't_import_' + base + '_' + i + '_' + Math.random().toString(36).slice(2, 8),
      date: g.date,
      merchant: g.merchant || 'Ticket import\\u00E9',
      products: g.products,
      createdAt: base + i
    }));

    for (const t of newTickets) {
      await saveTicket(t);
      tickets.unshift(t);
    }
    tickets.sort((a, b) => (b.date || '').localeCompare(a.date || '') || (b.createdAt || 0) - (a.createdAt || 0));
    selectedDate = newTickets[newTickets.length - 1].date;
    render();
    const skipped = groups.length - newTickets.length;
    let msg = \`\${newTickets.length} ticket\${newTickets.length > 1 ? 's' : ''} import\\u00E9\${newTickets.length > 1 ? 's' : ''}\`;
    if (skipped) msg += \`, \${skipped} non retenu\${skipped > 1 ? 's' : ''}\`;
    toast(msg);
  }

  importBtn.addEventListener('click', () => importInput.click());
  importInput.addEventListener('change', (e) => {
    const f = e.target.files && e.target.files[0];
    if (f) importFromExcel(f);
    importInput.value = '';
  });

  // ===================== Module Caisse (admin) =====================

  function genId(prefix) {
    return prefix + '_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
  }

  async function loadCaisseData() {
    try {
      const cfg = await window.storage.get('caisse-config').catch(() => null);
      caisseConfig = cfg ? JSON.parse(cfg.value) : { pin: '1234' };
    } catch (e) { caisseConfig = { pin: '1234' }; }
    try {
      const reg = await window.storage.get('cash-registers').catch(() => null);
      registers = reg ? JSON.parse(reg.value) : {};
    } catch (e) { registers = {}; }
    try {
      const emp = await window.storage.get('employees').catch(() => null);
      employees = emp ? JSON.parse(emp.value) : [];
    } catch (e) { employees = []; }
    try {
      const pay = await window.storage.get('payroll-entries').catch(() => null);
      payrollEntries = pay ? JSON.parse(pay.value) : [];
    } catch (e) { payrollEntries = []; }
    try {
      const cred = await window.storage.get('credit-entries').catch(() => null);
      creditEntries = cred ? JSON.parse(cred.value) : [];
    } catch (e) { creditEntries = []; }
  }

  const persistCaisseConfig = () => window.storage.set('caisse-config', JSON.stringify(caisseConfig));
  const persistRegisters = () => window.storage.set('cash-registers', JSON.stringify(registers));
  const persistEmployees = () => window.storage.set('employees', JSON.stringify(employees));
  const persistPayroll = () => window.storage.set('payroll-entries', JSON.stringify(payrollEntries));
  const persistCredits = () => window.storage.set('credit-entries', JSON.stringify(creditEntries));

  // ---- Acc\\u00E8s PIN ----
  function promptAdminPin(onSuccess) {
    const overlay = document.createElement('div');
    overlay.className = 'ta-overlay ta-pin-overlay';
    overlay.innerHTML = \`
      <div class="ta-modal">
        <h3>&#128274; Acc\\u00E8s administrateur</h3>
        <p>Entre le code PIN pour acc\\u00E9der \\u00E0 la caisse, la paye et les cr\\u00E9dits.</p>
        <input type="password" inputmode="numeric" maxlength="8" class="ta-pin-input" id="ta-pin-field" autofocus />
        \${caisseConfig.pin === '1234' ? '<div class="ta-pin-hint">Code par d\\u00E9faut&nbsp;: 1234 (\\u00E0 changer dans Param\\u00E8tres)</div>' : ''}
        <div class="ta-pin-error" id="ta-pin-error"></div>
        <div class="ta-modal-row">
          <button class="ta-btn" id="ta-pin-cancel">Annuler</button>
          <button class="ta-btn ta-primary" id="ta-pin-ok">Valider</button>
        </div>
      </div>\`;
    root.appendChild(overlay);
    const field = overlay.querySelector('#ta-pin-field');
    const errEl = overlay.querySelector('#ta-pin-error');
    field.focus();
    function tryUnlock() {
      if (field.value === caisseConfig.pin) {
        overlay.remove();
        adminAuthed = true;
        onSuccess();
      } else {
        errEl.textContent = 'Code incorrect';
        field.value = '';
        field.focus();
      }
    }
    field.addEventListener('keydown', (e) => { if (e.key === 'Enter') tryUnlock(); });
    overlay.querySelector('#ta-pin-ok').onclick = tryUnlock;
    overlay.querySelector('#ta-pin-cancel').onclick = () => overlay.remove();
  }

  function switchTab(tab) {
    if (tab === 'caisse' && !adminAuthed) {
      promptAdminPin(() => { activeTab = 'caisse'; renderTabs(); });
      return;
    }
    activeTab = tab;
    renderTabs();
  }

  function renderTabs() {
    viewTicketsEl.style.display = activeTab === 'tickets' ? '' : 'none';
    viewCaisseEl.style.display = activeTab === 'caisse' ? '' : 'none';
    tabTicketsBtn.classList.toggle('ta-active', activeTab === 'tickets');
    tabCaisseBtn.classList.toggle('ta-active', activeTab === 'caisse');
    if (activeTab === 'caisse') renderCaisse();
  }

  tabTicketsBtn.addEventListener('click', () => switchTab('tickets'));
  tabCaisseBtn.addEventListener('click', () => switchTab('caisse'));

  // ---- Aggr\\u00E9gats journaliers ----
  function dayTicketsTotal(date) {
    return tickets.filter(t => t.date === date).reduce((s, t) => s + ticketTotal(t), 0);
  }
  function dayPayrollTotal(date) {
    return payrollEntries.filter(e => e.date === date).reduce((s, e) => s + (Number(e.amount) || 0), 0);
  }
  function dayCreditGivenTotal(date) {
    return creditEntries.filter(e => e.date === date && e.movement === 'credit').reduce((s, e) => s + (Number(e.amount) || 0), 0);
  }
  function dayCreditRepaidTotal(date) {
    return creditEntries.filter(e => e.date === date && e.movement === 'remboursement').reduce((s, e) => s + (Number(e.amount) || 0), 0);
  }
  function getPreviousClosingInfo(date) {
    const dates = Object.keys(registers)
      .filter(d => d < date && registers[d] && registers[d].closing != null && registers[d].closing !== '')
      .sort();
    if (!dates.length) return null;
    const d = dates[dates.length - 1];
    return { date: d, closing: Number(registers[d].closing) };
  }
  function getRegisterForDate(date) {
    const prev = getPreviousClosingInfo(date);
    let rec = registers[date];
    if (!rec) {
      rec = { date, opening: prev ? prev.closing : 0, openingManual: false, closing: null, closingNote: '' };
    } else if (!rec.openingManual && prev) {
      rec = Object.assign({}, rec, { opening: prev.closing });
    }
    return rec;
  }

  // ---- Panneau : Fond de caisse ----
  function renderRegisterPanel(content) {
    const date = caisseSelectedDate;
    const rec = getRegisterForDate(date);
    const prev = getPreviousClosingInfo(date);
    const achats = dayTicketsTotal(date);
    const paye = dayPayrollTotal(date);
    const credDonne = dayCreditGivenTotal(date);
    const credRembourse = dayCreditRepaidTotal(date);
    const expected = (Number(rec.opening) || 0) - achats - paye - credDonne + credRembourse;
    const closingSet = rec.closing != null && rec.closing !== '';
    const ecart = closingSet ? (Number(rec.closing) - expected) : null;

    content.innerHTML = \`
      <div class="ta-register-datebar">
        <button class="ta-date-nav" id="ta-reg-prev" title="Jour pr\\u00E9c\\u00E9dent">&larr;</button>
        <input type="date" id="ta-reg-date" value="\${date}" />
        <button class="ta-date-nav" id="ta-reg-next" title="Jour suivant">&rarr;</button>
        <button type="button" class="ta-today-btn" id="ta-reg-today">Aujourd'hui</button>
      </div>
      <div class="ta-register-grid">
        <div class="ta-register-card">
          <label>Fond de caisse &mdash; Ouverture (matin)</label>
          <input type="number" step="0.01" id="ta-reg-opening" value="\${rec.opening != null ? rec.opening : 0}" />
          <div class="ta-register-hint">\${
            rec.openingManual
              ? 'Valeur saisie manuellement.'
              : (prev ? \`Repris automatiquement de la fermeture du \${frDateShort(prev.date)}.\` : "Aucune fermeture pr\\u00E9c\\u00E9dente enregistr\\u00E9e \\u2014 indique le montant de d\\u00E9part.")
          }</div>
          \${rec.openingManual ? '<button type="button" class="ta-link-btn" id="ta-reg-reset-opening">Revenir \\u00E0 la reprise automatique</button>' : ''}
        </div>
        <div class="ta-register-card">
          <label>Fond de caisse &mdash; Fermeture (soir)</label>
          <input type="number" step="0.01" id="ta-reg-closing" placeholder="Non compt\\u00E9" value="\${closingSet ? rec.closing : ''}" />
          <div class="ta-register-hint">Montant r\\u00E9ellement compt\\u00E9 en fin de journ\\u00E9e.</div>
        </div>
      </div>
      <div class="ta-register-summary">
        <div class="ta-sum-row"><span>Achats (tickets) du jour</span><span>&minus;\${fmt(achats)}</span></div>
        <div class="ta-sum-row"><span>Paye vers\\u00E9e</span><span>&minus;\${fmt(paye)}</span></div>
        <div class="ta-sum-row"><span>Cr\\u00E9dits donn\\u00E9s</span><span>&minus;\${fmt(credDonne)}</span></div>
        <div class="ta-sum-row"><span>Remboursements re\\u00E7us</span><span>+\${fmt(credRembourse)}</span></div>
        <div class="ta-sum-row ta-sum-total"><span>Solde attendu en caisse</span><span>\${fmt(expected)}</span></div>
        \${closingSet ? \`<div class="ta-sum-row ta-sum-ecart \${Math.abs(ecart) < 0.01 ? 'ta-ok' : 'ta-warn'}"><span>\\u00C9cart (compt\\u00E9 &minus; attendu)</span><span>\${ecart >= 0 ? '+' : ''}\${fmt(ecart)}</span></div>\` : ''}
      </div>
      <div class="ta-register-actions">
        <button class="ta-btn ta-primary" id="ta-reg-save">Enregistrer</button>
      </div>\`;

    content.querySelector('#ta-reg-date').onchange = (e) => { caisseSelectedDate = e.target.value || date; renderCaisse(); };
    content.querySelector('#ta-reg-prev').onclick = () => { caisseSelectedDate = shiftDate(date, -1); renderCaisse(); };
    content.querySelector('#ta-reg-next').onclick = () => { caisseSelectedDate = shiftDate(date, 1); renderCaisse(); };
    content.querySelector('#ta-reg-today').onclick = () => { caisseSelectedDate = new Date().toISOString().slice(0, 10); renderCaisse(); };
    const resetBtn = content.querySelector('#ta-reg-reset-opening');
    if (resetBtn) resetBtn.onclick = async () => {
      registers[date] = Object.assign({}, getRegisterForDate(date), { openingManual: false });
      await persistRegisters();
      renderCaisse();
    };
    content.querySelector('#ta-reg-save').onclick = async () => {
      const openingInput = Number(content.querySelector('#ta-reg-opening').value) || 0;
      const closingInput = content.querySelector('#ta-reg-closing').value;
      const wasManual = rec.openingManual || openingInput !== (prev ? prev.closing : (rec.opening || 0));
      registers[date] = {
        date,
        opening: openingInput,
        openingManual: wasManual,
        closing: closingInput === '' ? null : Number(closingInput),
        closingNote: ''
      };
      await persistRegisters();
      toast('Fond de caisse enregistr\\u00E9');
      renderCaisse();
    };
  }

  function shiftDate(iso, days) {
    const d = new Date(iso + 'T00:00:00');
    d.setDate(d.getDate() + days);
    return d.toISOString().slice(0, 10);
  }

  // ---- Panneau : Paye des employ\\u00E9s ----
  function renderPayrollPanel(content) {
    const totalsByEmp = {};
    payrollEntries.forEach(e => { totalsByEmp[e.employeeId] = (totalsByEmp[e.employeeId] || 0) + (Number(e.amount) || 0); });

    const chipsHtml = employees.length ? employees.map(emp => \`
      <div class="ta-employee-chip">
        <span>\${escapeHtml(emp.name)}</span>
        <span class="ta-employee-chip-total">\${fmt(totalsByEmp[emp.id] || 0)}</span>
        <button type="button" class="ta-employee-chip-del" data-id="\${emp.id}" title="Supprimer l'employ\\u00E9">&times;</button>
      </div>\`).join('') : '<div class="ta-caisse-empty">Aucun employ\\u00E9 ajout\\u00E9 pour l\\u2019instant.</div>';

    const sortedEntries = payrollEntries.slice().sort((a, b) => (b.date || '').localeCompare(a.date || '') || 0);
    const rowsHtml = sortedEntries.map(e => \`
      <tr>
        <td class="ta-mono">\${frDateShort(e.date)}</td>
        <td>\${escapeHtml(e.employeeName)}</td>
        <td>\${escapeHtml(e.note || '')}</td>
        <td class="ta-price">\${fmt(e.amount)}</td>
        <td><button type="button" class="ta-row-del" data-id="\${e.id}" title="Supprimer">&times;</button></td>
      </tr>\`).join('');

    content.innerHTML = \`
      <div class="ta-section-title">Employ\\u00E9s</div>
      <div class="ta-caisse-form">
        <div class="ta-caisse-form-row">
          <div class="ta-caisse-form-field"><label>Nom de l'employ\\u00E9</label><input type="text" id="ta-emp-name" placeholder="Ex. Yacine" /></div>
          <div class="ta-caisse-form-field"><label>Note (optionnel)</label><input type="text" id="ta-emp-note" placeholder="Poste, t\\u00E9l\\u00E9phone..." /></div>
        </div>
        <button class="ta-btn ta-primary" id="ta-emp-add">+ Ajouter un employ\\u00E9</button>
      </div>
      <div class="ta-employee-list">\${chipsHtml}</div>

      <div class="ta-section-title">Enregistrer un paiement</div>
      <div class="ta-caisse-form">
        <div class="ta-caisse-form-row">
          <div class="ta-caisse-form-field">
            <label>Employ\\u00E9</label>
            <select id="ta-pay-emp">\${employees.length ? employees.map(e => \`<option value="\${e.id}">\${escapeHtml(e.name)}</option>\`).join('') : '<option value="">Aucun employ\\u00E9</option>'}</select>
          </div>
          <div class="ta-caisse-form-field"><label>Date</label><input type="date" id="ta-pay-date" value="\${caisseSelectedDate}" /></div>
          <div class="ta-caisse-form-field"><label>Montant (DA)</label><input type="number" step="0.01" min="0" id="ta-pay-amount" placeholder="0.00" /></div>
        </div>
        <div class="ta-caisse-form-row">
          <div class="ta-caisse-form-field"><label>Note (optionnel)</label><input type="text" id="ta-pay-note" placeholder="Salaire ao\\u00FBt, prime..." /></div>
        </div>
        <button class="ta-btn ta-primary" id="ta-pay-add" \${employees.length ? '' : 'disabled'}>Enregistrer le paiement</button>
      </div>

      <div class="ta-section-title">Historique des paiements</div>
      \${sortedEntries.length ? \`
      <table class="ta-data-table">
        <thead><tr><th>Date</th><th>Employ\\u00E9</th><th>Note</th><th>Montant</th><th></th></tr></thead>
        <tbody>\${rowsHtml}</tbody>
      </table>\` : '<div class="ta-caisse-empty">Aucun paiement enregistr\\u00E9.</div>'}\`;

    content.querySelector('#ta-emp-add').onclick = async () => {
      const nameInp = content.querySelector('#ta-emp-name');
      const noteInp = content.querySelector('#ta-emp-note');
      const name = nameInp.value.trim();
      if (!name) { toast('Indique le nom de l\\u2019employ\\u00E9', true); return; }
      employees.push({ id: genId('emp'), name, note: noteInp.value.trim() });
      await persistEmployees();
      toast('Employ\\u00E9 ajout\\u00E9');
      renderCaisse();
    };
    content.querySelectorAll('.ta-employee-chip-del').forEach(btn => {
      btn.onclick = async () => {
        const id = btn.getAttribute('data-id');
        employees = employees.filter(e => e.id !== id);
        await persistEmployees();
        renderCaisse();
      };
    });
    const payBtn = content.querySelector('#ta-pay-add');
    if (payBtn) payBtn.onclick = async () => {
      const empSel = content.querySelector('#ta-pay-emp');
      const empId = empSel.value;
      const emp = employees.find(e => e.id === empId);
      if (!emp) { toast('S\\u00E9lectionne un employ\\u00E9', true); return; }
      const amount = Number(content.querySelector('#ta-pay-amount').value);
      if (!amount || amount <= 0) { toast('Indique un montant valide', true); return; }
      const dateVal = content.querySelector('#ta-pay-date').value || caisseSelectedDate;
      const note = content.querySelector('#ta-pay-note').value.trim();
      payrollEntries.push({ id: genId('pay'), employeeId: emp.id, employeeName: emp.name, date: dateVal, amount, note });
      await persistPayroll();
      toast('Paiement enregistr\\u00E9');
      renderCaisse();
    };
    content.querySelectorAll('.ta-row-del[data-id]').forEach(btn => {
      if (!btn.closest('table')) return;
      btn.onclick = async () => {
        const id = btn.getAttribute('data-id');
        payrollEntries = payrollEntries.filter(e => e.id !== id);
        await persistPayroll();
        renderCaisse();
      };
    });
  }

  // ---- Panneau : Cr\\u00E9dits (clients & employ\\u00E9s) ----
  function creditBalance(personName, personType) {
    return creditEntries
      .filter(e => e.personName === personName && e.personType === personType)
      .reduce((s, e) => s + (e.movement === 'credit' ? Number(e.amount) : -Number(e.amount)), 0);
  }

  function renderCreditsPanel(content) {
    const personKeys = {};
    creditEntries.forEach(e => {
      const key = e.personType + '|' + e.personName;
      if (!personKeys[key]) personKeys[key] = { name: e.personName, type: e.personType };
    });
    const persons = Object.values(personKeys)
      .map(p => Object.assign({}, p, { balance: creditBalance(p.name, p.type) }))
      .sort((a, b) => b.balance - a.balance);

    const cardsHtml = persons.length ? persons.map(p => \`
      <div class="ta-balance-card">
        <div class="ta-balance-card-name">\${escapeHtml(p.name)}<span class="ta-badge-\${p.type}">\${p.type === 'client' ? 'Client' : 'Employ\\u00E9'}</span></div>
        <div class="ta-balance-card-amount \${p.balance > 0.009 ? 'ta-owed' : 'ta-settled'}">\${p.balance > 0.009 ? fmt(p.balance) + ' d\\u00FB' : 'Sold\\u00E9'}</div>
      </div>\`).join('') : '<div class="ta-caisse-empty">Aucun mouvement de cr\\u00E9dit enregistr\\u00E9.</div>';

    let history = creditEntries.slice().sort((a, b) => (b.date || '').localeCompare(a.date || ''));
    if (creditFilterPerson) history = history.filter(e => (e.personType + '|' + e.personName) === creditFilterPerson);
    const rowsHtml = history.map(e => \`
      <tr>
        <td class="ta-mono">\${frDateShort(e.date)}</td>
        <td>\${escapeHtml(e.personName)}<span class="ta-badge-\${e.personType}">\${e.personType === 'client' ? 'Client' : 'Employ\\u00E9'}</span></td>
        <td>\${e.movement === 'credit' ? 'Cr\\u00E9dit donn\\u00E9' : 'Remboursement re\\u00E7u'}</td>
        <td>\${escapeHtml(e.note || '')}</td>
        <td class="ta-price">\${e.movement === 'credit' ? '+' : '&minus;'}\${fmt(e.amount)}</td>
        <td><button type="button" class="ta-row-del" data-id="\${e.id}" title="Supprimer">&times;</button></td>
      </tr>\`).join('');

    const optionsHtml = persons.map(p => \`<option value="\${p.type}|\${escapeHtml(p.name)}" \${creditFilterPerson === (p.type + '|' + p.name) ? 'selected' : ''}>\${escapeHtml(p.name)} (\${p.type === 'client' ? 'client' : 'employ\\u00E9'})</option>\`).join('');

    content.innerHTML = \`
      <div class="ta-section-title">Nouveau mouvement</div>
      <div class="ta-caisse-form">
        <div class="ta-caisse-form-row">
          <div class="ta-caisse-form-field"><label>Nom de la personne</label><input type="text" id="ta-cred-name" placeholder="Ex. Karim, client fid\\u00E8le" /></div>
          <div class="ta-caisse-form-field">
            <label>Type</label>
            <select id="ta-cred-type"><option value="client">Client</option><option value="employe">Employ\\u00E9</option></select>
          </div>
        </div>
        <div class="ta-caisse-form-row">
          <div class="ta-caisse-form-field">
            <label>Mouvement</label>
            <select id="ta-cred-movement"><option value="credit">Cr\\u00E9dit donn\\u00E9 (il/elle doit)</option><option value="remboursement">Remboursement re\\u00E7u</option></select>
          </div>
          <div class="ta-caisse-form-field"><label>Montant (DA)</label><input type="number" step="0.01" min="0" id="ta-cred-amount" placeholder="0.00" /></div>
          <div class="ta-caisse-form-field"><label>Date</label><input type="date" id="ta-cred-date" value="\${caisseSelectedDate}" /></div>
        </div>
        <div class="ta-caisse-form-row">
          <div class="ta-caisse-form-field"><label>Note (optionnel)</label><input type="text" id="ta-cred-note" placeholder="Motif..." /></div>
        </div>
        <button class="ta-btn ta-primary" id="ta-cred-add">Enregistrer</button>
      </div>

      <div class="ta-section-title">Soldes par personne</div>
      <div class="ta-balance-cards">\${cardsHtml}</div>

      <div class="ta-section-title">Historique</div>
      \${persons.length ? \`<div class="ta-caisse-form-row"><div class="ta-caisse-form-field">
        <label>Filtrer par personne</label>
        <select id="ta-cred-filter"><option value="">Toutes les personnes</option>\${optionsHtml}</select>
      </div></div>\` : ''}
      \${history.length ? \`
      <table class="ta-data-table">
        <thead><tr><th>Date</th><th>Personne</th><th>Mouvement</th><th>Note</th><th>Montant</th><th></th></tr></thead>
        <tbody>\${rowsHtml}</tbody>
      </table>\` : '<div class="ta-caisse-empty">Aucun mouvement pour ce filtre.</div>'}\`;

    content.querySelector('#ta-cred-add').onclick = async () => {
      const name = content.querySelector('#ta-cred-name').value.trim();
      if (!name) { toast('Indique le nom de la personne', true); return; }
      const amount = Number(content.querySelector('#ta-cred-amount').value);
      if (!amount || amount <= 0) { toast('Indique un montant valide', true); return; }
      const personType = content.querySelector('#ta-cred-type').value;
      const movement = content.querySelector('#ta-cred-movement').value;
      const dateVal = content.querySelector('#ta-cred-date').value || caisseSelectedDate;
      const note = content.querySelector('#ta-cred-note').value.trim();
      creditEntries.push({ id: genId('cred'), personName: name, personType, date: dateVal, movement, amount, note });
      await persistCredits();
      toast('Mouvement enregistr\\u00E9');
      renderCaisse();
    };
    const filterSel = content.querySelector('#ta-cred-filter');
    if (filterSel) filterSel.onchange = (e) => { creditFilterPerson = e.target.value; renderCaisse(); };
    content.querySelectorAll('.ta-row-del[data-id]').forEach(btn => {
      btn.onclick = async () => {
        const id = btn.getAttribute('data-id');
        creditEntries = creditEntries.filter(e => e.id !== id);
        await persistCredits();
        renderCaisse();
      };
    });
  }

  // ---- Panneau : Param\\u00E8tres ----
  function renderSettingsPanel(content) {
    content.innerHTML = \`
      <div class="ta-section-title">Changer le code PIN administrateur</div>
      <div class="ta-caisse-form">
        <div class="ta-caisse-form-row">
          <div class="ta-caisse-form-field"><label>Nouveau code</label><input type="password" inputmode="numeric" maxlength="8" id="ta-set-pin1" /></div>
          <div class="ta-caisse-form-field"><label>Confirmer le code</label><input type="password" inputmode="numeric" maxlength="8" id="ta-set-pin2" /></div>
        </div>
        <button class="ta-btn ta-primary" id="ta-set-pin-save">Enregistrer le nouveau code</button>
        <div class="ta-settings-note">Ce code prot\\u00E8ge l'acc\\u00E8s \\u00E0 la caisse, la paye et les cr\\u00E9dits. Il est stock\\u00E9 uniquement dans cette application.</div>
      </div>\`;
    content.querySelector('#ta-set-pin-save').onclick = async () => {
      const p1 = content.querySelector('#ta-set-pin1').value;
      const p2 = content.querySelector('#ta-set-pin2').value;
      if (!p1 || p1.length < 4) { toast('Le code doit contenir au moins 4 chiffres', true); return; }
      if (p1 !== p2) { toast('Les deux codes ne correspondent pas', true); return; }
      caisseConfig.pin = p1;
      await persistCaisseConfig();
      toast('Code PIN mis \\u00E0 jour');
      content.querySelector('#ta-set-pin1').value = '';
      content.querySelector('#ta-set-pin2').value = '';
    };
  }

  function renderCaisse() {
    viewCaisseEl.innerHTML = \`
      <div class="ta-caisse-nav">
        <div class="ta-caisse-subtabs">
          <button type="button" class="ta-subtab-btn \${caisseSubTab === 'register' ? 'ta-active' : ''}" data-sub="register">&#128197; Fond de caisse</button>
          <button type="button" class="ta-subtab-btn \${caisseSubTab === 'payroll' ? 'ta-active' : ''}" data-sub="payroll">&#128101; Paye employ\\u00E9s</button>
          <button type="button" class="ta-subtab-btn \${caisseSubTab === 'credits' ? 'ta-active' : ''}" data-sub="credits">&#128179; Cr\\u00E9dits</button>
          <button type="button" class="ta-subtab-btn \${caisseSubTab === 'settings' ? 'ta-active' : ''}" data-sub="settings">&#9881;&#65039; Param\\u00E8tres</button>
        </div>
        <button type="button" class="ta-lock-btn" id="ta-lock-btn">&#128275; Verrouiller</button>
      </div>
      <div class="ta-caisse-content" id="ta-caisse-content"></div>\`;
    viewCaisseEl.querySelectorAll('.ta-subtab-btn').forEach(btn => {
      btn.onclick = () => { caisseSubTab = btn.getAttribute('data-sub'); renderCaisse(); };
    });
    viewCaisseEl.querySelector('#ta-lock-btn').onclick = () => {
      adminAuthed = false;
      activeTab = 'tickets';
      renderTabs();
      toast('Session caisse verrouill\\u00E9e');
    };
    const content = viewCaisseEl.querySelector('#ta-caisse-content');
    if (caisseSubTab === 'register') renderRegisterPanel(content);
    else if (caisseSubTab === 'payroll') renderPayrollPanel(content);
    else if (caisseSubTab === 'credits') renderCreditsPanel(content);
    else renderSettingsPanel(content);
  }

  loadCaisseData();
  loadTickets();
})();
<\/script>

</body>
</html>`;export{e as default};
