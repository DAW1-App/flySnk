async function getFormValues () {
    const {value: formValues} = await Swal({
        title: 'New Shoe',
        html:
            '<input id="swal-input1" class="swal2-input" placeholder="brand">' +
            '<input id="swal-input1" class="swal2-input" placeholder="model">' +
            '<input id="swal-input1" class="swal2-input" placeholder="color">' +
            '<input id="swal-input1" class="swal2-input" placeholder="price">' +
            '<input id="swal-input1" class="swal2-input" placeholder="releaseDate" type="date">' +
            '<input id="swal-input1" class="swal2-input" placeholder="info">' +
            '<input id="swal-input2" class="image" type="file">',



        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('swal-input1').value,
                document.getElementById('swal-input2').value
            ]
        }
    })

    if (formValues) {
        Swal(json.stringify(formValues))
    }

}