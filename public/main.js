const btn = document.querySelector('button')

const clickHandler = () => alert('The cat name is: Rascal')

btn.addEventListener('click', clickHandler)

const button2 = document.querySelector('#button2')

const getCat = () => {
    axios.get('http://ec2-52-10-119-210.us-west-2.compute.amazonaws.com/api/cat')
    .then(res => {
        alert(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}
button2.addEventListener('click', getCat)