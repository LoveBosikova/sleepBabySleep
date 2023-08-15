const renderTags = (tags) => {
    const tagDivs = document.querySelectorAll('.calendar__tag');
    const checkedTagsValues = tags
    .filter((tag)=> tag.isChecked)
    .map((tag) => tag.value);

    tagDivs.forEach((tagDiv) => {
        if (checkedTagsValues.includes(tagDiv.children[0].value)){
            tagDiv.style.background = '#2CB57F';
            tagDiv.style.borderColor = '#2CB57F';
        } else {
            tagDiv.style.background = '#10132F';
            tagDiv.style.borderColor = '#FFF';
        };
    })

}


export default renderTags;