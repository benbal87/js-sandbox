const draggableClass = 'draggable'
const draggingClass = 'dragging'

const sourcesContainer = document.getElementById('sourcesContainer')
const destinationContainer = document.getElementById('destinationContainer')

const containers = [
    sourcesContainer,
    destinationContainer
]

const sourcesElements =
    [
        { id: '1585584118', name: 'Meggy', location: 'Nartkala', color: '#76A99B', age: 47 },
        { id: '2023165067', name: 'Waverley', location: 'Metahāra', color: '#23EC56', age: 65 },
        { id: '6808765278', name: 'Anetta', location: 'Hasaki', color: '#236E3E', age: 36 },
        { id: '2186630028', name: 'Adriena', location: 'Belén', color: '#E6C50C', age: 39 },
        { id: '1701578409', name: 'Mariette', location: 'Krajenka', color: '#BF4A95', age: 62 },
        { id: '1648528228', name: 'Burty', location: 'Wukou', color: '#58EFDD', age: 61 },
        { id: '3239643359', name: 'Norbie', location: 'Juren', color: '#EF283E', age: 36 },
        { id: '8657565129', name: 'Bone', location: 'Belsh', color: '#A00FD0', age: 47 },
        { id: '3311595920', name: 'Layton', location: 'Baojiadian', color: '#68200D', age: 37 },
        { id: '8707728131', name: 'Sydelle', location: 'Gaojia', color: '#374516', age: 56 }
    ]

sourcesElements.forEach(item => {
    const elementContainer = document.createElement('div')
    elementContainer.classList.add(draggableClass)
    elementContainer.draggable = true
    elementContainer.style.backgroundColor = item.color
    elementContainer.id = item.name

    elementContainer.addEventListener('dragstart', () => {
        elementContainer.classList.add(draggingClass)
    })

    elementContainer.addEventListener('dragend', () => {
        elementContainer.classList.remove(draggingClass)
    })

    Object.keys(item).forEach(key => {
        if (key !== 'color') {
            const span = document.createElement('span')
            span.innerHTML = `${key}: ${item[key]}`
            elementContainer.appendChild(span)
        }
    })

    sourcesContainer.appendChild(elementContainer)
})

function sortable(section, onUpdate) {
    let dragEl, nextEl, newPos, dragGhost

    let oldPos = [...section.children].map(item => {
        item.draggable = true
        return document.getElementById(item.id).getBoundingClientRect()
    })

    const _onDragOver = event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'move'

        const target = event.target
        if (target && target !== dragEl && target.nodeName.toLowerCase() === 'div') {
            if (target.classList.contains('inside')) {
                event.stopPropagation()
            } else {
                //getBoundingClientRect contains location-info about the element (relative to the viewport)
                const targetPos = target.getBoundingClientRect()
                //checking that dragEl is dragged over half the target y-axis or x-axis. (therefore the .5)
                const next =
                    (event.clientY - targetPos.top) / (targetPos.bottom - targetPos.top) > .5
                    || (event.clientX - targetPos.left) / (targetPos.right - targetPos.left) > .5
                section.insertBefore(dragEl, next && target.nextSibling || target)

                /*  console.log("oldPos:" + JSON.stringify(oldPos));
                 console.log("newPos:" + JSON.stringify(newPos)); */
                /* console.log(newPos.top === oldPos.top ? 'They are the same' : 'Not the same'); */
                console.log(oldPos)
            }
        }
    }

    const _onDragEnd = event => {
        event.preventDefault()
        newPos = [...section.children].map(child => document.getElementById(child.id).getBoundingClientRect())
        console.log(newPos)
        dragEl.classList.remove('ghost')
        section.removeEventListener('dragover', _onDragOver, false)
        section.removeEventListener('dragend', _onDragEnd, false)

        nextEl !== dragEl.nextSibling ? onUpdate(dragEl) : false
    }

    section.addEventListener('dragstart', function(e) {
        dragEl = e.target
        nextEl = dragEl.nextSibling
        /* dragGhost = dragEl.cloneNode(true);
        dragGhost.classList.add('hidden-drag-ghost'); */

        /*  document.body.appendChild(dragGhost);
         e.dataTransfer.setDragImage(dragGhost, 0, 0); */

        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.setData('Text', dragEl.textContent)

        section.addEventListener('dragover', _onDragOver, false)
        section.addEventListener('dragend', _onDragEnd, false)

        setTimeout(function() {
            dragEl.classList.add('ghost')
        }, 0)
    })
}

sortable(sourcesContainer, item => {
    console.log(item)
})
