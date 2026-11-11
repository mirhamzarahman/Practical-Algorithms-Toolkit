import { canReachSortedOrder } from "../src/sequenceValidator.js";

import { calculateMinimumHealth } from "../src/routePlanner.js";

import { enrichPeopleWithAddresses } from "../src/dataEnrichment.js";

// MODULE 1: Sequence validation
const sequence = [1, 3, 2, 5, 4];

console.log(
    "Sequence can be sorted:",
    canReachSortedOrder(sequence)
);

// MODULE 2: Resource-aware route planning
const dungeon = [
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5]
];

console.log(
    "Minimum starting health:",
    calculateMinimumHealth(dungeon)
);

// MODULE 3: People and address enrichment
const people = [
    { personId: 1, firstName: "Allen", lastName: "Wang" },
    { personId: 2, firstName: "Bob", lastName: "Alice" }
];

const addresses = [
    {
        addressId: 1,
        personId: 2,
        city: "New York City",
        state: "New York"
    }
];

console.log(
    "Enriched records:",
    enrichPeopleWithAddresses(people, addresses)
);
