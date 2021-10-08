var buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        var x = e.clientX
        var y = e.clientY

        var buttonTop = e.target.offsetTop
        var buttonLeft = e.target.offsetLeft

        var xInside = x - buttonLeft
        var yInside = y - buttonTop

        var circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})