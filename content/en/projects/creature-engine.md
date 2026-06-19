+++
title = "creature-engine"
description = "A homemade artificial-life engine (Rust) that moves creatures through procedural motion and learning."
weight = 1
[extra]
lang = "en"
status = "In progress"
+++

A homemade artificial-life engine, aimed at motion that rises out of physics rather than hand-drawn animation. Written in Rust.

The design splits a pure simulation core (sim) from the shell that drives it (app). A body is assembled from a gene-like definition (a BodyPlan of skeleton and muscles), the muscles act as springs, a CPG rhythm generator makes it walk, and an evolution strategy lets it learn how to move.

The aim is not to hand-craft one creature at a time, but to provide only the principles — body, physics, learning — and let the creature learn to move on its own. Then it can extend to fish or birds without a rewrite.
