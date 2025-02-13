# Unexpected Null Values in Addition Function

This repository demonstrates a common JavaScript error involving the improper handling of null or undefined values when performing arithmetic operations.  The `bug.js` file showcases the original faulty function, while `bugSolution.js` provides a corrected version with improved error handling. 

## Problem

The function `foo` in `bug.js` attempts to add two numbers, but fails to account for cases where one or both inputs are null.  This can lead to unexpected results or runtime errors. 

## Solution

The `bugSolution.js` file offers a solution by explicitly checking for null inputs and handling them appropriately. This ensures the function behaves as expected even when null values are present.  The improved error handling makes the code more robust and prevents unexpected crashes or incorrect results.