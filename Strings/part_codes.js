function formatCode (supply, part, size) {
    let format = `${supply}: ${part}-(${size})`
    return format
}
let supply = "ACME"
let part = "12345"
let size = "L"

let format = formatCode(supply, part, size)

console.log(format)

