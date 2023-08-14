import {vocabulary, find_char} from './crypt-functions.js'

function encrypt_char(char, key) {
    let [index_of_char, complete_char] = find_char(char)
    let [index_of_key, complete_key] = find_char(key)

    if (complete_char && complete_key || index_of_char && index_of_key) {
        return vocabulary[index_of_char + index_of_key]
    } else {
        console.warn('The character taken don\'t exist in vocabulary and don\'t be encrypted.')
        return char
    }
}

function encrypt(text, key) {
    let text_length = text.length
    let key_length = key.length

    let counter_key = 0
    let counter_text = 0

    let encrypted_text = text.split('')

    for (let i = 0; i < key_length; i++) {
        for (let j = 0; j < text_length; j++) {
            encrypted_text[j] = encrypt_char(encrypted_text[counter_text], key[counter_key])

            if (counter_key >= key_length - 1) counter_key = 0
            else counter_key++

            if (counter_text >= text_length - 1) counter_text = 0
            else counter_text++
        }
    }

    encrypted_text = encrypted_text.join('')

    return encrypted_text
}

document.getElementById('encrypt').addEventListener('click', function() {
    let result_of_encrypt = encrypt(document.getElementById('text').value, document.getElementById('key').value)
    document.getElementById('result').innerText = result_of_encrypt
})
