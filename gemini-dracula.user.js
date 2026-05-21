// ==UserScript==
// @name         Gemini Dracula Dark
// @namespace    https://github.com/flowingx/gemini-dracula-dark
// @version      1.0.0
// @description  Dracula-inspired dark theme for Google Gemini. CSS-only styling that activates only when the browser prefers dark mode.
// @author       flowingx
// @match        https://gemini.google.com/*
// @run-at       document-start
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
  'use strict';

  const STYLE_ID = 'gemini-dracula-dark-style';
  const QUERY = '(prefers-color-scheme: dark)';
  const CSS = String.raw`
/*
 * Gemini Dracula Dark - safe build
 * CSS-only. No JavaScript and no drag/drop/paste/click/input handlers.
 *
 * Important: the Gemini top bar is intentionally not targeted here. The goal is
 * to let Gemini's own CSS own the model picker, new-chat button, more button,
 * and account/header area.
 */

@media (prefers-color-scheme: dark) {
  :root {
    --gd-bg: #1f2029;
    --gd-bg-deep: #181922;
    --gd-bg-panel: #242631;
    --gd-bg-panel-strong: #2b2d3a;
    --gd-text: #f8f8f2;
    --gd-text-muted: #c7c9d9;
    --gd-text-soft: #a9aec5;
    --gd-border: #44475a;
    --gd-red: #ff5555;
    --gd-pink: #ff79c6;
    --gd-purple: #bd93f9;
    --gd-cyan: #8be9fd;
    --gd-green: #50fa7b;
    --gd-yellow: #f1fa8c;
    --gd-shadow: 0 18px 48px rgba(0, 0, 0, 0.36);
    --gd-glow-red: 0 0 22px rgba(255, 85, 85, 0.25);
    --gd-glow-purple: 0 0 24px rgba(189, 147, 249, 0.22);
  }

  html,
  body {
    color-scheme: dark !important;
    margin: 0 !important;
    padding: 0 !important;
    min-height: 100% !important;
    background:
      radial-gradient(circle at 12% 0%, rgba(189, 147, 249, 0.16), transparent 30rem),
      radial-gradient(circle at 100% 8%, rgba(139, 233, 253, 0.1), transparent 24rem),
      linear-gradient(135deg, rgba(255, 85, 85, 0.05) 0 1px, transparent 1px 18px),
      var(--gd-bg) !important;
    color: var(--gd-text) !important;
  }

  body > chat-app,
  body > #app-root,
  #app-root,
  chat-app {
    background: transparent !important;
    color: var(--gd-text) !important;
  }

  .theme-host,
  .dark-theme,
  .light-theme,
  .zero-state-theme,
  .mat-drawer-container,
  .mat-sidenav-container,
  .mat-mdc-drawer-container,
  .app-container,
  .chat-container,
  .main-content,
  .conversation-container,
  .conversation,
  .conversation-turn,
  .conversation-turn-container,
  .content-container,
  .scroll-container,
  .bard-sidenav-container {
    background-color: transparent !important;
    color: var(--gd-text) !important;
  }

  .side-nav,
  .sidenav,
  .bard-sidenav,
  .mat-drawer,
  .mat-sidenav,
  .mat-mdc-drawer {
    background:
      linear-gradient(180deg, rgba(189, 147, 249, 0.08), transparent 18rem),
      rgba(24, 25, 34, 0.98) !important;
    border-right: 1px solid rgba(68, 71, 90, 0.72) !important;
    color: var(--gd-text) !important;
  }

  .initial-input-area-container,
  .input-area,
  .input-area-container,
  .text-input-field,
  .text-input-field-container,
  .query-input,
  .prompt-input,
  .composer,
  .composer-container,
  .rich-textarea,
  .ql-editor,
  textarea,
  input,
  [contenteditable="true"] {
    background-color: rgba(36, 38, 49, 0.94) !important;
    color: var(--gd-text) !important;
    border-color: rgba(255, 85, 85, 0.35) !important;
    caret-color: var(--gd-red) !important;
  }

  .initial-input-area {
    background: transparent !important;
    pointer-events: none !important;
  }

  .initial-input-area-container {
    pointer-events: auto !important;
  }

  .initial-input-area-container,
  .input-area-container,
  .text-input-field,
  .text-input-field-container,
  .composer,
  .composer-container {
    border: 1px solid rgba(255, 85, 85, 0.34) !important;
    border-radius: 22px !important;
    box-shadow:
      var(--gd-shadow),
      inset 0 1px 0 rgba(255, 255, 255, 0.04),
      var(--gd-glow-red) !important;
  }

  .initial-input-area textarea,
  textarea,
  input,
  [contenteditable="true"],
  .ql-editor {
    outline: none !important;
    box-shadow: none !important;
  }

  .initial-input-area-container:focus-within,
  .input-area-container:focus-within,
  .text-input-field:focus-within,
  .text-input-field-container:focus-within,
  .composer:focus-within,
  .composer-container:focus-within {
    border-color: rgba(189, 147, 249, 0.82) !important;
    box-shadow:
      var(--gd-shadow),
      0 0 0 1px rgba(189, 147, 249, 0.36),
      var(--gd-glow-purple) !important;
  }

  ::placeholder {
    color: rgba(248, 248, 242, 0.56) !important;
  }

  .send-icon {
    color: var(--gd-green) !important;
  }

  .speech-icon {
    color: var(--gd-cyan) !important;
  }

  .upload-icon {
    color: var(--gd-pink) !important;
  }

  .markdown a,
  .markdown-content a,
  .model-response a,
  .response-content a,
  .link,
  .citation,
  .source-link {
    color: var(--gd-cyan) !important;
  }

  .markdown a:hover,
  .markdown-content a:hover,
  .model-response a:hover,
  .response-content a:hover,
  .link:hover,
  .citation:hover,
  .source-link:hover {
    color: var(--gd-yellow) !important;
    text-decoration-color: rgba(241, 250, 140, 0.8) !important;
  }

  .markdown h1,
  .markdown h2,
  .markdown h3,
  .markdown h4,
  .markdown h5,
  .markdown h6,
  .markdown-content h1,
  .markdown-content h2,
  .markdown-content h3,
  .markdown-content h4,
  .markdown-content h5,
  .markdown-content h6,
  .model-response h1,
  .model-response h2,
  .model-response h3,
  .model-response h4,
  .model-response h5,
  .model-response h6,
  .response-content h1,
  .response-content h2,
  .response-content h3,
  .response-content h4,
  .response-content h5,
  .response-content h6 {
    color: var(--gd-text) !important;
    text-shadow: 0 0 10px rgba(255, 85, 85, 0.18) !important;
  }

  .secondary-text,
  .subtitle,
  .description,
  .placeholder,
  .metadata,
  .timestamp,
  .mat-mdc-card-subtitle,
  .mat-mdc-form-field-hint,
  .hint,
  .disclaimer {
    color: var(--gd-text-soft) !important;
  }

  .user-query,
  .query-text,
  .user-query-container,
  .user-message,
  .message.user,
  .human-message {
    color: var(--gd-text) !important;
  }

  .user-query,
  .user-query-container,
  .user-message,
  .message.user,
  .user-query .query-text,
  .user-query-container .query-text,
  .user-message .query-text,
  .message.user .query-text,
  .user-query .user-query-container,
  .user-query-container .user-query,
  .user-message .user-query,
  .message.user .user-query,
  .message.user .user-query-container {
    background: transparent !important;
    border-color: transparent !important;
    box-shadow: none !important;
  }

  .model-response,
  .model-response-text,
  .response-container,
  .response-content,
  .markdown,
  .markdown-content,
  .rich-text,
  .message.model,
  .assistant-message {
    color: var(--gd-text) !important;
  }

  .model-response,
  .response-container,
  .message.model,
  .assistant-message {
    background-color: rgba(31, 32, 41, 0.58) !important;
    border-color: rgba(68, 71, 90, 0.46) !important;
  }

  .mat-mdc-card,
  .card,
  .tile,
  .suggestion,
  .suggestion-card,
  .prompt-card,
  .example-card,
  .result-card,
  .attachment,
  .file-chip,
  .image-card,
  .media-card,
  .source-card,
  .code-block,
  pre,
  code,
  table {
    background-color: rgba(36, 38, 49, 0.92) !important;
    color: var(--gd-text) !important;
    border-color: rgba(68, 71, 90, 0.72) !important;
  }

  .mat-mdc-card,
  .card,
  .tile,
  .suggestion-card,
  .prompt-card,
  .result-card,
  .source-card {
    border: 1px solid rgba(68, 71, 90, 0.68) !important;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.24) !important;
  }

  .suggestion-card:hover,
  .prompt-card:hover,
  .result-card:hover,
  .source-card:hover {
    border-color: rgba(139, 233, 253, 0.42) !important;
    box-shadow:
      0 14px 34px rgba(0, 0, 0, 0.3),
      0 0 18px rgba(139, 233, 253, 0.14) !important;
  }

  pre,
  code,
  .code-block {
    font-family: "Cascadia Code", "JetBrains Mono", "SFMono-Regular", Consolas, monospace !important;
  }

  pre {
    border: 1px solid rgba(68, 71, 90, 0.8) !important;
    box-shadow: inset 3px 0 0 rgba(255, 85, 85, 0.85) !important;
  }

  code {
    color: var(--gd-yellow) !important;
  }

  .token.keyword,
  .hljs-keyword,
  .cm-keyword {
    color: var(--gd-pink) !important;
  }

  .token.string,
  .hljs-string,
  .cm-string {
    color: var(--gd-yellow) !important;
  }

  .token.function,
  .hljs-title,
  .cm-def {
    color: var(--gd-green) !important;
  }

  .token.comment,
  .hljs-comment,
  .cm-comment {
    color: #6272a4 !important;
  }

  .token.number,
  .hljs-number,
  .cm-number {
    color: var(--gd-purple) !important;
  }

  blockquote {
    background: rgba(36, 38, 49, 0.78) !important;
    border-left: 4px solid var(--gd-purple) !important;
    color: var(--gd-text-muted) !important;
    margin-left: 0 !important;
    padding: 0.75rem 1rem 0.75rem 1.15rem !important;
  }

  .markdown blockquote,
  .markdown-content blockquote,
  .model-response blockquote,
  .response-content blockquote,
  .quote,
  .blockquote,
  .quoted-text,
  .markdown [style*="border-left"],
  .markdown-content [style*="border-left"],
  .model-response [style*="border-left"],
  .response-content [style*="border-left"] {
    padding-left: 1.15rem !important;
  }

  blockquote > :first-child {
    margin-top: 0 !important;
  }

  blockquote > :last-child {
    margin-bottom: 0 !important;
  }

  hr,
  mat-divider,
  .mat-divider,
  .divider,
  .separator {
    border-color: rgba(68, 71, 90, 0.76) !important;
  }

  table,
  th,
  td {
    border-color: rgba(68, 71, 90, 0.82) !important;
  }

  th {
    background-color: rgba(189, 147, 249, 0.14) !important;
    color: var(--gd-text) !important;
  }

  tr:nth-child(even) td {
    background-color: rgba(68, 71, 90, 0.2) !important;
  }

  .mat-mdc-progress-spinner circle,
  .mat-progress-spinner circle {
    stroke: var(--gd-red) !important;
  }

  .mat-mdc-progress-bar,
  .progress,
  .loading {
    --mdc-linear-progress-active-indicator-color: var(--gd-red);
    --mdc-linear-progress-track-color: rgba(68, 71, 90, 0.72);
  }

  .mdc-switch,
  .mat-mdc-slide-toggle,
  .mat-mdc-checkbox,
  .mat-mdc-radio-button {
    --mdc-switch-selected-handle-color: var(--gd-red);
    --mdc-switch-selected-track-color: rgba(255, 85, 85, 0.36);
    --mdc-checkbox-selected-checkmark-color: #1f2029;
    --mdc-checkbox-selected-icon-color: var(--gd-green);
    --mdc-radio-selected-icon-color: var(--gd-purple);
  }

  .mat-mdc-form-field,
  .mat-mdc-text-field-wrapper,
  .mdc-text-field,
  select {
    background-color: rgba(36, 38, 49, 0.9) !important;
    color: var(--gd-text) !important;
  }

  .mat-mdc-form-field-outline,
  .mdc-notched-outline,
  .mdc-notched-outline__leading,
  .mdc-notched-outline__notch,
  .mdc-notched-outline__trailing {
    border-color: rgba(68, 71, 90, 0.84) !important;
  }

  .mat-mdc-tooltip,
  .tooltip {
    background-color: #11121a !important;
    color: var(--gd-text) !important;
    border: 1px solid rgba(189, 147, 249, 0.4) !important;
  }

  ::selection {
    background: rgba(255, 85, 85, 0.36) !important;
    color: #ffffff !important;
  }

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(24, 25, 34, 0.96);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, var(--gd-red), var(--gd-purple));
    border: 3px solid rgba(24, 25, 34, 0.96);
    border-radius: 999px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, var(--gd-pink), var(--gd-cyan));
  }

}

`;

  function enable() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = CSS;
    (document.head || document.documentElement).appendChild(style);
  }

  function disable() {
    document.getElementById(STYLE_ID)?.remove();
  }

  function syncTheme(event) {
    if ((event && event.matches) || (!event && window.matchMedia(QUERY).matches)) {
      enable();
    } else {
      disable();
    }
  }

  const media = window.matchMedia(QUERY);
  syncTheme(media);
  media.addEventListener?.('change', syncTheme);
})();
