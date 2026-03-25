const gallery = document.getElementById("gallery");

for (let i = 1; i <= 318; i++) {

    let a = document.createElement("a");
    let img = document.createElement("img");

   let path = `expols-3rd-agm-reunion/pics (${i}).jpeg`;

    a.href = path;
    img.src = path;
    img.alt = `Image ${i}`;

    a.appendChild(img);
    gallery.appendChild(a);
}