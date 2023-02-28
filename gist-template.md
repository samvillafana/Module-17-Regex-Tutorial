# Title (REGULAR EXPRESSIONS) PART 1

Computer Science for JavaScript Challenge: Regex Tutorial

Regular expressions can be used to find certain patterns of characters within a string. 
You can also find and replace a character or sequence of characters within a string. 
They are also frequently used to validate input. 
This regex matches character information for valid e-mail addresses.
Summary

This is the regex code that we will be anaylizing today is: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ it can be used to match an Email.
Table of Contents

    Anchors
    Quantifiers
    OR Operator
    Character Classes
    Flags
    Grouping and Capturing
    Bracket Expressions
    Greedy and Lazy Match
    Boundaries
    Back-references
    Look-ahead and Look-behind

Regex Components
Anchors

The anchors used to contain this regular expression are: ^ to start, and $ to finish.
Quantifiers

in the expression, we used + to say there are more sequences to be matched as a greedy quantifiers. We also used {2,6} as another greedy quantifer to specify the input should be a minimum of 2 characrtors to a maximum of 6 characters.
OR Operator

There are no OR operators but you can use "|" operator in between two different regex expressions in php for a selection of any one of them.
Character Classes

The character class /d is used which in Javasctipt classifies the use of any digit from 0 to 9. This isnt included but another very common character class is the Word character: \w which selects anything from A-Z, a-z, and 0-9.
Flags

This example includes no Flags but a Flag can be identified as one of these 6 letters i, g, m, s, u, and y. Each one has a different use and meaning.
Grouping and Capturing

There are three groups being captured in this example. Group #1 is the username of the e-mail account [a-z0-9_\.-]. The second group captures the domain name or e-mail service being used [\da-z\.-]. Lastly, the third group captures the domain extention (i.e .com or .net) [a-z\.]{2,6}
Bracket Expressions

Bracket Expression #1: [a-z0-9_\.-] this includes case sensitive characters from a-z, numbers from 0-9 an underscore, periods and hyphens. Bracket Expression #2: [\da-z\.-] this includes all digits, case sensitive characters from a-z, periods and hyphens Bracket Expression #3: [a-z\.] this includes case sensitive characters from a-z and periods.
Greedy and Lazy Match

In this example we have only used greedy quantifiers + and {}, meaning that it will allow the match to expand as long as it neess to go. If these quantifiers were lazy quantifiers, they would appear as +? or {}?, this will direct the system to make the shortest match.
Boundaries

A word boundary, in most regex dialects, is a position between \w and \W (non-word char), or at the beginning or end of a string if it begins or ends (respectively) with a word character ( [0-9A-Za-z_] ). To pass the 'boundary' test, there must be a word character on one side, and a non-word character on the other side. It does not matter which side each character appears on, but there must be one of each.
Back-references

back-references are regular expression commands which refer to a previous part of the matched regular expression. Back-references are specified with backslash and a single digit (e.g. ' \1 '). The part of the regular expression they refer to is called a subexpression, and is designated with parentheses.
Look-ahead and Look-behind

This expression doesn't include an example but they are zero-length assertions. Lookahead and lookbehind are reffered to as lookaround. The syntax is: X(?=Y), it means "look for X, but match only if followed by Y. There may be any pattern instead of X and Y. Lookbehind is similar, but it looks behind. That is, it allows to match a pattern only if there’s something before it. (?<=Y)X, matches X, but only if there’s Y before it.
Author


This regular expression is used to match and validate email addresses. 


Author may name is Sam and I web developer in the making. I hope one day to quite my regular job and to become a full time web stack developer.

A short section about the author with a link to the author's GitHub profile (replace with your information and a link to your profile)
