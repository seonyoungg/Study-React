const obj = {
  x: 1,
  // foo는 ES6 기준, 메서드다.
  foo() {
    return this.x;
  },
  // bar는 ES6 기준, 메서드가 아니다.(일반함수)
  bar: function () {
    return this.x;
  },
};

console.log(obj.foo()); // 1
console.log(obj.bar()); // 1

// new obj.foo();
new obj.bar();
