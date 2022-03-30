const result = document.querySelector(".result");

const fetchData = async () => {
	try {
		const { data } = await axios("/api/2-basic-api");
		iterateItems(data);
	} catch (err) {
		result.innerHTML = `<h2> There was an error. Pleasy Try Again Later </h2>`;
	}
};

const iterateItems = (arr) => {
	let output = "";
	const products = arr
		.map((item) => {
			const { image, name, price } = item;
			return `
    <article class = "product">
    <img src = ${image.url} alt = ${name}/>
    <div class = "info"> 
    <h5>${name} </h5>
    <h5 class = "price">${price} </h5>

    </div>
    </article>
    `;
		})
		.join(" ");
	result.innerHTML = products;
};
fetchData();
