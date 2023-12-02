use std::{fs::read_to_string, usize, str::Chars};

fn read_lines(filename: &str) -> Vec<String> {
    read_to_string(filename) 
        .unwrap()  // panic on possible file-reading errors
        .lines()  // split the string into an iterator of string slices
        .map(String::from)  // make each slice into a string
        .collect()  // gather them together into a vector
}

fn get_first_digit(line: &str) -> u32 {
    let chars_vector: Vec<char> = line.chars().collect();
    for (_pos_char, character) in chars_vector.iter().enumerate() {
        match character.to_string().parse::<u32>() {
            Ok(x) => return x,
            Err(_e) => continue
        };
    }

    return 0;
    
}

fn main() {
    let mut sum = 0;
    let lines_vector = read_lines("./src/input1.txt");
    for (pos_line, line) in lines_vector.iter().enumerate() {
        println!("Line at position {}: {:?}", pos_line, line);
        let first_digit = get_first_digit(line);
        println!("Found first {}", first_digit);
        let last_digit = get_first_digit(line.chars().rev().collect::<String>().as_str());
        println!("Found last {}", last_digit);
        sum = sum + first_digit * 10 + last_digit;
       
    }
    println!("sum {}", sum);
    
}
