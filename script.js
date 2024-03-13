const upload = document.getElementById("upload");
const imgContainer = document.getElementById("croppieContainer");
const croppedImage = document.getElementById("croppedImage");
const cropButton = document.getElementById("btnCrop");
const btnRefresh = document.getElementById("btnRefresh");

let croppieInstance = new Croppie(imgContainer, {
    enableExif: true,
    viewport: { 
        width: 200, 
        height: 200, 
        type: 'circle',
        border: 0 // Set border to 0 to remove it
    },
    boundary: { width: 300, height: 300 },
    // enableResize: true,
    
});

upload.addEventListener("change", function(e) {
    let file = e.target.files[0]; // Corrected access to files array
    let reader = new FileReader();

    reader.onload = function(event) {
        croppieInstance.bind({
            url: event.target.result
        });
    };

    reader.readAsDataURL(file);
    imgContainer.style.display = "block";
    cropButton.style.display = "block";
});

cropButton.addEventListener("click", function() {
    croppieInstance.result("canvas").then(function(result) {
        croppedImage.src = result;
        croppedImage.style.display = "block";
        btnRefresh.style.display = "block";
        imgContainer.style.display = "none";
        imgContainer.style.marginTop = "30px"
        upload.style.display = "none";
        cropButton.style.display = "none";
    });
});


btnRefresh.addEventListener("click" ,function (e) { 
    location.reload();
 })