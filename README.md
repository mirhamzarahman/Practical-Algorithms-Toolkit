# 🧠 Practical Algorithms Toolkit

A collection of practical JavaScript components demonstrating how fundamental algorithms and data structures can solve real-world software problems.

![JavaScript](https://img.shields.io/badge/language-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)
![Status](https://img.shields.io/badge/status-active-success.svg?style=flat-square)

---

## 📌 Project Overview

**Practical Algorithms Toolkit** is a modular JavaScript project that transforms fundamental algorithmic concepts into reusable software components.

Instead of treating algorithms as isolated exercises, this project demonstrates how they can support practical applications involving sequence validation, resource-aware navigation, and structured data integration.

The project contains three independent modules:

1. **Sequence Validator** – Determines whether a sequence can reach its desired order under restricted adjacent-swap rules.
2. **Health-Aware Route Planner** – Calculates the minimum starting resources required to safely navigate a grid.
3. **People & Address Enrichment** – Combines person records with address information while preserving records that have no matching address.

---

## 🌍 Real-World Conceptual Scenario

Imagine building a small operational management platform. The platform needs to:

- Validate whether a workflow sequence can be corrected under specific movement restrictions.
- Plan a route through an environment containing resource losses and resource gains.
- Combine customer information with location records without losing incomplete customer entries.

These three requirements can be handled using different algorithmic techniques inside one reusable toolkit.

---

## 💡 Core Concepts

| Module | Algorithm / Data Structure | Practical Purpose |
|---|---|---|
| Sequence Validator | Greedy Invariant | Validate restricted sequence ordering |
| Route Planner | Dynamic Programming | Calculate minimum required resources |
| Data Enrichment | Hash Map / Map | Efficiently match related records |

---

## ⚙️ How the System Works

### 1. Sequence Validator

The sequence validator checks whether a sequence can be sorted using a restricted adjacent-swap operation.

The important observation is that the first element cannot be changed. Therefore, if the sequence does not begin with the smallest element, it cannot reach the fully sorted state.

**How it works:**

- Receive a sequence.
- Check its first element.
- Return `true` if it starts with the minimum value.
- Otherwise, return `false`.

### 2. Health-Aware Route Planner

The route planner works with a two-dimensional grid containing positive, negative, and zero values.

- **Positive values** represent resource gains.
- **Negative values** represent resource losses.
- **Zero** represents a neutral location.

The objective is to find the minimum initial resource level needed to reach the destination.

The algorithm uses bottom-up dynamic programming and works backward from the destination.

### 3. People & Address Enrichment

The data enrichment module combines two collections:

- A collection of people.
- A collection of addresses.

A JavaScript `Map` stores addresses using their corresponding person IDs.

The system then processes every person and attaches matching address information. If an address does not exist, the missing fields are returned as `null`.

This preserves all original person records, similar to a SQL `LEFT JOIN`.

---

## 🧮 Algorithms and Data Structures

### Greedy Invariant

The sequence validator uses an invariant: the first position is immutable.

This allows the system to determine whether sorting is possible without simulating every operation.

### Dynamic Programming

The route planner uses a two-dimensional DP table.

For each cell, `dp[row][column]` represents the minimum health required upon entering that cell to reach the destination safely.

**Recurrence:**

```text
minimumNextHealth = min(
    dp[row + 1][column],
    dp[row][column + 1]
)

dp[row][column] = max(
    1,
    minimumNextHealth - currentCellValue
)
