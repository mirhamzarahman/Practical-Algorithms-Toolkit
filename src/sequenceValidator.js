/**
 * Determines whether a permutation can be sorted
 * using the restricted adjacent-swap operation.
 *
 * The first position cannot be modified.
 *
 * @param {number[]} sequence
 * @returns {boolean}
 */
export function canReachSortedOrder(sequence) {
    if (!Array.isArray(sequence) || sequence.length === 0) {
        throw new Error("A non-empty sequence is required.");
    }

    return sequence[0] === Math.min(...sequence);
}
