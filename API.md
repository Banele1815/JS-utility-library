
# 📘 API Documentation

## Overview
This document describes all utility functions in the project, including parameters, return values, complexity, and examples.

---

## 1. capitalizeFirstLetter(text)

### Description
Capitalizes the first letter of a given string.

### Parameters
- text (string): The input string.

### Returns
- string: String with first letter capitalized.

### Complexity
- Time: O(n)
- Space: O(n)

### Example
capitalizeFirstLetter("kamo") → "Kamo"

---

## 2. customFilter(students, callback)

### Description
Filters students based on a callback condition.

### Parameters
- students (Array<{name: string, score: number}>)
- callback (Function)

### Returns
- Filtered array

### Complexity
- Time: O(n)
- Space: O(n)

### Example
passed = customFilter(students, s => s.score >= 50)

---

## 3. validateEmail(email)

### Description
Validates email format using regex.

### Returns
- boolean

### Complexity
- Time: O(n)
- Space: O(1)

### Example
validateEmail("test@gmail.com") → true

---

## 4. debounce(fn, delay)

### Description
Delays function execution until after delay.

### Returns
- Function

### Complexity
- Time: O(1)

---

## 5. throttle(fn, delay)

### Description
Limits function execution to once per delay.

### Returns
- Function

### Complexity
- Time: O(1)

---

## 6. formatDate(date)

### Description
Formats Date into YYYY-MM-DD.

### Returns
- string

### Example
formatDate(new Date("2026-01-01")) → "2026-01-01"

---

## 7. applyDiscount(price, discountPercent)

### Description
Applies percentage discount to price.

### Returns
- number

### Example
applyDiscount(100, 20) → 80

---

## 8. calculateArea(length, width)

### Description
Calculates rectangle area.

### Returns
- number

### Example
calculateArea(5,3) → 15

---

## 9. formatCurrency(amount)

### Description
Formats number into USD string.

### Returns
- string

### Example
formatCurrency(25) → "$25.00"

---

## 10. greetUser(name)

### Description
Returns greeting message.

### Returns
- string

### Note
Bug fix: use template literals (Hello, ${name})

---

## 11. findMax(numbers)

### Description
Finds maximum number in array.

### Returns
- number

### Example
findMax([4,12,7,20]) → 20

---

## 12. isEven(number)

### Description
Checks if a number is even.

### Returns
- boolean

### Logic
number % 2 === 0

### Example
isEven(4) → true
isEven(7) → false
