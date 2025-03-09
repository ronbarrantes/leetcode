import { test } from '../utils/basicUtils.js';

// Recursion without memoization (Rec_NoMemo)
function coinChange_Rec_NoMemo(coins, target) {
  function helper(remaining) {
    if (remaining === 0) return 0;
    if (remaining < 0) return Infinity;

    let minCoins = Infinity;
    for (let coin of coins) {
      minCoins = Math.min(minCoins, 1 + helper(remaining - coin));
    }

    return minCoins;
  }

  let result = helper(target);
  return result === Infinity ? -1 : result;
}

// Top-Down DP with memoization (TD_Memo)
function coinChange_TD_Memo(coins, target) {
  const memo = new Map();

  function helper(remaining) {
    if (remaining === 0) return 0;
    if (remaining < 0) return Infinity;
    if (memo.has(remaining)) return memo.get(remaining);

    let minCoins = Infinity;
    for (let coin of coins) {
      minCoins = Math.min(minCoins, 1 + helper(remaining - coin));
    }

    memo.set(remaining, minCoins);
    return minCoins;
  }

  let result = helper(target);
  return result === Infinity ? -1 : result;
}

// Bottom-Up DP with 1D array (BU_Tabulation)
function coinChange_BU_Tabulation(coins, target) {
  const dp = new Array(target + 1).fill(Infinity);
  dp[0] = 0;

  for (let amount = 1; amount <= target; amount++) {
    for (let coin of coins) {
      if (amount - coin >= 0) {
        dp[amount] = Math.min(dp[amount], 1 + dp[amount - coin]);
      }
    }
  }

  return dp[target] === Infinity ? -1 : dp[target];
}

// 2D DP Matrix (BU_2D_Tabulation)
function coinChange_BU_2D_Tabulation(coins, target) {
  const n = coins.length;
  const dp = Array.from({ length: n + 1 }, () =>
    Array(target + 1).fill(Infinity)
  );

  for (let i = 0; i <= n; i++) dp[i][0] = 0; // Base case

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= target; j++) {
      if (j >= coins[i - 1]) {
        dp[i][j] = Math.min(dp[i - 1][j], 1 + dp[i][j - coins[i - 1]]);
      } else {
        dp[i][j] = dp[i - 1][j]; // Can't use the coin
      }
    }
  }

  return dp[n][target] === Infinity ? -1 : dp[n][target];
}

const coins = [1, 2, 5];
const target = 11;
const output = 3; // (5 + 5 + 1)

const fns = [
  coinChange_Rec_NoMemo,
  coinChange_TD_Memo,
  coinChange_BU_Tabulation,
  coinChange_BU_2D_Tabulation,
];

fns.forEach((fn) => {
  test(fn(coins, target), output);
});
