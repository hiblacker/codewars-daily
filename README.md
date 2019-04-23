# Codewars daily
每天一道[Codewars JavaScript](https://www.codewars.com)精选题，学习各种JavaScript骚操作。

我热衷于一行代码解题，有人说可读性不强，但我更赞同：用的人多了，可读性也就强了。

# What is Codewars
Codewars让学习编程变得非常有趣，参照游戏设计理念，他们提供积分和排名系统以及公会。他们为20多种不同语言设置了各种挑战，如果你实在做不出来，还有讨论板块可以参照其他用户的解法。你也可以查看关于每项挑战的讨论，以及用户的解法。你还能从解决挑战当中赚到分数，从而提高自己在排行榜上的排位。

排位分8段：从`8sku`到`1sku`难度递增。

做题的乐趣在于:
1. 完成题目的成就感。
2. 升级的成就感。
3. 做完题看到别人的骚操作学到新知识的充实感。
4. 全英文，big高。

装逼的同时完成技能升级。

总之，牛逼。

# How these articles work
1. 题干描述部分
2. 问题拆解
3. 解题
4. Codewars精选解
5. 相关知识

# 今日份Codewar
- [5sku - Perimeter of squares in a rectangle](https://github.com/hiblacker/codewars-daily/blob/master/3-generate-fibonacci.md)

The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : `4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80`

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

![](http://qiniu.lanjinrong.com/2e5779b126aa4e91b93fbcded330c185)

#Hint: See Fibonacci sequence

#Ref: http://oeis.org/A000045

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.
```
perimeter(5)  should return 80
perimeter(7)  should return 216
perimeter(20) should return 114624
perimeter(30) should return 14098308
```

- 问题拆解

1. 生成长度为n的斐波纳契数组
2. 求周长


# 往日份



