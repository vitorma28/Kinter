import {vocabulary, find_char} from './crypt-functions.js'

function decrypt_char(char, key, i, j, counter_key, counter_text, key_length, text_length) {
    let [index_of_char, complete_char] = find_char(char)
    let [index_of_key, complete_key] = find_char(key)

    if (complete_char && complete_key || index_of_char && index_of_key) {
        let result = index_of_char - index_of_key

        if (result < 0) {
            result += vocabulary.length
        }

        return vocabulary[result]
    } else {
        console.warn('The character taken don\'t exist in vocabulary.')
        return char
    }
}

function decrypt(text, key) {
    let text_length = text.length
    let key_length = key.length

    let counter_key = 0
    let counter_text = 0

    let decrypted_text = text.split('')

    for (let i = 0; i < key_length; i++) {
        for (let j = 0; j < text_length; j++) {
            decrypted_text[j] = decrypt_char(decrypted_text[counter_text], key[counter_key], i, j, counter_key, counter_text, key_length, text_length)

            if (counter_key >= key_length - 1) counter_key = 0
            else counter_key++

            if (counter_text >= text_length - 1) counter_text = 0
            else counter_text++
        }
    }

    decrypted_text = decrypted_text.join('')

    return decrypted_text
}

document.getElementById('decrypt').addEventListener('click', function() {
    let result_of_decrypt = decrypt(document.getElementById('text').value, document.getElementById('key').value)
    document.getElementById('result').innerText = result_of_decrypt
})
