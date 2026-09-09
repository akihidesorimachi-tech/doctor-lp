# Working rules for this repository

## Scope discipline

- Only change what was explicitly requested. Do not "improve," restyle, or refactor
  anything nearby unless asked.
- Before editing a component, check whether it is shared/reused elsewhere (e.g. via
  Grep for its name or a distinctive prop). If a change would affect more than the
  one place the user is looking at, **stop and tell them the full list of places
  affected before making the change**. Do not assume they want all instances changed.
- If a request is vague or open to interpretation (e.g. "make it look more like a
  button," "improve the design"), do not guess silently. State the specific plan
  (which file/lines, what will visually change) before editing, or ask.
- If, while working, you believe something outside the explicitly requested scope
  needs to change too (e.g. a related file, a shared component, a knock-on effect),
  do not change it silently. Stop and ask first, explaining why you think it's
  needed — then proceed only after the user confirms.

## Design/style changes specifically

- For visual/design changes (as opposed to precise, literal text swaps), summarize
  the intended change in plain language before committing, so the user can catch a
  misunderstanding before it's pushed and deployed.
- Reuse the site's existing, already-approved patterns (colors, shadows, button
  styles) instead of inventing new ones. Search the codebase for a similar existing
  element first (e.g. `grep -rn "boxShadow" client/src`) and match it, rather than
  designing from scratch.
- Exception — no pre-approval needed: readability polish that stays within the
  scope of a change already being made, and uses only patterns already used
  elsewhere on the site (e.g. color-coding text with colors already present in the
  codebase, choosing a natural line-break point, adjusting line-height/spacing for
  legibility). Treat this as part of implementing the change, same as the mobile
  viewport check below — just do it, don't ask first.
  Still summarize/ask first for anything bigger: a genuinely new color/pattern not
  yet used on the site, a layout change, or anything extending beyond the specific
  text/element the user pointed at.

## Implementation quality checks (applies within the requested scope)

- Colors: pick from the site's existing, already-approved patterns (same rule as
  above).
- Before styling, determine whether the page/component being changed is mobile-
  facing (e.g. LP pages, containers around `maxWidth: 480px`, mobile-only
  components) versus not (e.g. admin/desktop-only screens).
- For mobile-facing changes, check readability and layout at a ~375px viewport
  (line wrapping, tap-target size, font legibility) as part of implementing the
  change, before presenting it — don't wait to be asked.

## Git workflow

- One logical change per commit. Keep commits small and easy to revert individually
  — this repo has needed clean single-commit reverts before (`git revert <sha>`) and
  that must stay possible.
- Always run `pnpm run check`, `pnpm run build`, and `pnpm test` before committing.
- Push after every commit unless told otherwise, so Railway's auto-deploy stays in
  sync with what's discussed in chat.

## Project context

- Hosting: Railway (auto-deploys from the `claude/new-session-egsx6j` branch).
  No Manus dependency remains in the app itself (no login/DB requirement).
- Domain: `doctor.logicalfp.pro`, DNS managed via Manus's panel (backed by Global
  Domain Group). DNS changes there can be slow/flaky to verify — confirm with actual
  DNS queries, not just the panel's UI state, when troubleshooting.
- Images live in `client/public/images/` and are referenced as `/images/<file>`.
