/**
 * Calculates the minimum initial health required
 * to travel from the top-left to bottom-right cell.
 *
 * Movement is restricted to right and down.
 *
 * @param {number[][]} grid
 * @returns {number}
 */
export function calculateMinimumHealth(grid) {
    if (
        !Array.isArray(grid) ||
        grid.length === 0 ||
        !Array.isArray(grid[0]) ||
        grid[0].length === 0 ||
        grid.some(row => !Array.isArray(row) ||
            row.length !== grid[0].length)
    ) {
        throw new Error("A non-empty rectangular grid is required.");
    }

    const rows = grid.length;
    const columns = grid[0].length;

    const dp = Array.from(
        { length: rows + 1 },
        () => Array(columns + 1).fill(Infinity)
    );

    // Virtual destination boundaries.
    dp[rows][columns - 1] = 1;
    dp[rows - 1][columns] = 1;

    // Process the grid backward.
    for (let row = rows - 1; row >= 0; row--) {
        for (let column = columns - 1; column >= 0; column--) {

            const nextHealth = Math.min(
                dp[row + 1][column],
                dp[row][column + 1]
            );

            dp[row][column] = Math.max(
                1,
                nextHealth - grid[row][column]
            );
        }
    }

    return dp[0][0];
}
