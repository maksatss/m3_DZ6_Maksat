function creatModal () {
    const modalWrapper = document.createElement('div')
    modalWrapper.classList.add('modalWrapper')
    const  modal = document.createElement('div')
    modal.classList.add('modal')
    modalWrapper.append(modal)
    const message = document.createElement('h2')
    message.classList.add('message')
    modal.append(message)
    document.body.append(modalWrapper)
}
creatModal()

const message = document.querySelector('.message')
const modalWrapper = document.querySelector('.modalWrapper')
const wrapper = document.querySelector('.wrapper')

function openModal(info) {
    document.body.style.overflow = 'hidden'
    modalWrapper.classList.add('modalOPen')
    message.innerText = info
}

function closeModal() {
    document.body.style.overflow = ''
    modalWrapper.classList.add('modalClose')
}

function getTodos () {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => {
            modalWrapper.classList.add('modalOpen')
            message.innerText = 'запрос успешно выполнен !'

            data.forEach(todo => {
                wrapper.innerHTML +=`
                <div class="todo">
                <span>Todo ${todo.id}</span>
                <h3>${todo.title}</h3>
                <span>${todo.completed ? 'завершен' : 'е завершен'}</span>
                </div>
                `
            })
        })

        .catch(e => {
          openModal(e.message)
        })
        .finally(setTimeout(() => {
          closeModal()
        },5000))
}
    getTodos()