const qr = [
    'nx8LNDQ2NzY1MzQ5NjVXCpmZA1GCNNJAgACfJQKBeZ85AQp/KoHTXwMKa3JvZ2VyLXBheV8CJDEwNjI4NzNlLTFiMmItYWY5Yi1jNjExLTdhODE0MTU5ZGIyMF8ABpYWQUMhA18BAlc0XwYJS3JvZ2VyUGF5XwcJS3JvZ2VyUGF5Xw0BMX8rgWRfD4FgEaP+5OtaEcIvoOtWRwHego8eYA7QU3eoTszmhLgGqku5F7Q8T2C5sMxos5rI/4FGzM4zt0ZX1KdS9zJt1q0f0ijCIHcV+P++S8Odd8C/dUmDX5ZTntXYrod9SAHt3qxUXwkKMTU2ODk1NTE1NQ==', 'nx8LNDQ2NzY1MzQ5NjVXCpmZAzcpIdJAgACfJQKBeZ85AQp/KoHTXwMKa3JvZ2VyLXBheV8CJDEwNjI4NzNlLTFiMmItYWY5Yi1jNjExLTdhODE0MTU5ZGIyMF8ABpYWQUMhA18BAlc0XwYJS3JvZ2VyUGF5XwcJS3JvZ2VyUGF5Xw0BMX8rgWRfD4FgEaP+5OtaEcIvoOtWRwHego8eYA7QU3eoAupWLuNSrzQsff1TN5z2EuIwdYAvUAMD4ewflHZmkuSGg3em4eeBqgqXfb26KUo0g8ny4ToDABd4jMRocAuQINXRJzLxYUWjXwkKMTU2ODk1NTIzNQ==',
]

const read = qr => {
    let buff = Buffer.from(qr, 'base64')
    return buff.toString('ascii')
}

console.log(read(qr[0]))