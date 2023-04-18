#include <iostream>
using namespace std;

#define LOG(x) std::cout << ">> " << x << std::endl;

unordered_map<char, int> romanTable = {
    {'I', 1},
    {'V', 5},
    {'X', 10},
    {'L', 50},
    {'C', 100},
    {'D', 500},
    {'M', 1000},
};

class Solution {
public:
  int romanToInt(string s) {
    int size = s.size();
    int result = 0;
    int *pResult = &result;

    int i = 0;

    for (; i < size; i++) {
      if (romanTable[s[i]] < romanTable[s[i + 1]]) {
        result -= romanTable[s[i]];
        i++;
      }

      result += romanTable[s[i]];
    }

    return result;
  }
};

int main() {
  Solution s;
  LOG(s.romanToInt("MIV"));
  std::cout << s.romanToInt("III") << std::endl;
  std::cout << s.romanToInt("IV") << std::endl;
  std::cout << s.romanToInt("IX") << std::endl;
  std::cout << s.romanToInt("LVIII") << std::endl;
  std::cout << s.romanToInt("MCMXCIV") << std::endl;
  return 0;
}