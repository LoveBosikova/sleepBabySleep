function createTag(tag) {
    // делаем элемент списка
    const tagWrapLi = document.createElement('li');
    tagWrapLi.classList.add('calendar__tag');
    // делаем чекбокс 
    const tagCheckbox = document.createElement('input');
    tagCheckbox.type = 'checkbox';
    tagCheckbox.value = tag.value;
    tagCheckbox.id = tag.value;
    tagCheckbox.name = 'sleepingTag';
    tagCheckbox.style.opacity = '0';
    tagCheckbox.style.width = '1px';
    tagCheckbox.style.height = '1px';
    tagCheckbox.style.position = 'absolute';

    tagWrapLi.append(tagCheckbox);
    // делaем лейбл
    const tagLabel = document.createElement('label');
    tagLabel.setAttribute('for', tag.value);
    tagLabel.textContent = tag.text;
    tagWrapLi.append(tagLabel);

    if (tag.isChecked) {
        tag.style.background = '#2CB57F';
        tag.style.borderColor = '#2CB57F';
    }
    return tagWrapLi;
}

const renderTags = (tags) => {
    const tagsWrap = document.getElementById('tagsWrap');

    // выводим элемент на страницу
    function printLi(el) {
        tagsWrap.append(el);
    }

    // создаем li для каждого тега, а затем выводим на страницу
    tags.forEach((el) => {
        printLi(createTag(el));
    })
}


export default {
    renderTags,
    //makeCheckboxChecked
}