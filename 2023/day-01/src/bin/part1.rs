fn main() {
    let input = include_str!("input.txt");

    let calibration = input
        .split("\r\n")
        .map(|line| get_calibration(&line))
        .reduce(|acc, e| acc + e)
        .unwrap();

    println!("{}", calibration);
}

fn get_calibration(line: &str) -> u32 {
    let number_arr: Vec<u32> = line
        .chars()
        .filter(|ch| ch.is_numeric())
        .map(|num| num.to_digit(10).unwrap())
        .collect();

    let value: u32 = (number_arr[0] * 10) + number_arr.last().unwrap();

    value
}
