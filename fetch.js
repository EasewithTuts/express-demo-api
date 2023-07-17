async function demo() {
    await fetch('').then((res) => {
    return res.json()
    }).then((data) => {
        console.log(data)
    })
}

demo()