---
title: Biến trong lập trình RUST
cover_title: Introduction
path: /bien-trong-lap-trinh-rust
date: 2022-05-12
summary: Tìm hiểu về các kiểu dữ liệu trong lập trình Rust và cách sử dụng.
tags: ['rust', 'lập trình']
categories: ['Lập trình rust']
thumbnail: ../images/rust-social-wide.jpg
---

## Kiểu dữ liệu nguyên thủy (Primitives)

### Scalar Types

-   Số nguyên có dấu (signed integers): ```i8, i16, i32, i64, i128, isize (pointer size)```
-   Số nguyên không dấu (unsigned integers): ```u8, u16, u32, u64, u128, usize (pointer size)```
-   Số thực (floating point): ```f32, f64```
-   Ký tự (char): ```'a', 'α' and '∞' (4 bytes)```
-   bool: ```true or false```
-   unit: ```()```

```
fn main() {
    // Variables can be type annotated.
    let logical: bool = true;

    let a_float: f64 = 1.0;  // Regular annotation
    let an_integer   = 5i32; // Suffix annotation

    // Or a default will be used.
    let default_float   = 3.0; // `f64`
    let default_integer = 7;   // `i32`
}
```

### Compound Types

-   arrays:  ```[1, 2, 3]```
-   tuples: ```(1, true)```

#### Tuple

Tuple là một tập hợp giá trị của nhiều kiểu dữ liệu khác, được đóng trong dấu ```()```.

```
fn main() {
    // Tuple
    let long_tuple = (1u8, 2u16, 3u32, 4u64,
                      -1i8, -2i16, -3i32, -4i64,
                      0.1f32, 0.2f64,
                      'a', true);

    // Tuple trong tuple
    let tuple_of_tuples = ((1u8, 2u16, 2u32), (4u64, -1i8), -2i16);
}
```

#### Array và slice

Array là tập hợp các đối tượng có cùng kiểu dữ liệu, được đóng trong dấu ```[]```.

Slice cũng giống như array, tuy nhiên không có độ dài cho trước.

## Custom

### struct

### enum

### const & static
