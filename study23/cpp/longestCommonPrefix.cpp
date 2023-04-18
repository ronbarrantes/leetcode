#include <iostream>
using namespace std;

class Solution
{
  void getLongestOther(string currString, string *currLongest)
  {
    for (int i = 0; i < (*currLongest).length(); i++)
    {
      if (currString[i] != (*currLongest)[i])
        (*currLongest).substr(0, i);
      break;
    }
  }

  string getLongest(string currString, string currLongest)
  {
    for (int i = 0; i < currLongest.length(); i++)
    {
      if (currString[i] != currLongest[i])
        return currLongest.substr(0, i);
    }

    return currLongest;
  }

public:
  string longestCommonPrefix(vector<string> &strs)
  {
    sort(strs.begin(), strs.end());
    string result = strs[0];
    string currLongest = strs[0];

    string *p_currLongest = &currLongest;

    if (result.length() == 0)
      return result;

    int length = strs.size();

    for (int i = 0; i < length; i++)
    {
      // currLongest = getLongest(strs[i], currLongest);

      getLongestOther(strs[i], p_currLongest);
    }

    result = currLongest;

    return result;
  }
};