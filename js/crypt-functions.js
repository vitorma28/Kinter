export const vocabulary = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '"',
    '\'', '!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '_','+', '=', '{', '}', '[', ']', '~', ',', '<',
    '>', '.', ':', ';', '£', '¢', '¬', '\n', ' ', '\t', '\\', '|', '/', '?', '°', 'ª', 'º', 'ç', 'Ç', 'á',
    'à', 'â', 'ã', 'ä', 'é', 'è', 'ê', 'ẽ', 'ë', 'í', 'ì', 'ĩ', 'î', 'ï', 'ó', 'ò', 'ô', 'õ', 'ö', 'ú', 'ù',
    'û', 'ũ', 'ü'
]

export function find_char(char) {
    let index_of_char = vocabulary.indexOf(char)
    let complete = false

    if (index_of_char !== -1) {
        complete = true
    }
    else
        index_of_char = 0

    return [index_of_char, complete]
}
