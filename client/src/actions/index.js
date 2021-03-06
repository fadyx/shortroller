import API from "../api/url";

export const shorten = (data) => async (dispatch) => {
	dispatch({ type: "SHORTEN_URL_SUBMIT" });
	await API.post("/url/shorten", data)
		.then((response) => {
			dispatch({
				type: "SHORTEN_URL_SUCCESS",
				payload: { url: response.data.data },
			});
		})
		.catch((error) => {
			dispatch({
				type: "SHORTEN_URL_FAIL",
				payload: {
					error: "Could not shorten url for unexpected error",
				},
			});
		});
};

export const resetGenerate = () => {
	return { type: "URL_SHORTEN_RESET" };
};
