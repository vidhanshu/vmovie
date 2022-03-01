#include <bits/stdc++.h>
#define rep(n) for (int i = 0; i < n; i++)
#define input_ar(ar, n) rep(n) cin >> ar[i]
#define output_ar(ar, n) rep(n) cout << ar[i] << " "
#define ll long long int
#define st static int
#define vpi vector<pair<int, int>>
#define vpis vector<pair<int, string>>
#define vpsi vector<pair<string, int>>
#define umi unordered_map<int, int>
#define umis unordered_map<int, string>
#define umsi unordered_map<string, int>

using namespace std;

int main()
{
    // your code goes here
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    ll t;
    cin >> t;
    while (t--)
    {
        int n;
        cin >> n;
        if (n > 1)
        {
            int ar[n];
            input_ar(ar, n);
            sort(ar, ar + n, [&](int a, int b)
                 { return b < a; });
            int ans = 0;
            for (int i = 0; i < n - 1; i++)
            {
                int &curr = ar[i];
                int &nex = ar[i + 1];
                if (curr < 0)
                {
                    nex = nex + curr;
                    if (i + 1 == n - 1)
                    {
                        if (nex > 0)
                        {
                            ans += nex;
                        }
                    }
                }
                else
                {
                    ans += curr;
                    nex = nex - curr;
                    curr = 0;
                }
            }
            cout << ans << "\n";
        }
        else
        {
            int a;
            cin >> a;
            cout << a << "\n";
        }
    }
    return 0;
}
