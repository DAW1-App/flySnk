async function getFormValues() {
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

function deleteAccount() {
    event.preventDefault();
    const swalWithBootstrapButtons = Swal.mixin({
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false,
    });

    swalWithBootstrapButtons({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            swalWithBootstrapButtons(
                'Deleted!',
                'Your account has been deleted.',
                'success'
            );
            $("#real_delete_acc_button").click();
        } else if (
            // Read more about handling dismissals
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons(
                'Cancelled',
                'Your account is safe :)',
                'error'
            )
        }
    })
}
