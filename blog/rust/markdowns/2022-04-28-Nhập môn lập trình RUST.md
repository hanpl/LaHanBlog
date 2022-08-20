---
title: Nhập môn lập trình RUST
cover_title: Introduction
path: /nhap-mon-lap-trinh-rust
date: 2022-04-28
summary: Bắt đầu học lập trình với RUST, cách biên dịch, chạy chương trình và in dữ liệu ra màn hình.
tags: ['rust', 'lập trình']
categories: ['Lập trình rust']
thumbnail: ../images/rust-social-wide.jpg
---

## Cài đặt môi trường

Để làm việc với Rust trên Windows, bạn cần cài đặt [Rustup](https://www.rust-lang.org/tools/install) - một công cụ để quản lý trình cài đặt và phiên bản của Rust.

Đối với hệ điều hành Linux, bạn có thể sử dụng lệnh sau để cài đặt Rustup:

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Có thể code Rust trên các IDE như Visual Studio Code, sau đó biên dịch bằng lệnh ```rustc``` như ở ví dụ sau:

Đầu tiên, bạn cần tạo một file có tên là *hello.rs* với nội dung dưới đây, trong đó ```println!``` là ```macro``` để in ra màn hình:
```rust
fn main() {
    println!("Hello World!");
}
```
Biên dịch chương trình, sử dụng **Command Line** hoặc các phần mềm Terminal:
```
$ rustc hello.rs
```
Chạy chương trình:
```
$ ./hello
Hello World!
```

Ngoài ra, các bạn có thể code và biên dịch trực tiếp trên [Rust Playground](https://play.rust-lang.org/).

## Comments

Comment có vẻ là việc dễ nhất trong lập trình nhưng lại đóng góp vai trò khá quan trọng, đặc biệt là đối với những dự án lớn, những đoạn code có giải thuật khó, hoặc người sau bảo trì code. Ngoài việc truyền tải nhanh ý nghĩa của đoạn code đó thì comment cũng có thể dùng để mô tả tài liệu về chương trình.

Để viết comment, Rust hỗ trợ các cách sau:
- *Regular comments*: Không được biên dịch
    - ```// Line comments: comment 1 dòng. //```
    - ```/* Block comments: comment 1 đoạn code. */```

- *Doc comments*: Được dùng làm tài liệu, mô tả
    - ```/// Generate library docs for the following item.```
    - ```//! Generate library docs for the enclosing item.```

```
fn main() {
    // println!("Hello, world!");
    let x = 5 + /* 90 + */ 5;
    println!("Is `x` 10 or 100? x = {}", x);
}
```

Kết quả của đoạn code trên là 10 do phép tính cộng thêm 90 của biến x đã bị comment nên không được biên dịch.

## Formatted print

Việc in ra màn hình được thực hiện bởi các ```macro``` được định nghĩa trong module ```std::fmt```.

```std::fmt``` bao gồm nhiều ```trait``` được dùng để hiển thị text và được xếp vào 2 loại sau:

- ```fmt::Debug```: Sử dụng marker ```{:?}``` cho mục đích debug.
- ```fmt::Display```: Sử dụng marker ```{}```.

Khi sử dụng ```fmt::Display``` thì giá trị sẽ được tự động convert sang kiểu String.

### Debug

Các kiểu dữ liệu ***primitives*** (integer, float, char,...) được ```std::fmt``` triển khai sẵn nên có thể sử dụng ```fmt::Debug``` dễ dàng. Tuy nhiên đối với các kiểu dữ liệu ***custom*** (structure) thì cần phải cài đặt mới có thể sử dụng ```fmt::Debug``` được.

```
// Struct UnPrintable không thể dùng `fmt::Display` hoặc `fmt::Debug` để in được:
struct UnPrintable(i32);

// Sử dụng attribute `derive` sẽ tự động triển khai `fmt::Debug` cho DebugPrintable,
// vì vậy struct này có thể in được.
#[derive(Debug)]
struct DebugPrintable(i32);
```

Rust sử dụng "pretty printing" ```{:#?}``` để in debug:

```
#[derive(Debug)]
struct Person<'a> {
    name: &'a str,
    age: u8
}

fn main() {
    let name = "Peter";
    let age = 27;
    let peter = Person { name, age };

    // Pretty print
    println!("{:#?}", peter);
}
```

Kết quả:
```
Person {
    name: "Peter",
    age: 27,
}
```

### Display

Cũng giống như Debug, ```std::fmt``` được triển khai sẵn trên các kiểu dữ liệu ***primitives*** nên có thể sử dụng ```fmt::Display``` dễ dàng. Tuy nhiên ở các kiểu dữ liệu ***custom*** thì cần phải cài đặt mới sử dụng được.

```
// Import module std::fmt
use std::fmt;

// Khai báo struct
struct Structure(i32);

// Để sử dụng marker `{}`, cần phải triển khai fmt::Display cho struct
impl fmt::Display for Structure {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", self.0)
    }
}

fn main() {
    let myStruct = Structure(15);
    println!("Display: {}", myStruct);
}
```

Kết quả:
```
Display: 15
```
