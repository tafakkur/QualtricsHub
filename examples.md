# Some Gif Demos

## External Website Load Error:

1. The page had three questions:
   1. Text: Shows text asking the respondents to wait for the website to load.
   2. Text: HTML iframe to create a box within which to show the website.
   3. Single Choice: Asks them what to when it fails.
2. This is the flow:
   1. Hide Q2 and Q3 on the page. Just show text asking people to wait.
   2. After a pre-defined time, hide Q1.
   3. Wait just a short while \(around 500 ms\) and show Q2 and Q3. This ensures that the error message replaces the text and it doesn't have to move up.
   4. Below the error \(Q2\), Q3 is displayed, which asks them to choose.
   5. If they choose option 1 \(which ideally they shouldn't in this case\). The next button shows up, and the question text is changed.
   6. If they choose option 2, the question text changes, giving them an option to re-consider.
   7. If they choose option 3, they are automatically redirected to the next page.

![](../../images/external-website-error.gif)

