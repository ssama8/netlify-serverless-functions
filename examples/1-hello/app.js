const result = document.querySelector(".result");

const getData = async () => {
	try {
		const { data } = await axios(`/api/1-hello`);
		result.textContent = data;
	} catch (error) {
		result.textContent = error.response.data;
	}
};

getData();
