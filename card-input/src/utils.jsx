export const changePic = (bg_main_desktop, bg_main_mobile) => {
    return  window.innerWidth > 412 ? bg_main_desktop : bg_main_mobile;
}

export const handleNumInput = (e, setCardNum) => {
    e.preventDefault();

    if (e.target.value.length > e.target.maxLength) {
        e.target.value = e.target.value.slice(0,e.target.maxLength);
    }

    setCardNum(e.target.value.toString().replace(/\d{4}(?=.)/g, '$& '));
}