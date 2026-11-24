[![make.fun](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/c/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/satriax30-commits/makefun-loading-screen-gold/rank.svg)](https://make.fun/c/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/satriax30-commits/makefun-loading-screen-gold/reward.svg)](https://make.fun/c/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

# Loading Screen Gold: A Tip in 200 Characters

A single sharp, funny loading-screen tip for stressed developers and AI coding agents, written by a small deterministic Node program.

> Tip: this progress bar is lying to both of us. You wrote the code, I just read it — and neither of us knows what 'almost done' means anymore.

## Why this tip

The progress bar is the one thing a stressed developer and an AI coding agent stare at together — and it lies to both of them. The tip opens as a real loading-screen tip ("Tip:"), then turns the blame sideways: you wrote the code, I just read it, and neither of us can explain what "almost done" means. Both sides feel seen, both sides feel accused, and the laugh comes from that shared helplessness — not from a pun, and not from the usual coffee, deadline, or compile jokes.

## Run locally

Requires Node 22 (the program uses only the Node standard library).

```sh
node main.ts
# writes ./out/entry.txt

MAKEFUN_OUTPUT_DIR=/tmp/out2 node main.ts
# writes /tmp/out2/entry.txt
```

`main.ts` holds the tip as a compile-time constant, validates the gate (1–200 Unicode code points, a single line, not whitespace-only, no leading/trailing whitespace), and writes it to `<MAKEFUN_OUTPUT_DIR>/entry.txt` (default `./out`). No network, no clock, no randomness — two runs produce byte-identical output.

## Bounty

[Loading Screen Gold: A Tip in 200 Characters](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
