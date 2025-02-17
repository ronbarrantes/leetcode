const longestConsecutive = (nums) => {
  if (nums.length === 0) return 0;

  const parent = new Map();
  const size = new Map();

  // Initialize each number as its own parent (disjoint set)
  [...new Set(nums)].forEach((num) => {
    parent.set(num, num);
    size.set(num, 1);
  });

  const find = (x) => {
    if (parent.get(x) !== x) {
      parent.set(x, find(parent.get(x))); // Path compression
    }
    return parent.get(x);
  };

  const union = (x, y) => {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX === rootY) return;

    // Union by size
    if (size.get(rootX) < size.get(rootY)) {
      parent.set(rootX, rootY);
      size.set(rootY, size.get(rootY) + size.get(rootX));
    } else {
      parent.set(rootY, rootX);
      size.set(rootX, size.get(rootX) + size.get(rootY));
    }
  };

  const uniqueNums = [...new Set(nums)];

  uniqueNums.forEach((num) => {
    if (parent.has(num + 1)) {
      union(num, num + 1);
    }
  });

  return Math.max(...size.values());
};

// Example usage
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4 (sequence: 1, 2, 3, 4)
